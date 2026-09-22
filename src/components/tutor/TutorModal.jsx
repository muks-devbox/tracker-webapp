import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useProgress } from '../../hooks/useProgress';

const STATES = [
  { key: 'shaky', label: 'Shaky' },
  { key: 'solid', label: 'Solid' },
  { key: 'can-teach', label: 'Can teach' },
];

export default function TutorModal({ track, topic, subtask, onClose }) {
  const { progress, setSubtaskState } = useProgress();
  const [messages, setMessages] = useState([]); // { role, content }
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const bottomRef = useRef(null);
  const mermaidRef = useRef(null); // holds the dynamically-loaded module once ready

  const currentState = progress[topic?.topicId]?.states?.[subtask?.id];

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Load mermaid lazily, only once this modal actually mounts. A missing or
  // broken mermaid install can NEVER take down the rest of the app this way —
  // worst case, diagrams inside this one modal show as plain text instead of
  // rendered SVG. This is the direct fix for the app-wide crash: the old code
  // used a static top-level `import mermaid from 'mermaid'`, which Vite must
  // resolve at build time for every route, not just when this modal opens.
  useEffect(() => {
    let cancelled = false;
    import('mermaid')
      .then((mod) => {
        if (cancelled) return;
        const mermaid = mod.default || mod;
        mermaid.initialize({ startOnLoad: false, theme: 'neutral' });
        mermaidRef.current = mermaid;
      })
      .catch((err) => {
        console.warn('mermaid failed to load — diagrams will show as plain text:', err);
      });
    return () => { cancelled = true; };
  }, []);

  // Render any mermaid code fences in new messages once the library is ready
  useEffect(() => {
    if (!mermaidRef.current) return;
    const nodes = document.querySelectorAll('.tutor-mermaid[data-processed="false"]');
    nodes.forEach(async (node) => {
      try {
        const id = `mmd-${Math.random().toString(36).slice(2)}`;
        const { svg } = await mermaidRef.current.render(id, node.textContent);
        node.innerHTML = svg;
        node.setAttribute('data-processed', 'true');
      } catch {
        node.setAttribute('data-processed', 'true'); // leave as plain text, don't retry
      }
    });
  }, [messages]);

  const send = useCallback(async () => {
    const text = input.trim();
    if (!text || loading || !topic) return;

    const nextMessages = [...messages, { role: 'user', content: text }];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const subtasksWithState = (topic.subtasks || []).map(s => ({
        ...s,
        state: progress[topic.topicId]?.states?.[s.id],
      }));

      const resp = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          trackTitle: track?.title,
          topicTitle: topic.title,
          subtasks: subtasksWithState,
          history: nextMessages.slice(0, -1),
          message: text,
        }),
      });

      const data = await resp.json();
      if (!resp.ok) throw new Error(data.error || 'Tutor request failed');

      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setError(err.message || 'Something went wrong reaching the tutor.');
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages, topic, track, progress]);

  if (!topic || !subtask) return null; // defensive — never render on bad props

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in"
      style={{ background: 'rgba(28,26,20,0.35)', backdropFilter: 'blur(2px)' }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl p-5 my-8 max-h-[85vh] flex flex-col animate-pop"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-raised)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-3">
          <div className="min-w-0">
            <h2 className="text-lg font-bold truncate" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-1)' }}>
              Teach me: {topic.title}
            </h2>
            <p className="text-xs mt-0.5 truncate" style={{ color: 'var(--text-3)' }}>
              {track?.title} · {subtask.text}
            </p>
          </div>
          <button onClick={onClose}
            className="text-sm shrink-0 transition-all duration-150 hover:rotate-90 active:scale-75"
            style={{ color: 'var(--text-3)' }} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto rounded-lg p-3 mb-3 space-y-3"
          style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', minHeight: '240px' }}>
          {messages.length === 0 && (
            <p className="text-sm" style={{ color: 'var(--text-3)' }}>
              Ask a question, or just say "start" and I'll probe what you already know about {topic.title.toLowerCase()}.
            </p>
          )}
          {messages.map((m, i) => (
            <div key={i} className="text-sm rounded-lg px-3 py-2"
              style={{
                background: m.role === 'user' ? 'var(--accent-light)' : 'var(--bg-card)',
                color: 'var(--text-2)',
                marginLeft: m.role === 'user' ? '2rem' : 0,
                marginRight: m.role === 'user' ? 0 : '2rem',
              }}>
              <MessageBody content={m.content} />
            </div>
          ))}
          {loading && <p className="text-xs animate-pulse-soft" style={{ color: 'var(--text-4)' }}>Thinking…</p>}
          {error && (
            <p className="text-xs" style={{ color: 'var(--state-shaky-text)' }}>{error}</p>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="flex items-center gap-2 mb-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
            placeholder="Type your answer or question…"
            className="flex-1 rounded-lg px-3 py-2 text-sm focus:outline-none"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text-2)' }}
          />
          <button onClick={send} disabled={loading || !input.trim()}
            className="text-sm px-3 py-2 rounded-lg shrink-0 transition-all duration-150 hover:scale-105 active:scale-95 disabled:opacity-40"
            style={{ background: 'var(--accent)', color: '#f0faf5' }}>
            Send
          </button>
        </div>

        <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid var(--border)' }}>
          <span className="text-xs" style={{ color: 'var(--text-3)' }}>Mark this subtask:</span>
          <div className="flex items-center rounded-full p-0.5" style={{ background: 'var(--bg-raised)' }}>
            {STATES.map(s => (
              <button key={s.key}
                onClick={() => setSubtaskState(topic.topicId, subtask.id, s.key)}
                className="text-[10px] px-2 py-1 rounded-full font-medium transition-all duration-150 hover:scale-105 active:scale-90"
                style={currentState === s.key
                  ? { background: 'var(--state-canteach-bg)', color: 'var(--state-canteach-text)' }
                  : { color: 'var(--text-4)' }}>
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function MessageBody({ content }) {
  // Split on mermaid fences and render each block into a div the mermaid
  // effect above will fill with rendered SVG once the library is ready.
  const parts = content.split(/```mermaid\n([\s\S]*?)```/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1
          ? <div key={i} className="tutor-mermaid my-2" data-processed="false">{part}</div>
          : <span key={i} style={{ whiteSpace: 'pre-wrap' }}>{part}</span>
      )}
    </>
  );
}
