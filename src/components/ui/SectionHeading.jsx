import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  className = '',
}) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(34,211,238,0.7)]" />
            </span>
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal delay={0.06}>
        <h2 className="mt-5 text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.85rem]">
          {title} {highlight && <span className="text-gradient text-shimmer">{highlight}</span>}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.12}>
          <p className={`mt-4 text-[15px] leading-relaxed text-muted sm:text-base ${centered ? 'mx-auto' : ''}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
