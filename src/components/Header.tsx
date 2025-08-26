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
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={handleNavClick}>
            <span className="text-blue-600 font-semibold" style={{ fontSize: '51px' }}>FH.</span>
          </Link>

          <div className="flex items-center space-x-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={handleNavClick}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={handleNavClick}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={handleNavClick}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition-colors text-center"
                style={{ borderRadius: '3px' }}
                onClick={handleNavClick}
              >
                Get Started
              </Link>
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-gray-600 hover:text-gray-900"
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
          <div className="md:hidden border-t border-gray-100 bg-gray-50">
            <nav className="px-4 py-4 space-y-3">
              <Link
                to="/services"
                onClick={handleNavClick}
                className={`block text-sm font-medium py-2 hover:text-blue-600 active:text-blue-600 ${
                  location.pathname === "/services"
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                Services
              </Link>
              <Link
                to="/work"
                onClick={handleNavClick}
                className={`block text-sm font-medium py-2 hover:text-blue-600 active:text-blue-600 ${
                  location.pathname === "/work"
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                Work
              </Link>
              <Link
                to="/about"
                onClick={handleNavClick}
                className={`block text-sm font-medium py-2 hover:text-blue-600 active:text-blue-600 ${
                  location.pathname === "/about"
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={handleNavClick}
                className={`block text-sm font-medium py-2 hover:text-blue-600 active:text-blue-600 ${
                  location.pathname === "/contact"
                    ? "text-blue-600"
                    : "text-gray-600"
                }`}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 mt-4"
                style={{ borderRadius: '3px' }}
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