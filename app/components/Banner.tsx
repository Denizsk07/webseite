import React from "react";

const Banner = () => {
  return (
    <section id="contact" className="py-20 p-12 mt-20 mb-20 text-center">
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
       Wenn sie <span className="text-primary">Interesse</span> haben mich zu kontaktieren.
      </h2>
      <p className="text-foregroundMuted mt-4 text-lg md:text-xl">
        drücken sie auf den unteren Knopf
      </p>
      <a
        href="mailto:deniz20070206@gmail.com"
        className="inline-block mt-6 px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-purple-700 transition-all duration-300"
      >
        Kontakt aufnehmen
      </a>
    </section>
  );
};

export default Banner;
