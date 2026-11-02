import { Link } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { projects } from '../../data/portfolio'
import ProjectCard from '../ProjectCard'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects I have"
            highlight="shipped"
            description="A few builds that show how I think about structure, state and the small details that make a UI feel finished."
          />

          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 self-start whitespace-nowrap text-sm font-medium text-accent md:self-end"
          >
            All projects
            <span className="grid h-8 w-8 place-items-center rounded-full border border-accent/30 transition-all duration-300 group-hover:bg-accent group-hover:text-slate-950">
              <FiArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.09} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <Link
            to="/projects"
            className="card card-hover group flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">More in the archive</p>
              <p className="mt-1.5 font-display text-lg font-semibold">
                Weather dashboards, quiz apps, maps and more
              </p>
            </div>
            <span className="btn-ghost !py-2.5 text-[13px]">
              Explore all work
              <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
