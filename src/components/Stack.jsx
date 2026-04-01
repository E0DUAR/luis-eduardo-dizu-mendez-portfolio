import { motion } from 'framer-motion'
import { stackGroups } from '../data/stack'
import { theme } from '../theme/tokens'

export default function Stack() {
  return (
    <section id="stack" className={theme.layout.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Skills</p>
        <h2 className="text-3xl font-bold mb-16">Tech stack</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {stackGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-xl border border-border-subtle bg-surface-subtle"
          >
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item}
                  className="text-sm px-3 py-1 rounded-lg bg-surface-tag text-fg-relaxed border border-border-subtle">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}