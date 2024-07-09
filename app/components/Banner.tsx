import React from "react";

const Banner = () => {
  return (
    <section id="contact" className="py-20 p-12 mt-20 mb-20 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
       Wenn sie <span className="text-teal-400">Interesse</span> haben mich zu kontaktieren machen sie es durch den unteren Knopf
      </h2>
      <p className="text-neutral-400 mt-4 text-lg md:text-xl">
        Bei Interesse unten auf Kontakt aufnehmen drücken!
      </p>
      <a
        href="mailto:deniz20070206@gmail.com"
        className="inline-block mt-6 px-8 py-3 bg-teal-400 text-gray-900 font-bold rounded-full hover:bg-teal-500 transition-all duration-300"
      >
        Kontakt aufnehmen
      </a>
    </section>
  );
};

export default Banner;
