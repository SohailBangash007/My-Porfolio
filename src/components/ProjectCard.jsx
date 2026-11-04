import { useRef } from 'react'
import { FiArrowUpRight, FiGithub, FiExternalLink, FiLock } from 'react-icons/fi'
import ProjectImage from './ui/ProjectImage'

export default function ProjectCard({ project, compact = false }) {
  const ref = useRef(null)

  const onMove = (event) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    el.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      className="card card-hover project-card group relative flex h-full flex-col overflow-hidden"
    >
      <div className="relative overflow-hidden">
        <div className={compact ? 'aspect-[16/10]' : 'aspect-[16/10]'}>
          <ProjectImage
            src={project.image}
            alt={`${project.title} — ${project.tagline}`}
            fallback={project.fallback}
            title={project.title}
          />
        </div>

        {/* pointer spotlight */}
        <div aria-hidden className="spotlight-layer pointer-events-none absolute inset-0" />

        {/* one-shot shine sweep on hover */}
        <div
          aria-hidden
          className="sweep pointer-events-none absolute -inset-y-10 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-80" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full border border-white/20 bg-slate-950/45 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-md">
            {project.category}
          </span>
          {project.featured && (
            <span className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-950">
              Featured
            </span>
          )}
        </div>

        <div className="absolute right-4 top-4 flex translate-y-1 items-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={
              project.isPrivate
                ? `${project.title} — private repository, open GitHub profile`
                : `${project.title} on GitHub`
            }
            className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-slate-950/50 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-slate-950"
          >
            <FiGithub className="h-3.5 w-3.5" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} live`}
              className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-slate-950/50 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-slate-950"
            >
              <FiExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>

        <div className="absolute bottom-4 left-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
          <span>{project.year}</span>
          {project.isPrivate && (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-slate-950/50 px-2 py-0.5 text-[9px] tracking-[0.14em] text-white/60 backdrop-blur-md">
              <FiLock className="h-2.5 w-2.5" />
              Private
            </span>
          )}
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-tight transition-colors group-hover:text-accent">
            {project.title}
          </h3>
          <FiArrowUpRight className="project-arrow mt-1 h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:text-accent" />
        </div>

        <p className="mt-1 text-[13px] font-medium text-accent/80">{project.tagline}</p>
        <p className="mt-3 line-clamp-3 text-[13.5px] leading-relaxed text-muted">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-1.5 border-t border-line/10 pt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <span
          aria-hidden
          className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-accent to-violet transition-transform duration-500 group-hover:scale-x-100"
        />
      </div>
    </article>
  )
}
