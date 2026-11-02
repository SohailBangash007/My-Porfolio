import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const sx = useSpring(x, { stiffness: 120, damping: 24, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 120, damping: 24, mass: 0.4 })

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return
    setEnabled(true)

    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 mix-blend-screen blur-[80px]"
        style={{
          x: sx,
          y: sy,
          background:
            'radial-gradient(circle, rgba(34,211,238,0.22) 0%, rgba(167,139,250,0.12) 45%, transparent 70%)',
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[61] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_16px_4px_rgba(34,211,238,0.55)]"
        style={{ x, y }}
      />
    </>
  )
}
