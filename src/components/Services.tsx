import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'
import './Services.css'

const services = [
  {
    title: 'Individual Therapy',
    description:
      'Break free from anxiety, stress, and self-doubt with personalized guidance that helps you rebuild confidence and embrace your best self.',
    image: 'https://framerusercontent.com/images/inzBAEqYWkfkkwu4jjHe3cTQxic.jpg',
    alt: 'Individual Therapy',
  },
  {
    title: 'Couples Therapy',
    description:
      'Restore trust, deepen communication, and reignite your connection with tailored sessions designed to strengthen your partnership.',
    image: 'https://framerusercontent.com/images/H11U2dbWXHrKYYOEoiUkp5cJjw.jpg',
    alt: 'Couples Therapy',
  },
  {
    title: 'Grief Counselling',
    description:
      'Navigate the pain of loss with compassionate support that guides you toward healing, renewal, and hope in a pace that is comfortable to you.',
    image: 'https://framerusercontent.com/images/zD2hGYpaMcO9YyXpacJ7vDpc.jpg',
    alt: 'Grief Counselling',
  },
  {
    title: 'Work-Life Balance Coaching',
    description:
      'Regain control and harmony in your life with strategies that empower you to thrive at work and at home. Have more energy after work!',
    image: 'https://framerusercontent.com/images/Tp2swzyRghie4GgQUoRRoQzgjw.jpg',
    alt: 'Work-Life Balance Coaching',
  },
]

interface ServiceCardProps {
  title: string
  description: string
  image: string
  alt: string
}

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

function ServiceCard({ title, description, image, alt }: ServiceCardProps) {
  return (
    <motion.div
      className="service-card"
      variants={itemVariants}
      whileHover="hover"
    >
      <div className="service-card-image" style={{ overflow: 'hidden' }}>
        <div className="service-img-gradient" />
        <motion.img 
          src={image} 
          alt={alt} 
          className="service-img" 
          variants={{
            hover: { scale: 1.1, transition: { duration: 0.6, ease: "easeOut" } }
          }}
        />
      </div>
      <div className="service-card-text">
        <h3 className="service-title">{title}</h3>
        <p className="service-desc">{description}</p>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const isDesktop = useMediaQuery('(min-width: 992px)')
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Recession effect: Scale down as the next section covers us (Desktop only)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.9])

  return (
    <motion.section 
      id="services" 
      className={`services-section ${isDesktop ? 'sticky-stack' : ''}`}
      ref={containerRef}
      style={{ 
        scale: isDesktop ? scale : 1,
        opacity: isDesktop ? opacity : 1,
        zIndex: 5,
        position: isDesktop ? 'sticky' : 'static',
        top: isDesktop ? 0 : 'auto',
        backgroundColor: 'var(--color-bg)'
      }}
    >
      <div className="services-wrapper">
        <motion.div
           className="services-top"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
           transition={{ staggerChildren: 0.1 }}
        >
          <div className="services-text">
            <motion.div className="badge" variants={itemVariants}>my services</motion.div>
            <motion.h2 className="services-title" variants={itemVariants}>How I Can Help You Thrive</motion.h2>
          </div>
          <motion.a
            href="https://cal.com/"
            target="_blank"
            rel="noopener"
            className="btn-primary services-btn"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="btn-icon">
              <svg 
                viewBox="0 0 24 24" 
                width="12" 
                height="12" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </span>
            Book A Session
          </motion.a>
        </motion.div>

        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
