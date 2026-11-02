import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiCheck } from 'react-icons/fi'
import { profile } from '../../data/portfolio'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

const points = [
  'React components that are reusable, not copy-pasted.',
  'Responsive layouts tested from 320px upwards.',
  'Motion and micro-interactions with a purpose.',
]

export default function AboutPreview() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Images */}
          <Reveal direction="right" className="relative">
            <div className="relative mx-auto max-w-[440px]">
              <div className="absolute -inset-4 rounded-[2.4rem] border border-line/10" />
              <div className="absolute -left-8 top-10 hidden h-24 w-24 rounded-full bg-accent/20 blur-2xl sm:block" />

              <div className="relative overflow-hidden rounded-[2rem] border border-line/10">
                <img
                  src={profile.photo}
                  alt="Muhammad Sohail"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-8 -right-4 w-[190px] overflow-hidden rounded-2xl border border-line/10 bg-surface p-1.5 shadow-card sm:-right-8">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                  alt="A developer workspace with code on screen"
                  className="h-28 w-full rounded-xl object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <div className="flex items-center justify-between px-2 py-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-muted">Currently</span>
                  <span className="flex items-center gap-1 text-[10px] font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> building
                  </span>
                </div>
              </div>

              <div className="glass absolute -top-5 right-2 rounded-2xl px-4 py-3 shadow-card sm:-right-6">
                <p className="font-display text-2xl font-semibold text-gradient">2+</p>
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">Internships</p>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <SectionHeading
              eyebrow="About me"
              title="A developer who cares how things"
              highlight="feel"
              description="I am Muhammad Sohail — a frontend developer and BS Computer Science student in Rawalpindi. I like the part of the job where a plain screen slowly becomes something people enjoy using."
            />

            <Reveal delay={0.15}>
              <p className="mt-5 text-[15px] leading-relaxed text-muted">
                I am currently in my 5th semester and interning at HiFi Company, after a month with Jugrafia
                building interfaces for location data. I work mostly with React, Tailwind CSS and JavaScript,
                and I am always rebuilding something to learn a new pattern.
              </p>

              <ul className="mt-6 space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                      <FiCheck className="h-3 w-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link to="/about" className="btn-primary group">
                  More about me
                  <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link to="/experience" className="btn-ghost">
                  My experience
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
