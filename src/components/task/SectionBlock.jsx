import TaskItem from './TaskItem';

export default function SectionBlock({ section, dayKey }) {
  if (!section.tasks || section.tasks.length === 0) return null;
  return (
    <div>
      {section.title && section.title !== 'Tasks' && (
        <div className="flex items-center gap-2 mb-2">
          <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
          <h4 className="text-[10px] font-semibold uppercase tracking-widest whitespace-nowrap"
            style={{ color: 'var(--text-3)' }}>
            {section.title}
          </h4>
          <div className="h-px flex-1" style={{ background: 'var(--border)' }} />
        </div>
      )}
      <div className="space-y-0.5">
        {section.tasks.map(task => (
          <TaskItem key={task.id} task={task} dayKey={dayKey} />
        ))}
      </div>
    </div>
  );
}