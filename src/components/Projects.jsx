import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'
import { theme } from '../theme/tokens'

export default function Projects() {
  return (
    <section id="projects" className={theme.layout.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Work</p>
        <h2 className="text-3xl font-bold mb-16">Projects in production</h2>
      </motion.div>

      <div className="grid gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group p-6 rounded-xl border transition-all duration-300 ${
              project.highlight
                ? 'border-accent/30 bg-accent/5 hover:border-accent/60'
                : 'border-border-subtle bg-surface-subtle hover:border-border-strong'
            }`}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <div className="flex gap-3 shrink-0">
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noreferrer"
                    className="text-fg-faint hover:text-fg transition-colors">
                    <Github size={18} />
                  </a>
                )}
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer"
                    className="text-fg-faint hover:text-fg transition-colors">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-fg-muted text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech}
                  className="text-xs px-2 py-1 rounded-md bg-surface-tag text-fg-quiet border border-border-subtle">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}