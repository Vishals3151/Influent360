import React from "react";

const CTA = () => {
  return (
    <section className="px-4 md:px-10 py-20 bg-[#081726]">
      {/* CTA Card */}
      <div className="max-w-6xl mx-auto bg-orange-500 rounded-3xl px-6 md:px-16 py-14 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Ready to scale your brand?
        </h2>

        <p className="text-black/80 mt-3 max-w-2xl mx-auto">
          Join hundreds of successful brands that trust Influent360 for their digital growth.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button className="bg-black text-white px-8 py-3 rounded-xl hover:bg-black/90 transition">
            Get Free Audit
          </button>

          <button className="bg-white text-black px-8 py-3 rounded-xl hover:bg-white/90 transition">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTA;
