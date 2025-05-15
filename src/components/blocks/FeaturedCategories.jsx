import { Link } from "react-router-dom"; 
import Category from "../UI/CategoryCard";
import { categories } from "../../lib/data";

export default function FeaturedCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link 
            to="/products" 
            key={cat?.id}
            className="block" 
          >
            <Category title={cat?.name} url={cat?.image_url} />
          </Link>
        ))}
      </div>
    </section>
  );
}
