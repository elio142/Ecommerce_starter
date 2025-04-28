import { Link } from "react-router-dom";

const SignInToCheckout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Please sign in to checkout
      </h2>
      <Link
        to="/SignIn"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Sign In
      </Link>
    </div>
  );
};

export default SignInToCheckout;
