import { useEffect, useState } from "react"
import { initialProducts } from "../lib/data";
import { categories } from "../lib/data";
import Product from "../components/UI/ProductCard";
import { useSearchParams } from "react-router-dom";


export default function Products() {
    const [searchParams] = useSearchParams();

    const [query, setQuery] = useState("");
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [selectedCategory, setSelectedCategory] = useState("");

    const filteredProducts = initialProducts.filter((product) => {
        const titleMatch = product.name.toLowerCase().includes(query.toLowerCase());
        const descriptionMatch = product.description.toLowerCase().includes(query.toLowerCase());
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        const categoryMatch = (selectedCategory) ? (product.category == selectedCategory) : true;
        return (titleMatch || descriptionMatch) && priceMatch && categoryMatch;
    });

    useEffect(() => {
        // Get the category from the URL on initial load
        const categoryFromURL = searchParams.get('c') || ''; // Default to empty string if no category
        setSelectedCategory(categoryFromURL);
    }, [searchParams]);

    return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-sm">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">All Categories</option>
                        {categories.length > 0 && (
                            categories.map(category => (
                                <option key={category.id} value={category.name}>{category.name}</option>
                            ))
                        )}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                    <div className="flex space-x-2">
                        <input type="number" placeholder="Min" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                        <input type="number" placeholder="Max" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                    <div className="flex space-x-2">
                        <input type="text" placeholder="Search products..." className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" value={query} onChange={(e) => setQuery(e.target.value)} />
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <Product key={product.id} product={product} />
                ))
            ) : (
                <></>
            )}
        </div>
    </div>

}