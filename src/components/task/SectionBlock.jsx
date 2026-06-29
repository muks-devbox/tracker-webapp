import TaskItem from './TaskItem';

export default function SectionBlock({ section, dayKey }) {
  if (!section.tasks || section.tasks.length === 0) return null;
  return (
    <div>
      {section.title && section.title !== 'Tasks' && (
        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 pb-1 border-b border-gray-800">
          {section.title}
        </h4>
      )}
      <div className="space-y-0.5">
        {section.tasks.map(task => (
          <TaskItem key={task.id} task={task} dayKey={dayKey} />
        ))}
      </div>
    </div>
  );
}