import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive ? "text-orange-400" : "hover:text-orange-400";

  return (
    <nav className="sticky top-0 z-50 px-6 md:px-10 py-6 bg-[#081726]/90 backdrop-blur text-white">

      {/* Top Bar */}
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2 text-xl font-bold">
          <img
            src="/assets/influet360-logo.png"
            alt="Influent360 Logo"
            className="h-8 w-8"
          />
          <span>Influent360</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-200">
          <NavLink to="/home" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/services" className={navLinkClass}>Services</NavLink>
          <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>Portfolio</NavLink>
          <NavLink to="/calendar" className={navLinkClass}>Calendar</NavLink>

          <Link
            to="/contact"
            className="bg-orange-500 px-4 py-2 rounded-full text-white hover:bg-orange-600 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
       <button
  className="md:hidden bg-orange-500 px-4 py-2 rounded-full text-xl"
  onClick={() => setOpen(!open)}
>
  {open ? "✕" : "☰"}
</button>

      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden absolute right-6 top-full mt-4 w-56 bg-[#0F2A44] rounded-xl shadow-lg p-4 text-sm z-50">

          <NavLink to="/home" onClick={() => setOpen(false)} className="block py-2 px-2 hover:text-orange-400">
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)} className="block py-2 px-2 hover:text-orange-400">
            About
          </NavLink>

          <NavLink to="/services" onClick={() => setOpen(false)} className="block py-2 px-2 hover:text-orange-400">
            Services
          </NavLink>

          <NavLink to="/pricing" onClick={() => setOpen(false)} className="block py-2 px-2 hover:text-orange-400">
            Pricing
          </NavLink>

          <NavLink to="/portfolio" onClick={() => setOpen(false)} className="block py-2 px-2 hover:text-orange-400">
            Portfolio
          </NavLink>

          <NavLink to="/calendar" onClick={() => setOpen(false)} className="block py-2 px-2 hover:text-orange-400">
            Calendar
          </NavLink>

          <hr className="my-3 border-gray-600" />

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-center bg-orange-500 py-2 rounded-full text-white hover:bg-orange-600 transition"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
