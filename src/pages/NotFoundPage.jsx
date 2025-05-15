import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    useEffect(() => {
        document.title = 'ShopHub | Page Not Found';
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-2">Oops! Page not found.</p>
            <p className="text-gray-500">The requested URL was not found on this server.</p>

            <Link to="/" className="mt-4 text-blue-500 hover:underline">
                <button
                    className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Go to Homepage
                </button>
            </Link>
        </div>
    );
}
