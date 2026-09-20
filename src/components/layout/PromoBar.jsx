import { useState, useEffect } from 'react';
import { useProgress } from '../../hooks/useProgress';

export default function PromoBar() {
  const { getStreakInfo, getOverallStats } = useProgress();
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setDismissed(sessionStorage.getItem('promoBarDismissed') === '1');
  }, []);

  const dismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('promoBarDismissed', '1');
  };

  if (dismissed) return null;

  const { weeks, isPausedThisWeek, touchedThisWeek } = getStreakInfo();
  const overall = getOverallStats();

  let message;
  if (isPausedThisWeek) {
    message = `Streak paused — ${weeks} week${weeks !== 1 ? 's' : ''} banked, resume anytime.`;
  } else if (weeks === 0) {
    message = `Touch any subtask this week to start your streak. ${overall.solidPlus}/${overall.total} solid so far.`;
  } else if (touchedThisWeek) {
    message = `${weeks} week streak — nice. ${overall.pct}% of everything is solid+.`;
  } else {
    message = `${weeks} week streak so far — touch something this week to keep it going.`;
  }

  return (
    <div className="flex items-center justify-between gap-3 px-4 py-2 text-sm"
      style={{ background: 'var(--accent)', color: '#f0faf5' }}>
      <span className="truncate">{message}</span>
      <button onClick={dismiss} className="shrink-0 opacity-80 hover:opacity-100 transition-opacity"
        aria-label="Dismiss">✕</button>
    </div>
  );
}
