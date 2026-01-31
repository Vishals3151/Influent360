import React from "react";

import Footer from "../components/Footer";
import CTA from "../components/CTA";

const AboutPage = () => {
    return (
        <div className="bg-[#1a120b] text-white">

            {/* ================= NAVBAR ================= */}
      

            {/* ================= HERO / STORY ================= */}
<section className="px-10 py-20 grid md:grid-cols-2 gap-10 items-center">

  {/* Image with hover */}
  <div
    className="overflow-hidden rounded-2xl shadow-lg
               transform transition duration-500
               hover:-translate-y-2 hover:shadow-xl"
  >
    <img
      src="/assets/about-team.jpg"
      alt="Our Story"
      className="rounded-2xl
                 transform transition duration-500
                 hover:scale-105"
    />
  </div>

  {/* Text content with hover */}
  <div
    className="transform transition duration-500
               hover:-translate-y-1"
  >
    <span className="text-4xl md:text-5xl uppercase tracking-widest text-orange-400 font-bold">
  Our Story
</span>


    <h1 className="text-4xl font-bold mt-4">
      Beyond Metrics: <br /> The Influent360 Story
    </h1>

    <p className="text-gray-300 mt-5">
      We bridge the gap between influencers and brands through
      human-centric strategy and data-driven results. Founded on the
      principle that digital connection should be authentic, we
      transform how stories are told in the modern age.
    </p>

    <button className="mt-6 bg-orange-500 px-6 py-3 rounded-xl hover:bg-orange-600 transition">
      Join Our Journey
    </button>
  </div>

</section>


            {/* ================= STATS ================= */}
            <section className="px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-white/10">
                {[
                    { value: "500+", label: "Campaigns" },
                    { value: "150+", label: "Brands" },
                    { value: "25M+", label: "Reach" },
                    { value: "12", label: "Awards" },
                ].map((item, i) => (
                    <div key={i}>
                        <h2 className="text-orange-500 text-3xl font-bold">
                            {item.value}
                        </h2>
                        <p className="text-xs text-gray-400 uppercase mt-1">
                            {item.label}
                        </p>
                    </div>
                ))}
            </section>

            {/* ================= MISSION & VISION ================= */}
            <section className="px-10 py-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Mission & Vision
                </h2>

                <p className="text-gray-300 max-w-2xl mb-10">
                    Defining the future of digital connection by empowering creators
                    and brands to grow together in a transparent ecosystem.
                </p>

                <div className="grid md:grid-cols-2 gap-8 ml-2">
                    <div
                        className="bg-[#2a1b11] p-5 rounded-xl border border-white/10 max-w-lg
                 transform transition duration-300
                 hover:-translate-y-2 hover:border-orange-400
                 hover:shadow-xl hover:shadow-orange-500/20"
                    >
                        <h3 className="font-semibold mb-2 text-orange-400">
                            Our Mission
                        </h3>
                        <p className="text-xs leading-relaxed text-gray-400">
                            To empower creators with the tools and partnerships they need
                            to build sustainable, impactful careers that resonate with
                            modern audiences globally.
                        </p>
                    </div>

                    <div
                        className="bg-[#2a1b11] p-5 rounded-xl border border-white/10 max-w-lg
                 transform transition duration-300
                 hover:-translate-y-2 hover:border-orange-400
                 hover:shadow-xl hover:shadow-orange-500/20"
                    >
                        <h3 className="font-semibold mb-2 text-orange-400">
                            Our Vision
                        </h3>
                        <p className="text-xs leading-relaxed text-gray-400">
                            To be the global benchmark for authentic digital marketing,
                            where every interaction adds value and creates lasting human
                            connection.
                        </p>
                    </div>
                </div>
            </section>


            {/* ================= CORE VALUES ================= */}
            <section className="px-10 py-20 bg-[#1f140d]">
                <h2 className="text-4xl md:text-5xl font-bold mb-10">
                    Our Core Values
                </h2>

                <div className="grid md:grid-cols-5 gap-6">
                    {[
                        {
                            title: "Transparency",
                            desc: "Open and honest communication in every campaign and partnership.",
                        },
                        {
                            title: "Innovation",
                            desc: "Staying ahead of trends with cutting-edge marketing technology.",
                        },
                        {
                            title: "Data-Driven",
                            desc: "Strategies backed by rigorous real-time analytics.",
                        },
                        {
                            title: "Human-Centric",
                            desc: "Putting real people at the heart of every digital strategy.",
                        },
                        {
                            title: "Quote",
                            desc: "Great brands are built on trust, not trends.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-[#2a1b11] aspect-square p-5 rounded-xl
                   border border-white/10
                   flex flex-col justify-center items-center
                   max-w-[220px] mx-auto
                   transform transition duration-300
                   hover:-translate-y-2 hover:border-orange-400
                   hover:shadow-xl hover:shadow-orange-500/20"
                        >
                            <h3 className="font-semibold mb-2 text-orange-400 text-center">
                                {item.title}
                            </h3>

                            <p className="text-sm text-gray-300 text-center leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>




            {/* ================= LEADERSHIP ================= */}
            <section className="px-10 py-20">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Our Leadership
                </h2>
                <p className="text-gray-400 text-center mb-10">
                    The visionaries behind Influent360, dedicated to bridging brands and creators.
                </p>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { name: "James Sterling", role: "Founder & CEO" },
                        { name: "Elena Rodriguez", role: "Director of Strategy" },
                        { name: "Marcus Thorne", role: "Creative Lead" },
                        { name: "Sarah Chen", role: "Head of Talent" },
                    ].map((leader, i) => (
                        <div
                            key={i}
                            className="group bg-[#2a1b11] p-4 rounded-xl text-center
                         border border-white/10
                         transform transition duration-300
                         hover:-translate-y-3
                         hover:shadow-2xl hover:shadow-orange-500/20"
                        >
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src={`/assets/leader-${i + 1}.jpg`}
                                    alt={leader.name}
                                    className="rounded-xl mb-4
                             transform transition duration-300
                             group-hover:scale-110"
                                />
                            </div>
                            <h3 className="font-semibold">{leader.name}</h3>
                            <p className="text-sm text-orange-400">{leader.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= CTA ================= */}
            <CTA/>

            {/* ================= FOOTER ================= */}
            <Footer />
        </div>
    );
};

export default AboutPage;
