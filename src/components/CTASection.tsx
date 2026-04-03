import './CTASection.css'

export default function CTASection() {
  return (
    <section
      id="cta"
      className="cta-section"
      style={{
        position: 'relative',
        zIndex: 30, // Higher than Testimonials (20)
        backgroundColor: 'var(--color-bg)'
      }}
    >
      <div className="cta-wrapper">
        {/* Background image */}
        <div className="cta-bg">
          <img
            src="https://framerusercontent.com/images/riv0saRenoh2q2w0ywbPtY27w.jpg"
            alt="Background"
            className="cta-bg-img"
          />
          <div className="cta-bg-gradient" />
        </div>

        {/* Content box */}
        <div className="cta-content">
          <div className="badge">Your New Beginning</div>

          <div className="cta-text">
            <h2 className="cta-title">
              Take the First Step Toward<br />the Life You Deserve
            </h2>
            <p className="cta-desc">
              Over 300 individuals have reclaimed their confidence, rebuilt relationships, and found
              emotional peace. You can, too.
            </p>
          </div>

          <a
            href="https://cal.com/"
            target="_blank"
            rel="noopener"
            className="btn-primary"
          >
            <span className="btn-icon">
              <svg
                viewBox="0 0 24 24"
                width="12"
                height="12"
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
          </a>
        </div>
      </div>
    </section>
  )
}
