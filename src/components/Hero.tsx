import { motion } from 'framer-motion'
import BookBtn from './BookBtn'
import './Hero.css'

/**
 * Oscillatory Floating Animation Helper
 */
const floatTransition = (duration: number, delay: number) => ({
  x: {
    duration: duration,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut" as const,
    delay: delay
  },
  y: {
    duration: duration * 1.2,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut" as const,
    delay: delay
  }
})

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
        stiffness: 80, // Lowered for weight
        damping: 15,
        mass: 1.2, // Increased for inertia
        duration: 0.8
      }
    }
  }

  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
        mass: 1.2,
        delay: 0.5
      }
    }
  }

  return (
    <section className="hero" id="hero">
      <motion.div
        className="hero__wrapper"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* ===== LEFT COLUMN ===== */}
        <div className="hero__left">
          {/* Badge - "online therapy" */}
          <motion.div
            className="badge hero__badge"
            variants={badgeVariants}
          >
            online therapy
          </motion.div>

          {/* Heading group */}
          <div className="hero__text-group">
            <h1 className="hero__heading">
              <div style={{ overflow: 'hidden' }}>
                <motion.span variants={maskVariants} style={{ display: 'block' }}>
                  Find peace.
                </motion.span>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <motion.span variants={maskVariants} style={{ display: 'block' }}>
                  Find yourself.
                </motion.span>
              </div>
            </h1>

            <div style={{ overflow: 'hidden' }}>
              <motion.p className="hero__desc" variants={maskVariants}>
                Professional online therapy designed to help you rediscover balance and happiness - on your terms.
              </motion.p>
            </div>
          </div>

          {/* CTA button */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 1, duration: 0.8 } }
            }}
          >
            <BookBtn />
          </motion.div>
        </div>

        {/* ===== RIGHT COLUMN ===== */}
        <div className="hero__right">
          <motion.div
            className="hero__image-box"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          >
            <img
              src="https://framerusercontent.com/images/NhoVjdGDxnpgX07HiN5EoYC4NoY.png"
              alt="Hero Image"
              className="hero__img"
              loading="eager"
            />

            {/* Floating badges - Oscillatory non-synced motion */}
            <motion.div
              className="hero__float-badge hero__float--caring"
              animate={{
                x: [0, 8, -8, 0],
                y: [0, -12, 12, 0]
              }}
              transition={floatTransition(6, 0)}
            >
              Caring
            </motion.div>

            <motion.div
              className="hero__float-badge hero__float--confidential"
              animate={{
                x: [0, -6, 10, 0],
                y: [10, -10, 10, 10]
              }}
              transition={floatTransition(7.5, 0.5)}
            >
              Confidential
            </motion.div>

            <motion.div
              className="hero__float-badge hero__float--convenient"
              animate={{
                x: [0, 10, -10, 0],
                y: [-5, 5, -5, -5]
              }}
              transition={floatTransition(5.2, 1)}
            >
              Convenient
            </motion.div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}