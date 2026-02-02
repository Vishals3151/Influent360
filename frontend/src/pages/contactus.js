import React from "react";

import Footer from "../components/Footer";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-[#1a120b] text-white min-h-screen">

      {/* ================= NAVBAR ================= */}
     

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-10 py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Let&apos;s Scale Your Brand
        </h1>
        <p className="text-gray-300 max-w-2xl">
          Ready to take your digital presence to the next level? Get in touch
          with Influent360’s experts to discuss your next big digital marketing
          project.
        </p>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-10 pb-20 grid md:grid-cols-3 gap-8">

        {/* -------- Contact Form -------- */}
        <div className="md:col-span-2 bg-[#23170f] p-8 rounded-2xl border border-white/10">

          <div className="space-y-5">
            <div>
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 p-3 rounded-lg bg-[#1a120b] border border-white/10 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full mt-1 p-3 rounded-lg bg-[#1a120b] border border-white/10 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full mt-1 p-3 rounded-lg bg-[#1a120b] border border-white/10 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300">Your Message</label>
              <textarea
                rows="4"
                placeholder="Tell us about your project goals..."
                className="w-full mt-1 p-3 rounded-lg bg-[#1a120b] border border-white/10 outline-none resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 transition p-3 rounded-xl font-semibold">
              Send Message →
            </button>

            <p className="text-xs text-gray-400 text-center">
              Typical response time: <span className="text-orange-400">&lt; 2 hours</span>
            </p>

            <button className="w-full border border-green-500 text-green-400 hover:bg-green-500/10 transition p-3 rounded-xl font-semibold">
              Message on WhatsApp
            </button>
          </div>
        </div>

        {/* -------- Right Info Column -------- */}
        <div className="space-y-6">

          {/* Email */}
          <div className="bg-[#23170f] p-6 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-2 text-orange-400">
              <FaEnvelope />
              <h4 className="font-semibold">Email Us</h4>
            </div>
            <p className="text-sm text-gray-300">hello@influent360.com</p>
          </div>

          {/* Call */}
          <div className="bg-[#23170f] p-6 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-2 text-orange-400">
              <FaPhoneAlt />
              <h4 className="font-semibold">Call Us</h4>
            </div>
            <p className="text-sm text-gray-300">+1 (555) 123-4567</p>
          </div>

          {/* Office */}
          <div className="bg-[#23170f] p-6 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-2 text-orange-400">
              <FaMapMarkerAlt />
              <h4 className="font-semibold">Office</h4>
            </div>
            <p className="text-sm text-gray-300">
              123 Creative Plaza, NY<br />10001
            </p>
          </div>

          {/* Hours */}
          <div className="bg-[#23170f] p-6 rounded-xl border border-white/10">
            <div className="flex items-center gap-3 mb-2 text-orange-400">
              <FaClock />
              <h4 className="font-semibold">Hours</h4>
            </div>
            <p className="text-sm text-gray-300">
              Mon–Fri: 9AM – 6PM EST
            </p>
          </div>

          {/* Map Card */}
          <div className="bg-[#23170f] p-8 rounded-2xl border border-white/10 text-center">
            <FaMapMarkerAlt className="text-orange-400 text-3xl mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Influent360 Headquarters</h3>
            <p className="text-sm text-gray-300 mb-4">
              Visit us at the heart of the innovation district in New York City.
            </p>
            <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition">
              Open in Google Maps
            </button>
          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default ContactUs;
