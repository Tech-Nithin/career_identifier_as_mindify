import { motion } from 'framer-motion'
import './HowItWorks.css'

const steps = [
  {
    number: '1',
    title: 'Initial Contact',
    description:
      "Schedule a free 15-minute consultation to discuss your concerns and see if my approach is right for you. No pressure - just a conversation.",
  },
  {
    number: '2',
    title: 'Personalized Plan',
    description:
      "I'll create a customized plan that aligns with your goals, whether you're managing anxiety or improving your broken relationships.",
  },
  {
    number: '3',
    title: 'Online Sessions',
    description:
      "Join one-on-one sessions from anywhere, using secure video calls. We'll work together to overcome challenges and track your progress.",
  },
]

export default function HowItWorks() {
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
      id="how" 
      className="how-section overlay-trigger"
      style={{
        zIndex: 10,
        position: 'relative', // Relative so it can sit 'on top' of sticky Services
        backgroundColor: 'var(--color-bg)'
      }}
    >
      {/* Background */}
      <div className="how-bg">
        <img
          src="https://framerusercontent.com/images/v1V6rIzu0yMkuT7pfTN1tvQxy0g.jpg"
          alt="Background"
          className="how-bg-img"
        />
        <div className="how-bg-overlay"></div>
      </div>

      <div className="how-wrapper">
        <motion.div
           className="how-top"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.3 }}
           transition={{ staggerChildren: 0.2 }}
        >
          <motion.div className="badge" variants={itemVariants}>how it works</motion.div>
          <motion.h2 className="how-title" variants={itemVariants}>Simple, Convenient, Effective</motion.h2>
        </motion.div>

        <motion.div
          className="how-steps"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {steps.map((step, index) => (
            <div key={step.number} className="how-step-group">
              <motion.div className="step-card" variants={itemVariants}>
                <p className="step-number">{step.number}</p>
                <div className="step-text">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc">{step.description}</p>
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  className="step-arrow"
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } }
                  }}
                >
                  <svg viewBox="0 0 144 141" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--color-brown)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M129.189 0.0490494C128.744 0.119441 126.422 0.377545 124.03 0.635648C114.719 1.6446 109.23 2.4893 108.058 3.09936C107.119 3.56864 106.674 4.34295 106.674 5.44576C106.674 6.71281 107.424 7.51058 109.043 7.97986C110.403 8.37875 110.825 8.42567 118.87 9.52847C121.778 9.92736 124.288 10.3028 124.475 10.3732C124.663 10.4436 122.951 11.1006 120.676 11.8749C110.028 15.4414 100.412 20.7677 91.7339 27.9242C88.38 30.7164 81.6957 37.4271 79.2096 40.5009C73.8387 47.2116 69.6874 54.8139 66.5681 63.7302C65.9348 65.4665 65.3484 66.8978 65.2546 66.8978C65.1374 66.8978 63.7771 66.7336 62.2291 66.5693C52.9649 65.5134 43.1847 68.1649 34.1316 74.2186C24.7735 80.46 18.5349 87.7338 10.5371 101.742C2.53943 115.726 -1.0959 127.482 0.287874 135.014C0.89767 138.463 2.0469 140.035 3.97011 140.082C5.28352 140.105 5.37733 139.659 4.20465 139.049C3.05541 138.463 2.6567 137.9 2.32835 136.281C0.616228 128.021 6.24512 113.028 17.4325 96.1104C23.2725 87.241 28.362 81.9147 35.5622 77.1046C43.8649 71.5437 52.7069 69.033 61.1737 69.8308C64.9967 70.1828 64.6917 69.9247 64.1992 72.4822C62.2525 82.5013 63.8005 92.6378 67.9753 97.354C73.1116 103.079 81.9771 102 85.0027 95.2657C86.3395 92.2858 86.3864 87.7103 85.1434 83.9796C83.1498 78.0901 80.007 73.8197 75.4335 70.8163C73.8152 69.7604 70.4848 68.1883 69.875 68.1883C69.359 68.1883 69.4294 67.6487 70.2268 65.3257C72.3377 59.2486 75.457 52.7021 78.4122 48.244C83.2436 40.9232 91.4524 32.5701 99.1687 27.103C105.806 22.4102 113.241 18.5386 120.512 16.0045C123.772 14.8548 129.87 13.1889 130.081 13.3766C130.128 13.447 129.541 14.362 128.791 15.4414C124.78 21.0258 122.716 26.0706 122.388 30.998C122.224 33.7198 122.341 34.588 122.88 34.2595C122.998 34.1891 123.678 32.969 124.405 31.5611C126.281 27.8069 131.722 20.6738 139.579 11.6402C141.127 9.85697 142.652 7.86254 143.027 7.08823C144.552 4.03792 143.52 1.48035 140.377 0.471397C139.439 0.166366 138.102 0.0490408 134.584 0.0255769C132.074 -0.021351 129.635 0.00212153 129.189 0.0490494Z"
                      fill="currentColor"
                    />
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
