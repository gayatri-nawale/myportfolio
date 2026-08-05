import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const onOver = (e) => {
      setIsHovering(!!e.target.closest('a, button, [role="button"], [data-hover]'))
    }

    const onLeave = () => setIsVisible(false)
    const onEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [mouseX, mouseY, isVisible])

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] border-2 will-change-transform"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: isHovering ? 40 : 18,
        height: isHovering ? 40 : 18,
        backgroundColor: isHovering ? 'rgba(124, 139, 111, 0.15)' : 'transparent',
        borderColor: isHovering ? '#7C8B6F' : '#111111',
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    />
  )
}
