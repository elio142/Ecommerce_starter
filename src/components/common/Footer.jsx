import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">ShopHub</h3>
            <p className="text-gray-400">
              Your one-stop shop for all your shopping needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@shophub.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Shop Street, City, Country</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4 mt-2">
              <a href="#" aria-label="Facebook">
                <Facebook className="text-gray-400 w-5 h-5 hover:text-white" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="text-gray-400 w-5 h-5 hover:text-white" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="text-gray-400 w-5 h-5 hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          © 2025 ShopHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
