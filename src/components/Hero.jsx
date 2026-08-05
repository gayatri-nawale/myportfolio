import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Mail, ArrowRight, Download } from 'lucide-react'
import profile2 from "../assets/profile2.png";
function GithubIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.45 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
}

const SOCIAL = [
  { icon: GithubIcon,   href: 'https://github.com/gayatri-nawale',   label: 'GitHub'   },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/gayatri-nawale/', label: 'LinkedIn' },
  { icon: Mail,         href: 'mailto:nawalegayatri12@outlook.com', label: 'Email' },
]

function SocialIcon({ icon: Icon, href, label }) {
  return (
    <motion.a
      href={href}
      target={label !== 'Email' ? '_blank' : undefined}
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.18 }}
      className="group flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white transition-colors duration-200"
      style={{ borderColor: '#E5E5E0' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#7C8B6F'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#E5E5E0'
      }}
    >
      <Icon
        size={17}
        className="transition-colors duration-200"
        style={{ color: '#111111' }}
        onMouseEnter={(e) => { e.currentTarget.style.color = '#7C8B6F' }}
        onMouseLeave={(e) => { e.currentTarget.style.color = '#111111' }}
      />
    </motion.a>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{ paddingTop: '5.5rem', paddingBottom: '4rem' }}
    >
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Greeting */}
            <motion.p
              variants={item}
              className="text-sm tracking-widest uppercase mb-5"
              style={{ color: '#888888',fontSize: 'clamp(0.5rem, 3vw, 1.5rem)' }}
            >
              Hello! 👋
            </motion.p>

            {/* Name heading */}
            <motion.h1
              variants={item}
              className="font-bold leading-[1.1] mb-3"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#111111' }}
            >
               I'm Gayatri.
            </motion.h1>

            {/* Typewriter line */}
            <motion.div
              variants={item}
              className="font-bold leading-tight mb-8"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', color: '#7C8B6F', minHeight: '2.8rem' }}
            >
              <TypeAnimation
                sequence={[
                  'Building Modern Web Experiences.', 2200,
                  'Java Developer.', 2000,
                  'React Developer.', 2000,
                  'Power Platform Enthusiast.', 2200,
                  'AI-Powered Applications', 2000,
                ]}
                speed={55}
                deletionSpeed={75}
                repeat={Infinity}
                wrapper="span"
                cursor={true}
              />
            </motion.div>

            {/* Social icons */}
            <motion.div variants={item} className="flex items-center gap-3 mb-8">
              {SOCIAL.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(0,0,0,0.18)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: '#111111' }}
              >
                View Projects
                <ArrowRight size={15} />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(0,0,0,0.09)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 bg-white"
                style={{ color: '#111111', borderColor: '#111111' }}
              >
                Download Resume
                <Download size={15} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="relative flex items-center justify-center"
          >
            {/* Watermark — clipped to column bounds */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none select-none flex items-center justify-center z-0">
              <span
                className="font-black whitespace-nowrap leading-none"
                style={{
                  fontSize: 'clamp(4.5rem, 11vw, 9rem)',
                  color: '#E5E5E0',
                  opacity: 0.5,
                  letterSpacing: '-0.04em',
                }}
              >
                Gayatri
              </span>
            </div>

            {/* Floating image */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative z-10"
            >
              <div
                className="overflow-hidden "
                style={{
                  width: 'clamp(300px, 40vw, 460px)',
                  aspectRatio: '3 / 4',
                  maxHeight: '500px',
                  
                }}
              >
                <img
                  src={profile2}
                  alt="Gayatri Nawale"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Decoration offset ring */}
              <div
              
                
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2" style={{ transform: 'translateX(-50%)' }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: '#888888' }}
        >
          Scroll
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="relative overflow-hidden"
          style={{ width: '1px', height: '40px' }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: '#888888' }}
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.3, repeat: Infinity, ease: 'linear', repeatDelay: 0.4 }}
          />
        </motion.div>
      </div>
    </section>
  )
}
