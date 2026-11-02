import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiCheck, FiMapPin, FiAward, FiBookOpen, FiExternalLink } from 'react-icons/fi'
import { education, experience } from '../../data/portfolio'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

export default function ExperienceSection() {
  return (
    <>
      <section className="section pt-8">
        <div className="container-x">
          <div className="flex flex-wrap items-center gap-3">
            <span className="chip">
              <FiBriefcase className="h-3 w-3 text-accent" /> 2 internships
            </span>
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Currently at HiFi Company
            </span>
            <span className="chip">
              <FiCalendar className="h-3 w-3 text-accent" /> 1+ month in current role
            </span>
          </div>

          <div className="relative mt-10">
            <div
              aria-hidden
              className="absolute bottom-0 left-[19px] top-2 w-px bg-gradient-to-b from-accent/60 via-violet/40 to-transparent sm:left-[23px]"
            />

            <div className="space-y-6">
              {experience.map((job, i) => (
                <Reveal key={job.company} delay={i * 0.1}>
                  <div className="relative flex gap-5 sm:gap-7">
                    <div className="relative z-10 mt-1 shrink-0">
                      <motion.span
                        initial={{ scale: 0.6, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className={`grid h-10 w-10 place-items-center rounded-full border sm:h-12 sm:w-12 ${
                          job.current
                            ? 'border-accent/40 bg-accent/10 text-accent shadow-glow'
                            : 'border-line/15 bg-surface text-muted'
                        }`}
                      >
                        <FiBriefcase className="h-4 w-4" />
                      </motion.span>
                    </div>

                    <div className="card card-hover w-full p-5 sm:p-7">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-display text-lg font-semibold leading-tight">{job.role}</h3>
                            {job.current && (
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400">
                                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                                Current
                              </span>
                            )}
                          </div>
                          <p className="mt-1.5 text-sm font-medium text-accent">{job.company}</p>
                          <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] text-muted">
                            <span className="flex items-center gap-1">
                              <FiMapPin className="h-3 w-3" /> {job.location}
                            </span>
                            <span className="hidden h-3 w-px bg-line/15 sm:block" />
                            <span>{job.duration}</span>
                          </p>
                        </div>

                        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-line/10 bg-surface2/60 px-3 py-1.5 font-mono text-[10px] tracking-wider text-muted">
                          <FiCalendar className="h-3 w-3" /> {job.period}
                        </span>
                      </div>

                      <p className="mt-4 text-[13.5px] leading-relaxed text-muted">{job.summary}</p>

                      <ul className="mt-4 space-y-2">
                        {job.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted">
                            <FiCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                            {p}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line/10 pt-4">
                        {job.stack.map((t) => (
                          <span key={t} className="chip">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container-x">
          <SectionHeading
            eyebrow="Education"
            title="Academic"
            highlight="background"
            description="A Computer Science degree in progress, built alongside real project and internship experience."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {education.map((edu, i) => (
              <Reveal key={edu.degree} delay={i * 0.09}>
                <div className="card card-hover h-full p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-accent/15 to-violet/15 text-accent">
                      <FiBookOpen className="h-5 w-5" />
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-wider ${
                        edu.current
                          ? 'border border-emerald-400/25 bg-emerald-400/10 text-emerald-400'
                          : 'border border-line/10 bg-surface2/60 text-muted'
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-accent">{edu.institute}</p>
                  <p className="mt-1 font-mono text-[11px] tracking-wide text-muted">{edu.period}</p>

                  <ul className="mt-4 space-y-2 border-t border-line/10 pt-4">
                    {edu.details.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line/10 bg-surface/40 p-6 sm:p-8">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet/15 blur-3xl" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <span className="flex items-center gap-2 font-mono text-[9.5px] uppercase tracking-[0.24em] text-muted">
                    <FiAward className="h-3.5 w-3.5 text-accent" /> Continuous learning
                  </span>
                  <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                    University theory, internship practice.
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Coursework gives me the fundamentals — data structures, databases, software design. My
                    internships and side projects teach me how those ideas survive contact with a real
                    deadline.
                  </p>
                </div>

                <div className="grid shrink-0 grid-cols-2 gap-2.5">
                  {[
                    ['4', 'semesters done'],
                    ['2', 'internships'],
                    ['10+', 'projects'],
                    ['1+', 'years coding'],
                  ].map(([v, l]) => (
                    <div key={l} className="rounded-xl border border-line/10 bg-surface2/50 px-4 py-3 text-center">
                      <p className="font-display text-lg font-semibold text-gradient">{v}</p>
                      <p className="font-mono text-[8.5px] uppercase tracking-wider text-muted">{l}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-6 flex flex-wrap items-center gap-3 border-t border-line/10 pt-5 text-[12px] text-muted">
                <FiExternalLink className="h-3.5 w-3.5 text-accent" />
                Reach out for my full CV and references.
                <a href="#/resume" className="font-medium text-accent hover:underline">
                  View resume
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
