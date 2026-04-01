// Sanity/CMS: mapear campo editorial `featured` → `highlight`; si falta → false; clases acento/neutral solo en Projects.jsx.

export function normalizePortfolioProject(project) {
  return {
    ...project,
    highlight: Boolean(project.highlight ?? project.featured ?? false),
    status: project.status ?? 'online',
  }
}
