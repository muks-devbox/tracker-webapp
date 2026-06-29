import { useProgress } from '../../hooks/useProgress';

const TAGS = {
  LC:          { bg: 'var(--tag-lc-bg)',    text: 'var(--tag-lc-text)',    border: 'var(--tag-lc-border)'    },
  HLD:         { bg: 'var(--tag-hld-bg)',   text: 'var(--tag-hld-text)',   border: 'var(--tag-hld-border)'   },
  LLD:         { bg: 'var(--tag-lld-bg)',   text: 'var(--tag-lld-text)',   border: 'var(--tag-lld-border)'   },
  STAR:        { bg: 'var(--tag-star-bg)',  text: 'var(--tag-star-text)',  border: 'var(--tag-star-border)'  },
  Kafka:       { bg: 'var(--tag-kafka-bg)', text: 'var(--tag-kafka-text)', border: 'var(--tag-kafka-border)' },
  K8s:         { bg: 'var(--tag-k8s-bg)',   text: 'var(--tag-k8s-text)',   border: 'var(--tag-k8s-border)'   },
  Concurrency: { bg: 'var(--tag-con-bg)',   text: 'var(--tag-con-text)',   border: 'var(--tag-con-border)'   },
};

const DIFFS = {
  Easy:   { bg: 'var(--diff-easy-bg)', text: 'var(--diff-easy-text)', border: 'var(--diff-easy-border)' },
  Medium: { bg: 'var(--diff-med-bg)',  text: 'var(--diff-med-text)',  border: 'var(--diff-med-border)'  },
  Hard:   { bg: 'var(--diff-hard-bg)', text: 'var(--diff-hard-text)', border: 'var(--diff-hard-border)' },
};

export default function TaskItem({ task, dayKey }) {
  const { progress, toggleTask } = useProgress();
  const checked = progress[dayKey]?.tasks?.[task.id] ?? false;

  return (
    <label className="flex items-start gap-3 group cursor-pointer py-1.5 px-1.5 rounded-lg transition-colors"
      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-raised)'}
      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>

      <button type="button" role="checkbox" aria-checked={checked}
        onClick={() => toggleTask(dayKey, task.id)}
        className="mt-0.5 w-4 h-4 rounded shrink-0 flex items-center justify-center
                   transition-all duration-200 focus:outline-none cursor-pointer"
        style={{
          background: checked ? '#3b82f6' : 'transparent',
          border: `1.5px solid ${checked ? '#3b82f6' : 'var(--border-strong)'}`,
          boxShadow: checked ? '0 0 8px #3b82f630' : 'none',
        }}>
        {checked && (
          <svg width="9" height="7" viewBox="0 0 9 7" fill="none" aria-hidden="true">
            <path d="M1 3.5L3 6L8 1" stroke="white" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <span className="text-sm leading-relaxed transition-all duration-150"
          style={{ color: checked ? 'var(--text-4)' : 'var(--text-2)',
                   textDecoration: checked ? 'line-through' : 'none' }}>
          {task.text}
        </span>

        {((task.tags?.length > 0) || task.difficulty) && (
          <div className="flex flex-wrap gap-1 mt-1.5">
            {task.tags?.map(tag => {
              const s = TAGS[tag];
              if (!s) return null;
              return (
                <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded font-semibold"
                  style={{ background: s.bg, color: s.text, border: `1px solid ${s.border}` }}>
                  {tag}{tag === 'LC' && task.leetcodeNum ? ` #${task.leetcodeNum}` : ''}
                </span>
              );
            })}
            {task.difficulty && (() => {
              const s = DIFFS[task.difficulty];
              return (
                <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold"
                  style={{ background: s.bg, color: s.text, border: `1px solid ${s.border}` }}>
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