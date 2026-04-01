import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import MagneticAnchor from './ui/MagneticAnchor'
import CtaLink from './ui/CtaLink'
import TapIconLink from './ui/TapIconLink'
import { duration } from '../theme/motion'

export default function Hero() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 500], ['0%', '12%'])

  return (
    <section className="relative z-0 flex min-h-screen max-w-4xl flex-col justify-center px-6 pt-24 mx-auto md:pt-20">
      {!reduceMotion ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[18%] -z-10 h-[min(90vw,28rem)] w-[min(90vw,28rem)] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
          style={{ y: parallaxY }}
        />
      ) : null}

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: duration.hero, delay: 0.2 }}
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
          <MagneticAnchor className="inline-block">
            <CtaLink
              href="#projects"
              className="inline-block px-6 py-3 bg-accent text-fg text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors"
            >
              View projects
            </CtaLink>
          </MagneticAnchor>
          <MagneticAnchor className="inline-block">
            <CtaLink
              href="#contact"
              className="inline-block px-6 py-3 bg-canvas border border-border-muted text-fg-secondary text-sm font-medium rounded-lg hover:border-border-strong hover:text-fg transition-colors"
            >
              Get in touch
            </CtaLink>
          </MagneticAnchor>
        </div>

        <div className="flex gap-5">
          <TapIconLink
            href="https://github.com/E0DUAR"
            target="_blank"
            rel="noreferrer"
            className="text-fg-faint hover:text-fg transition-colors inline-flex"
          >
            <Github size={20} />
          </TapIconLink>
          <TapIconLink
            href="https://www.linkedin.com/in/eduardo-dizu-mendez/"
            target="_blank"
            rel="noreferrer"
            className="text-fg-faint hover:text-fg transition-colors inline-flex"
          >
            <Linkedin size={20} />
          </TapIconLink>
          <TapIconLink
            href="mailto:dizu.eduardo@gmail.com"
            className="text-fg-faint hover:text-fg transition-colors inline-flex"
          >
            <Mail size={20} />
          </TapIconLink>
          <TapIconLink
            href="https://wa.me/573005904287"
            target="_blank"
            rel="noreferrer"
            className="text-fg-faint hover:text-fg transition-colors inline-flex"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </TapIconLink>
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
