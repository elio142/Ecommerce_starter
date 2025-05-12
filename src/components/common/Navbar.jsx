import { Search, Heart, ShoppingCart, User, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { Link } from "react-router-dom";

const Navbar = () => {
    const auth = useAuth(); // Get the context
    if (!auth) return null; // Early return if `auth` is undefined or null

    const { user, signOut } = auth; // Destructure safely from `auth`

    return (
        <nav className="bg-white shadow-md">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between h-16">
                {/* LEFT GROUP: Logo + Primary Links */}
                <div className="flex items-center space-x-8">
                    <div className="text-xl font-bold text-gray-800">ShopHub</div>
                    <div className="hidden md:flex items-center space-x-10">
                        <Link to="/" className="text-gray-900 font-medium px-3 py-2 text-sm rounded-md hover:text-gray-500 transition">
                            Home
                        </Link>
                        <Link to="/Products" className="text-gray-900 font-medium px-3 py-2 text-sm rounded-md hover:text-gray-500 transition">
                            Products
                        </Link>
                        <Link to="/Contact" className="text-gray-900 font-medium px-3 py-2 text-sm rounded-md hover:text-gray-500 transition">
                            Contact
                        </Link>
                    </div>
                </div>

                {/* RIGHT GROUP: Search + Icons */}
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="w-64 px-4 py-1 border border-gray-300 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                    <Link to="/Favorites">
                        <Heart className="w-6 h-6 text-gray-600 hover:text-gray-500 cursor-pointer transition" />
                    </Link>
                    <Link to="/Cart">
                        <ShoppingCart className="w-6 h-6 text-gray-600 hover:text-gray-500 cursor-pointer transition" />
                    </Link>


                    {/* Conditional rendering based on user */}
                    {user ? (
                        <LogOut
                            className="w-6 h-6 text-gray-600 hover:text-gray-500 cursor-pointer transition"
                            onClick={signOut}
                        />
                    ) : (
                        <Link to="/SignIn">
                            <User className="w-6 h-6 text-gray-600 hover:text-gray-500 cursor-pointer transition" />
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
