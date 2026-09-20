const FILTERS = ['All', 'Core', 'Needs revision', 'Not started'];

export default function FilterTabs({ active, onChange }) {
  return (
    <div className="flex items-center gap-1 mb-5 overflow-x-auto pb-1">
      {FILTERS.map(f => {
        const isActive = active === f;
        return (
          <button key={f} onClick={() => onChange(f)}
            className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap
                       transition-all duration-150 ease-out hover:scale-105 active:scale-95
                       ${isActive
                         ? 'bg-[var(--text-1)] text-[#faf9f6]'
                         : 'bg-[var(--bg-raised)] text-[var(--text-3)] hover:bg-[var(--border)]'}`}
          >
            {f}
          </button>
        );
      })}
    </div>
  );
}
