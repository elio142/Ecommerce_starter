import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useEffect } from "react";

const SignInToFavorites = () => {
  useEffect(() => {
    document.title = 'ShopHub | Favorites';
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <Heart className="mx-auto w-12 h-12 text-gray-400 mb-4" />
        <h2 className="mt-2 text-lg font-medium text-gray-900">
          Sign in to view your favorites
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          You need to be signed in to manage your favorite items.
        </p>
        <div className="mt-6">
          <Link
            to="/signin"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Sign In
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SignInToFavorites;
