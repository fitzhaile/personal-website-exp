import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-header__container">
        <div className="site-header__content">
          {/* Logo */}
          <Link to="/" className="site-header__logo" onClick={handleNavClick}>
            <span className="site-header__logo-text">FH.</span>
          </Link>

          <div className="site-header__menu">
            {/* Navigation */}
            <nav className="site-header__nav">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`site-header__nav-link${
                    location.pathname === item.path ? " site-header__nav-link--active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="site-header__cta">
              <Link to="/contact" className="site-header__cta-link">
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="site-header__mobile-toggle">
            <button
              className="site-header__mobile-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="site-header__mobile-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="site-header__mobile-menu">
            <nav className="site-header__mobile-nav">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`site-header__mobile-nav-link${
                    location.pathname === item.path ? " site-header__mobile-nav-link--active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="site-header__mobile-cta">
                <Link
                  to="/contact"
                  className="site-header__mobile-cta-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;