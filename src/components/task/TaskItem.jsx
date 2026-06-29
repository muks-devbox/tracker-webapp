import { useProgress } from '../../hooks/useProgress';

const TAG_STYLES = {
  LC:          { bg: '#431407', color: '#fb923c', border: '#7c2d12' },
  HLD:         { bg: '#2e1065', color: '#a78bfa', border: '#4c1d95' },
  LLD:         { bg: '#500724', color: '#f472b6', border: '#831843' },
  STAR:        { bg: '#422006', color: '#fbbf24', border: '#78350f' },
  Kafka:       { bg: '#082f49', color: '#38bdf8', border: '#0c4a6e' },
  K8s:         { bg: '#083344', color: '#22d3ee', border: '#164e63' },
  Concurrency: { bg: '#450a0a', color: '#f87171', border: '#7f1d1d' },
};

const DIFF_STYLES = {
  Easy:   { bg: '#052e16', color: '#4ade80', border: '#14532d' },
  Medium: { bg: '#422006', color: '#fb923c', border: '#78350f' },
  Hard:   { bg: '#450a0a', color: '#f87171', border: '#7f1d1d' },
};

export default function TaskItem({ task, dayKey }) {
  const { progress, toggleTask } = useProgress();
  const checked = progress[dayKey]?.tasks?.[task.id] ?? false;

  return (
    <label className="flex items-start gap-3 group cursor-pointer py-1.5 px-1.5
                      rounded-lg hover:bg-white/[0.02] transition-colors">
      {/* Custom checkbox */}
      <button
        type="button"
        onClick={() => toggleTask(dayKey, task.id)}
        className="mt-0.5 w-4 h-4 rounded shrink-0 flex items-center justify-center
                   transition-all duration-200 focus:outline-none"
        style={{
          background:  checked ? '#3b82f6' : 'transparent',
          border:      `1.5px solid ${checked ? '#3b82f6' : '#334155'}`,
          boxShadow:   checked ? '0 0 10px #3b82f630' : 'none',
        }}
        aria-checked={checked}
        role="checkbox"
      >
        {checked && (
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden="true">
            <path d="M1 3.5L3 6L8 1" stroke="white" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <span className={`text-sm leading-relaxed transition-all duration-150 ${
          checked ? 'line-through text-slate-600' : 'text-slate-300 group-hover:text-slate-100'
        }`}>
          {task.text}
        </span>

        {((task.tags?.length > 0) || task.difficulty) && (
          <div className="flex flex-wrap gap-1 mt-1.5">
            {task.tags?.map(tag => {
              const s = TAG_STYLES[tag];
              if (!s) return null;
              return (
                <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded font-semibold"
                  style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>
                  {tag}{tag === 'LC' && task.leetcodeNum ? ` #${task.leetcodeNum}` : ''}
                </span>
              );
            })}
            {task.difficulty && (() => {
              const s = DIFF_STYLES[task.difficulty];
              return (
                <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold"
                  style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>
                  {task.difficulty}
                </span>
              );
            })()}
          </div>
        )}
      </div>
    </label>
  );
}