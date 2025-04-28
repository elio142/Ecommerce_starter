import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const SignInToFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center">
      <Heart className="w-16 h-16 text-gray-400 mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Sign in to view your favorites
      </h2>
      <p className="text-gray-500 mb-6">
        You need to be signed in to manage your favorite items.
      </p>
      <Link
        to="/SignIn"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Sign In
      </Link>
    </div>
  );
};

export default SignInToFavorites;
