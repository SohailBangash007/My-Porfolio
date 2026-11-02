import { motion } from 'framer-motion'

const directions = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { x: 34, y: 0 },
  right: { x: -34, y: 0 },
  none: { x: 0, y: 0 },
}

export default function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.7,
  amount = 0.2,
  once = true,
  as = 'div',
  ...rest
}) {
  const MotionTag = motion[as] || motion.div
  const offset = directions[direction] || directions.up

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
