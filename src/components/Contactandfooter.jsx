import { motion, useReducedMotion } from 'framer-motion'
import { Mail } from 'lucide-react'
import GithubIcon from './GithubIcon'
import LinkedinIcon from './LinkedinIcon'

/* ------------------------------------------------------------------ */
/*  Design tokens — warm paper background, single sage accent          */
/* ------------------------------------------------------------------ */
const COLOR = {
  paper: '#FAFAF8',
  ink: '#111111',
  sub: '#8A8A82',
  line: '#E4E4DD',
  sage: '#6E7F5D',      // primary accent
  sageDeep: '#586848',  // hover / pressed
  sageTint: 'rgba(110,127,93,0.10)',
  sageTintStrong: 'rgba(110,127,93,0.16)',
}

const EASE = [0.16, 1, 0.3, 1]

/* ------------------------------------------------------------------ */
/*  Ambient background — replaces the flat repeating dot tile         */
/*  with a masked, slow-drifting grid + two soft light blooms          */
/* ------------------------------------------------------------------ */
function Atmosphere() {
  const reduce = useReducedMotion()

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* soft color blooms give the grid depth instead of flat repetition */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 520, height: 520, left: '8%', top: '-8%',
          background: 'radial-gradient(circle, rgba(110,127,93,0.16), transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={reduce ? {} : { y: [0, 24, 0], x: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 460, height: 460, right: '6%', bottom: '-10%',
          background: 'radial-gradient(circle, rgba(217,204,170,0.18), transparent 70%)',
          filter: 'blur(70px)',
        }}
        animate={reduce ? {} : { y: [0, -20, 0], x: [0, -14, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* dot grid — larger spacing, lower contrast, faded at the edges via mask
          so it reads as texture, not a visibly tiling wallpaper */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${COLOR.ink}1a 1px, transparent 1.4px)`,
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(ellipse 60% 55% at 50% 35%, black 0%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 55% at 50% 35%, black 0%, transparent 75%)',
          opacity: 0.55,
        }}
        animate={reduce ? {} : { backgroundPosition: ['0px 0px', '30px 30px'] }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Contact links — icon chip replaces the plain "Connect / Follow"    */
/*  wording so the button communicates the channel at a glance         */
/* ------------------------------------------------------------------ */
const CONTACT_LINKS = [
  {
    id: 'email',
    label: 'Email me',
    href: 'mailto:nawalegayatri12@outlook.com',
    icon: Mail,
    external: false,
  },
  {
    id: 'linkedin',
    label: 'Connect',
    href: 'https://www.linkedin.com/in/gayatri-nawale/',
    icon: LinkedinIcon,
    external: true,
  },
  {
    id: 'github',
    label: 'Follow',
    href: 'https://github.com/gayatri-nawale',
    icon: GithubIcon,
    external: true,
  },
]

function ContactButton({ label, href, icon: Icon, external }) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      whileHover="hover"
      initial="rest"
      whileTap={{ scale: 0.97 }}
      className="group relative flex items-center justify-center gap-3 rounded-full bg-white px-5 py-2 w-full sm:w-auto"
      style={{ border: `1px solid ${COLOR.line}` }}
    >
      <motion.span
        variants={{
          rest: { backgroundColor: COLOR.sageTint, color: COLOR.sageDeep, scale: 1 },
          hover: {
            backgroundColor: COLOR.ink,
            color: '#FFFFFF',
            scale: [1, 1.18, 1],
            transition: { duration: 0.4, times: [0, 0.5, 1], ease: EASE },
          },
        }}
        className="flex items-center justify-center w-9 h-9 rounded-full shrink-0"
      >
        <Icon size={16} strokeWidth={2.2} />
      </motion.span>

      <span className="text-[15px] font-semibold" style={{ color: COLOR.ink }}>
        {label}
      </span>
    </motion.a>
  )
}

/* ------------------------------------------------------------------ */
/*  Contact section                                                    */
/* ------------------------------------------------------------------ */
export function ContactSection() {
  return (
    <section
      className="relative isolate px-6 py-14 sm:py-16 overflow-hidden"
      style={{ backgroundColor: COLOR.paper }}
    >
      <Atmosphere />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-3"
        >
          <span style={{ color: COLOR.ink }}>Let's </span>
          <span style={{ color: COLOR.sage }}>Connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="text-[17px] leading-relaxed mb-6 max-w-md mx-auto"
          style={{ color: COLOR.sub }}
        >
          Open to opportunities, collaborations, and interesting conversations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          {CONTACT_LINKS.map((link) => (
            <ContactButton key={link.id} {...link} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
