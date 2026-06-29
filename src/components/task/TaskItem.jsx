import { useProgress } from '../../hooks/useProgress';

const TAG_STYLES = {
  LC:          'bg-orange-900/40 text-orange-400 border-orange-800/50',
  HLD:         'bg-purple-900/40 text-purple-400 border-purple-800/50',
  LLD:         'bg-pink-900/40 text-pink-400 border-pink-800/50',
  STAR:        'bg-yellow-900/40 text-yellow-400 border-yellow-800/50',
  Kafka:       'bg-blue-900/40 text-blue-400 border-blue-800/50',
  K8s:         'bg-cyan-900/40 text-cyan-400 border-cyan-800/50',
  Concurrency: 'bg-red-900/40 text-red-400 border-red-800/50',
};

export default function TaskItem({ task, dayKey }) {
  const { progress, toggleTask } = useProgress();
  const checked = progress[dayKey]?.tasks?.[task.id] ?? false;

  return (
    <label className="flex items-start gap-3 group cursor-pointer py-1.5">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => toggleTask(dayKey, task.id)}
        className="mt-0.5 h-4 w-4 rounded border-gray-600 bg-gray-800
                   checked:bg-blue-500 checked:border-blue-500
                   focus:ring-blue-500 focus:ring-offset-0 focus:ring-1
                   transition-colors shrink-0 cursor-pointer"
      />
      <div className="flex-1 min-w-0">
        <span className={`text-sm leading-relaxed ${checked ? 'line-through text-gray-600' : 'text-gray-300 group-hover:text-white'} transition-colors`}>
          {task.text}
        </span>
        {task.tags && task.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {task.tags.map(tag => (
              <span key={tag} className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${TAG_STYLES[tag] ?? 'bg-gray-800 text-gray-500 border-gray-700'}`}>
                {tag}{tag === 'LC' && task.leetcodeNum ? ` #${task.leetcodeNum}` : ''}
              </span>
            ))}
            {task.difficulty && (
              <span className={`text-[10px] px-1.5 py-0.5 rounded border font-medium ${
                task.difficulty === 'Hard'   ? 'bg-red-900/30 text-red-400 border-red-800/50' :
                task.difficulty === 'Medium' ? 'bg-yellow-900/30 text-yellow-400 border-yellow-800/50' :
                                              'bg-green-900/30 text-green-400 border-green-800/50'
              }`}>
                {task.difficulty}
              </span>
            )}
          </div>
        )}
      </div>
    </label>
  );
}