import { motion } from 'framer-motion'
import AchievementCard from './AchievementCard'
import { ACHIEVEMENTS } from '../data/achievements'
import './AchievementTimeline.css'

export default function AchievementTimeline() {
  return (
    <section
      id="achievements"
      className="py-24 px-6"
      style={{ backgroundColor: '#F4F4F0' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2
            className="text-3xl lg:text-4xl font-extrabold mb-3"
            style={{ color: '#111111', letterSpacing: '-0.025em' }}
          >
            Achievements & Certifications
          </h2>
          <p className="text-sm max-w-xl mx-auto" style={{ color: '#888888' }}>
            Recognition, certifications, and research that showcase my technical expertise and achievements.
          </p>
          <div
            className="mt-4 mx-auto w-10 h-0.75 rounded-full"
            style={{ backgroundColor: '#7C8B6F' }}
          />
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="achv-track"
        >
          <div className="achv-track-line" aria-hidden="true" />
          {ACHIEVEMENTS.map((item, i) => (
            <AchievementCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
