import React from "react";
import { Spotlight } from "./ui/Spotlight";
import RecentProjects from "./components/Projects";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import RecentProjects2 from "./components/Projects2";
import { Link as ScrollLink } from "react-scroll";

import { navItems } from "./data";
import { FloatingNav } from "./ui/Navigation";
import Link from "next/link";
import HomeProjects from "./components/HomeProjects";

export default function Home() {
  return (
    <>
    <FloatingNav navItems={navItems} />
      <div className="relative overflow-hidden h-full flex flex-col items-center justify-center min-h-screen w-full p-4 space-y-10">
        <Spotlight
          className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen w-screen"
          fill="teal"
        />
        <Spotlight
          className="absolute top-10 right-0 h-[80vh] w-[50vw]"
          fill="gray"
        />
        <Spotlight className="absolute left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        <div className="text-center relative z-10">
          <h1 className="text-sm uppercase tracking-widest text-teal-400 mb-4 animate-fade-in">
            ##Mediengestaltung in Bild und Ton##
          </h1>
          <h2 className="text-4xl md:text-7xl font-bold text-white animate-fade-in leading-tight">
            Mediengestalter{" "}
            <span className="text-teal-400">Bild</span>{" "}
            <span className="text-white">& Ton</span>{" "}
          </h2>
          <p className="text-neutral-300 max-w-xl mx-auto my-6 text-lg md:text-xl animate-fade-in">
            Hallo! Ich bin Deniz Kaya, ein leidenschaftlicher Mediengestalter im
            Bereich Bild & Ton.
          </p>
          <Link href="#projects">
          <button className="mt-6 px-8 py-3 bg-teal-400 text-black font-bold rounded-full hover:bg-teal-500 transition-all duration-300 animate-fade-in">
            Meine Projekte ansehen
          </button>
          </Link>
        </div>
      </div>

      <section
  id="about"
  className="max-w-4xl mx-auto text-center bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-xl shadow-2xl my-20 backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-700 animate-fadeIn"
>
  <h2 className="text-3xl md:text-5xl font-bold mb-8 text-teal-400">
    Über mich
  </h2>
  <p className="text-neutral-200 text-lg md:text-xl mb-4">
    Mediengestalter Bild & Ton.
  </p>
  <p className="text-neutral-300 text-lg md:text-xl">
    Ich bin Deniz Kaya und wohne in München. Schon seit ich 12 bin,
    interessiere ich mich für Mediengestaltung im Bereich Bild & Ton.
    Deswegen besuche ich derzeit die Macromedia Akademie und mache dort
    meinen Abschluss als Mediengestalter Bild & Ton. Ich bin immer bereit
    für jegliche Projekte :)
  </p>
</section>


      <section id="projects">

        <HomeProjects />

      </section>

      <Banner />

      <Footer />
    </>
  );
}
