const FILTERS = ['All', 'Core', 'Needs revision', 'Not started'];

export default function FilterTabs({ active, onChange }) {
  return (
    <div className="flex items-center gap-1 mb-5 overflow-x-auto pb-1">
      {FILTERS.map(f => (
        <button key={f} onClick={() => onChange(f)}
          className="text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-colors"
          style={{
            background: active === f ? 'var(--text-1)' : 'var(--bg-raised)',
            color: active === f ? '#faf9f6' : 'var(--text-3)',
          }}>
          {f}
        </button>
      ))}
    </div>
  );
}
