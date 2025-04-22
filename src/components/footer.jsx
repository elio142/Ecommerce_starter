import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#1f2937] text-gray-300 px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Brand */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">ShopHub</h3>
                    <p className="text-gray-400">Your one-stop shop for all your shopping needs.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className=" text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Categories</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-400 flex items-center gap-2"><Mail className="text-gray-400 w-4 h-4" /> support@shophub.com</li>
                        <li className="text-gray-400 flex items-center gap-2"><Phone className="text-gray-400 w-4 h-4" /> (555) 123-4567</li>
                        <li className="text-gray-400 flex items-center gap-2"><MapPin className="text-gray-400 w-4 h-4" /> 123 Shop Street, City, Country</li>
                    </ul>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex items-center space-x-4 mt-2">
                        <a href="#" aria-label="Facebook"><Facebook className="text-gray-400 w-5 h-5 hover:text-white" /></a>
                        <a href="#" aria-label="Twitter"><Twitter className="text-gray-400 w-5 h-5 hover:text-white" /></a>
                        <a href="#" aria-label="Instagram"><Instagram className="text-gray-400 w-5 h-5 hover:text-white" /></a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                © 2024 ShopHub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
