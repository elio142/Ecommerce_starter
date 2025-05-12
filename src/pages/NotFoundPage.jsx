import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-2">Oops! Page not found.</p>
            <p className="text-gray-500">The requested URL was not found on this server.</p>
            <Link to="/" className="mt-4 text-blue-500 hover:underline">Go to Homepage</Link>
        </div>
    );
}
