import { Link } from 'react-router-dom'
import { FiArrowLeft, FiCompass } from 'react-icons/fi'

export default function NotFound() {
  return (
    <section className="relative grid min-h-[80vh] place-items-center overflow-hidden px-6 py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px]" />

      <div className="relative text-center">
        <p className="font-display text-[6rem] font-bold leading-none text-gradient sm:text-[9rem]">404</p>
        <h1 className="mt-2 text-2xl font-semibold sm:text-3xl">This page took a wrong turn</h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          The link may be old or mistyped. Let&apos;s get you back to something useful.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-primary">
            <FiArrowLeft className="h-4 w-4" /> Back home
          </Link>
          <Link to="/projects" className="btn-ghost">
            <FiCompass className="h-4 w-4" /> Browse projects
          </Link>
        </div>
      </div>
    </section>
  )
}
