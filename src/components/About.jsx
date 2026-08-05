import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const BADGE_STYLE = {
  backgroundColor: 'rgba(124, 139, 111, 0.12)',
  color: '#4d5e42',
  border: '1px solid rgba(124, 139, 111, 0.28)',
}

const HIGHLIGHT = 'font-semibold underline underline-offset-2 decoration-[#111111]'

const paraVariant = (delay) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1], delay },
})

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6"
      style={{ backgroundColor: '#FAFAF8' }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Mobile badge (normal flow, above card) */}
        <div className="sm:hidden flex justify-end mb-3">
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide"
            style={BADGE_STYLE}
          >
            About Me
          </span>
        </div>

        {/* Card + badge wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 52 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-5"
        >
          {/* Desktop "About Me" tab badge — peeking above card */}
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1], delay: 0.28 }}
            className="absolute -top-4 right-8 z-10 hidden sm:inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide"
            style={BADGE_STYLE}
          >
            About Me
          </motion.span>

          {/* White card */}
          <div
            className="relative bg-white rounded-2xl px-8 sm:px-12 lg:px-16 py-12 lg:py-14"
            style={{
              boxShadow:
                '0 4px 40px rgba(0,0,0,0.06), 0 1px 6px rgba(0,0,0,0.04)',
            }}
          >
            {/* Right accent bar — desktop only */}
            <div
              className="absolute right-0 top-10 bottom-10 w-[3px] rounded-full hidden lg:block"
              style={{ backgroundColor: '#7C8B6F' }}
            />

            {/* Heading */}
            <h2
              className="text-3xl lg:text-4xl font-extrabold mb-8 leading-tight"
              style={{ color: '#111111', letterSpacing: '-0.025em' }}
            >
              Who am I?
            </h2>

            {/* Paragraph content */}
            <div
              className="space-y-5 text-[15px] lg:text-base leading-[1.85]"
              style={{ color: '#374151' }}
            >
              <motion.p {...paraVariant(0.18)}>
                Hi, I'm Gayatri Nawale! I'm a Computer Engineering student with a passion
                for technology and problem-solving.
              </motion.p>

              <motion.p {...paraVariant(0.3)}>
                I primarily work as a{' '}
                <span className={HIGHLIGHT}>Java Developer and React Developer</span>.
                Over the past few years I've explored AI, Data Analytics,{' '}
                <span className={HIGHLIGHT}>Microsoft Power Platform</span>{' '}
                (Power Apps, Power Automate, SharePoint), and{' '}
                <span className={HIGHLIGHT}>Copilot-driven automation</span> —
                getting hands-on with building real, practical solutions rather than
                just theory.
              </motion.p>

              <motion.p {...paraVariant(0.42)}>
                I enjoy creating projects that solve actual problems, learning new tools
                quickly, and turning ideas into working applications.
              </motion.p>
            </div>

            
          </div>
        </motion.div>
      </div>
    </section>
  )
}
