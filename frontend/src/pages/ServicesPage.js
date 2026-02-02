import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

const ServicesPage = () => {
    return (
        <div className="font-sans bg-[#0B1C2D] text-white min-h-screen">

            {/* ================= NAVBAR ================= */}
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#0B1C2D] to-[#1E3A8A] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                    <span className="inline-block mb-6 px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-white/10 text-orange-400">
                        Elevate Your Presence
                    </span>

                    <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                        Our Specialized <span className="text-orange-500">Services</span>
                    </h1>

                    <p className="mt-6 max-w-2xl text-white/70">
                        Driving high-impact ROI for modern brands through data-driven digital
                        marketing, influencer strategy, and performance-led creative
                        solutions.
                    </p>

                    <div className="flex gap-4 mt-10">
                        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-bold">
                            Book a Consultation
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl font-bold">
                            Explore Case Studies
                        </button>
                    </div>
                </div>
            </section>

            {/* ================= INFLUENCER MARKETING ================= */}
            <section className="py-24 bg-[#0F2A44]">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-orange-400 font-bold uppercase tracking-wider text-sm">
                            Talent & Influence
                        </span>

                        <h2 className="text-4xl font-black mt-4 mb-6">
                            Influencer Marketing
                        </h2>

                        <p className="text-white/70 mb-10">
                            We bridge the gap between brands and top-tier talent to create
                            authentic engagement that converts. Our proprietary vetting
                            process ensures alignment with your brand values and audience
                            demographics.
                        </p>

                        <ul className="space-y-6">
                            {[
                                "Talent Discovery",
                                "Creative Strategy",
                                "Management & Optimization",
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4">
                                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500 text-sm font-bold">
                                        {i + 1}
                                    </span>
                                    <div>
                                        <h4 className="font-bold">{item}</h4>
                                        <p className="text-white/60 text-sm">
                                            End-to-end execution focused on measurable growth.
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <button className="mt-10 text-orange-400 font-bold hover:text-orange-500">
                            Learn about Influencer ROI →
                        </button>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-10 flex justify-center">
                        <img
                            src="/assets/about-team.jpg"
                            alt="Influencer"
                            className="max-h-[320px]"
                        />
                    </div>
                </div>
            </section>

            {/* ================= CORE PERFORMANCE VERTICALS ================= */}
            <section className="py-24 bg-[#0B1C2D]">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <h2 className="text-center text-3xl font-black mb-4">
                        Core Performance Verticals
                    </h2>
                    <p className="text-center text-white/60 mb-16">
                        Everything you need to dominate the digital landscape through data
                        and design.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Paid Media Scaling",
                                points: [
                                    "Meta Ads Management",
                                    "Google Search & Display",
                                    "Retargeting Funnels",
                                ],
                                btn: "View Media Services",
                            },
                            {
                                title: "Creative Direction",
                                points: [
                                    "TikTok / Reels Production",
                                    "Ad Creative Testing",
                                    "UGC Management",
                                ],
                                btn: "View Creative Lab",
                            },
                            {
                                title: "Strategic Audits",
                                points: [
                                    "Competitor Benchmarking",
                                    "Funnel Optimization",
                                    "Retention Strategy",
                                ],
                                btn: "Request an Audit",
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="bg-gradient-to-br from-[#0F2A44] to-[#1E3A8A] p-8 rounded-2xl flex flex-col"
                            >
                                <h3 className="text-xl font-bold mb-4">{card.title}</h3>

                                <ul className="space-y-3 mb-8">
                                    {card.points.map((pt, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-white/80">
                                            <span className="material-symbols-outlined text-orange-400">
                                                check_circle
                                            </span>
                                            {pt}
                                        </li>

                                    ))}
                                </ul>

                                <button className="mt-auto bg-[#0B1C2D] hover:bg-orange-500 py-3 rounded-lg font-bold">
                                    {card.btn}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= ROADMAP ================= */}
            <section className="py-24 bg-[#0F2A44]">
                <div className="max-w-5xl mx-auto px-6 lg:px-10">
                    <h2 className="text-center text-3xl font-black mb-16">
                        Our Roadmap to Results
                    </h2>

                    {[
                        "Discovery & Analysis",
                        "Strategic Planning",
                        "Execution & Launch",
                        "Optimization & Scaling",
                    ].map((step, i) => (
                        <div key={i} className="flex gap-6 mb-10">
                            <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center font-bold">
                                {`0${i + 1}`}
                            </div>
                            <div>
                                <h4 className="font-bold text-orange-400">{step}</h4>
                                <p className="text-white/60 text-sm">
                                    Proven frameworks focused on measurable growth and ROI.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CTA (REUSED COMPONENT) ================= */}
            <CTA />

            {/* ================= FOOTER ================= */}
            <Footer />
        </div>
    );
};

export default ServicesPage;
