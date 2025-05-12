import { Link } from 'react-router-dom';

export default function EmptyFavorites() {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart mx-auto h-12 w-12 text-gray-400">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <h2 className="mt-2 text-lg font-medium text-gray-900">No favorites yet</h2>
            <p className="mt-1 text-sm text-gray-500">Start adding some items to your favorites!</p>
            <div className="mt-6">
                <Link to="/Products">
                    <button className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Browse Products</button>
                </Link>
            </div>
        </div>
    </div>
}