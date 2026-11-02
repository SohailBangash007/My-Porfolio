import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiClock,
  FiCopy,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from 'react-icons/fi'
import { faqs, profile } from '../../data/portfolio'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import SocialLinks from '../ui/SocialLinks'

const initialForm = { name: '', email: '', subject: '', message: '' }

function Field({ label, children, error, htmlFor }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-[11px] text-rose-400">{error}</p>}
    </div>
  )
}

const inputClass =
  'w-full rounded-xl border border-line/10 bg-surface2/50 px-4 py-3 text-[13.5px] text-ink placeholder:text-muted/50 transition-colors focus:border-accent/50 focus:bg-surface2/80 focus:outline-none'

export default function ContactSection() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState('')

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((v) => ({ ...v, [key]: undefined }))
  }

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      setTimeout(() => setCopied(''), 1800)
    } catch {
      setCopied('')
    }
  }

  const validate = () => {
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email address.'
    if (form.message.trim().length < 10) next.message = 'A little more detail, please (10+ characters).'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const subject = encodeURIComponent(form.subject.trim() || `Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Hi Muhammad Sohail,\n\n${form.message}\n\n—\n${form.name}\n${form.email}`,
    )

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setForm(initialForm)

    setTimeout(() => setSent(false), 7000)
  }

  const info = [
    {
      icon: FiMail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      copyKey: 'email',
      copyValue: profile.email,
    },
    {
      icon: FiPhone,
      label: 'Phone / WhatsApp',
      value: profile.phone,
      href: `tel:${profile.phoneRaw}`,
      copyKey: 'phone',
      copyValue: profile.phoneRaw,
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: profile.location,
      href: 'https://maps.google.com/?q=Chakri+Road+Mora+Chappar+Rawalpindi',
      copyKey: 'location',
      copyValue: profile.location,
    },
  ]

  return (
    <>
      <section className="section pt-6">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-12">
            {/* Info column */}
            <div className="space-y-4 lg:col-span-5">
              <Reveal>
                <div className="card p-6">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </span>
                    <p className="text-sm font-medium text-emerald-400">{profile.availability}</p>
                  </div>

                  <p className="mt-4 text-[13.5px] leading-relaxed text-muted">
                    I usually reply within a day. For quick questions, email or WhatsApp is best — for project
                    details, use the form.
                  </p>

                  <div className="mt-6 space-y-3">
                    {info.map(({ icon: Icon, label, value, href, copyKey, copyValue }) => (
                      <div
                        key={label}
                        className="group flex items-start gap-3 rounded-xl border border-line/10 bg-surface2/40 p-3.5 transition-colors hover:border-accent/25"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">{label}</p>
                          <a
                            href={href}
                            target={label === 'Location' ? '_blank' : undefined}
                            rel="noreferrer"
                            className="mt-0.5 block break-words text-[13px] font-medium leading-snug transition-colors hover:text-accent"
                          >
                            {value}
                          </a>
                        </div>
                        <button
                          type="button"
                          onClick={() => copy(copyValue, copyKey)}
                          aria-label={`Copy ${label}`}
                          className="mt-0.5 shrink-0 rounded-md p-1.5 text-muted transition-colors hover:bg-surface hover:text-accent"
                        >
                          {copied === copyKey ? (
                            <FiCheck className="h-3.5 w-3.5 text-emerald-400" />
                          ) : (
                            <FiCopy className="h-3.5 w-3.5" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-line/10 pt-5">
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">Find me online</span>
                    <SocialLinks iconClassName="h-3.5 w-3.5" />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="relative overflow-hidden rounded-3xl border border-line/10 bg-gradient-to-br from-accent/12 via-surface/60 to-violet/12 p-6">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-2xl" />
                  <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted">Response time</p>
                  <p className="mt-2 flex items-center gap-2 font-display text-xl font-semibold">
                    <FiClock className="h-4 w-4 text-accent" /> Under 24 hours
                  </p>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                    Timezone: Pakistan Standard Time (GMT+5). I check messages between classes and after work.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={0.1} className="lg:col-span-7">
              <form onSubmit={onSubmit} noValidate className="card h-full p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="font-display text-xl font-semibold">Send me a message</h2>
                    <p className="mt-1 text-[13px] text-muted">
                      Fill this in and your email app will open with everything ready to send.
                    </p>
                  </div>
                  <span className="hidden rounded-full border border-line/10 bg-surface2/60 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-muted sm:block">
                    No spam
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Your name *" htmlFor="name" error={errors.name}>
                    <input
                      id="name"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Ali Khan"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Email *" htmlFor="email" error={errors.email}>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="Subject" htmlFor="subject">
                    <input
                      id="subject"
                      value={form.subject}
                      onChange={update('subject')}
                      placeholder="Frontend internship / project enquiry"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="Message *" htmlFor="message" error={errors.message}>
                    <textarea
                      id="message"
                      rows={6}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Tell me a little about what you are building, the timeline, and how I can help…"
                      className={`${inputClass} resize-none`}
                    />
                  </Field>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <button type="submit" className="btn-primary group">
                    Send message
                    <FiSend className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <p className="font-mono text-[10px] text-muted">
                    or email <span className="text-ink/80">{profile.email}</span>
                  </p>
                </div>

                <AnimatePresence>
                  {sent && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 overflow-hidden"
                    >
                      <div className="flex items-start gap-2.5 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-[12.5px] text-emerald-300">
                        <FiCheckCircle className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>
                          Thanks! Your email draft should be open now. If nothing happened, email me directly at{' '}
                          {profile.email}.
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="mt-5 border-t border-line/10 pt-4 text-[10.5px] leading-relaxed text-muted/70">
                  Prefer a quick call? Ring {profile.phone} between 10am and 8pm PKT.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section pt-2">
        <div className="container-x">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions people"
            highlight="ask"
            align="center"
            description="A few things that might save you an email."
          />

          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} {...faq} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <Reveal delay={index * 0.05}>
      <div className={`card overflow-hidden transition-colors ${open ? 'border-accent/25' : ''}`}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
        >
          <span className="text-[14px] font-medium">{q}</span>
          <FiChevronDown
            className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${open ? 'rotate-180 text-accent' : ''}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="border-t border-line/10 px-5 py-4 text-[13px] leading-relaxed text-muted sm:px-6">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  )
}
