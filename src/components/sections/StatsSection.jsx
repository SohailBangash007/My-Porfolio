import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import Reveal from '../ui/Reveal'
import { stats } from '../../data/portfolio'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, Number(value), {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span
      ref={ref}
      className="inline-block font-display text-4xl font-semibold tracking-tight transition-transform duration-500 group-hover:-translate-y-0.5 sm:text-5xl"
    >
      {n}
      <span className="text-gradient">{suffix}</span>
    </span>
  )
}

export default function StatsSection() {
  return (
    <section className="section pb-8">
      <div className="container-x">
        <div className="grid overflow-hidden rounded-3xl border border-line/10 bg-surface/50 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`stat-cell group relative overflow-hidden p-7 sm:p-8 ${
                i !== stats.length - 1 ? 'border-b border-line/10 lg:border-b-0 lg:border-r' : ''
              } ${i === 1 ? 'sm:border-r sm:border-line/10 lg:border-r' : ''} ${
                i === 2 ? 'sm:border-b-0' : ''
              }`}
            >
              <span aria-hidden className="stat-glow pointer-events-none absolute inset-0" />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-3 text-sm font-medium text-ink/90">{s.label}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">{s.sub}</p>
              <span className="absolute right-6 top-6 font-mono text-[10px] text-muted/40">
                0{i + 1}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
