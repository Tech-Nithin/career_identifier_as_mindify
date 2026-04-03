import { motion } from 'framer-motion'
import './Testimonials.css'

const testimonials = [
  {
    text: '"I never thought online therapy could feel this personal. Julia helped me rebuild my confidence and take control of my life." – Sarah, 32',
  },
  {
    text: '"We were struggling with constant arguments. Now, we\'re finally communicating in a way that brings us closer." – Mark & Lisa, 40s',
  },
  {
    text: '"Losing my dad was the hardest thing I\'ve ever faced. These sessions gave me the tools and space I needed to heal." – Emily, 27',
  },
  {
    text: '"I was skeptical at first, but Julia\'s approach changed everything. I feel more in control of my emotions than ever." – David, 35',
  },
  {
    text: '"The sessions were flexible and perfectly tailored to my schedule. I cannot recommend Julia highly enough." – Ana, 29',
  },
]

function StarRating() {
  return (
    <div className="stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" width="12" height="12" fill="var(--color-brown-primary)">
          <path d="M12 1.5l2.7 8.3h8.7l-7 5.1 2.7 8.3-7.1-5.1-7 5.1 2.7-8.3-7-5.1h8.7z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ text }: { text: string }) {
  return (
    <div className="testimonial-card">
      <StarRating />
      <p className="testimonial-text">{text}</p>
    </div>
  )
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials, ...testimonials]

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.8
      }
    }
  }

  return (
    <section 
      id="testimonials" 
      className="testimonials-section"
      style={{
        position: 'relative',
        zIndex: 20, // Higher than sticky Services (5)
        backgroundColor: 'var(--color-bg)'
      }}
    >
      <div className="testimonials-wrapper">
        {/* Top */}
        <motion.div
           className="testimonials-top"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
           transition={{ staggerChildren: 0.2 }}
        >
          <motion.div className="badge" variants={itemVariants}>What Clients Say</motion.div>
          <motion.h2 className="testimonials-title" variants={itemVariants}>Real Stories, Real Impact</motion.h2>
        </motion.div>

        {/* Scrolling strip */}
        <div className="testimonials-track-outer">
          <div className="testimonials-track-inner">
            <motion.div
              className="testimonials-track"
              animate={{
                x: [0, -1035],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {doubled.map((t, i) => (
                <TestimonialCard key={i} text={t.text} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
