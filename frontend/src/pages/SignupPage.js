import React from "react";
import { Link } from "react-router-dom";


const SignupPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#081a2b] to-[#020b16] text-white flex flex-col">

           
            <nav className="flex justify-between items-center px-10 py-6">
                <div className="flex items-center gap-2 text-xl font-bold">
                    <img
                        src="/assets/influet360-logo.png"
                        alt="Influent360 Logo"
                        className="h-8 w-8"
                    />
                    <span>Influent360</span>
                </div>

                <div className="space-x-6 text-sm">
                    <a href="#" className="hover:text-orange-400">Home</a>
                    <a href="#" className="hover:text-orange-400">Features</a>
                    <a href="#" className="hover:text-orange-400">Pricing</a>
                    <Link
                        to="/login"
                        className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition"
                    >
                        Login
                    </Link>

                </div>
            </nav>

            {/* Signup Card */}
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-lg bg-gradient-to-b from-[#0f2a44] to-[#132f55] rounded-2xl p-8 shadow-xl">

                    <h2 className="text-2xl font-semibold mb-1">
                        Join Influent360 Premium
                    </h2>
                    <p className="text-sm text-gray-300 mb-6">
                        Unlock advanced marketing tools and insights today.
                    </p>

                    {/* Full Name */}
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full mb-4 p-3 rounded-lg bg-[#0b1c2d] border border-white/10 outline-none"
                    />

                    {/* Email & Phone */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="email"
                            placeholder="name@company.com"
                            className="p-3 rounded-lg bg-[#0b1c2d] border border-white/10 outline-none"
                        />
                        <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            className="p-3 rounded-lg bg-[#0b1c2d] border border-white/10 outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                            type="password"
                            placeholder="Password"
                            className="p-3 rounded-lg bg-[#0b1c2d] border border-white/10 outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="p-3 rounded-lg bg-[#0b1c2d] border border-white/10 outline-none"
                        />
                    </div>

                    {/* Terms */}
                    <div className="flex items-start gap-2 text-sm text-gray-300 mb-5">
                        <input type="checkbox" className="mt-1" />
                        <span>
                            By signing up, I agree to Influent360’s{" "}
                            <span className="text-orange-400">Terms of Service</span> and{" "}
                            <span className="text-orange-400">Privacy Policy</span>.
                        </span>
                    </div>

                    {/* Button */}
                    <button className="w-full bg-orange-500 hover:bg-orange-600 transition p-3 rounded-xl font-semibold">
                        Create Account →
                    </button>

                    <p className="text-center text-sm text-gray-300 mt-6">
                        Already have an account?{" "}
                        <Link to="/login" className="text-orange-400 hover:underline">
                            Login here
                        </Link>

                    </p>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center text-xs text-gray-500 py-4">
                © 2024 Influent360. All rights reserved.
            </footer>
        </div>
    );
};

export default SignupPage;
