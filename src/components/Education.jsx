import { motion } from 'framer-motion'

const EDUCATION = [
   {
    id: 1,
    degree: 'Bachelor of Engineering in Computer Engineering',
    institution: 'Amrutvahini College of Engineering (AVCOE)',
    period: 'Aug 2023 – May 2027',
    bullets: [
      'Current CGPA: 9.63 / 10.',
      'Coursework includes Data Structures, Java, Database Management Systems, Operating Systems, and Software Engineering.',
      'Active participant in hackathons, research, and open-source development.',
    ],
  },
  {
    id: 2,
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Dr. Devendra Amrutlal Ohara Junior College, Sangamner',
    period: 'Aug 2022 – Feb 2023',
    bullets: [
      'Science Stream',
      'Percentage: 88%',
    ],
  },
  {
    id: 3,
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Dr. Bhanudas G. Dere English Medium School, Sangamner',
    period: 'Jun 2020 – Feb 2021',
    bullets: [
      'Percentage: 100%',
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6"
      style={{ backgroundColor: '#FAFAF8' }}
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
            Education
          </h2>
          <div
            className="mt-2.5 w-10 h-0.75 rounded-full"
            style={{ backgroundColor: '#7C8B6F' }}
          />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8 sm:gap-10"
        >
          {EDUCATION.map((edu) => (
            <motion.div
              key={edu.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
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
                  {edu.degree}
                </h3>
                <span
                  className="font-mono text-xs sm:text-sm shrink-0"
                  style={{ color: '#888888' }}
                >
                  {edu.period}
                </span>
              </div>

              {/* Institution */}
              <p className="text-sm font-semibold mb-4" style={{ color: '#7C8B6F' }}>
                {edu.institution}
              </p>

              {/* Bullets */}
              <ul className="space-y-2">
                {edu.bullets.map((b, i) => (
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
