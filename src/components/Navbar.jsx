import React from 'react';
import { Search, Heart, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white">
      {/* inner wrapper: centers content, adds padding */}
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        
        {/* ─── LEFT GROUP: Logo + Primary Links ───────────────────────────── */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900">
            ShopHub
          </div>

          {/* Nav Links (hidden on small screens) */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-900 hover:text-gray-600 transition">
              Home
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 transition">
              Categories
            </a>
            <a href="#" className="text-gray-900 hover:text-gray-600 transition">
              Contact
            </a>
          </div>
        </div>

        {/* ─── RIGHT GROUP: Search + Icons ─────────────────────────────────── */}
        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
          </div>

          {/* Action Icons */}
          <Heart className="w-5 h-5 text-gray-600 hover:text-gray-500 cursor-pointer transition" />
          <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-gray-500 cursor-pointer transition" />
          <User className="w-5 h-5 text-gray-600 hover:text-gray-500 cursor-pointer transition" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
