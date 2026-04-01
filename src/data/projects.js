import { normalizePortfolioProject } from './normalizePortfolioProject.js'

const rawMainProjects = [
  {
    id: 1,
    title: 'Copacol Cali — React E-commerce (Headless WordPress)',
    description:
      'Full e-commerce platform for a hardware distributor. React frontend consuming WordPress as a headless CMS via GraphQL. Currently live with real users and transactions.',
    stack: ['React', 'WordPress Headless', 'GraphQL', 'Vercel', 'Cursor'],
    url: 'https://copacolcali.com',
    repo: null,
    highlight: true,
    status: 'online',
  },
  {
    id: 2,
    title: 'JEP E-commerce — React + Headless WordPress',
    description:
      'E-commerce platform in progress using the same React + WordPress headless architecture, with improved component structure and clear architecture patterns.',
    stack: ['React', 'WordPress Headless', 'GraphQL', 'Vercel'],
    url: 'https://jep-ecommerce.vercel.app',
    repo: null,
    highlight: false,
    status: 'building',
  },
  {
    id: 3,
    title: 'Kommo MCP Connector (npm open-source package)',
    description:
      'Open-source MCP (Model Context Protocol) server for Kommo CRM. Published on npm with organic downloads from other developers. Built to automate CRM workflows via AI agents.',
    stack: ['Node.js', 'MCP Protocol', 'Kommo API', 'npm'],
    url: 'https://www.npmjs.com/~e0duar0',
    repo: 'https://github.com/E0DUAR/kommo-mcp',
    highlight: true,
    status: 'online',
  },
  {
    id: 4,
    title: 'B&M Sugar — Corporate Site Redesign',
    description:
      'Full redesign of B&M Sugar Products corporate website. Clean layout, optimized performance, and responsive design for an improved online presence.',
    stack: ['WordPress', 'Elementor', 'SEO', 'Responsive Design'],
    url: 'https://bandmsugar.com/newsite/',
    repo: null,
    highlight: false,
    status: 'online',
  },
]

const rawMoreProjects = [
  {
    id: 5,
    title: 'Randa Studio — Lead landing (coworking)',
    description:
      'Lead-capture landing for Randa Studio in Cali. Next.js 14 (App Router), TypeScript, CSS variables + Tailwind, lead API with Upstash Redis and optional Sheets webhook. Deployed on Vercel.',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind', 'Redis', 'Vercel'],
    url: 'https://dia-cortesia.randastudio.com/',
    repo: null,
    highlight: false,
    status: 'online',
  },
  {
    id: 6,
    title: 'Copacol — Order tracking (public landing)',
    description:
      'Public B2C shipment lookup for Copacol. Astro 5 SSR with React 19 islands, Tailwind 4, Motion, Supabase. Deployed on Vercel.',
    stack: ['Astro 5', 'React 19', 'Tailwind', 'Supabase', 'Vercel'],
    url: 'https://copacol-gu-as.vercel.app/',
    repo: null,
    highlight: false,
    status: 'building',
  },
  {
    id: 7,
    title: 'Vitccel — Corporate SPA (IT services)',
    description:
      'Corporate SPA for IT services in Colombia: React 19, Vite, Tailwind, MUI, React Router 7, blog and content via Sanity (GROQ), SEO with react-helmet-async.',
    stack: ['React 19', 'Vite', 'Tailwind', 'Sanity', 'React Router'],
    url: 'https://vitccel.com/',
    repo: null,
    highlight: false,
    status: 'online',
  },
]

export const mainProjects = rawMainProjects.map(normalizePortfolioProject)
export const moreProjects = rawMoreProjects.map(normalizePortfolioProject)
