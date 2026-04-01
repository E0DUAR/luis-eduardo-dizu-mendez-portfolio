import { useContext } from 'react'
import { ThemeContext } from './theme-context.js'

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (ctx == null) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider')
  }
  return ctx
}
