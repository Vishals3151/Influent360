import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div className="bg-[#081a2b] text-white">

            {/* ================= NAVBAR ================= */}
            <Navbar />

            {/* ================= HERO SECTION ================= */}
            <section className="relative min-h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden">

                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center scale-110 blur-md"
                    style={{ backgroundImage: "url('/assets/about-team.jpg')" }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#081a2b]/80"></div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl">
                    <span className="text-xs uppercase tracking-widest text-orange-400">
                        Now scaling brands globally
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold mt-4">
                        Your Digital <span className="text-orange-500">Growth</span> Partner
                    </h1>

                    <p className="text-gray-300 mt-5">
                        Empowering brands through data-driven marketing, creative design,
                        and cutting-edge web development. We don’t just build sites — we
                        build empires.
                    </p>

                    <div className="flex justify-center gap-4 mt-8">
                        <button className="bg-orange-500 px-6 py-3 rounded-xl hover:bg-orange-600 transition">
                            Get Started →
                        </button>
                        <button className="bg-green-600 px-6 py-3 rounded-xl">
                            WhatsApp
                        </button>
                    </div>
                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section id="services" className="px-10 py-20 bg-[#071727]">
                <div className="mb-10">
                    <span className="text-4xl md:text-5xl text-orange-400 uppercase tracking-wider font-bold ml-4">Our Expertise</span>
                    <h2 className="text-3xl font-bold mt-2 ml-4">
                        Services that drive impact
                    </h2>
                    <p className="text-gray-400 text-sm mt-2 ml-4">
                        Comprehensive digital solutions tailored for modern brands.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6 ml-4">
                    {[
                        {
                            title: "Social Media Management",
                            desc: "Engaging your audience with strategy, storytelling and growth."
                        },
                        {
                            title: "Web Development",
                            desc: "High-performing, responsive and conversion-focused websites."
                        },
                        {
                            title: "SEO Optimization",
                            desc: "Ranking your brand at the top of search results."
                        },
                        {
                            title: "Content Creation",
                            desc: "Creative visuals and copy that build trust and authority."
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#0f2a44] p-6 rounded-xl
                         transform transition duration-300
                         hover:-translate-y-2 hover:shadow-lg"
                        >
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-300">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section id="about" className="px-10 py-20 bg-[#081a2b] grid md:grid-cols-2 gap-10 items-center">

                {/* Image with hover */}
                <div className="overflow-hidden rounded-xl
                        transform transition duration-300
                        hover:-translate-y-2 hover:shadow-xl">
                    <img
                        src="/assets/team.png"
                        alt="Team"
                        className="rounded-xl transform transition duration-300 hover:scale-105"
                    />
                </div>

                <div>
                    <span className="text-4xl md:text-5xl text-orange-400 uppercase tracking-wider font-bold">
                        Why choose us
                    </span>


                    <h2 className="text-3xl md:text-3xl font-bold mt-3">
                        We deliver more than just services. We deliver ROI.
                    </h2>

                    <ul className="mt-6 space-y-4 text-gray-300">
                        <li>✔ Data-Driven Results</li>
                        <li>✔ Expert Creative Team</li>
                        <li>✔ 24/7 Priority Support</li>
                    </ul>

                    <div className="flex gap-8 mt-6">
                        <div>
                            <h3 className="text-orange-500 text-2xl font-bold">200+</h3>
                            <p className="text-sm text-gray-400">Happy Clients</p>
                        </div>
                        <div>
                            <h3 className="text-orange-500 text-2xl font-bold">500M+</h3>
                            <p className="text-sm text-gray-400">Ads Impressions</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section id="testimonials" className="px-10 py-20 bg-[#071727]">
                <h2 className="text-4xl md:text-5xl  font-bold text-center mb-10">
                    What our clients say
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {["Sarah Johnson", "Mark Davis", "Elena Rodriguez"].map((name, i) => (
                        <div
                            key={i}
                            className="bg-[#0f2a44] p-6 rounded-xl
                         transform transition duration-300
                         hover:-translate-y-2 hover:shadow-lg"
                        >
                            <p className="text-sm text-gray-300 leading-relaxed">
                                “Influent360 completely transformed our digital presence and
                                delivered real growth.”
                            </p>
                            <h4 className="mt-4 font-semibold">{name}</h4>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="px-10 py-20 bg-orange-500 text-center rounded-t-3xl">
                <h2 className="text-3xl font-bold text-black">
                    Ready to scale your brand?
                </h2>
                <p className="text-black/80 mt-2">
                    Join hundreds of successful brands that trust Influent360.
                </p>

                <div className="flex justify-center gap-4 mt-6">
                    <button className="bg-black text-white px-6 py-3 rounded-xl">
                        Get Free Audit
                    </button>
                    <button className="bg-white text-black px-6 py-3 rounded-xl">
                        Contact Sales
                    </button>
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <Footer />
        </div>
    );
};

export default HomePage;
