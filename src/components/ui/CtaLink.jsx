import { motion } from 'framer-motion'
import { ctaHover, ctaTap, spring } from '../../theme/motion'

/**
 * `<motion.a>` con feedback hover/tap discreto para CTAs.
 */
export default function CtaLink({ className = '', ...props }) {
  return (
    <motion.a
      className={className}
      whileHover={ctaHover}
      whileTap={ctaTap}
      transition={spring.snappy}
      {...props}
    />
  )
}
