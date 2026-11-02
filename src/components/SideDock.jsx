import { useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { FiChevronLeft, FiMail, FiMapPin, FiArrowUpRight, FiClock } from 'react-icons/fi'
import { navLinks, profile } from '../data/portfolio'
import useLocalTime from '../hooks/useLocalTime'
import SocialLinks from './ui/SocialLinks'

const R = 17
const C = 2 * Math.PI * R

export default function SideDock() {
  const [open, setOpen] = useState(false)
  const [pct, setPct] = useState(0)
  const { scrollYProgress } = useScroll()
  const location = useLocation()
  const time = useLocalTime(profile.timezone)

  useMotionValueEvent(scrollYProgress, 'change', (v) => setPct(Math.round(v * 100)))

  const current = navLinks.find((l) => l.path === location.pathname)?.name || 'Home'

  return (
    <div className="fixed right-4 top-1/2 z-[55] hidden -translate-y-1/2 xl:block">
      <div className="relative flex flex-col items-center gap-2 rounded-full border border-line/10 bg-surface/60 p-2 backdrop-blur-xl">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Hide live status panel' : 'Show live status panel'}
          className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface2 hover:text-accent"
        >
          <FiChevronLeft className={`h-4 w-4 transition-transform duration-300 ${open ? '' : 'rotate-180'}`} />
        </button>

        <div className="flex flex-col items-center gap-2 border-y border-line/10 py-2">
          <span className="relative flex h-2.5 w-2.5" title="Available for work">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>

          <div className="relative grid h-11 w-11 place-items-center">
            <svg viewBox="0 0 44 44" className="h-11 w-11 -rotate-90">
              <circle cx="22" cy="22" r={R} fill="none" stroke="currentColor" strokeWidth="2.5" className="text-line/10" />
              <circle
                cx="22"
                cy="22"
                r={R}
                fill="none"
                stroke="url(#dockGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={C}
                strokeDashoffset={C - (pct / 100) * C}
              />
              <defs>
                <linearGradient id="dockGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
            </svg>
            <span className="absolute font-mono text-[9px] font-medium text-ink">{pct}</span>
          </div>

          <a
            href={`mailto:${profile.email}`}
            aria-label="Email me"
            className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-surface2 hover:text-accent"
          >
            <FiMail className="h-4 w-4" />
          </a>
        </div>

        <span className="writing-vertical py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-muted">
          Live
        </span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ opacity: 0, x: 12, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 12, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="glass absolute right-full top-1/2 mr-3 w-[250px] -translate-y-1/2 rounded-2xl p-4 shadow-card"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted">Live status</span>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 text-[9px] font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> ONLINE
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2 text-ink">
              <FiClock className="h-3.5 w-3.5 text-accent" />
              <span className="font-mono text-[13px] tracking-tight">{time}</span>
              <span className="ml-auto font-mono text-[9px] uppercase tracking-widest text-muted">PKT</span>
            </div>

            <div className="mt-2 flex items-start gap-2 text-[11px] leading-snug text-muted">
              <FiMapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
              {profile.location}
            </div>

            <div className="my-3 h-px bg-line/10" />

            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted">Now viewing</p>
            <div className="mt-1 flex items-center justify-between">
              <span className="font-display text-sm font-semibold">{current}</span>
              <span className="font-mono text-[10px] text-accent">{pct}%</span>
            </div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-line/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent to-violet transition-[width] duration-150"
                style={{ width: `${pct}%` }}
              />
            </div>

            <div className="my-3 h-px bg-line/10" />

            <p className="text-[11px] leading-snug text-muted">{profile.availability}</p>
            <SocialLinks className="mt-3 [&>a]:h-8 [&>a]:w-8" iconClassName="h-3.5 w-3.5" />

            <Link
              to="/contact"
              className="mt-3 flex items-center justify-between rounded-xl border border-line/10 bg-surface2/70 px-3 py-2 text-[11px] font-medium transition-colors hover:border-accent/40 hover:text-accent"
            >
              Start a conversation
              <FiArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  )
}
