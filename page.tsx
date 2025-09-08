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
      <div className="relative overflow-hidden flex flex-col items-center justify-center min-h-screen w-full p-4 space-y-10 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Moderne Spotlights mit neuen Farben */}
        <Spotlight
          className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-[70vh] w-[70vw] opacity-40"
          fill="#f97316" // Warmes Orange
        />
        <Spotlight
          className="absolute top-10 right-0 h-[60vh] w-[40vw] opacity-30"
          fill="#3b82f6" // Helles Blau
        />
        <Spotlight
          className="absolute left-80 top-28 h-[60vh] w-[40vw] opacity-20"
          fill="#8b5cf6" // Violett
        />
        
        {/* Hero Section mit Glasmorphism */}
        <div className="text-center relative z-10">
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <h1 className="text-2xl md:text-3xl font-semibold text-blue-200 mb-4 animate-fade-in tracking-wide">
              -München-
            </h1>
            <h2 className="text-4xl md:text-6xl font-black text-white animate-fade-in leading-tight mb-6">
              Mediengestalter{" "}
              <span className="text-orange-400 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Bild</span>{" "}
              <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">&amp; Ton</span>
            </h2>
            <p className="text-blue-100 max-w-xl mx-auto my-6 text-lg md:text-xl animate-fade-in leading-relaxed">
              Hallo! Ich bin Deniz Kaya, ein leidenschaftlicher Mediengestalter im Bereich Bild &amp; Ton.
            </p>
            <Link href="#projects">
              <button className="mt-6 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 animate-fade-in transform hover:scale-105 hover:shadow-orange-500/25">
                Meine Projekte ansehen
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section mit neuem Design */}
      <section
        id="about"
        className="max-w-4xl mx-auto text-center p-8 my-20"
      >
        <div className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Über mich
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-6 font-medium">
            Mediengestalter Bild &amp; Ton
          </p>
          <p className="text-blue-200 text-lg md:text-xl leading-relaxed">
            Ich bin Deniz Kaya und wohne in München. Schon seit ich 12 bin,
            interessiere ich mich für Mediengestaltung im Bereich Bild &amp; Ton.
            Deswegen besuche ich derzeit die Macromedia Akademie und mache dort
            meinen Abschluss als Mediengestalter Bild &amp; Ton. Ich bin immer bereit
            für jegliche Projekte :)
          </p>
        </div>
      </section>

      <section id="projects">
        <HomeProjects />
      </section>

      <Banner />
      <Footer />
    </>
  );
}