import { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';
import SubtaskRow from './SubtaskRow';

export default function TopicCard({ topic, index = 0 }) {
  const [open, setOpen] = useState(false);
  const { progress, getTopicStats, updateNotes } = useProgress();
  const stats = getTopicStats(topic.topicId, topic.subtasks);
  const notes = progress[topic.topicId]?.notes ?? '';
  const allDone = stats.total > 0 && stats.solidPlus === stats.total;

  return (
    <div
      className="rounded-xl overflow-hidden mb-2.5 animate-card-enter transition-shadow duration-200 hover:shadow-[var(--shadow-hover)]"
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${allDone ? 'var(--accent-border)' : 'var(--border)'}`,
        boxShadow: open ? 'var(--shadow-raised)' : 'var(--shadow-card)',
        animationDelay: `${Math.min(index, 10) * 35}ms`,
      }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center gap-3 px-4 py-3.5 text-left group
                   transition-colors duration-150 hover:bg-[var(--bg-raised)]"
      >
        <div className="w-1 h-8 rounded-full shrink-0 transition-all duration-300"
          style={{ background: allDone ? 'var(--accent)' : 'var(--border-strong)' }} />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium mb-0.5 transition-colors duration-150" style={{ color: 'var(--text-1)' }}>
            {topic.title}
          </div>
          <div className="text-[11px] font-mono" style={{ color: 'var(--text-4)' }}>
            {stats.solidPlus}/{stats.total} solid+{stats.shaky > 0 && ` · ${stats.shaky} shaky`}
          </div>
        </div>
        {topic.link && (
          <a href={topic.link} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
            className="group/link flex items-center gap-1 text-[10px] px-2 py-1 rounded-full shrink-0
                       transition-all duration-150 hover:scale-105 hover:shadow-sm"
            style={{ background: 'var(--accent-light)', color: 'var(--accent)', border: '1px solid var(--accent-border)' }}>
            HelloInterview
            <span className="inline-block transition-transform duration-150 group-hover/link:translate-x-0.5">↗</span>
          </a>
        )}
        <svg className={`w-3.5 h-3.5 shrink-0 transition-transform duration-250 ease-out ${open ? 'rotate-180' : ''} group-hover:opacity-100 opacity-70`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--text-4)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="pt-1 divide-y" style={{ borderColor: 'var(--border)' }}>
              {topic.subtasks.map(sub => <SubtaskRow key={sub.id} topicId={topic.topicId} subtask={sub} />)}
            </div>
            <div className="mt-3">
              <textarea
                defaultValue={notes}
                onChange={e => updateNotes(topic.topicId, e.target.value)}
                placeholder="Notes…"
                rows={2}
                className="w-full rounded-lg px-3 py-2 text-sm resize-none transition-colors duration-150
                           focus:outline-none focus:border-[var(--accent)]"
                style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', color: 'var(--text-2)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
