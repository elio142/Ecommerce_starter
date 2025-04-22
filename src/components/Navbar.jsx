import React from 'react';
import { Search, Heart, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-white">
            {/* inner wrapper: centers content, adds padding */}
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between h-16">

                {/* ─── LEFT GROUP: Logo + Primary Links ───────────────────────────── */}
                <div className="flex items-center space-x-8">
                    {/* Logo */}
                    <div className="text-xl font-bold text-gray-800">
                        ShopHub
                    </div>

                    {/* Nav Links (hidden on small screens) */}
                    <div className="hidden md:flex items-center space-x-10">
                        <a href="#" className="text-gray-900 font-medium px-3 py-2 text-sm rounded-md hover:text-gray-500 transition">
                            Home
                        </a>
                        <a href="#" className="text-gray-900 font-medium px-3 py-2 text-sm rounded-md hover:text-gray-500 transition">
                            Categories
                        </a>
                        <a href="#" className="text-gray-900 font-medium px-3 py-2 text-sm rounded-md hover:text-gray-500 transition">
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
                            className=" w-64 px-4 py-1 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>

                    {/* Action Icons */}
                    <Heart className="w-6 h-6 text-gray-600 hover:text-gray-500 cursor-pointer transition" />
                    <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-gray-500 cursor-pointer transition" />
                    <User className="w-6 h-6 text-gray-600 hover:text-gray-500 cursor-pointer transition" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
