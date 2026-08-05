import { motion } from 'framer-motion'
import { Trophy, BadgeCheck, Cloud, Sparkles, FileText, ExternalLink } from 'lucide-react'

const ICONS = {
  trophy: Trophy,
  'badge-check': BadgeCheck,
  cloud: Cloud,
  sparkles: Sparkles,
  'file-text': FileText,
}

export default function AchievementCard({ item, index }) {
  const Icon = ICONS[item.icon] || Trophy
  const href = item.link || item.image
  const hasHref = Boolean(href)

  return (
    <motion.div
      className="achv-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      {/* Node */}
      <div className="achv-node">
        <Icon size={19} style={{ color: '#7C8B6F' }} aria-hidden="true" />
      </div>

      {/* Card */}
      <div
        className="achv-card bg-white rounded-2xl p-5 flex flex-col"
        style={{
          border: '1px solid #E5E5E0',
          boxShadow: '0 2px 14px rgba(0,0,0,0.05)',
          transition: 'box-shadow 0.25s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 20px 44px rgba(0,0,0,0.11)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 2px 14px rgba(0,0,0,0.05)'
        }}
      >
        <h3
          className="font-bold text-base leading-snug mb-1.5"
          style={{ color: '#111111' }}
        >
          {item.title}
        </h3>

        {item.badge && (
          <span
            className="inline-block self-start px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2"
            style={{ color: '#7C8B6F', backgroundColor: 'rgba(124,139,111,0.12)' }}
          >
            {item.badge}
          </span>
        )}

        {item.subtitle && (
          <p className="text-sm font-semibold mb-2" style={{ color: '#7C8B6F' }}>
            {item.subtitle}
          </p>
        )}

        <p className="text-sm leading-[1.7] mb-4" style={{ color: '#6B7280' }}>
          {item.description}
        </p>

        {hasHref && (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.buttonLabel}: ${item.title}`}
            whileHover={{ y: -2, boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold self-start mt-auto"
            style={{ color: '#FFFFFF', backgroundColor: '#111111' }}
          >
            {item.buttonLabel} <ExternalLink size={13} />
          </motion.a>
        )}
        {!hasHref && item.buttonLabel && (
          <button
            type="button"
            disabled
            aria-label={`${item.buttonLabel} unavailable — link coming soon`}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold self-start mt-auto"
            style={{
              color: '#9CA3AF',
              backgroundColor: '#F0F0EC',
              border: '1px solid #E5E5E0',
              cursor: 'not-allowed',
            }}
          >
            {item.buttonLabel} <ExternalLink size={13} />
          </button>
        )}
      </div>
    </motion.div>
  )
}
