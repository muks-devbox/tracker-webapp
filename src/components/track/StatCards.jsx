import Sparkline from '../common/Sparkline';

export default function StatCards({ stats, sparkline }) {
  const cards = [
    { label: 'Solid+', value: `${stats.solidPlus}/${stats.total}`, sub: `${stats.pct}% complete` },
    { label: 'Needs revision', value: stats.shaky, sub: stats.shaky > 0 ? 'marked shaky' : 'all clear' },
    { label: 'Trend', value: sparkline.reduce((a, b) => a + b, 0), sub: 'leveled up · 6wk', spark: true },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 mb-6">
      {cards.map((c, i) => (
        <div key={c.label}
          className="rounded-xl p-3.5 animate-card-enter transition-all duration-200 ease-out
                     hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)]"
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-card)',
            animationDelay: `${i * 60}ms`,
          }}>
          <div className="text-[10px] uppercase tracking-widest font-medium mb-1.5" style={{ color: 'var(--text-4)' }}>
            {c.label}
          </div>
          <div className="flex items-end justify-between gap-2">
            <div>
              <div className="text-xl font-bold" style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-1)' }}>
                {c.value}
              </div>
              <div className="text-[11px]" style={{ color: 'var(--text-3)' }}>{c.sub}</div>
            </div>
            {c.spark && <Sparkline data={sparkline} />}
          </div>
        </div>
      ))}
    </div>
  );
}
