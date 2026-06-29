import { useProgress } from '../../hooks/useProgress';
import DayCard from './DayCard';
import SundayCard from './SundayCard';

export default function WeekView({ week }) {
  const { getWeekProgress } = useProgress();
  const { completed, total, pct } = getWeekProgress(week.weekNum);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Week header */}
      <div className="mb-6">
        <div className="flex items-start justify-between gap-4 mb-1">
          <h2 className="text-xl font-semibold text-white leading-snug">
            {week.title}
          </h2>
          <span className="text-2xl font-bold text-blue-400 shrink-0">{pct}%</span>
        </div>
        {week.theme && (
          <p className="text-gray-500 text-sm mb-3">{week.theme}</p>
        )}
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-700"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="text-xs text-gray-600 mt-1">{completed} / {total} tasks complete</div>
      </div>

      {/* Day cards */}
      <div className="space-y-3">
        {week.days.map(day =>
          day.isSunday
            ? <SundayCard key={day.dayKey} day={day} />
            : <DayCard    key={day.dayKey} day={day} />
        )}
      </div>
    </div>
  );
}