import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={handleNavClick}>
            <span className="header__logo" style={{ fontSize: '51px' }}>FH.</span>
          </Link>

          <div className="flex items-center space-x-8">
            {/* Desktop Navigation */}
            <nav className="header__nav hidden md:flex items-center space-x-8">
              <Link
                to="/services"
                className={`header__link ${location.pathname === "/services" ? "header__link--active" : ""}`}
                onClick={handleNavClick}
              >
                Services
              </Link>
              <Link
                to="/about"
                className={`header__link ${location.pathname === "/about" ? "header__link--active" : ""}`}
                onClick={handleNavClick}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`header__link ${location.pathname === "/contact" ? "header__link--active" : ""}`}
                onClick={handleNavClick}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="header__cta px-6 py-3 text-center"
                onClick={handleNavClick}
              >
                Get Started
              </Link>
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="header__mobile-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="header__mobile-menu md:hidden">
            <nav className="px-4 py-4 space-y-3">
              <Link
                to="/services"
                onClick={handleNavClick}
                className={`header__mobile-link ${location.pathname === "/services" ? "header__mobile-link--active" : ""}`}
              >
                Services
              </Link>
              <Link
                to="/work"
                onClick={handleNavClick}
                className={`header__mobile-link ${location.pathname === "/work" ? "header__mobile-link--active" : ""}`}
              >
                Work
              </Link>
              <Link
                to="/about"
                onClick={handleNavClick}
                className={`header__mobile-link ${location.pathname === "/about" ? "header__mobile-link--active" : ""}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={handleNavClick}
                className={`header__mobile-link ${location.pathname === "/contact" ? "header__mobile-link--active" : ""}`}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="header__mobile-cta px-4 py-2 mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;