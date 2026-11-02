import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FiMenu, FiMoon, FiSun, FiX, FiArrowUpRight, FiMail } from 'react-icons/fi'
import { navLinks, profile } from '../data/portfolio'
import { useTheme } from './ThemeProvider'

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-line/10 bg-surface/70">
        <span className="absolute inset-0 bg-gradient-to-br from-accent/25 to-violet/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative font-display text-sm font-bold tracking-tight text-gradient">MS</span>
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="font-display text-[15px] font-semibold">Muhammad Sohail</span>
        <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted">Frontend Developer</span>
      </span>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`no-print fixed inset-x-0 top-0 z-[65] transition-all duration-500 ${
          scrolled
            ? 'border-b border-line/10 bg-app/75 py-2.5 backdrop-blur-xl'
            : 'border-b border-transparent py-4'
        }`}
      >
        <div className="container-x flex items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 ${
                    isActive ? 'text-ink' : 'text-muted hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full border border-line/10 bg-surface/80"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {link.name}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="grid h-10 w-10 place-items-center rounded-full border border-line/10 bg-surface/50 text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              {theme === 'dark' ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
            </button>

            <Link to="/contact" className="btn-primary hidden !px-5 !py-2.5 text-[13px] sm:inline-flex">
              Let&apos;s talk
              <FiArrowUpRight className="h-4 w-4" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-line/10 bg-surface/50 text-ink lg:hidden"
            >
              {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[64] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="absolute inset-0 bg-app/95 backdrop-blur-2xl" onClick={() => setOpen(false)} />
            <div className="absolute inset-0 grid-bg opacity-40" />

            <motion.nav
              className="relative flex h-full flex-col justify-center overflow-y-auto px-7 pb-10 pt-24"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { staggerChildren: 0.055, delayChildren: 0.08 } },
              }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  variants={{
                    hidden: { opacity: 0, x: -24 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `flex items-baseline gap-4 border-b border-line/10 py-3.5 font-display text-2xl font-medium transition-colors ${
                        isActive ? 'text-accent' : 'text-ink/80 hover:text-ink'
                      }`
                    }
                  >
                    <span className="font-mono text-[10px] tracking-widest text-muted">
                      0{i + 1}
                    </span>
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                className="mt-8 flex flex-col gap-4"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                }}
              >
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm text-muted hover:text-accent"
                >
                  <FiMail className="h-4 w-4" /> {profile.email}
                </a>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  {profile.locationShort}
                </p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
