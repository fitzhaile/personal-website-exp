import { Link } from "react-router-dom";

function Footer() {
  const handleNavClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="footer__section-title mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="footer__link" onClick={handleNavClick}>Home</Link></li>
              <li><Link to="/services" className="footer__link" onClick={handleNavClick}>Services</Link></li>
              <li><Link to="/about" className="footer__link" onClick={handleNavClick}>About</Link></li>
              <li><Link to="/contact" className="footer__link" onClick={handleNavClick}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer__section-title mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="footer__contact-item">fitz@fitzhaile.com</li>
              <li className="footer__contact-item">(912) 507-4291</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom mt-8 pt-8">
          <p className="footer__copyright text-center">
            © 2025 Fitz Haile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;