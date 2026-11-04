import { motion } from 'framer-motion'

const particles = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 37 + 11) % 97}%`,
  top: `${(i * 53 + 7) % 92}%`,
  size: (i % 3) + 2,
  duration: 8 + (i % 7) * 1.6,
  delay: (i % 9) * 0.9,
}))

export default function Background({ grid = true, blobs = true }) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-app" />

      {grid && (
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,#000_35%,transparent_78%)] opacity-80" />
      )}

      {blobs && (
        <>
          <motion.div
            className="absolute -left-32 top-[-10%] h-[38rem] w-[38rem] rounded-full bg-accent/20 blur-[130px]"
            animate={{ x: [0, 60, 0], y: [0, 50, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -right-40 top-[18%] h-[34rem] w-[34rem] rounded-full bg-violet/20 blur-[140px]"
            animate={{ x: [0, -70, 0], y: [0, 60, 0], scale: [1.05, 0.95, 1.05] }}
            transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-[-15%] left-1/3 h-[30rem] w-[30rem] rounded-full bg-sky-500/10 blur-[150px]"
            animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}

      {particles.map((p, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute animate-rise rounded-full bg-accent/30"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            boxShadow: '0 0 8px 1px rgba(34,211,238,0.25)',
          }}
        />
      ))}

      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-app to-transparent" />
    </div>
  )
}
