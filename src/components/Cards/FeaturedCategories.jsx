import React from 'react';
import Category from './CategoryCard';
import { categories } from '../../lib/data';

// Use lowercase keys for safe lookup
const categoryImages = {
  health: "https://source.unsplash.com/400x300/?healthcare,hospital",
  emergency: "https://source.unsplash.com/400x300/?ambulance,emergency",
  pharmacy: "https://source.unsplash.com/400x300/?pharmacy,medicine",
  doctors: "https://source.unsplash.com/400x300/?doctor,clinic",
  insurance: "https://source.unsplash.com/400x300/?insurance,health",
  "lab tests": "https://source.unsplash.com/400x300/?laboratory,tests",
};

export default function FeaturedCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <Category
            key={index}
            title={cat}
            url={categoryImages[cat.toLowerCase()] || "https://source.unsplash.com/400x300/?health"}
          />
        ))}
      </div>
    </section>
  );
}
