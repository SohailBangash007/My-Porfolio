import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiFolder, FiSearch } from 'react-icons/fi'
import { projects } from '../../data/portfolio'
import ProjectCard from '../ProjectCard'
import Reveal from '../ui/Reveal'

export default function ProjectsSection() {
  const categories = useMemo(() => ['All', ...new Set(projects.map((p) => p.category))], [])
  const [active, setActive] = useState('All')
  const [query, setQuery] = useState('')

  const filtered = projects.filter((p) => {
    const matchCategory = active === 'All' || p.category === active
    const q = query.trim().toLowerCase()
    const matchQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
    return matchCategory && matchQuery
  })

  return (
    <section className="section pt-6">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`relative rounded-full px-4 py-2 text-[12.5px] font-medium transition-colors ${
                  active === c ? 'text-slate-950' : 'text-muted hover:text-ink'
                }`}
              >
                {active === c && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent to-violet"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:max-w-[260px]">
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              aria-label="Search projects"
              className="w-full rounded-full border border-line/10 bg-surface/60 py-2.5 pl-10 pr-4 text-[13px] text-ink placeholder:text-muted/70 focus:border-accent/40 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          <FiFolder className="h-3.5 w-3.5" />
          {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
          {active !== 'All' && <span className="text-accent">· {active}</span>}
        </div>

        {filtered.length > 0 ? (
          <motion.div layout className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.06} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </motion.div>
        ) : (
          <div className="mt-10 rounded-3xl border border-dashed border-line/15 bg-surface/30 px-6 py-16 text-center">
            <p className="font-display text-lg font-semibold">No projects match that search</p>
            <p className="mt-2 text-sm text-muted">Try a different keyword, or clear the filters.</p>
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setActive('All')
              }}
              className="btn-ghost mt-5"
            >
              Clear filters
            </button>
          </div>
        )}

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl border border-line/10 bg-surface/40 p-5 text-center text-[13px] text-muted">
            More experiments live on my{' '}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              GitHub
            </a>
            . Each project above is built from scratch — no templates.
          </div>
        </Reveal>
      </div>
    </section>
  )
}
