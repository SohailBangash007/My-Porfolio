import { motion } from 'framer-motion'

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

      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-app to-transparent" />
    </div>
  )
}
