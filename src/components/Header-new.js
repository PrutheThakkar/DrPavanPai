import React, { useState } from "react";
import { Link } from "gatsby";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    // { label: "About", to: "/about" },
    { label: "Specialties ", to: "/specialties" },
    { label: "Blogs", to: "/blogs" },
    { label: "FAQ", to: "/faq" },
  ];

  const specialties = [
    { label: "Epilepsy", to: "/specialties/epilepsy" },
    { label: "Stroke", to: "/specialties/stroke" },
    { label: "Headache & Migraine", to: "/specialties/headache" },
    { label: "Movement Disorders", to: "/specialties/movement-disorders" },
    { label: "Spine Surgery", to: "/specialties/spine-surgery" },
    { label: "Brain Tumors", to: "/specialties/brain-tumors" },
  ];

  const toggleMega = (e) => {
    e.preventDefault();
    setMegaOpen((prev) => !prev);
  };

  const closeMega = () => setMegaOpen(false);

  return (
    <header className="header-wrapper">
      <nav className="header-nav">
        <div className="container wrapper">
          {/* Logo */}
          <Link to="/" className="header-logo" onClick={closeMega}>
            <div className="logo">
              <img src="https://drpavanpai.studiosentientdemo.com/wp-content/uploads/2026/03/site-logo.svg" alt="Dr. Pavan Pai Logo" />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label} className="menu-item">
                <Link
                  to={link.to}
                  className="nav-link"
                  activeClassName="nav-link--active"
                  onClick={closeMega}
                >
                  {link.label}
                </Link>
              </li>
            ))}

          

            {/* CTA as nav item */}
            <li className="menu-item contact">
              <Link
                to="/contact"
                className="cta-button"
                onClick={closeMega}
              >
                Reach out
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
            onClick={() => {
              setMenuOpen(!menuOpen);
              closeMega();
            }}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Mobile Specialties */}
          {/* <li>
            <button
              className="mobile-nav-link mobile-mega-toggle"
              onClick={toggleMega}
              aria-expanded={megaOpen}
            >
              Specialties <span>{megaOpen ? "▴" : "▾"}</span>
            </button>
            {megaOpen && (
              <ul className="mobile-mega-list">
                {specialties.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="mobile-mega-link"
                      onClick={() => {
                        setMenuOpen(false);
                        closeMega();
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li> */}

          <li>
            <Link
              to="/contact"
              className="mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Reach out
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;