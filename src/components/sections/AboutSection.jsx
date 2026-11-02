import { motion } from 'framer-motion'
import {
  FiBookOpen,
  FiBriefcase,
  FiCheck,
  FiCode,
  FiCoffee,
  FiMapPin,
  FiMail,
  FiPhone,
  FiGlobe,
  FiArrowUpRight,
} from 'react-icons/fi'
import { profile } from '../../data/portfolio'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { Link } from 'react-router-dom'

const facts = [
  { label: 'Full name', value: profile.name },
  { label: 'Role', value: 'Frontend Developer' },
  { label: 'Location', value: profile.location },
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phoneRaw}` },
  { label: 'Languages', value: 'English, Urdu' },
]

const now = [
  {
    icon: FiBriefcase,
    title: 'Frontend Intern @ HiFi',
    text: 'Building React interfaces and translating designs into responsive pages, 1+ month in.',
    tag: 'Current',
  },
  {
    icon: FiBookOpen,
    title: 'BSCS · 5th semester',
    text: 'Four semesters completed with a focus on programming, data structures and databases.',
    tag: 'Studying',
  },
  {
    icon: FiCode,
    title: 'Shipping side projects',
    text: 'Rebuilding real interfaces to practise component design, state and animation.',
    tag: 'Building',
  },
  {
    icon: FiCoffee,
    title: 'Learning in public',
    text: 'Deepening my React patterns, TypeScript and backend basics one project at a time.',
    tag: 'Learning',
  },
]

const principles = [
  {
    title: 'Clarity over cleverness',
    text: 'Simple, readable components beat clever abstractions. Code should be easy for the next person to change.',
  },
  {
    title: 'Details make the design',
    text: 'Spacing, contrast, focus states and a well-timed transition are usually what makes an interface feel premium.',
  },
  {
    title: 'Build for everyone',
    text: 'Responsive and keyboard-friendly by default, not as an afterthought once the desktop version looks good.',
  },
]

export default function AboutSection() {
  return (
    <>
      <section className="section pt-8">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal direction="right" className="lg:col-span-5">
              <div className="relative">
                <div className="relative overflow-hidden rounded-[2rem] border border-line/10 bg-gradient-to-br from-accent/30 to-violet/30 p-[1.5px]">
                  <img
                    src={profile.photo}
                    alt="Muhammad Sohail"
                    className="aspect-[4/5] w-full rounded-[1.9rem] object-cover object-top"
                  />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-slate-950/50 px-4 py-3 backdrop-blur-md">
                    <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-cyan-200/80">
                      Based in
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-white">
                      <FiMapPin className="h-3.5 w-3.5 text-cyan-300" /> Rawalpindi, Pakistan
                    </p>
                  </div>
                </div>

                <div className="glass absolute -right-3 top-8 flex items-center gap-2 rounded-full px-3.5 py-2 shadow-card sm:-right-5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[11px] font-medium">Open to work</span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="card p-4">
                  <p className="font-display text-2xl font-semibold text-gradient">10+</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-muted">Projects built</p>
                </div>
                <div className="card p-4">
                  <p className="font-display text-2xl font-semibold text-gradient">2+</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-muted">Internships</p>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="My story"
                title="Curious student, careful"
                highlight="builder"
                description="I am Muhammad Sohail — a frontend developer from Rawalpindi who likes making interfaces feel simple, fast and a little bit delightful."
              />

              <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted">
                {profile.about.map((p) => (
                  <Reveal key={p.slice(0, 24)} delay={0.05}>
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1}>
                <dl className="mt-8 grid gap-x-8 gap-y-0 rounded-2xl border border-line/10 bg-surface/40 p-2 sm:grid-cols-2 sm:p-4">
                  {facts.map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center justify-between gap-4 border-b border-line/10 px-2 py-3 last:border-0 sm:last:border-b sm:[&:nth-last-child(-n+2)]:border-0"
                    >
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{f.label}</dt>
                      <dd className="text-right text-[12.5px] font-medium">
                        {f.href ? (
                          <a href={f.href} className="transition-colors hover:text-accent">
                            {f.value}
                          </a>
                        ) : (
                          f.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary group">
                  Work with me
                  <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link to="/projects" className="btn-ghost">
                  See projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container-x">
          <SectionHeading
            eyebrow="Right now"
            title="What I am currently"
            highlight="doing"
            description="A quick snapshot of where my time goes this semester."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {now.map((n, i) => {
              const Icon = n.icon
              return (
                <Reveal key={n.title} delay={i * 0.07}>
                  <motion.div whileHover={{ y: -5 }} className="card h-full p-5">
                    <div className="flex items-start justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent/15 to-violet/15 text-accent">
                        <Icon className="h-[18px] w-[18px]" />
                      </span>
                      <span className="chip !border-emerald-400/20 !text-emerald-400">{n.tag}</span>
                    </div>
                    <h3 className="mt-4 text-[14.5px] font-semibold leading-snug">{n.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted">{n.text}</p>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="How I work"
                title="Three things I try to"
                highlight="stick to"
                description="Not rules I always get right — just the standard I aim for."
              />
            </div>

            <div className="space-y-4 lg:col-span-8">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.08}>
                  <div className="group card card-hover flex gap-5 p-5 sm:p-6">
                    <span className="font-display text-2xl font-semibold text-line/25 transition-colors group-hover:text-accent/60">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold">{p.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.text}</p>
                    </div>
                    <FiCheck className="ml-auto mt-1 h-4 w-4 shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-line/10 bg-surface/40 px-5 py-4 text-sm text-muted">
              <span className="flex items-center gap-2">
                <FiMail className="h-4 w-4 text-accent" />
                <a href={`mailto:${profile.email}`} className="hover:text-ink">
                  {profile.email}
                </a>
              </span>
              <span className="hidden h-4 w-px bg-line/15 sm:block" />
              <span className="flex items-center gap-2">
                <FiPhone className="h-4 w-4 text-accent" />
                <a href={`tel:${profile.phoneRaw}`} className="hover:text-ink">
                  {profile.phone}
                </a>
              </span>
              <span className="hidden h-4 w-px bg-line/15 sm:block" />
              <span className="flex items-center gap-2">
                <FiGlobe className="h-4 w-4 text-accent" /> Remote friendly
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
