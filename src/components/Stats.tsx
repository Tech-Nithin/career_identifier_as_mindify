import { motion } from 'framer-motion'
import './Stats.css'

interface StatItem {
  value: string
  label: string
}

const stats: StatItem[] = [
  { value: '300+', label: 'people guided toward greater emotional balance.' },
  { value: '95%', label: 'clients notice difference within 6 sessions.' },
  { value: '5+', label: 'years experience in psychological support.' },
]

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    }
  }

  return (
    <section id="social-proof" className="stats-section">
      <div className="stats-wrapper">
        {/* Background image with opacity */}
        <div className="stats-bg">
          <img
            src="https://framerusercontent.com/images/v1V6rIzu0yMkuT7pfTN1tvQxy0g.jpg"
            alt="Background"
            className="stats-bg-img"
          />
          <div className="stats-bg-overlay"></div>
        </div>

        {/* Content */}
        <motion.div
          className="stats-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {stats.map((stat, i) => (
            <div key={stat.value} className="stat-col">
              <motion.div className="stat-item visible" variants={itemVariants}>
                <p className="stat-value">{stat.value}</p>
                <h5 className="stat-label">{stat.label}</h5>
              </motion.div>
              {i < stats.length - 1 && <div className="stat-divider" />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
