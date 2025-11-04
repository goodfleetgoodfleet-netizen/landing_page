import React, { useState, useEffect } from "react";
import _nav from "./_nav";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header id="header" className={scrolled ? "header-scrolled" : ""}>
      <nav className="navbar navbar-expand-xl fixed-top navbar-modern">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#hero">
            <span className="logo-text">
              GPS<strong className="logo-number">4</strong>WORLD
            </span>
          </a>
          
          <button
            className={`navbar-toggler ${mobileMenuOpen ? "active" : ""}`}
            type="button"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            aria-controls="navbarNavDropdown"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className={`collapse navbar-collapse ${mobileMenuOpen ? "show" : ""}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ms-auto">
              {_nav.map((item, index) => {
                // Remove leading slash if present and clean the selector
                const cleanId = item.to.replace(/^\/+/, '');
                return (
                  <li key={index} className="nav-item">
                    <a
                      className="nav-link"
                      href={`#${cleanId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        // Smooth scroll to section
                        const element = document.querySelector(`#${cleanId}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
              <li className="nav-item nav-cta">
                <a
                  href="#appointment"
                  className="btn-cta"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    // Smooth scroll to appointment section
                    const element = document.querySelector('#appointment');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Demander Votre Devis
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
