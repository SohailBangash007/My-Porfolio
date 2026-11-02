import { motion } from 'framer-motion'
import { FiCode, FiTerminal, FiTool, FiTrendingUp, FiCheck } from 'react-icons/fi'
import { skillGroups, techStack } from '../../data/portfolio'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Marquee from '../ui/Marquee'

const icons = { code: FiCode, terminal: FiTerminal, tool: FiTool }

const learning = ['TypeScript', 'Advanced React patterns', 'Node.js basics', 'Testing with Vitest']

const strengths = [
  'Responsive layouts',
  'Component design',
  'Problem solving',
  'Clean, readable code',
  'Fast learner',
  'Team communication',
  'Attention to detail',
  'Time management',
]

export default function SkillsSection() {
  return (
    <>
      <section className="section pt-8">
        <div className="container-x">
          <div className="grid gap-5 lg:grid-cols-3">
            {skillGroups.map((group, gi) => {
              const Icon = icons[group.icon] || FiCode
              return (
                <Reveal key={group.title} delay={gi * 0.08}>
                  <div className="card h-full p-6 sm:p-7">
                    <div className="flex items-center justify-between border-b border-line/10 pb-5">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent/15 to-violet/15 text-accent">
                          <Icon className="h-[18px] w-[18px]" />
                        </span>
                        <h3 className="font-display text-base font-semibold">{group.title}</h3>
                      </div>
                      <span className="font-mono text-[10px] text-muted/50">0{gi + 1}</span>
                    </div>

                    <div className="mt-6 space-y-5">
                      {group.skills.map((skill, si) => (
                        <div key={skill.name}>
                          <div className="flex items-baseline justify-between">
                            <span className="text-[13.5px] font-medium text-ink/90">{skill.name}</span>
                            <span className="font-mono text-[10px] text-muted">{skill.level}%</span>
                          </div>
                          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-line/10">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true, amount: 0.6 }}
                              transition={{ duration: 1.1, delay: 0.15 + si * 0.08, ease: [0.22, 1, 0.36, 1] }}
                              className="h-full rounded-full bg-gradient-to-r from-accent via-sky-400 to-violet"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-4">
        <Marquee items={techStack} />
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Next up"
                title="What I am learning"
                highlight="right now"
                description="A developer who stops learning stops being useful — these are the things I am actively working on."
              />

              <div className="mt-7 space-y-3">
                {learning.map((l, i) => (
                  <Reveal key={l} delay={i * 0.06}>
                    <div className="flex items-center justify-between rounded-xl border border-line/10 bg-surface/40 px-4 py-3">
                      <span className="flex items-center gap-2.5 text-sm">
                        <FiTrendingUp className="h-4 w-4 text-accent" />
                        {l}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                        in progress
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <div className="card h-full p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold">Other strengths</h3>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted">soft skills</span>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {strengths.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line/10 bg-surface2/70 px-3.5 py-2 text-[12.5px] text-muted transition-colors hover:border-accent/30 hover:text-ink"
                      >
                        <FiCheck className="h-3 w-3 text-accent" />
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-line/10 bg-gradient-to-br from-accent/10 to-violet/10 p-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted">My approach</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      I would rather understand one concept deeply than collect ten tutorials. Every skill on
                      this page is something I have used in a real project — not just watched a video about.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
