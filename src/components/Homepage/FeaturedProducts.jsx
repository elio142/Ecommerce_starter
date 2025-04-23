import Product from "../Product";

export default function FeaturedProducts() {
    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Product id="1"/>
            <Product id="2"/>
            <Product id="3"/>
            <Product id="4"/>
        </div>
        <div className="text-center mt-8">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">View All Products</button>
        </div>
    </div>
}