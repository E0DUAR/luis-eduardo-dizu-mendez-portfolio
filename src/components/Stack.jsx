import { motion } from 'framer-motion'
import { stackGroups } from '../data/stack'
import { theme } from '../theme/tokens'
import { duration, staggerContainer, staggerItemY, viewportOnce } from '../theme/motion'

export default function Stack() {
  return (
    <section id="stack" className={theme.layout.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: duration.section }}
      >
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Skills</p>
        <h2 className="text-3xl font-bold mb-16">Tech stack</h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {stackGroups.map((group) => (
          <motion.div
            key={group.category}
            variants={staggerItemY}
            className="p-6 rounded-xl border border-border-subtle bg-surface-subtle"
          >
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm px-3 py-1 rounded-lg bg-surface-tag text-fg-relaxed border border-border-subtle"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
