import React, { useState } from "react";
import { Link } from "gatsby";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Specialties", to: "/specialties" },
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

  const closeMega = () => {
    setMegaOpen(false);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMegaOpen(false);
  };

  return (
    <header className="header-wrapper">
      <nav className="header-nav">
        <div className="container wrapper">
          {/* Logo */}
          <Link to="/" className="header-logo" onClick={closeMega}>
            <div className="logo">
              <img
                className="purple-logo"
                src="https://app.drpavanpai.com/wp-content/uploads/2026/04/logo-updtaed.svg"
                alt="Dr. Pavan Pai Logo"
              />

              <img
                className="white-logo"
                src="https://app.drpavanpai.com/wp-content/uploads/2026/06/white-new-logo.svg"
                alt="Dr. Pavan Pai Logo"
              />
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
                  partiallyActive={link.to !== "/"}
                  onClick={closeMega}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li className="menu-item contact">
              <Link
                to="/contact"
                className="cta-button"
                activeClassName="cta-button--active"
                onClick={closeMega}
              >
                Reach out
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
            onClick={() => {
              setMenuOpen((prev) => !prev);
              closeMega();
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
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
                activeClassName="mobile-nav-link--active"
                partiallyActive={link.to !== "/"}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              to="/contact"
              className="mobile-cta"
              activeClassName="mobile-cta--active"
              onClick={closeMobileMenu}
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