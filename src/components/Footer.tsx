        import { Link } from "react-router-dom";

function Footer() {
  const handleNavClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-600 hover:text-gray-900" onClick={handleNavClick}>Home</Link></li>
              <li><Link to="/services" className="text-sm text-gray-600 hover:text-gray-900" onClick={handleNavClick}>Services</Link></li>
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-gray-900" onClick={handleNavClick}>About</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900" onClick={handleNavClick}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">fitz@fitzhaile.com</li>
              <li className="text-sm text-gray-600">(912) 507-4291</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © 2025 Fitz Haile. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;