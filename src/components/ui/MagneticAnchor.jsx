import { useCallback, useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

const MAX_OFFSET = 6

/**
 * Desplaza ligeramente el contenido hacia el puntero (desktop). Desactivado con reduced motion.
 */
export default function MagneticAnchor({ children, className = '' }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 18, mass: 0.15 })
  const springY = useSpring(y, { stiffness: 150, damping: 18, mass: 0.15 })

  const onMove = useCallback(
    (e) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const halfW = Math.max(r.width / 2, 1)
      const halfH = Math.max(r.height / 2, 1)
      const nx = Math.max(-1, Math.min(1, (e.clientX - cx) / halfW))
      const ny = Math.max(-1, Math.min(1, (e.clientY - cy) / halfH))
      x.set(nx * MAX_OFFSET)
      y.set(ny * MAX_OFFSET)
    },
    [x, y],
  )

  const onLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  )
}
