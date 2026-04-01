/**
 * Design tokens — única fuente de verdad para:
 * - tailwind.config.js → theme.extend
 * - React → useTheme() (mismo objeto)
 *
 * Semántica: nombres describen rol (fg.muted = texto secundario), no el valor crudo.
 */
export const theme = {
  colors: {
    canvas: '#0a0a0a',
    fg: {
      /**
       * Títulos / palabras clave / CTA principal: blanco puro (`text-fg`, equiv. `text-white` del layout original).
       */
      DEFAULT: '#ffffff',
      /** Color base del `body` en el shell del documento (antes del root de React / herencia global). */
      body: '#f5f5f5',
      secondary: 'rgba(255, 255, 255, 0.7)',
      /** Lead un poco más claro que muted (p. ej. subtítulos); Hero intro usa `muted` + spans bold */
      relaxed: 'rgba(255, 255, 255, 0.6)',
      /** Cuerpo de párrafo “normal” en bloques intro (como la foto: texto base ~50% blanco) */
      muted: 'rgba(255, 255, 255, 0.5)',
      quiet: 'rgba(255, 255, 255, 0.4)',
      faint: 'rgba(255, 255, 255, 0.3)',
      ghost: 'rgba(255, 255, 255, 0.2)',
      hint: 'rgba(255, 255, 255, 0.1)',
    },
    accent: {
      /** Ámbar (Tailwind amber-500): más amarillo / menos rojizo que orange-500 en fondo oscuro. */
      DEFAULT: '#f59e0b',
      /** amber-400 — hover más claro que DEFAULT. */
      hover: '#fbbf24',
    },
    border: {
      /** Tarjetas, divisores suaves */
      subtle: 'rgba(255, 255, 255, 0.05)',
      /** Botón secundario, bordes “visibles pero no blanco puro” (~10% en mockup) */
      muted: 'rgba(255, 255, 255, 0.1)',
      strong: 'rgba(255, 255, 255, 0.15)',
      dim: 'rgba(255, 255, 255, 0.2)',
    },
    surface: {
      subtle: 'rgba(255, 255, 255, 0.02)',
      tag: 'rgba(255, 255, 255, 0.05)',
    },
  },
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
  },
  /** Clases repetidas — ver design-system.md (Hero usa variante con pt-20 y min-h-screen) */
  layout: {
    section: 'py-32 px-6 max-w-4xl mx-auto',
  },
}

/** Lo que Tailwind extiende desde este archivo (evita duplicar hex en dos sitios) */
export const tailwindThemeExtend = {
  colors: theme.colors,
  fontFamily: theme.fontFamily,
}
