import { motion } from 'framer-motion'

const EXPERIENCES =[

  {
    id: 1,
    role: 'Data Science Intern',
    company: 'Sumago Infotech',
    companyLink: '#',
    period: 'Jan 2026',
    location: 'Remote',
    bullets: [
      'Preprocessed 5+ real-world datasets using Python, Pandas, and NumPy.',
      'Created 10+ data visualizations using Matplotlib and Seaborn to identify trends and insights.',
      'Trained and evaluated machine learning classification models with up to 80% prediction accuracy.',
    ],
    tech: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Machine Learning',
    ],
  },

]




const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

function ExperienceCard({ exp }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4 }}
      className="pl-8 md:pl-10 relative"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-4.5 w-3.5 h-3.5 rounded-full border-2 bg-white z-10"
        style={{ borderColor: '#7C8B6F' }}
      />

      {/* Card */}
      <div
        className="bg-white rounded-2xl p-6 sm:p-7"
        style={{
          border: '1px solid #E5E5E0',
          boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
          transition: 'box-shadow 0.25s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 20px 44px rgba(0,0,0,0.1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)'
        }}
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
          <h3
            className="text-base sm:text-lg font-bold leading-snug"
            style={{ color: '#111111' }}
          >
            {exp.role}
          </h3>
          <span
            className="font-mono text-xs sm:text-sm shrink-0"
            style={{ color: '#888888' }}
          >
            {exp.period}
          </span>
        </div>

        {/* Company */}
        <a
          href={exp.companyLink}
          className="inline-block text-sm font-semibold mb-4 hover:underline underline-offset-2"
          style={{ color: '#7C8B6F' }}
        >
          {exp.company}
        </a>

        {/* Bullets */}
        <ul className="space-y-2 mb-5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-2.5">
              <span
                className="mt-1.75 w-1 h-1 rounded-full shrink-0"
                style={{ backgroundColor: '#7C8B6F' }}
              />
              <span className="text-sm leading-[1.75]" style={{ color: '#555555' }}>
                {b}
              </span>
            </li>
          ))}
        </ul>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5">
          {exp.tech.map((t) => (
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
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6"
      style={{ backgroundColor: '#F4F4F0' }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <h2
            className="text-3xl lg:text-4xl font-extrabold"
            style={{ color: '#111111', letterSpacing: '-0.025em' }}
          >
            Experience
          </h2>
          <div
            className="mt-2.5 w-10 h-0.75 rounded-full"
            style={{ backgroundColor: '#7C8B6F' }}
          />
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical line — draws downward on scroll into view */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1.5 top-3 bottom-3 w-px"
            style={{ backgroundColor: '#D5D5CF', transformOrigin: 'top' }}
          />

          <div className="flex flex-col gap-8 sm:gap-10">
            {EXPERIENCES.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
