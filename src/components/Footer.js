import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container container">

        {/* ── Top Row: Logo | Nav | CTA ── */}
        <div className="footer-top">

          <Link to="/" className="footer-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
                <circle cx="25" cy="25" r="4" fill="#7C6FCD" />
                <circle cx="10" cy="15" r="3" fill="#9B8FE0" />
                <circle cx="40" cy="15" r="3" fill="#9B8FE0" />
                <circle cx="10" cy="35" r="3" fill="#9B8FE0" />
                <circle cx="40" cy="35" r="3" fill="#9B8FE0" />
                <circle cx="25" cy="8" r="2.5" fill="#B5ABEC" />
                <circle cx="25" cy="42" r="2.5" fill="#B5ABEC" />
                <line x1="25" y1="25" x2="10" y2="15" stroke="#7C6FCD" strokeWidth="1.5" />
                <line x1="25" y1="25" x2="40" y2="15" stroke="#7C6FCD" strokeWidth="1.5" />
                <line x1="25" y1="25" x2="10" y2="35" stroke="#7C6FCD" strokeWidth="1.5" />
                <line x1="25" y1="25" x2="40" y2="35" stroke="#7C6FCD" strokeWidth="1.5" />
                <line x1="25" y1="25" x2="25" y2="8" stroke="#9B8FE0" strokeWidth="1.5" />
                <line x1="25" y1="25" x2="25" y2="42" stroke="#9B8FE0" strokeWidth="1.5" />
                <line x1="10" y1="15" x2="25" y2="8" stroke="#B5ABEC" strokeWidth="1" />
                <line x1="40" y1="15" x2="25" y2="8" stroke="#B5ABEC" strokeWidth="1" />
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-name">Dr. Pavan Pai</span>
              <span className="logo-subtitle">Neurologist and Neurosurgeon</span>
            </div>
          </Link>

          <nav className="footer-nav">
            <Link to="/about">About</Link>
            <Link to="/specialties">Specialities</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/blogs">Blogs</Link>
          </nav>

          <div className="btn-wrap">
            <Link to="/contact" className="btn">Consult Now</Link>
          </div>
        </div>

        {/* ── Bottom Row: Timings | Address | Contact ── */}
        <div className="footer-bottom">

          {/* Col 1: Timings */}
          <div className="footer-col footer-timings">
            <h4>Timings</h4>
            <p>Weekdays: <span className="highlight">Timings</span></p>
            <p>Saturday, Sunday: <span className="highlight">Timings</span></p>
          </div>

          {/* Col 2: Address + Social */}
          <div className="footer-col footer-address">
            <h4>Address</h4>
            <p>Wockhardt Hospitals, Mira Road<br />East, Maharashtra 401107</p>

            <div className="social-icons">
              {/* Facebook */}
              <a href="#" title="Facebook">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#fb)">
                    <path
                      d="M17.7187 9C17.7188 4.18359 13.8164 0.28125 9 0.28125C4.18359 0.28125 0.28125 4.18359 0.28125 9C0.28125 13.3516 3.46957 16.9587 7.6377 17.6133L7.6377 11.5204H5.42285L5.42285 9H7.6377V7.07906C7.6377 4.8941 8.93848 3.68719 10.9308 3.68719C11.8849 3.68719 12.8827 3.85734 12.8827 3.85734L12.8827 6.00187H11.783C10.7002 6.00187 10.3623 6.67406 10.3623 7.36348V9L12.7804 9L12.3936 11.5204L10.3623 11.5204V17.6133C14.5304 16.9587 17.7187 13.3516 17.7187 9Z"
                      fill="#5a5a8a"
                    />
                  </g>
                  <defs>
                    <clipPath id="fb">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="#5a5a8a"
                  />
                </svg>
              </a>

              {/* Twitter/X */}
              <a href="#" title="X / Twitter">
                <svg width="16" height="16" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33311 5.93367L13.5458 0H12.3114L7.78322 5.15122L4.16889 0H0L5.46622 7.79022L0 14.0117H1.23511L6.01378 8.57111L9.83111 14.0117H14M1.68078 0.911556H3.57778L12.3099 13.1444H10.4129"
                    fill="#5a5a8a"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.75 1.125L2.24648 1.125C1.62773 1.125 1.125 1.63477 1.125 2.26055L1.125 15.7395C1.125 16.3652 1.62773 16.875 2.24648 16.875L15.75 16.875C16.3687 16.875 16.875 16.3652 16.875 15.7395L16.875 2.26055C16.875 1.63477 16.3687 1.125 15.75 1.125ZM5.88516 14.625L3.55078 14.625L3.55078 7.10859H5.88867L5.88867 14.625H5.88516ZM4.71797 6.08203C3.96914 6.08203 3.36445 5.47383 3.36445 4.72852C3.36445 3.9832 3.96914 3.375 4.71797 3.375C5.46328 3.375 6.07148 3.9832 6.07148 4.72852C6.07148 5.47734 5.4668 6.08203 4.71797 6.08203ZM14.6355 14.625H12.3012L12.3012 10.9688C12.3012 10.0969 12.2836 8.97539 11.0883 8.97539C9.87187 8.97539 9.68555 9.92461 9.68555 10.9055L9.68555 14.625H7.35117L7.35117 7.10859H9.59062V8.13516H9.62227C9.93516 7.54453 10.698 6.92227 11.8336 6.92227C14.1961 6.92227 14.6355 8.47969 14.6355 10.5047L14.6355 14.625Z"
                    fill="#5a5a8a"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div className="footer-col footer-contact">
            <h4>Contact</h4>
            <a href="mailto:connect@drpavanpai.com" className="contact-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.3333 2.66699L2.66659 2.66699C1.93325 2.66699 1.33992 3.26699 1.33992 4.00033L1.33325 12.0003C1.33325 12.7337 1.93325 13.3337 2.66659 13.3337L13.3333 13.3337C14.0666 13.3337 14.6666 12.7337 14.6666 12.0003L14.6666 4.00033C14.6666 3.26699 14.0666 2.66699 13.3333 2.66699ZM13.3333 5.33366L7.99992 8.66699L2.66659 5.33366L2.66659 4.00033L7.99992 7.33366L13.3333 4.00033V5.33366Z"
                  fill="#5a5a8a"
                />
              </svg>
              <span>connect@drpavanpai.com</span>
            </a>
            <a href="tel:+919987096826" className="contact-item">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.36 3.33333C4.4 3.92667 4.5 4.50667 4.66 5.06L3.86 5.86C3.58667 5.06 3.41333 4.21333 3.35333 3.33333L4.36 3.33333ZM10.9333 11.3467C11.5 11.5067 12.08 11.6067 12.6667 11.6467V12.64C11.7867 12.58 10.94 12.4067 10.1333 12.14L10.9333 11.3467ZM5 2L2.66667 2C2.3 2 2 2.3 2 2.66667C2 8.92667 7.07333 14 13.3333 14C13.7 14 14 13.7 14 13.3333L14 11.0067C14 10.64 13.7 10.34 13.3333 10.34C12.5067 10.34 11.7 10.2067 10.9533 9.96C10.8872 9.936 10.817 9.92469 10.7467 9.92667C10.5733 9.92667 10.4067 9.99333 10.2733 10.12L8.80667 11.5867C6.91695 10.6203 5.37974 9.08305 4.41333 7.19333L5.88 5.72667C6.06667 5.54 6.12 5.28 6.04667 5.04667C5.79377 4.2787 5.66548 3.4752 5.66667 2.66667C5.66667 2.3 5.36667 2 5 2Z"
                  fill="#5a5a8a"
                />
              </svg>
              <span>+91 - 9987096826</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;