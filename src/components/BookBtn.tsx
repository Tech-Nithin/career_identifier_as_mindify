import { motion } from 'framer-motion'

export default function BookBtn() {
  return (
    <motion.a
      href="https://cal.com/"
      target="_blank"
      rel="noopener"
      className="btn-primary"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '14px 32px',
        background: 'var(--color-brown-primary)',
        color: 'var(--color-white)',
        borderRadius: '160px',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: 500,
        boxShadow: 'var(--shadow-card)',
        cursor: 'pointer'
      }}
    >
      <span className="btn-icon">
        <svg 
          viewBox="0 0 24 24" 
          width="16" 
          height="16" 
          fill="none" 
          stroke="var(--color-brown-primary)" 
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
  )
}
