import { normalizePortfolioProject } from './normalizePortfolioProject.js'

const rawMainProjects = [
  {
    id: 0,
    title: 'Syncra Agent — WhatsApp AI Sales Agent',
    description:
      'Conversational AI agent for automated WhatsApp sales pipelines. Built for a real client to qualify leads from Meta Ads and advance them through a sales funnel autonomously. 3-step deterministic pipeline: Classify (LLM) → Brain (pure TypeScript logic) → Generate (LLM). State persisted per lead in Supabase with pgvector RAG. 79 Vitest tests. Currently migrating from GPT-4o to Claude Sonnet 4.',
    stack: ['Node.js', 'TypeScript', 'OpenAI GPT-4o', 'Claude Sonnet 4', 'Supabase', 'pgvector', 'BullMQ', 'Redis', 'Meta WhatsApp API', 'Kommo CRM', 'Railway'],
    url: null,
    repo: null,
    repoNote: 'Private repo — available on request',
    highlight: true,
    status: 'online',
  },
  {
    id: 1,
    title: 'Copacol Cali — React E-commerce (Headless WordPress)',
    description:
      'Full e-commerce platform for a hardware distributor. React frontend consuming WordPress as a headless CMS via GraphQL. Currently live with real users and transactions.',
    stack: ['React', 'WordPress Headless', 'GraphQL', 'Vercel', 'Cursor'],
    url: 'https://copacolcali.com',
    repo: null,
    highlight: false,
    status: 'online',
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
    id: 6,
    title: 'Copacol — Quotes & Order Tracking App',
    description:
      'Full-stack internal app for a hardware distributor. Admin panel with cookie-based auth and 3 roles (admin/sales/viewer). Quotation engine with Zod-validated product catalog, line editor, real-time HTML preview, and PDF export. Public order tracking portal with visual timeline. Complements Syncra Agent — the AI captures lead data via WhatsApp, this app is where the sales team builds and delivers formal quotes.',
    stack: ['Astro 5', 'React 19', 'Supabase', 'Zod', 'Tailwind', 'Vercel'],
    url: 'https://copacol-gu-as.vercel.app/',
    repo: null,
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
    id: 8,
    title: 'KAIROS — Insurance Consultants Corporate Site',
    description:
      'Corporate website for an insurance consulting firm in Cali. Clean Architecture + Atomic Design with domain, application, infrastructure, and presentation layers. Full SEO pipeline with structured data. Design system with custom tokens and motion presets.',
    stack: ['Next.js 16', 'TypeScript', 'Tailwind v4', 'Framer Motion', 'Vercel'],
    url: null,
    repo: null,
    repoNote: 'URL on request',
    highlight: false,
    status: 'building',
  },
  {
    id: 9,
    title: 'Punto Shop — E-commerce',
    description:
      'E-commerce platform built on Odoo for a retail store. Product catalog, inventory management, payment gateway, and shipping rules.',
    stack: ['Odoo', 'E-commerce'],
    url: 'https://puntoshop.co',
    repo: null,
    highlight: true,
    status: 'building',
  },
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
    id: 7,
    title: 'Vitccel — Corporate SPA (IT services)',
    description:
      'Corporate SPA for IT services in Colombia: React 19, Vite, Tailwind, MUI, React Router 7, blog and content via Sanity (GROQ), SEO with react-helmet-async.',
    stack: ['React 19', 'Vite', 'Tailwind', 'Sanity', 'React Router'],
    url: 'https://vitccel.com/',
    repo: null,
    highlight: true,
    status: 'online',
  },
]

export const mainProjects = rawMainProjects.map(normalizePortfolioProject)
export const moreProjects = rawMoreProjects.map(normalizePortfolioProject)
