export default function Sparkline({ data = [], color = 'var(--accent)', height = 24 }) {
  const max = Math.max(...data, 1);
  const w = 60, h = height, step = w / Math.max(data.length - 1, 1);
  const points = data.map((v, i) => `${i * step},${h - (v / max) * h}`).join(' ');

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="shrink-0" aria-hidden="true">
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round" opacity="0.8" />
      {data.length > 0 && (
        <circle cx={(data.length - 1) * step} cy={h - (data[data.length - 1] / max) * h}
          r="2" fill={color} />
      )}
    </svg>
  );
}
