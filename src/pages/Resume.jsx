import { Link } from 'react-router-dom'
import { FiArrowLeft, FiDownload, FiMail, FiMapPin, FiPhone, FiPrinter } from 'react-icons/fi'
import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import { education, experience, profile, projects, skillGroups } from '../data/portfolio'

export default function Resume() {
  return (
    <>
      <div className="no-print">
        <PageHeader
          eyebrow="Resume"
          title="A one-page version of"
          highlight="me."
          crumb="Resume"
          description="Everything in one place — experience, education, skills and selected projects. Print it or save it as a PDF straight from your browser."
        />
      </div>

      <section className="pb-20 pt-4">
        <div className="container-x">
          <div className="no-print mb-6 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => window.print()} className="btn-primary group">
              <FiPrinter className="h-4 w-4" />
              Print / Save as PDF
            </button>
            <button type="button" onClick={() => window.print()} className="btn-ghost">
              <FiDownload className="h-4 w-4" />
              Download CV
            </button>
            <Link to="/" className="btn-ghost">
              <FiArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Tip: choose “Save as PDF” in the print dialog
            </p>
          </div>

          <Reveal>
            <article className="print-block card overflow-hidden p-6 sm:p-10">
              {/* Header */}
              <header className="flex flex-col gap-6 border-b border-line/10 pb-7 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    {profile.name}
                  </h1>
                  <p className="mt-1 text-sm font-medium text-accent">
                    Frontend Developer · React &amp; Tailwind CSS
                  </p>
                  <div className="mt-4 flex flex-col gap-1.5 text-[12.5px] text-muted sm:flex-row sm:flex-wrap sm:gap-x-5">
                    <span className="flex items-center gap-1.5">
                      <FiMail className="h-3.5 w-3.5 text-accent" /> {profile.email}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiPhone className="h-3.5 w-3.5 text-accent" /> {profile.phone}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiMapPin className="h-3.5 w-3.5 text-accent" /> {profile.location}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 rounded-2xl border border-line/10 bg-surface2/50 px-4 py-3 text-[11px] leading-relaxed text-muted">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent">Availability</p>
                  <p className="mt-1 max-w-[190px]">{profile.availability}</p>
                  <p className="mt-1">Remote or Rawalpindi / Islamabad</p>
                </div>
              </header>

              <div className="mt-8 grid gap-8 lg:grid-cols-12">
                {/* Main column */}
                <div className="space-y-8 lg:col-span-8">
                  <section>
                    <h2 className="font-mono text-[10px] uppercase tracking-[0.26em] text-accent">Profile</h2>
                    <p className="mt-3 text-[13px] leading-relaxed text-muted">
                      Frontend developer and BS Computer Science student (4 semesters completed) with hands-on
                      internship experience building responsive React interfaces. Comfortable turning Figma
                      designs into reusable components, integrating REST APIs and polishing UI details. Looking
                      for a junior frontend or internship role where I can keep shipping real products.
                    </p>
                  </section>

                  <section>
                    <h2 className="font-mono text-[10px] uppercase tracking-[0.26em] text-accent">Experience</h2>
                    <div className="mt-4 space-y-6">
                      {experience.map((job) => (
                        <div key={job.company} className="relative border-l border-line/15 pl-5">
                          <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h3 className="text-[14.5px] font-semibold">
                              {job.role} · <span className="text-accent">{job.company}</span>
                            </h3>
                            <span className="font-mono text-[10px] text-muted">{job.period}</span>
                          </div>
                          <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                            {job.location} · {job.duration}
                          </p>
                          <ul className="mt-2.5 space-y-1.5">
                            {job.points.map((p) => (
                              <li key={p} className="flex gap-2 text-[12.5px] leading-relaxed text-muted">
                                <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                                {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="font-mono text-[10px] uppercase tracking-[0.26em] text-accent">
                      Selected projects
                    </h2>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {projects.slice(0, 4).map((p) => (
                        <div key={p.id} className="rounded-xl border border-line/10 p-4">
                          <div className="flex items-baseline justify-between gap-2">
                            <h3 className="text-[13px] font-semibold">{p.title}</h3>
                            <span className="font-mono text-[9px] text-muted">{p.year}</span>
                          </div>
                          <p className="mt-1 text-[11.5px] leading-relaxed text-muted">{p.tagline}.</p>
                          <p className="mt-2 font-mono text-[9.5px] text-accent/90">{p.tags.join(' · ')}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="font-mono text-[10px] uppercase tracking-[0.26em] text-accent">Education</h2>
                    <div className="mt-4 space-y-4">
                      {education.map((e) => (
                        <div key={e.degree}>
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h3 className="text-[13.5px] font-semibold">{e.degree}</h3>
                            <span className="font-mono text-[10px] text-muted">{e.period}</span>
                          </div>
                          <p className="text-[12px] text-muted">
                            {e.institute} — {e.status}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Side column */}
                <aside className="space-y-7 lg:col-span-4 lg:border-l lg:border-line/10 lg:pl-7">
                  <section>
                    <h2 className="font-mono text-[10px] uppercase tracking-[0.26em] text-accent">Skills</h2>
                    <div className="mt-3 space-y-3">
                      {skillGroups.map((g) => (
                        <div key={g.title}>
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-ink/80">
                            {g.title}
                          </p>
                          <p className="mt-1 text-[12px] leading-relaxed text-muted">
                            {g.skills.map((s) => s.name).join(', ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="font-mono text-[10px] uppercase tracking-[0.26em] text-accent">Strengths</h2>
                    <ul className="mt-3 space-y-1.5 text-[12px] text-muted">
                      {['Responsive, mobile-first layouts', 'Reusable component systems', 'REST API integration', 'Clean, readable code', 'Fast learner, team player'].map(
                        (s) => (
                          <li key={s} className="flex gap-2">
                            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {s}
                          </li>
                        ),
                      )}
                    </ul>
                  </section>

                  <section>
                    <h2 className="font-mono text-[10px] uppercase tracking-[0.26em] text-accent">Languages</h2>
                    <p className="mt-3 text-[12px] leading-relaxed text-muted">
                      English (professional), Urdu (native)
                    </p>
                  </section>

                  <section>
                    <h2 className="font-mono text-[10px] uppercase tracking-[0.26em] text-accent">Elsewhere</h2>
                    <div className="mt-3 space-y-1.5 text-[12px] text-muted">
                      {profile.socials.map((s) => (
                        <a
                          key={s.name}
                          href={s.url}
                          target="_blank"
                          rel="noreferrer"
                          className="block transition-colors hover:text-accent"
                        >
                          {s.name} — {s.url.replace('https://', '')}
                        </a>
                      ))}
                    </div>
                  </section>
                </aside>
              </div>

              <footer className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-line/10 pt-4 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
                <span>{profile.name}</span>
                <span>References available on request</span>
              </footer>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  )
}
