import { motion } from 'framer-motion'
import { experiences } from '../data/experience'
import { theme } from '../theme/tokens'
import { duration, staggerContainer, staggerItemX, viewportOnce } from '../theme/motion'

export default function Experience() {
  return (
    <section id="experience" className={theme.layout.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: duration.section }}
      >
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Background</p>
        <h2 className="text-3xl font-bold mb-16">Experience</h2>
      </motion.div>

      <motion.div
        className="relative border-l border-border-muted pl-8 space-y-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {experiences.map((exp) => (
          <motion.div key={exp.id} variants={staggerItemX} className="relative">
            <div
              className={`absolute -left-[37px] w-3 h-3 rounded-full border-2 ${
                exp.accent ? 'bg-accent border-accent' : 'bg-canvas border-border-dim'
              }`}
            />
            <div className="mb-2">
              <h3 className="text-lg font-semibold">
                {exp.company}
                {exp.companyNote ? ` ${exp.companyNote}` : ''}
                {exp.location ? ` — ${exp.location}` : ''}
              </h3>
              <p className="text-left text-fg-faint text-sm mt-1 tabular-nums">{exp.period}</p>
              <p className="text-left text-fg-muted text-sm mt-1">{exp.role}</p>
            </div>
            {exp.description ? (
              <p className="text-fg-quiet text-sm leading-relaxed mb-2">{exp.description}</p>
            ) : null}
            {exp.highlights.length > 0 ? (
              <ul className="space-y-1">
                {exp.highlights.map((h) => (
                  <li key={h} className="text-fg-quiet text-sm flex gap-2">
                    <span className="text-accent/60 mt-1 shrink-0">›</span>
                    {h}
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
