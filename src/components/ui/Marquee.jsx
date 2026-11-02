export default function Marquee({ items = [], speed = 'normal' }) {
  const loop = [...items, ...items]

  return (
    <div className="mask-fade-x group relative flex overflow-hidden border-y border-line/10 bg-surface/30 py-5">
      <div
        className="flex w-max animate-marquee items-center gap-10 pr-10 group-hover:[animation-play-state:paused]"
        style={{ animationDuration: speed === 'slow' ? '46s' : '30s' }}
      >
        {loop.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="whitespace-nowrap font-display text-sm font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink sm:text-base">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-accent/60" />
          </div>
        ))}
      </div>
    </div>
  )
}
