import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, ExternalLink, Github } from 'lucide-react'
import { mainProjects, moreProjects } from '../data/projects'
import { theme } from '../theme/tokens'
import { duration, staggerContainer, staggerItemY, viewportOnce } from '../theme/motion'
import TapIconLink from './ui/TapIconLink'

const STATUS_LABEL = {
  online: 'Online',
  building: 'Building',
}

function statusBadgeClassName(status) {
  if (status === 'building') {
    return 'text-xs font-medium px-2 py-0.5 rounded-md border bg-projectStatus-building-surface text-projectStatus-building-text border-projectStatus-building-border'
  }
  return 'text-xs font-medium px-2 py-0.5 rounded-md border bg-projectStatus-online-surface text-projectStatus-online-text border-projectStatus-online-border'
}

function projectCardClassName(project) {
  return `group p-6 rounded-xl border transition-all duration-300 ${
    project.highlight
      ? 'border-accent/30 bg-accent/5 hover:border-accent/60'
      : 'border-border-subtle bg-surface-subtle hover:border-border-strong'
  }`
}

function ProjectCardBody({ project }) {
  return (
    <>
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="min-w-0 flex-1 flex flex-wrap items-center gap-x-2 gap-y-2">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <span className={statusBadgeClassName(project.status)}>{STATUS_LABEL[project.status] ?? project.status}</span>
        </div>
        <div className="flex gap-3 shrink-0">
          {project.repo ? (
            <TapIconLink
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-fg-faint hover:text-fg transition-colors inline-flex"
            >
              <Github size={18} />
            </TapIconLink>
          ) : null}
          {project.url ? (
            <TapIconLink
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="text-fg-faint hover:text-fg transition-colors inline-flex"
            >
              <ExternalLink size={18} />
            </TapIconLink>
          ) : null}
          {!project.repo && !project.url && project.repoNote ? (
            <span className="text-xs text-fg-quiet italic">{project.repoNote}</span>
          ) : null}
        </div>
      </div>
      <p className="text-fg-muted text-sm leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded-md bg-surface-tag text-fg-quiet border border-border-subtle"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  )
}

export default function Projects() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="projects" className={theme.layout.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: duration.section }}
      >
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-2">Work</p>
        <h2 className="text-3xl font-bold mb-16">Projects in production</h2>
      </motion.div>

      <motion.div
        className="grid gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {mainProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={staggerItemY}
            className={projectCardClassName(project)}
          >
            <ProjectCardBody project={project} />
          </motion.div>
        ))}
      </motion.div>

      <details className="group project-disclosure border-t border-border-subtle pt-8 mt-10">
        <summary className="cursor-pointer list-none select-none">
          <motion.span
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-fg-muted hover:text-fg transition-colors"
            initial={
              reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0.72, y: 10 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{
              duration: reduceMotion ? 0 : duration.item,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <span className="inline-flex shrink-0 text-accent transition-transform duration-200 group-open:rotate-180">
              <span className="project-disclosure-chevron-inner inline-flex">
                <ChevronDown size={18} className="block" aria-hidden />
              </span>
            </span>
            More projects
          </motion.span>
        </summary>
        <div className="grid gap-6 mt-6">
          {moreProjects.map((project) => (
            <div key={project.id} className={projectCardClassName(project)}>
              <ProjectCardBody project={project} />
            </div>
          ))}
        </div>
      </details>
    </section>
  )
}
