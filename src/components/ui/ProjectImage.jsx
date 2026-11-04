import { useEffect, useRef, useState } from 'react'

/** Image that fades in over a gradient placeholder, with a graceful fallback. */
export default function ProjectImage({ src, alt, fallback = ['#0e7490', '#4c1d95'], title = '', className = '' }) {
  const imgRef = useRef(null)
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  // Cached images can finish before React attaches onLoad.
  useEffect(() => {
    setLoaded(false)
    setFailed(false)
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) setLoaded(true)
  }, [src])

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
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`relative h-full w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.06] ${
            loaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-md'
          }`}
        />
      )}
    </div>
  )
}
