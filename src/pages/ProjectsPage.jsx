import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Globe } from 'lucide-react'
import Navbar from '../components/Navbar'
import GithubIcon from '../components/GithubIcon'
import { PROJECTS } from '../data/projectsData'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

function ProjectCard({ project }) {
  // Fallback keeps a project without an explicit icon from crashing the page
  const Icon = project.icon ?? Globe
  const hasLinks = Boolean(project.github || project.live)

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border overflow-hidden flex flex-col self-start"
      style={{
        borderColor: '#E5E5E0',
        boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.11)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 14px rgba(0,0,0,0.05)'
      }}
    >
      {/* Category label row */}
      <div className="flex items-center gap-1.5 px-6 pt-5 pb-3">
        <Icon size={14} style={{ color: '#7C8B6F' }} />
        <span className="text-xs font-medium" style={{ color: '#888888' }}>
          {project.category}
        </span>
      </div>

      {/* Image area — falls back to the generated gradient when no image is set */}
      <div
        className="w-full"
        style={{
          aspectRatio: '16 / 10',
          // White behind real screenshots so the letterbox strip reads as part of
          // the card; the gradient only stands in when there's no image at all.
          background: project.image ? '#FFFFFF' : project.gradient,
        }}
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        )}
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title — real links live in the action row at the bottom of the card */}
        <h3 className="font-extrabold text-xl leading-snug mb-3" style={{ color: '#111111' }}>
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-[1.75] mb-5" style={{ color: '#6B7280' }}>
          {project.description}
        </p>

        {/* Tech chips */}
        <div className={`flex flex-wrap gap-1.5 ${hasLinks ? 'mb-5' : ''}`}>
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white border transition-colors duration-200"
              style={{ color: '#111111', borderColor: '#111111' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#7C8B6F'; e.currentTarget.style.color = '#7C8B6F' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#111111'; e.currentTarget.style.color = '#111111' }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Bottom row — action buttons, one per link the project actually has */}
        {hasLinks && (
        <div className="flex items-center gap-2.5 mt-auto pt-1">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center w-9 h-9 rounded-full border"
              style={{ borderColor: '#E5E5E0', color: '#374151' }}
            >
              <GithubIcon size={16} />
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live site`}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center w-9 h-9 rounded-full border"
              style={{ borderColor: '#E5E5E0', color: '#374151' }}
            >
              <ExternalLink size={15} />
            </motion.a>
          )}
        </div>
        )}
      </div>
    </motion.article>
  )
}

export default function ProjectsPage() {
  const navigate = useNavigate()

  const leftColumn = PROJECTS.filter((_, i) => i % 2 === 0)
  const rightColumn = PROJECTS.filter((_, i) => i % 2 === 1)

  const columnVariants = (delayChildren) => ({
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren } },
  })

  return (
    <>
      <Navbar />

      {/* Top-left back button */}
      <motion.button
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        onClick={() => navigate('/#projects')}
        whileHover={{ x: -2 }}
        className="fixed top-24 left-4 sm:left-6 z-40 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold bg-white"
        style={{ color: '#111111', boxShadow: '0 2px 14px rgba(0,0,0,0.08)' }}
      >
        <ArrowLeft size={15} /> Back
      </motion.button>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 text-center"
          >
            <h1
              className="text-4xl lg:text-5xl font-extrabold mb-3"
              style={{ color: '#111111', letterSpacing: '-0.025em' }}
            >
              My Projects
            </h1>
            <p className="text-sm lg:text-base" style={{ color: '#888888' }}>
              Everything I've built, shipped, and explored.
            </p>
            <div
              className="mt-4 mx-auto w-10 h-0.75 rounded-full"
              style={{ backgroundColor: '#7C8B6F' }}
            />
          </motion.div>

          {/* Mobile — single column, strictly sequential order, no column offset */}
          <motion.div
            variants={columnVariants(0.1)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 md:hidden"
          >
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          {/* Desktop/tablet — masonry-style: two independent columns so card
              heights vary naturally instead of being locked to a shared grid row */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <motion.div
              variants={columnVariants(0.15)}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              {leftColumn.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>

            <motion.div
              variants={columnVariants(0.25)}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6 md:mt-16 lg:mt-20"
            >
              {rightColumn.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </div>

          {/* Back to home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 flex justify-center"
          >
            <button
              onClick={() => navigate('/#projects')}
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-150"
              style={{ color: '#888888' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#111111' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#888888' }}
            >
              <ArrowLeft size={15} /> Back to Home
            </button>
          </motion.div>
        </div>
      </main>
    </>
  )
}
