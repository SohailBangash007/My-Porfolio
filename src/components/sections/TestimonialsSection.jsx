import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { testimonials } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const active = testimonials[index]

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), [])
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 6500)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Feedback"
          title="What people I've worked with"
          highlight="say"
          align="center"
          description="Short notes from mentors and teammates during my internships and studies."
        />

        <div
          className="relative mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line/10 bg-surface/60 p-7 backdrop-blur-xl sm:p-10">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
              />

              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent/20 to-violet/20 font-display text-2xl font-bold text-accent">
                  &ldquo;
                </span>
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FiStar key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <div className="relative mt-6 min-h-[150px] sm:min-h-[130px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <blockquote className="text-lg leading-relaxed text-ink/90 sm:text-xl">
                      {active.quote}
                    </blockquote>

                    <div className="mt-6 flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-line/10 bg-surface2 font-mono text-[11px] font-semibold text-accent">
                        {active.initials}
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{active.name}</p>
                        <p className="text-[11px] text-muted">{active.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-line/10 pt-5">
                <div className="flex items-center gap-2">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.name}
                      type="button"
                      aria-label={`Show testimonial ${i + 1}`}
                      onClick={() => setIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === index ? 'w-7 bg-accent' : 'w-1.5 bg-line/20 hover:bg-line/40'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="grid h-9 w-9 place-items-center rounded-full border border-line/10 text-muted transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    <FiChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next testimonial"
                    className="grid h-9 w-9 place-items-center rounded-full border border-line/10 text-muted transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    <FiChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
