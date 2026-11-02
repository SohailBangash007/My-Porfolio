import { motion } from 'framer-motion'

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-app"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />

      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative grid h-20 w-20 place-items-center rounded-2xl border border-line/10 bg-surface/60"
        >
          <span className="font-display text-2xl font-bold text-gradient">MS</span>
          <motion.span
            className="absolute inset-0 rounded-2xl border border-accent/40"
            animate={{ scale: [1, 1.25], opacity: [0.7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
          />
        </motion.div>

        <p className="mt-7 font-display text-lg font-semibold tracking-tight">Muhammad Sohail</p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.32em] text-muted">Frontend Developer</p>

        <div className="mt-6 h-[3px] w-52 overflow-hidden rounded-full bg-line/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-accent to-violet"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-muted/70">
          Loading portfolio
        </p>
      </div>
    </motion.div>
  )
}
