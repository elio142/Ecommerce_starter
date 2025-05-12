import React from "react";
import ProductCard from "../UI/ProductCard";
import { initialProducts } from "../../lib/data";
import { Link } from "react-router-dom";

export default function FeaturedProducts() {
  const featured = initialProducts.slice(0, 4); // Get first 4 products

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/Products">
          <button className="cursor-pointer inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            View All Products
          </button>
        </Link>
      </div>
    </section>
  );
}
