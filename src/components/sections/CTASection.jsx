import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiPhoneCall } from 'react-icons/fi'
import { profile } from '../../data/portfolio'
import Reveal from '../ui/Reveal'
import Magnetic from '../ui/Magnetic'

export default function CTASection() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="group relative overflow-hidden rounded-[2rem] border border-line/10 bg-gradient-to-br from-surface via-surface to-surface2 px-6 py-14 text-center sm:px-12 sm:py-16">
            <div aria-hidden className="cta-aurora pointer-events-none absolute -inset-[45%] opacity-40 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
            <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-accent/20 blur-[100px] transition-transform duration-700 group-hover:scale-125" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-violet/20 blur-[100px] transition-transform duration-700 group-hover:scale-125" />

            {[
              { left: '12%', top: '22%', delay: '0s', size: 4 },
              { left: '24%', top: '70%', delay: '1.2s', size: 3 },
              { left: '48%', top: '12%', delay: '2.4s', size: 2 },
              { left: '72%', top: '64%', delay: '0.6s', size: 4 },
              { left: '88%', top: '26%', delay: '1.8s', size: 3 },
            ].map((dot, i) => (
              <span
                key={i}
                aria-hidden
                className="pointer-events-none absolute animate-float rounded-full bg-accent/60 shadow-[0_0_14px_3px_rgba(34,211,238,0.35)]"
                style={{
                  left: dot.left,
                  top: dot.top,
                  width: dot.size,
                  height: dot.size,
                  animationDelay: dot.delay,
                  animationDuration: '7s',
                }}
              />
            ))}

            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                Currently available
              </span>

              <h2 className="mt-6 text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.9rem]">
                Have an idea? Let&apos;s build something
                <span className="text-gradient text-shimmer"> people remember</span>.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
                I am open to frontend internships, junior React roles and freelance projects. Tell me what you
                are working on and I will reply within a day.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Magnetic>
                  <Link to="/contact" className="btn-primary group">
                    Start a conversation
                    <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Magnetic>
                <a href={`tel:${profile.phoneRaw}`} className="btn-ghost">
                  <FiPhoneCall className="h-4 w-4" />
                  {profile.phone}
                </a>
              </div>

              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                {profile.locationShort} · PKT (GMT+5)
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
