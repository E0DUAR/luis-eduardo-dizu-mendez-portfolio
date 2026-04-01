/**
 * Enlace de nav con subrayado que crece en hover (token `accent`).
 */
export default function AnimatedNavLink({ href, children, className = '' }) {
  return (
    <a
      href={href}
      className={`group relative inline-block text-sm text-fg-muted transition-colors duration-200 hover:text-fg ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="absolute bottom-0 left-0 right-0 h-px origin-center scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
        aria-hidden
      />
    </a>
  )
}
