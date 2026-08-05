import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ExternalLink, ArrowRight } from 'lucide-react'
import GithubIcon from './GithubIcon'
import { PROJECTS } from '../data/projectsData'

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.1 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl border overflow-hidden flex flex-col"
      style={{
        borderColor: '#E5E5E0',
        boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.11)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 14px rgba(0,0,0,0.05)'
      }}
    >
      {/* Image area — falls back to the generated gradient when no image is set */}
      <div
        className="w-full"
        style={{
          aspectRatio: '16 / 9',
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
        {/* Title + link icons */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3
            className="font-bold text-lg leading-snug"
            style={{ color: '#111111' }}
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-2 pt-0.5 shrink-0">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub`}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.15 }}
                style={{ color: '#888888' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#111111' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#888888' }}
              >
                <GithubIcon size={18} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live site`}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.15 }}
                style={{ color: '#888888' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#111111' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#111111' }}
              >
                <ExternalLink size={17} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-[1.75] flex-1 mb-4"
          style={{ color: '#6B7280' }}
        >
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-full text-xs font-medium border"
              style={{ color: '#374151', borderColor: '#E5E5E0', backgroundColor: '#FAFAF8' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const navigate = useNavigate()

  return (
    <section
      id="projects"
      className="py-24 px-6"
      style={{ backgroundColor: '#FAFAF8' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2
            className="text-3xl lg:text-4xl font-extrabold mb-3"
            style={{ color: '#111111', letterSpacing: '-0.025em' }}
          >
            My Projects
          </h2>
          <p className="text-sm" style={{ color: '#888888' }}>
            A selection of projects I've built and shipped.
          </p>
          <div
            className="mt-4 mx-auto w-10 h-0.75 rounded-full"
            style={{ backgroundColor: '#7C8B6F' }}
          />
        </motion.div>

        {/* Preview grid — first 4 projects only */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.slice(0, 4).map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 flex justify-center"
        >
          <motion.button
            onClick={() => navigate('/projects')}
            whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border-2 bg-white"
            style={{ color: '#111111', borderColor: '#111111' }}
          >
            View All Projects <ArrowRight size={15} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
