import { motion } from 'framer-motion'
import AnimatedNavLink from './ui/AnimatedNavLink'
import { duration } from '../theme/motion'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.nav }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-canvas/80 backdrop-blur-sm"
    >
      <span className="text-accent font-semibold tracking-tight">eduardo.dev</span>
      <ul className="flex gap-6">
        {links.map((link) => (
          <li key={link.href}>
            <AnimatedNavLink href={link.href}>{link.label}</AnimatedNavLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
