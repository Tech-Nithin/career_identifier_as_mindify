import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { LinkedInIcon, EnvelopeIcon, CertIcon } from './Icons'
import './About.css'

const CERTS = [
  'CBT Practitioner',
  'MSc Clinical Psychology',
  'SFBT Specialist',
  'GAOP Member',
  'ERT Certified',
]

/**
 * Mindify High-Fidelity Refactor
 * Resolves build error and implements masked 'grow' animations.
 */
export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const maskVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80, // Tuned for weight
        damping: 15,
        mass: 1.2 // Increased inertia
      }
    }
  }

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__wrapper">
        {/* ===== IMAGE COLUMN ===== */}
        <motion.div 
          className="about__image-col"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="badge about__badge--tablet">Meet Your Therapist</div>

          <div className="about__image-box">
            <img
              src="https://framerusercontent.com/images/1ja3veRJTjcUtFFQbWJJUPb9di0.jpg"
              alt="About Image"
              className="about__img"
              loading="lazy"
            />

            <div className="about__signature-bar">
              <p className="about__signature">Julia Johnson</p>
            </div>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener"
              className="about__social-btn about__social-btn--linkedin"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={16} color="var(--color-brown)" />
            </a>

            <a
              href="mailto:justyna.framer@gmail.com"
              target="_blank"
              rel="noopener"
              className="about__social-btn about__social-btn--mail"
              aria-label="Email"
            >
              <EnvelopeIcon size={16} color="var(--color-brown)" />
            </a>
          </div>
        </motion.div>

        {/* ===== TEXT COLUMN ===== */}
        <motion.div 
          className="about__content"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="badge about__badge--desktop">Meet Your Therapist</div>

          <div className="about__text-group">
            <div style={{ overflow: 'hidden' }}>
              <motion.h2 className="about__heading" variants={maskVariants}>
                A Trusted Partner for <br /> Your Emotional Wellbeing
              </motion.h2>
            </div>

            <div style={{ overflow: 'hidden' }}>
              <motion.p className="about__desc" variants={maskVariants}>
                Hi, I'm Julia. I believe everyone deserves a safe space to talk, heal, and grow. With over 5 years of experience as a licensed therapist, I've helped countless individuals and couples overcome challenges like anxiety, relationship struggles, and life transitions.
              </motion.p>
            </div>
          </div>

          <motion.div className="about__certs" variants={containerVariants}>
            {CERTS.map((cert) => (
              <motion.div 
                key={cert} 
                className="about__cert-pill" 
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 10 },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    transition: { 
                      type: "spring", 
                      stiffness: 100,
                      damping: 15,
                      mass: 1.2 
                    } 
                  }
                }}
              >
                <span className="about__cert-text">{cert}</span>
                <CertIcon size={12} color="var(--color-brown-btn)" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}