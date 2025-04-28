import React, { useState } from "react";
import{ useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();

  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignIn) {
      // Sign In
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        signIn(storedUser);
        setMessage("✅ Successfully signed in!");
        navigate("/");
      } else {
        setMessage("❌ Invalid credentials!");
      }
    } else {
      // Sign Up
      localStorage.setItem(
        "user",
        JSON.stringify({ email: email, password: password })
      );
      setMessage("✅ Account created! You can now sign in.");
      setIsSignIn(true);
    }

    setEmail("");
    setPassword("");
  };

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isSignIn ? "Sign in to your account" : "Create your account"}
        </h2>

        {message && (
          <div className="text-center text-sm font-medium text-gray-700">
            {message}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-t-md focus:z-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="relative block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-b-md focus:z-10 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 justify-center bg-blue-600 text-white border border-transparent text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isSignIn ? "Sign in" : "Sign up"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600">
          <button
            onClick={toggleMode}
            className="text-blue-600 hover:text-blue-400 cursor-pointer font-medium"
          >
            {isSignIn
              ? "Don't have an account? Sign up"
              : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}
