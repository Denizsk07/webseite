import React from "react";

const Banner = () => {
  return (
    <section className="py-20 p-12 mt-20 mb-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Bereit, Ihre <span className="text-teal-400">digitale Präsenz</span> auf das nächste Level zu heben?
      </h2>
      <p className="text-neutral-400 mt-4 text-lg md:text-xl">
        Kontaktieren Sie mich noch heute und lassen Sie uns besprechen, wie ich Ihnen helfen kann, Ihre Ziele zu erreichen.
      </p>
      <a
        href="mailto:deniz.kaya@example.com"
        className="inline-block mt-6 px-8 py-3 bg-teal-400 text-gray-900 font-bold rounded-full hover:bg-teal-500 transition-all duration-300"
      >
        Kontakt aufnehmen
      </a>
    </section>
  );
};

export default Banner;
