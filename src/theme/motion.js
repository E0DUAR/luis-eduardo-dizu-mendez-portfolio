/**
 * Presets de animación compartidos (Framer Motion).
 * Duraciones y stagger alineados entre secciones; sin hex.
 */

export const duration = {
  section: 0.6,
  item: 0.5,
  hero: 0.7,
  nav: 0.5,
}

export const stagger = {
  /** Intervalo entre hijos en contenedores con staggerChildren */
  child: 0.08,
  /** Retardo antes del primer hijo */
  delayChildren: 0.05,
}

export const spring = {
  /** Hover / soltar magnet */
  soft: { type: 'spring', stiffness: 320, damping: 28 },
  /** Tap en CTAs */
  snappy: { type: 'spring', stiffness: 480, damping: 32 },
}

export const viewportOnce = {
  once: true,
  amount: 0.25,
}

/** Contenedor: solo orquesta stagger; el fade lo llevan los hijos */
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger.child,
      delayChildren: stagger.delayChildren,
    },
  },
}

/** Hijo estándar: fade + leve slide vertical */
export const staggerItemY = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.item, ease: [0.25, 0.1, 0.25, 1] },
  },
}

/** Hijo timeline: fade + entrada desde la izquierda */
export const staggerItemX = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.item, ease: [0.25, 0.1, 0.25, 1] },
  },
}

/** CTA: escala sutil hover/tap */
export const ctaHover = { scale: 1.02 }
export const ctaTap = { scale: 0.98 }
