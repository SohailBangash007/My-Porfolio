import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

/** Subtle 3D tilt that follows the pointer. Disabled on touch devices by nature of hover. */
export default function TiltCard({ children, className = '', max = 8, scale = 1.01 }) {
  const ref = useRef(null)
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0, scale: 1 })

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setStyle({ rotateX: -py * max, rotateY: px * max, scale })
  }

  const reset = () => setStyle({ rotateX: 0, rotateY: 0, scale: 1 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      animate={style}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={`preserve-3d ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  )
}
