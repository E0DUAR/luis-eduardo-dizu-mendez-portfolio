import { useEffect } from 'react'
import { applyDocumentCssVars } from './apply-document-css-vars.js'
import { ThemeContext } from './theme-context.js'
import { theme } from './tokens'

/**
 * Provee el objeto `theme` a todo el árbol de React.
 * En mount, escribe variables CSS `--color-*` en el documento (shell global; ver `index.css`).
 * Hoy el tema es estático; si más adelante añades modo claro, fusionarías preferencias y
 * volverías a llamar `applyDocumentCssVars` con el tema resuelto.
 */
export function ThemeProvider({ children }) {
  useEffect(() => {
    applyDocumentCssVars(theme)
  }, [])

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  )
}
