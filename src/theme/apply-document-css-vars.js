/**
 * Aplana `theme.colors` a variables CSS `--color-*`, alineado con nombres Tailwind v3:
 * `fg.DEFAULT` → `--color-fg`, `fg.body` → `--color-fg-body`, `accent.DEFAULT` → `--color-accent`.
 */
function collectColorCssVars(colors, pathSegments, out) {
  for (const [key, value] of Object.entries(colors)) {
    if (typeof value === 'string') {
      const suffix =
        key === 'DEFAULT'
          ? pathSegments.join('-')
          : [...pathSegments, key].join('-')
      out.push([`--color-${suffix}`, value])
    } else if (value && typeof value === 'object') {
      collectColorCssVars(value, [...pathSegments, key], out)
    }
  }
  return out
}

/**
 * @param {{ colors: Record<string, unknown> }} themeLike - mismo shape que `theme` de tokens.js
 * @returns {Array<[string, string]>} pares [nombre CSS, valor resuelto]
 */
export function getCssVarEntries(themeLike) {
  const out = []
  collectColorCssVars(themeLike.colors, [], out)
  return out
}

/**
 * Escribe variables en `:root` (document.documentElement) desde tokens.
 * @param {{ colors: Record<string, unknown> }} themeLike
 */
export function applyDocumentCssVars(themeLike) {
  const root = document.documentElement
  for (const [name, val] of getCssVarEntries(themeLike)) {
    root.style.setProperty(name, val)
  }
}
