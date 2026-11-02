import { FiCheck, FiCode, FiLayers, FiPenTool, FiSmartphone } from 'react-icons/fi'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { services } from '../../data/portfolio'

const icons = {
  code: FiCode,
  wand: FiPenTool,
  mobile: FiSmartphone,
  stack: FiLayers,
}

export default function ServicesSection() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What I do"
            title="Frontend work with"
            highlight="attention to detail"
            description="From a rough idea or Figma file to a polished, responsive interface — here is where I can help."
          />
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[service.icon] || FiCode
            return (
              <Reveal key={service.title} delay={i * 0.08}>
                <article className="card card-hover group h-full p-6 sm:p-7">
                  <div className="flex items-start justify-between">
                    <span className="relative grid h-12 w-12 place-items-center rounded-2xl border border-line/10 bg-gradient-to-br from-accent/15 to-violet/15 text-accent transition-colors duration-500 group-hover:text-violet">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono text-[10px] text-muted/50">0{i + 1}</span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.text}</p>

                  <ul className="mt-5 space-y-2">
                    {service.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-[13px] text-muted">
                        <FiCheck className="h-3.5 w-3.5 text-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
