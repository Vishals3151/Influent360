import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020b16] text-gray-400 px-10 pt-16 pb-6">

      {/* Top Section */}
      <div className="grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-white text-lg font-bold mb-3">
            <img
              src="/assets/influet360-logo.png"
              alt="Influent360 Logo"
              className="h-7 w-7"
            />
            <span>Influent360</span>
          </div>

          <p className="text-sm mb-4">
            Your partner in ROI-driven digital marketing, web development,
            and brand growth.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-3">
            <a
              href="#"
              className="p-2 bg-[#0f2a44] rounded-full hover:bg-orange-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="p-2 bg-[#0f2a44] rounded-full hover:bg-orange-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="p-2 bg-[#0f2a44] rounded-full hover:bg-orange-500 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="p-2 bg-[#0f2a44] rounded-full hover:bg-orange-500 transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
            <li><Link to="/services" className="hover:text-orange-400">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-orange-400">Portfolio</Link></li>
            <li><Link to="/pricing" className="hover:text-orange-400">Pricing</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-orange-400">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-orange-400">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-orange-400">Terms of Service</Link></li>
            <li><Link to="/faq" className="hover:text-orange-400">Help Center</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-3">Newsletter</h4>
          <p className="text-sm mb-3">
            Get marketing tips and updates directly in your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 p-2 rounded-l bg-[#0f2a44] outline-none text-sm"
            />
            <button className="bg-orange-500 px-4 rounded-r hover:bg-orange-600 transition">
              →
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>
          © 2024 Influent360 Digital Marketing Agency. All rights reserved.
        </p>
        <p className="mt-2 md:mt-0">
          Made with ❤️ for brands that want to scale
        </p>
      </div>
    </footer>
  );
};

export default Footer;
