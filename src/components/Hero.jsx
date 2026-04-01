import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
          Available for work
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          <span className="text-fg">Luis Eduardo</span>
          <br />
          <span className="text-fg-ghost">Dizu Mendez</span>
        </h1>
        <p className="text-xl md:text-2xl text-fg-muted max-w-2xl leading-relaxed mb-8">
          Frontend Developer building real products with{' '}
          <span className="text-fg font-semibold">React</span>,{' '}
          <span className="text-fg font-semibold">WordPress Headless</span> and{' '}
          <span className="text-fg font-semibold">AI-assisted development</span>.
          Bilingual EN/ES · Based in Colombia.
        </p>

        <div className="flex flex-wrap gap-4 mb-16">
          <a
            href="#projects"
            className="px-6 py-3 bg-accent text-fg text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-canvas border border-border-muted text-fg-secondary text-sm font-medium rounded-lg hover:border-border-strong hover:text-fg transition-colors"
          >
            Get in touch
          </a>
        </div>

        <div className="flex gap-5">
          <a
            href="https://github.com/E0DUAR"
            target="_blank"
            rel="noreferrer"
            className="text-fg-faint hover:text-fg transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-dizu-mendez/"
            target="_blank"
            rel="noreferrer"
            className="text-fg-faint hover:text-fg transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:dizu.eduardo@gmail.com"
            className="text-fg-faint hover:text-fg transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={16} className="text-fg-hint animate-bounce" />
      </motion.div>
    </section>
  )
}
