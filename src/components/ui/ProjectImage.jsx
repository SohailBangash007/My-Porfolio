import { useState } from 'react'

/** Image that gracefully falls back to a gradient if the network image fails. */
export default function ProjectImage({ src, alt, fallback = ['#0e7490', '#4c1d95'], title = '', className = '' }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${fallback[0]}, ${fallback[1]})` }}
      />
      <div className="absolute inset-0 opacity-30 grid-bg" />
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-4xl font-bold text-white/70">{title.slice(0, 2).toUpperCase()}</span>
      </div>

      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="relative h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
      )}
    </div>
  )
}
