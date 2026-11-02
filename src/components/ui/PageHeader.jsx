import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

export default function PageHeader({ eyebrow, title, highlight, description, crumb }) {
  return (
    <section className="relative overflow-hidden pb-10 pt-32 sm:pt-36 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.14),transparent_65%)]"
      />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            <Link to="/" className="transition-colors hover:text-accent">
              Home
            </Link>
            <FiChevronRight className="h-3 w-3" />
            <span className="text-ink/80">{crumb || title}</span>
          </div>

          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(34,211,238,0.7)]" />
            {eyebrow}
          </span>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            {title} {highlight && <span className="text-gradient">{highlight}</span>}
          </h1>

          {description && (
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
