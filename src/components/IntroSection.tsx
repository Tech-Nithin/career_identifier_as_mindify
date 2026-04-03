import './IntroSection.css';

const SyncIcon = () => (
  <div className="intro-icon-circle">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 4v6h-6" />
      <path d="M1 20v-6h6" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  </div>
);

const ArrowIcon = () => (
  <div className="intro-icon-circle">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  </div>
);

const SmileyIcon = () => (
  <div className="intro-icon-circle">
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  </div>
);

export default function IntroSection() {
  return (
    <section className="intro-section" id="intro">
      <div className="intro-wrapper">
        <h2 className="intro-text">
          Embrace psychological support <SyncIcon /> to guide your life in the right <ArrowIcon /> direction, bringing peace of mind and emotional <SmileyIcon /> stability.
        </h2>
      </div>
    </section>
  );
}
