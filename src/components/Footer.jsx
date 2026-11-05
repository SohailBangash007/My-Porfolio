import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiCheck, FiCopy, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { navLinks, profile } from '../data/portfolio'
import SocialLinks from './ui/SocialLinks'

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const year = new Date().getFullYear()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <footer className="no-print relative mt-10 overflow-hidden border-t border-line/10 bg-surface/30">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="container-x relative py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-line/10 bg-surface/70 font-display text-sm font-bold text-gradient">
                MS
              </span>
              <span className="font-display text-[15px] font-semibold">{profile.name}</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              <span className="font-medium text-ink/90">Muhammad Sohail Portfolio009</span> — frontend
              developer and BSCS student from Rawalpindi. I build clean, responsive interfaces with React
              and Tailwind CSS, and sweat the small details.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <SocialLinks />
              <button
                type="button"
                onClick={copyEmail}
                className="ml-1 inline-flex items-center gap-2 rounded-full border border-line/10 bg-surface/50 px-3.5 py-2 font-mono text-[10px] text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                {copied ? <FiCheck className="h-3.5 w-3.5 text-emerald-400" /> : <FiCopy className="h-3.5 w-3.5" />}
                {copied ? 'Copied' : 'Copy email'}
              </button>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted">Navigate</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-2 md:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="link-underline text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.26em] text-muted">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-start gap-3 text-muted transition-colors hover:text-accent"
                >
                  <FiMail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span className="break-all">{profile.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phoneRaw}`}
                  className="flex items-start gap-3 text-muted transition-colors hover:text-accent"
                >
                  <FiPhone className="mt-0.5 h-4 w-4 shrink-0" />
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted">
                <FiMapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{profile.location}</span>
              </li>
            </ul>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all"
            >
              Start a project <FiArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line/10 pt-6 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name} · Portfolio009. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed &amp; built with
            <span className="text-accent">React</span>
            <span className="text-muted/50">+</span>
            <span className="text-violet">Tailwind CSS</span>
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden pb-2 text-center font-display text-[18vw] font-bold leading-[0.8] tracking-tighter text-ink/[0.035] sm:text-[15vw]"
      >
        SOHAIL
      </div>
    </footer>
  )
}
