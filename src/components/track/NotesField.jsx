import { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';

const URL_RE = /(https?:\/\/[^\s]+)/g;

function linkify(text) {
  const parts = text.split(URL_RE);
  return parts.map((part, i) =>
    URL_RE.test(part)
      ? (
        <a key={i} href={part} target="_blank" rel="noopener noreferrer"
          className="underline decoration-1 underline-offset-2 transition-opacity duration-150 hover:opacity-70"
          style={{ color: 'var(--note-accent)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {part}
        </a>
      )
      : part
  );
}

function NoteIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}

export default function NotesField({ topicId, notes }) {
  const { saveNotes } = useProgress();
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(notes || '');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);

  const startEdit = () => {
    setDraft(notes || '');
    setError(false);
    setEditing(true);
  };

  const cancel = () => {
    setDraft(notes || '');
    setError(false);
    setEditing(false);
  };

  const save = async () => {
    setSaving(true);
    setError(false);
    try {
      await saveNotes(topicId, draft);
      setEditing(false);
    } catch {
      setError(true);
    } finally {
      setSaving(false);
    }
  };

  if (!editing) {
    return (
      <div className="mt-3">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5" style={{ color: 'var(--note-accent)' }}>
            <NoteIcon />
            <span className="text-xs font-semibold uppercase tracking-wide">Notes</span>
          </div>
          <button
            onClick={startEdit}
            className="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full
                       transition-all duration-150 hover:scale-105 active:scale-90"
            style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }}
          >
            <PencilIcon />
            {notes ? 'Edit' : 'Add note'}
          </button>
        </div>

        {notes ? (
          <div className="relative rounded-xl pl-4 pr-3.5 py-3 overflow-hidden"
            style={{ background: 'var(--note-bg)', border: '1px solid var(--note-border)' }}>
            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: 'var(--note-accent)', opacity: 0.5 }} />
            <p className="text-sm whitespace-pre-wrap leading-relaxed" style={{ color: 'var(--text-2)' }}>
              {linkify(notes)}
            </p>
          </div>
        ) : (
          <button onClick={startEdit}
            className="w-full text-left rounded-xl px-4 py-3 text-xs italic transition-colors duration-150"
            style={{ background: 'transparent', border: '1px dashed var(--border-strong)', color: 'var(--text-4)' }}>
            Nothing jotted down yet — click to add a note.
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5" style={{ color: 'var(--note-accent)' }}>
          <NoteIcon />
          <span className="text-xs font-semibold uppercase tracking-wide">Notes</span>
        </div>
        {error && <span className="text-[10px]" style={{ color: 'var(--state-shaky-text)' }}>Save failed — try again</span>}
      </div>
      <textarea
        autoFocus
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="Notes for this topic…"
        rows={3}
        className="w-full rounded-xl px-3.5 py-3 text-sm resize-none transition-colors duration-150 focus:outline-none"
        style={{
          background: 'var(--note-bg)',
          border: `1px solid ${error ? 'var(--state-shaky-text)' : 'var(--note-border)'}`,
          color: 'var(--text-2)',
        }}
      />
      <div className="flex items-center justify-end gap-2 mt-2">
        <button
          onClick={cancel}
          disabled={saving}
          className="text-xs px-3 py-1.5 rounded-full transition-all duration-150 hover:scale-105 active:scale-90 disabled:opacity-40"
          style={{ color: 'var(--text-3)', background: 'var(--bg-raised)', border: '1px solid var(--border)' }}
        >
          Cancel
        </button>
        <button
          onClick={save}
          disabled={saving}
          className="text-xs px-3 py-1.5 rounded-full font-medium transition-all duration-150 hover:scale-105 active:scale-90 disabled:opacity-40"
          style={{ background: 'var(--accent)', color: '#f0faf5' }}
        >
          {saving ? 'Saving…' : 'Save'}
        </button>
      </div>
    </div>
  );
}
