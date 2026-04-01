import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react'
import { theme } from '../theme/tokens'

export default function Contact() {
  return (
    <section id="contact" className={theme.layout.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together</h2>
        <p className="text-fg-quiet text-lg max-w-xl mx-auto mb-12">
          I'm currently looking for a remote frontend developer role.
          If you have something in mind, let's talk.
        </p>
        <a
          href="mailto:dizu.eduardo@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-fg font-medium rounded-xl hover:bg-accent-hover transition-colors mb-16 text-lg"
        >
          <Mail size={20} />
          dizu.eduardo@gmail.com
        </a>

        <div className="flex justify-center gap-8 text-fg-faint">
          <a href="https://github.com/E0DUAR" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 hover:text-fg transition-colors text-sm">
            <Github size={16} /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/eduardo-dizu-mendez/" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 hover:text-fg transition-colors text-sm">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="https://e0duar.github.io/Portfolio/" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 hover:text-fg transition-colors text-sm">
            <ExternalLink size={16} /> Old portfolio
          </a>
        </div>

        <p className="text-fg-hint text-sm mt-20">
          Built with React + Tailwind + Framer Motion · {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  )
}