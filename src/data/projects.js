import { normalizePortfolioProject } from './normalizePortfolioProject.js'

const rawProjects = [
    {
      id: 1,
      title: "Copacol Cali — React E-commerce (Headless WordPress)",
      description:
        "Full e-commerce platform for a hardware distributor. React frontend consuming WordPress as a headless CMS via GraphQL. Currently live with real users and transactions.",
      stack: ["React", "WordPress Headless", "GraphQL", "Vercel", "Cursor"],
      url: "https://copacolcali.com",
      repo: null,
      highlight: true,
    },
    {
      id: 2,
      title: "JEP E-commerce — React + Headless WordPress",
      description:
        "E-commerce platform in progress using the same React + WordPress headless architecture, with improved component structure and clear architecture patterns.",
      stack: ["React", "WordPress Headless", "GraphQL", "Vercel"],
      url: "https://jep-ecommerce.vercel.app",
      repo: null,
      highlight: false,
    },
    {
      id: 3,
      title: "Kommo MCP Connector (npm open-source package)",
      description:
        "Open-source MCP (Model Context Protocol) server for Kommo CRM. Published on npm with organic downloads from other developers. Built to automate CRM workflows via AI agents.",
      stack: ["Node.js", "MCP Protocol", "Kommo API", "npm"],
      url: "https://www.npmjs.com/~e0duar0",
      repo: "https://github.com/E0DUAR",
      highlight: true,
    },
    {
      id: 4,
      title: "B&M Sugar — Corporate Site Redesign",
      description:
        "Full redesign of B&M Sugar Products corporate website. Clean layout, optimized performance, and responsive design for an improved online presence.",
      stack: ["WordPress", "Elementor", "SEO", "Responsive Design"],
      url: "https://bandmsugar.com/newsite/",
      repo: null,
      highlight: false,
    },
  ]

export const projects = rawProjects.map(normalizePortfolioProject)