// components/AuthForm.jsx
import React from "react";

export default function AuthForm({ buttonText, onSubmit, linkText, linkTo }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="rounded-t-md w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="rounded-b-md w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 justify-center bg-blue-600 text-white border border-transparent text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
