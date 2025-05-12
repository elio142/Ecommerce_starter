import { Link } from 'react-router-dom';

export default function EmptyCart() {
    return (
        <div className="text-center">
            <div className="mx-auto h-12 w-12 text-gray-400">🛒</div>
            <h2 className="mt-2 text-lg font-medium text-gray-900">Your cart is empty</h2>
            <p className="mt-1 text-sm text-gray-500">Start adding some items to your cart!</p>
            <div className="mt-6">
                <Link to="/Products">
                    <button className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Browse Products</button>
                </Link>
            </div>
        </div>
    )
}