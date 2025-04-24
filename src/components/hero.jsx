// src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] md:h-[600px]"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative max-w-7xl flex flex-col items-start justify-center h-full mx-auto px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Welcome to ShopHub
        </h1>
        <p className="text-white text-xl md:text-2xl mb-8">
          Discover amazing products at great prices
        </p>
        <Link
          to="/shop"
          className="flex items-center text-lg px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
        >
          <ShoppingBag className="h-5 w-5 mr-2" />
          Start Shopping
        </Link>
      </div>
    </section>
  );
}
