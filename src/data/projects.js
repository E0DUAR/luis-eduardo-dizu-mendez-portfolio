import { normalizePortfolioProject } from './normalizePortfolioProject.js'

const rawMainProjects = [
  {
    id: 10,
    title: 'Parts Supply Inc — B2B E-commerce & AI-Search SEO',
    description:
      'B2B heavy-machinery parts platform, architected and built end-to-end. 1,415-SKU catalog powered by a typo-tolerant Postgres full-text search engine, plus an internal admin (CRUD + audit trail). Designed a 3-tier geo-SEO system (country → city × brand → equipment type) across 4 domains, with AEO optimization (llms.txt + FAQ schema) that surfaces the site inside AI search engines — not just Google.',
    stack: ['Next.js 16', 'React 19', 'Supabase', 'Postgres FTS', 'Geo-SEO', 'AEO / llms.txt', 'Vercel'],
    url: 'https://partssupply.net',
    repo: null,
    highlight: true,
    status: 'online',
  },
  {
    id: 1,
    title: 'Copacol Cali — React E-commerce (Headless WordPress)',
    description:
      'Full e-commerce platform for a hardware distributor. React frontend consuming WordPress as a headless CMS via GraphQL. Live with real users and transactions.',
    stack: ['React', 'WordPress Headless', 'GraphQL', 'Vercel'],
    url: 'https://copacolcali.com',
    repo: null,
    highlight: true,
    status: 'online',
  },
  {
    id: 4,
    title: 'B&M Sugar — Corporate Site & SEO',
    description:
      'Corporate site redesign with technical SEO owned end-to-end. Ranked branded queries in positions 1–3 and drove 322 clicks and 30,627 impressions in 3 months (Google Search Console), on a fast, responsive rebuild with structured data.',
    stack: ['WordPress', 'Technical SEO', 'Google Search Console', 'Structured Data'],
    url: 'https://bandmsugar.com/newsite/',
    repo: null,
    highlight: true,
    status: 'online',
  },
  {
    id: 0,
    title: 'Syncra Agent — WhatsApp AI Sales Agent',
    description:
      'Conversational AI agent for automated WhatsApp sales pipelines. Built for a real client to qualify leads from Meta Ads and advance them through a sales funnel autonomously. 3-step deterministic pipeline: Classify (LLM) → Brain (pure TypeScript logic) → Generate (LLM). State persisted per lead in Supabase with pgvector RAG. Comprehensive Vitest test suite, running on Claude Sonnet 4.',
    stack: ['Node.js', 'TypeScript', 'Claude Sonnet 4', 'Supabase', 'pgvector', 'BullMQ', 'Redis', 'Meta WhatsApp API', 'Kommo CRM'],
    url: null,
    repo: null,
    repoNote: 'Private repo — available on request',
    highlight: false,
    status: 'online',
  },
  {
    id: 11,
    title: 'Body & Health — Premium Cinematic Website',
    description:
      'Premium website for a functional-medicine clinic, built around a cinematic, scroll-driven experience: a scroll-scrubbed image-sequence hero (the Apple-style technique), smooth scrolling with Lenis, and choreographed GSAP motion. Conversion-focused funnel toward WhatsApp booking.',
    stack: ['Next.js 16', 'React 19', 'GSAP', 'Lenis', 'MDX', 'Tailwind 4'],
    url: 'https://body-health-opal.vercel.app/',
    repo: null,
    highlight: false,
    status: 'online',
  },
  {
    id: 3,
    title: 'Kommo MCP Connector (npm open-source package)',
    description:
      'Open-source MCP (Model Context Protocol) server for Kommo CRM — 66 tools for full CRM automation via AI agents. Published on npm (MIT) with organic downloads from other developers.',
    stack: ['Node.js', 'TypeScript', 'MCP Protocol', 'Kommo API', 'npm'],
    url: 'https://www.npmjs.com/~e0duar0',
    repo: 'https://github.com/E0DUAR/kommo-mcp',
    highlight: false,
    status: 'online',
  },
]

const rawMoreProjects = [
  {
    id: 6,
    title: 'Copacol — Quotes & Order Tracking App',
    description:
      'Full-stack internal app for a hardware distributor. Admin panel with cookie-based auth and 3 roles (admin/sales/viewer). Quotation engine with Zod-validated product catalog, line editor, real-time HTML preview, and PDF export. Public order tracking portal with visual timeline.',
    stack: ['Astro 5', 'React 19', 'Supabase', 'Zod', 'Tailwind', 'Vercel'],
    url: 'https://copacol-gu-as.vercel.app/',
    repo: null,
    highlight: false,
    status: 'online',
  },
  {
    id: 2,
    title: 'JEP E-commerce — React + Headless WordPress',
    description:
      'E-commerce platform using the same React + WordPress headless architecture, with improved component structure and clean architecture patterns.',
    stack: ['React', 'WordPress Headless', 'GraphQL', 'Vercel'],
    url: 'https://jep-ecommerce.vercel.app',
    repo: null,
    highlight: false,
    status: 'building',
  },
  {
    id: 9,
    title: 'Punto Shop — E-commerce (Odoo)',
    description:
      'E-commerce platform built on Odoo for a retail store. Product catalog, inventory management, payment gateway, and shipping rules.',
    stack: ['Odoo', 'E-commerce'],
    url: 'https://puntoshop.co',
    repo: null,
    highlight: false,
    status: 'building',
  },
  {
    id: 8,
    title: 'KAIROS — Insurance Consultants Corporate Site',
    description:
      'Corporate website for an insurance consulting firm. Clean Architecture + Atomic Design across domain, application, infrastructure, and presentation layers. Full SEO pipeline with structured data and a token-based design system.',
    stack: ['Next.js 16', 'TypeScript', 'Tailwind v4', 'Framer Motion', 'Vercel'],
    url: null,
    repo: null,
    repoNote: 'URL on request',
    highlight: false,
    status: 'building',
  },
  {
    id: 5,
    title: 'Randa Studio — Lead landing (coworking)',
    description:
      'Lead-capture landing for a coworking studio. Next.js App Router, lead API with Upstash Redis and optional Sheets webhook. Deployed on Vercel.',
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
      'Corporate SPA for IT services: React 19, Vite, Tailwind, MUI, React Router 7, blog and content via Sanity (GROQ), SEO with react-helmet-async.',
    stack: ['React 19', 'Vite', 'Tailwind', 'Sanity', 'React Router'],
    url: 'https://vitccel.com/',
    repo: null,
    highlight: false,
    status: 'online',
  },
]

export const mainProjects = rawMainProjects.map(normalizePortfolioProject)
export const moreProjects = rawMoreProjects.map(normalizePortfolioProject)
