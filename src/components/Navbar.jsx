import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Experience']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const scrollTo = (id) => {
    const hash = id.toLowerCase()
    setActive(id)
    setMenuOpen(false)

    if (location.pathname !== '/') {
      navigate(`/#${hash}`)
      return
    }

    const el = document.getElementById(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className="fixed top-4 left-1/2 z-50"
      style={{
        transform: 'translateX(-50%)',
        width: 'min(820px, calc(100vw - 32px))',
      }}
    >
      {/* Pill nav bar */}
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="flex items-center justify-between gap-3 bg-white/92 backdrop-blur-md rounded-full px-3 py-2 w-full"
        style={{
          boxShadow: scrolled
            ? '0 4px 28px rgba(0,0,0,0.13), 0 1px 4px rgba(0,0,0,0.06)'
            : '0 2px 14px rgba(0,0,0,0.07)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {/* Logo badge */}
        <button
          onClick={() => scrollTo('Home')}
          className="flex items-center justify-center w-9 h-9 rounded-full text-white text-xs font-bold tracking-wider shrink-0 hover:scale-105 transition-transform duration-200"
          style={{ backgroundColor: '#111111' }}
        >
          GN
        </button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="relative px-2.5 py-1.5 text-sm font-medium group whitespace-nowrap"
              style={{ color: '#111111' }}
            >
              <span className="relative z-10">{link}</span>
              <span
                className="absolute bottom-1 left-2.5 right-2.5 h-0.5 rounded-full transition-transform duration-200 origin-left"
                style={{
                  backgroundColor: '#7C8B6F',
                  transform: active === link ? 'scaleX(1)' : 'scaleX(0)',
                }}
              />
              {active !== link && (
                <span
                  className="absolute bottom-1 left-2.5 right-2.5 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"
                  style={{ backgroundColor: '#7C8B6F' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo('Contact')}
          className="hidden md:block shrink-0 px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
          style={{ backgroundColor: '#111111' }}
        >
          Let's Connect
        </button>

        {/* Mobile: right side — CTA + hamburger */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <button
            onClick={() => scrollTo('Contact')}
            className="px-3 py-1.5 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: '#111111' }}
          >
            Connect
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200 shrink-0"
            style={{ color: '#111111' }}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? 'x' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white/96 backdrop-blur-md rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          >
            <div className="p-3 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  className="text-left w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150"
                  style={{
                    color: active === link ? '#7C8B6F' : '#111111',
                    backgroundColor:
                      active === link ? 'rgba(124,139,111,0.09)' : 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    if (active !== link)
                      e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.04)'
                  }}
                  onMouseLeave={(e) => {
                    if (active !== link)
                      e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  {link}
                </button>
              ))}
              <div className="mt-2 pt-2" style={{ borderTop: '1px solid #E5E5E0' }}>
                <button
                  onClick={() => scrollTo('Contact')}
                  className="w-full py-3 rounded-xl text-sm font-semibold text-white text-center"
                  style={{ backgroundColor: '#111111' }}
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
