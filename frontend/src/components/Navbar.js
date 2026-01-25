import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-transparent">
      
      {/* Logo */}
      <Link to="/home" className="flex items-center gap-2 text-xl font-bold text-white">
        <img
          src="/assets/influet360-logo.png"
          alt="Influent360 Logo"
          className="h-8 w-8"
        />
        <span>Influent360</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-6 text-sm text-gray-200">
        <NavLink to="/home" className={({ isActive }) =>
          isActive ? "text-orange-400" : "hover:text-orange-400"
        }>
          Home
        </NavLink>

        <NavLink to="/about" className={({ isActive }) =>
          isActive ? "text-orange-400" : "hover:text-orange-400"
        }>
          About
        </NavLink>

        <NavLink to="/services" className={({ isActive }) =>
          isActive ? "text-orange-400" : "hover:text-orange-400"
        }>
          Services
        </NavLink>

        <NavLink to="/pricing" className={({ isActive }) =>
          isActive ? "text-orange-400" : "hover:text-orange-400"
        }>
          Pricing
        </NavLink>

        <NavLink to="/portfolio" className={({ isActive }) =>
          isActive ? "text-orange-400" : "hover:text-orange-400"
        }>
          Portfolio
        </NavLink>

        <NavLink to="/calendar" className={({ isActive }) =>
          isActive ? "text-orange-400" : "hover:text-orange-400"
        }>
          Calendar
        </NavLink>

        {/* CTA */}
        <Link
          to="/contact"
          className="bg-orange-500 px-4 py-2 rounded-full text-white hover:bg-orange-600 transition"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
