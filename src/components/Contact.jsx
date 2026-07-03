import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react'
import { theme } from '../theme/tokens'
import { duration, viewportOnce } from '../theme/motion'
import MagneticAnchor from './ui/MagneticAnchor'
import CtaLink from './ui/CtaLink'
import TapIconLink from './ui/TapIconLink'

export default function Contact() {
  return (
    <section id="contact" className={theme.layout.section}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: duration.section }}
        className="text-center"
      >
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together</h2>
        <p className="text-fg-quiet text-lg max-w-xl mx-auto mb-12">
          I'm currently open to a remote e-commerce and website specialist role —
          building, optimizing, and growing digital storefronts. If that's what you need, let's talk.
        </p>
        <div className="mb-16 flex flex-wrap justify-center items-center gap-4">
          <MagneticAnchor className="inline-block">
            <CtaLink
              href="mailto:dizu.eduardo@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-fg font-medium rounded-xl hover:bg-accent-hover transition-colors text-lg"
            >
              <Mail size={20} />
              dizu.eduardo@gmail.com
            </CtaLink>
          </MagneticAnchor>
          <MagneticAnchor className="inline-block">
            <CtaLink
              href="https://wa.me/573005904287"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-canvas border border-border-muted text-fg-secondary font-medium rounded-xl hover:border-border-strong hover:text-fg transition-colors text-lg"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} aria-hidden />
              WhatsApp
            </CtaLink>
          </MagneticAnchor>
        </div>

        <div className="flex justify-center gap-8 text-fg-faint">
          <TapIconLink
            href="https://github.com/E0DUAR"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-fg transition-colors text-sm"
          >
            <Github size={16} /> GitHub
          </TapIconLink>
          <TapIconLink
            href="https://www.linkedin.com/in/eduardo-dizu-mendez/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-fg transition-colors text-sm"
          >
            <Linkedin size={16} /> LinkedIn
          </TapIconLink>
        </div>

        <p className="text-fg-hint text-sm mt-20">
          Eduardo&apos;s Portfolio · {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  )
}
