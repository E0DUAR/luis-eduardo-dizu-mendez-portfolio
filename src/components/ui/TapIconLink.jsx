import { motion } from 'framer-motion'
import { spring } from '../../theme/motion'

export default function TapIconLink({ className = '', ...props }) {
  return (
    <motion.a
      className={className}
      whileTap={{ scale: 0.92 }}
      transition={spring.snappy}
      {...props}
    />
  )
}
