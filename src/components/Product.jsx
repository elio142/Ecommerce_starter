import { initialProducts } from "../lib/data";

export default function Product({ id }) {
    // Convert the prop 'id' to a number for comparison
    const productId = parseInt(id, 10);

    // Use the find() method to find the product with the matching ID
    const product = initialProducts.find(product => product.id === productId);

    return <div className="bg-white rounded-lg shadow-md overflow-hidden group">
        <div className="relative h-48">
            <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <button className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart w-5 h-5 text-gray-600">
                    <path
                        d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                    />
                </svg>
            </button>
        </div>
        <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Add to Cart</button>
            </div>
        </div>
    </div>
}