// components/AuthForm.jsx
import React from "react";

export default function AuthForm({ buttonText, onSubmit, linkText, linkTo }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-6">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="appearance-none w-full px-3 py-2 border text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="appearance-none w-full px-3 py-2 border text-gray-900 border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
                    >
                        Sign in
                    </button>
                </form>
                <p className="text-center text-sm text-gray-600">
                    {linkText}{" "}
                    <a href={linkTo} className="text-blue-600 hover:underline">
                        {buttonText === "Sign in" ? "Sign up" : "Sign in"}
                    </a>
                </p>
            </div>
        </div>
    );
}
