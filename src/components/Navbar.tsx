// import { useState, useEffect } from 'react'
// import './Navbar.css'

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//       <div className="navbar-wrapper">
//         {/* Logo */}
//         <a href="#hero" className="navbar-logo">
//           <svg viewBox="0 0 24 24" width="24" height="24" fill="var(--color-brown)">
//             <path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"/>
//           </svg>
//           <span className="navbar-brand">Mindify</span>
//         </a>

//         {/* Desktop Nav */}
//         <nav className="navbar-nav desktop-only">
//           <ul className="navbar-menu">
//             <li><a href="#about">About Me</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#how">How It Works</a></li>
//             <li><a href="#testimonials">Testimonials</a></li>
//           </ul>
//           <a href="https://cal.com/" target="_blank" rel="noopener" className="btn-primary">
//             <span className="btn-icon">
//               <svg viewBox="0 0 576 512" width="8" height="8" fill="var(--color-brown-primary)">
//                 <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"/>
//               </svg>
//             </span>
//             Book A Session
//           </a>
//         </nav>

//         {/* Mobile Hamburger */}
//         <button
//           className={`hamburger mobile-only ${menuOpen ? 'open' : ''}`}
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//         >
//           <span className="bar bar1"></span>
//           <span className="bar bar2"></span>
//           <span className="bar bar3"></span>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="mobile-menu">
//           <ul>
//             <li><a href="#about" onClick={() => setMenuOpen(false)}>About Me</a></li>
//             <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
//             <li><a href="#how" onClick={() => setMenuOpen(false)}>How It Works</a></li>
//             <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
//           </ul>
//         </div>
//       )}
//     </header>
//   )
// }















import { useState } from 'react'
import { BrainIcon } from './Icons'
import BookBtn from './BookBtn'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNavClick = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`navbar${open ? ' navbar--open' : ''}`}>
      {/* Desktop / Tablet layout */}
      <div className="navbar__inner">
        {/* Logo */}
        <a
          href="#hero"
          className="navbar__logo"
          onClick={e => { e.preventDefault(); handleNavClick('hero') }}
        >
          <BrainIcon size={24} color="var(--color-brown)" />
          <span className="navbar__brand">Mindify</span>
        </a>

        {/* Desktop nav links */}
        <nav className="navbar__links navbar__links--desktop" aria-label="Main navigation">
          <ul>
            {[['about', 'About Me'], ['services', 'Services'], ['how', 'How It Works'], ['testimonials', 'Testimonials']].map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={e => { e.preventDefault(); handleNavClick(id) }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <BookBtn />
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger${open ? ' navbar__hamburger--active' : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="navbar__bar navbar__bar--1" />
          <span className="navbar__bar navbar__bar--2" />
          <span className="navbar__bar navbar__bar--3" />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`navbar__mobile-menu${open ? ' navbar__mobile-menu--open' : ''}`}>
        <ul>
          {[['about', 'About Me'], ['services', 'Services'], ['how', 'How It Works'], ['testimonials', 'Testimonials']].map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={e => { e.preventDefault(); handleNavClick(id) }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}