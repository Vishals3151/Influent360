import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const LoginPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#081a2b] to-[#020b16] text-white flex flex-col">

            {/* ================= NAVBAR ================= */}
            <Navbar />

            {/* Login Card */}
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-md bg-gradient-to-b from-[#0f2a44] to-[#132f55] rounded-2xl p-8 shadow-xl">

                    <h2 className="text-2xl font-semibold text-center mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-center text-sm text-gray-300 mb-6">
                        Login to your account
                    </p>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="text-sm text-gray-300">Email</label>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            className="w-full mt-1 p-3 rounded-lg bg-[#0b1c2d] border border-white/10 outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-2">
                        <div className="flex justify-between text-sm">
                            <label className="text-gray-300">Password</label>
                            <a href="#" className="text-orange-400">
                                Forgot password?
                            </a>
                        </div>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-1 p-3 rounded-lg bg-[#0b1c2d] border border-white/10 outline-none"
                        />
                    </div>

                    {/* Remember */}
                    <div className="flex items-center gap-2 text-sm text-gray-300 my-4">
                        <input type="checkbox" />
                        Remember this device
                    </div>

                    {/* Button */}
                    <button className="w-full bg-orange-500 hover:bg-orange-600 transition p-3 rounded-xl font-semibold">
                        Sign In to Dashboard →
                    </button>

                    {/* Divider */}
                    <div className="text-center text-xs text-gray-400 my-5">
                        OR CONTINUE WITH
                    </div>

                    {/* Social */}
                    <div className="flex gap-3">
                        <button className="flex-1 bg-white/10 p-3 rounded-lg">
                            Google
                        </button>
                        <button className="flex-1 bg-white/10 p-3 rounded-lg">
                            LinkedIn
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-300 mt-6">
                        New to Influent360?{" "}
                        <Link to="/signup" className="text-orange-400 hover:underline">
                            Create an account
                        </Link>

                    </p>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center text-xs text-gray-500 py-4">
                © 2024 Influent360 Digital Marketing Agency. All rights reserved.
            </footer>
        </div>
    );
};

export default LoginPage;
