import { useProgress } from '../../hooks/useProgress';

const STATES = [
  { key: 'shaky',      label: 'Shaky',     bg: 'var(--state-shaky-bg)',    text: 'var(--state-shaky-text)' },
  { key: 'solid',      label: 'Solid',     bg: 'var(--state-solid-bg)',    text: 'var(--state-solid-text)' },
  { key: 'can-teach',  label: 'Can teach', bg: 'var(--state-canteach-bg)', text: 'var(--state-canteach-text)' },
];

const TIER_STYLES = {
  Core:    { bg: 'var(--tier-core-bg)',    text: 'var(--tier-core-text)',    border: 'var(--tier-core-border)' },
  Deep:    { bg: 'var(--tier-deep-bg)',    text: 'var(--tier-deep-text)',    border: 'var(--tier-deep-border)' },
  Stretch: { bg: 'var(--tier-stretch-bg)', text: 'var(--tier-stretch-text)', border: 'var(--tier-stretch-border)' },
};

export default function SubtaskRow({ topicId, subtask }) {
  const { progress, setSubtaskState } = useProgress();
  const current = progress[topicId]?.states?.[subtask.id];
  const tier = TIER_STYLES[subtask.tier];

  return (
    <div className="flex items-center gap-3 py-2 group transition-colors duration-150 hover:bg-[var(--bg-raised)] -mx-2 px-2 rounded-lg">
      <div className="flex-1 min-w-0 flex items-center gap-2">
        <span className="text-sm leading-relaxed" style={{ color: 'var(--text-2)' }}>{subtask.text}</span>
        <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold shrink-0"
          style={{ background: tier.bg, color: tier.text, border: `1px solid ${tier.border}` }}>
          {subtask.tier}
        </span>
      </div>

      <div className="flex items-center rounded-full p-0.5 shrink-0" style={{ background: 'var(--bg-raised)' }}>
        {STATES.map(s => {
          const isSelected = current === s.key;
          return (
            <button key={s.key}
              onClick={() => setSubtaskState(topicId, subtask.id, s.key)}
              className={`text-[10px] px-2 py-1 rounded-full font-medium
                         transition-all duration-150 ease-out hover:scale-105 active:scale-90
                         ${isSelected ? 'shadow-sm' : 'hover:bg-white/60'}`}
              style={isSelected ? { background: s.bg, color: s.text } : { color: 'var(--text-4)' }}
            >
              {s.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
