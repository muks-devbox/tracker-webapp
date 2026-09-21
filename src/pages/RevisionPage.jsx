import { useState } from 'react';
import { useProgress } from '../hooks/useProgress';
import roadmap from '../data/roadmap';
import TutorModal from '../components/tutor/TutorModal';

export default function RevisionPage() {
  const { getShakyItems, setSubtaskState } = useProgress();
  const items = getShakyItems();
  const [teaching, setTeaching] = useState(null); // { track, topic, subtask }

  return (
    <div className="max-w-2xl mx-auto animate-page-enter">
      <h1 className="text-2xl font-bold mb-1.5" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-1)' }}>
        Revision
      </h1>
      <p className="text-sm mb-6" style={{ color: 'var(--text-3)' }}>
        Everything currently marked shaky, across every track — {items.length} item{items.length !== 1 ? 's' : ''}.
      </p>

      {items.length === 0 ? (
        <div className="text-sm text-center py-16 rounded-xl animate-pop"
          style={{ color: 'var(--text-3)', background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
          Nothing shaky right now — that's the goal.
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item, i) => (
            <div key={item.subtask.id}
              className="flex items-center gap-3 px-4 py-3 rounded-xl animate-card-enter
                         transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', animationDelay: `${Math.min(i, 12) * 30}ms` }}>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase tracking-wide font-medium mb-0.5" style={{ color: 'var(--text-4)' }}>
                  {item.trackTitle} · {item.topicTitle}
                </div>
                <div className="text-sm" style={{ color: 'var(--text-2)' }}>{item.subtask.text}</div>
              </div>
              <button
                onClick={() => {
                  const track = roadmap.tracks.find(t => t.trackId === item.trackId);
                  const topic = track.topics.find(t => t.topicId === item.topicId);
                  setTeaching({ track, topic, subtask: item.subtask });
                }}
                className="text-xs px-3 py-1.5 rounded-full shrink-0
                           transition-all duration-150 hover:scale-105 hover:shadow-sm active:scale-90"
                style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }}>
                Teach me
              </button>
              <button onClick={() => setSubtaskState(item.topicId, item.subtask.id, 'solid')}
                className="text-xs px-3 py-1.5 rounded-full shrink-0
                           transition-all duration-150 hover:scale-105 hover:shadow-sm active:scale-90"
                style={{ background: 'var(--state-solid-bg)', color: 'var(--state-solid-text)' }}>
                Mark solid
              </button>
            </div>
          ))}
        </div>
      )}

      {teaching && (
        <TutorModal
          track={teaching.track}
          topic={teaching.topic}
          subtask={teaching.subtask}
          onClose={() => setTeaching(null)}
        />
      )}
    </div>
  );
}
