import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiMapPin,
  FiCode,
  FiTerminal,
  FiCheckCircle,
} from 'react-icons/fi'
import { profile, stats } from '../../data/portfolio'
import useTypewriter from '../../hooks/useTypewriter'
import SocialLinks from '../ui/SocialLinks'
import TiltCard from '../ui/TiltCard'

const ease = [0.22, 1, 0.36, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
}

function ProfilePhoto() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
      {/* decorative rings */}
      <div className="pointer-events-none absolute -inset-6 rounded-[2.6rem] border border-line/10" />
      <div className="pointer-events-none absolute -inset-12 hidden rounded-[3rem] border border-dashed border-line/10 sm:block" />
      <div className="pointer-events-none absolute -right-5 -top-5 h-24 w-24 rounded-full bg-accent/25 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-violet/25 blur-2xl" />

      <TiltCard max={6} className="relative">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-accent/50 via-sky-400/30 to-violet/50 p-[1.5px] shadow-card">
          <div className="relative overflow-hidden rounded-[1.95rem] bg-surface">
            <div className="aspect-[4/5] w-full">
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-slate-900 to-violet-950"
              />
              <img
                src={profile.photo}
                alt="Muhammad Sohail"
                className="relative h-full w-full object-cover object-top"
                onError={(e) => {
                  e.currentTarget.style.opacity = '0'
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />

              {/* name plate */}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/15 bg-slate-950/45 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="font-display text-sm font-semibold text-white">Muhammad Sohail</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-cyan-200/80">
                    Frontend Developer
                  </p>
                </div>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950">
                  <FiCode className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* floating availability */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="glass absolute -right-3 top-6 flex items-center gap-2 rounded-full px-3.5 py-2 shadow-card sm:-right-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-[11px] font-medium">Available for work</span>
        </motion.div>

        {/* floating experience card */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="glass absolute -left-4 bottom-16 w-[190px] rounded-2xl p-3.5 shadow-card sm:-left-8"
        >
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-violet/15 text-violet">
              <FiTerminal className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[11px] font-semibold leading-tight">HiFi Company</p>
              <p className="font-mono text-[9px] uppercase tracking-wider text-muted">Frontend Intern</p>
            </div>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-line/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '72%' }}
              transition={{ duration: 1.4, delay: 0.8, ease }}
              className="h-full rounded-full bg-gradient-to-r from-accent to-violet"
            />
          </div>
          <p className="mt-1.5 flex items-center gap-1 font-mono text-[9px] text-muted">
            <FiCheckCircle className="h-2.5 w-2.5 text-emerald-400" /> Current · 1+ month
          </p>
        </motion.div>
      </TiltCard>
    </div>
  )
}

export default function Hero() {
  const typed = useTypewriter(profile.roles)

  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7">
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <span className="eyebrow">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for internships
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
                <FiMapPin className="h-3 w-3 text-accent" /> Rawalpindi, PK
              </span>
            </motion.div>

            <motion.p variants={item} className="mt-7 text-sm font-medium text-muted sm:text-base">
              Hello, I&apos;m <span className="font-semibold text-ink">Muhammad Sohail</span> — a
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-2 text-[2.6rem] font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.2rem]"
            >
              Frontend
              <br className="hidden sm:block" />{' '}
              <span className="text-gradient">Developer</span>
              <span className="text-accent">.</span>
            </motion.h1>

            <motion.div
              variants={item}
              className="mt-5 flex min-h-[30px] items-center gap-2 font-mono text-sm text-muted"
            >
              <span className="text-accent">&gt;</span>
              <span className="text-ink/90">{typed}</span>
              <span className="inline-block h-4 w-[2px] animate-pulse bg-accent" />
            </motion.div>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[16.5px]"
            >
              I turn ideas into fast, accessible and genuinely beautiful web experiences with{' '}
              <span className="font-medium text-ink">React</span> and{' '}
              <span className="font-medium text-ink">Tailwind CSS</span>. Currently studying Computer Science
              and interning at HiFi Company.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="btn-primary group">
                View my work
                <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/resume" className="btn-ghost group">
                <FiDownload className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                Download CV
              </Link>
              <SocialLinks className="ml-1 hidden sm:flex" />
            </motion.div>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              {stats.slice(0, 3).map((s, i) => (
                <div key={s.label} className="flex items-center gap-7">
                  <div>
                    <p className="font-display text-xl font-semibold">
                      {s.value}
                      <span className="text-accent">{s.suffix}</span>
                    </p>
                    <p className="mt-0.5 text-[11px] leading-tight text-muted">{s.label}</p>
                  </div>
                  {i < 2 && <span className="hidden h-8 w-px bg-line/10 sm:block" />}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            className="lg:col-span-5"
          >
            <ProfilePhoto />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-16 hidden items-center gap-3 lg:flex"
        >
          <span className="flex h-9 w-5 items-start justify-center rounded-full border border-line/20 p-1">
            <motion.span
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="h-1.5 w-1 rounded-full bg-accent"
            />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted">Scroll to explore</span>
          <FiArrowDown className="h-3 w-3 text-muted" />
        </motion.div>
      </div>
    </section>
  )
}
