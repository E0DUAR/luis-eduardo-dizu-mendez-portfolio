# Design system — Portfolio

Documentación viva del UI de este proyecto: **tokens**, **layout** y **cómo se conectan Tailwind y React**. Los valores coinciden con `src/theme/tokens.js` (fuente única de verdad).

## Arquitectura (conceptos clave)

1. **`tokens.js`** define colores semánticos (`canvas`, `fg.muted`, `border.subtle`…) y tipografía. Los nombres describen **rol**, no el hex (así cambias un valor y no cientos de clases).
2. **`tailwind.config.js`** importa `tailwindThemeExtend` y registra esos colores como utilidades (`text-fg-muted`, `bg-canvas`, etc.).
3. **`ThemeProvider`** + **`useTheme()`** exponen el **mismo objeto** en React por si necesitas valores en JS (p. ej. animaciones, canvas, librerías que no usan clases). Al montar, **`ThemeProvider`** también llama a **`applyDocumentCssVars(theme)`**, que escribe en `document.documentElement` todas las variables `--color-*` derivadas de `theme.colors` (mismo mapa que usa Tailwind, p. ej. `fg.DEFAULT` → `--color-fg`).
4. **`index.css`** aplica `body` y scrollbar usando esas variables con **`var(--color-*, fallback)`**. El literal de fallback coincide con el token por defecto (primer pintado antes del efecto de React). Los componentes siguen usando utilidades Tailwind, no `var()` manual salvo casos excepcionales.

## Mockups (`src/mokups/`)

La carpeta **`src/mokups/`** está reservada para **mockups y experimentos**. Ahí vale la pena romper las reglas del design system a propósito: Tailwind sin tokens, rutas aisladas, etc. No forma parte del sitio publicado hasta integrarse en `components/` con tokens. Convención y detalles: [`src/mokups/README.md`](../src/mokups/README.md).

## Colores (mapa rápido)

| Token Tailwind | Uso típico |
|----------------|------------|
| `bg-canvas` | Fondo general de la app |
| `text-fg` | Texto principal (`#ffffff`, equivalente a `text-white` del layout original) |
| `text-fg-body` | Color base del `body` en el shell del documento (`#f5f5f5`; herencia antes del root) |
| `text-fg-secondary` | Secundario (≈ 70% blanco) |
| `text-fg-relaxed` | Lead / intro (≈ 60%) |
| `text-fg-muted` | Descripciones (≈ 50%) |
| `text-fg-quiet` | Texto terciario (≈ 40%) |
| `text-fg-faint` | Metadatos, iconos sociales en reposo (≈ 30%) |
| `text-fg-ghost` | Muy suave (≈ 20%) |
| `text-fg-hint` | Indicadores muy tenues (flecha scroll), footer legal (≈ 10%) |
| `bg-accent` / `text-accent` | Marca / CTAs |
| `hover:bg-accent-hover` | Hover de botones primarios |
| `border-border-subtle` | Bordes de tarjetas |
| `border-border-muted` | Línea de timeline, bordes de botón secundario |
| `border-border-strong` | Hover de bordes |
| `border-border-dim` | Bordes de puntos de timeline inactivos |
| `bg-surface-subtle` | Fondo de tarjeta neutra |
| `bg-surface-tag` | Chips de stack / tecnologías |

Los valores exactos están en `src/theme/tokens.js`.

### Shell global: tokens → variables CSS

`src/theme/apply-document-css-vars.js` aplana `theme.colors` con la misma convención que Tailwind v3 (`DEFAULT` no aparece en el nombre del token hijo). Ejemplos:

| Ruta en `theme.colors` | Variable CSS |
|--------------------------|--------------|
| `canvas` | `--color-canvas` |
| `fg.DEFAULT` | `--color-fg` |
| `fg.body` | `--color-fg-body` |
| `fg.muted` | `--color-fg-muted` |
| `accent.DEFAULT` | `--color-accent` |
| `accent.hover` | `--color-accent-hover` |
| `border.subtle` | `--color-border-subtle` |

El `body` y la scrollbar en `index.css` usan al menos `--color-canvas`, `--color-fg-body` y `--color-accent` (con fallbacks documentados en el propio CSS).

### Jerarquía visual (referencia mockup Hero)

- **Título:** línea principal `text-fg`; segunda línea / apellido más apagado `text-fg-ghost`.
- **Párrafo intro:** base `text-fg-muted` (~50% blanco); términos destacados `text-fg font-semibold` (no todo el párrafo a 60%).
- **Botón primario:** `bg-accent` + `text-fg`.
- **Botón secundario:** fondo mismo que el lienzo `bg-canvas` + `border-border-muted` (borde ~10% blanco, no blanco puro) + `text-fg-secondary`; hover sube contraste de borde (`border-border-strong`) y texto.
- **Iconos enlaces:** `text-fg-faint` (no blanco puro).
- **Bordes en general:** tarjetas `border-border-subtle`; bordes “visibles” en controles `border-border-muted` / `strong` en hover.

Este mismo mapa aplica al resto de secciones: mismos tokens, distinto layout.

## Tipografía

- **Familia:** Inter (carga en `index.html` desde Google Fonts), registrada como `font-sans`.
- **Escala:** utilidades de Tailwind (`text-sm`, `text-3xl`, `text-5xl` / `md:text-7xl`, etc.) sin escala numérica formal en tokens (portfolio pequeño).

## Layout

- **Secciones estándar** (Projects, Stack, Experience, Contact): `theme.layout.section` → `py-32 px-6 max-w-4xl mx-auto`.
- **Hero:** variante propia — `px-6 pt-20 max-w-4xl mx-auto` + `min-h-screen` (no usa `py-32`).

## React: `useTheme()`

```jsx
import { useTheme } from '../theme/useTheme'

function Ejemplo() {
  const theme = useTheme()
  // theme.colors.accent.DEFAULT, theme.layout.section, etc.
  return null
}
```

Úsalo cuando necesites el valor en **JavaScript**; para estilos normales preferí **clases Tailwind** (`text-fg-muted`) para que el build pueda purgar CSS no usado.

## Cómo añadir o cambiar un token

1. Edita **`src/theme/tokens.js`** (único lugar con el valor).
2. Si añades una clave nueva bajo `colors`, Tailwind generará automáticamente utilidades (`bg-mi-token` si añades `mi-token` en el objeto plano o anidado según la convención de Tailwind v3).
3. Sustituí en componentes las clases antiguas (`text-white/50`) por la semántica (`text-fg-muted`).
4. Actualiza esta tabla en **`docs/design-system.md`** si el cambio es relevante para el equipo o el yo futuro.

## Archivos relacionados

| Archivo | Rol |
|---------|-----|
| `src/theme/tokens.js` | Tokens + `tailwindThemeExtend` |
| `src/theme/theme-context.js` | `createContext` |
| `src/theme/ThemeProvider.jsx` | Provider + efecto que aplica `--color-*` al documento |
| `src/theme/apply-document-css-vars.js` | `getCssVarEntries` / `applyDocumentCssVars` |
| `src/theme/useTheme.js` | Hook |
| `tailwind.config.js` | `extend` desde tokens |
| `src/index.css` | Base `body` + scrollbar vía `var(--color-*, fallback)` |
| `src/main.jsx` | `<ThemeProvider>` envuelve `<App />` |

---

*Generado a partir del código actual; mantener alineado con `tokens.js` cuando evolucione el diseño.*
