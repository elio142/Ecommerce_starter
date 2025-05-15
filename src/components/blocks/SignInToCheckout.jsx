import { useEffect } from "react";
import { Link } from "react-router-dom";

const SignInToCheckout = () => {
  useEffect(() => {
    document.title = 'ShopHub | Checkout';
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">

        <h2 className="text-lg font-medium text-gray-900">
          Please sign in to checkout
        </h2>
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

export default SignInToCheckout;
