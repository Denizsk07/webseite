import React from "react";
import { Spotlight } from "./ui/Spotlight";
// import RecentProjects from "./components/Projects"; // Removed
import Banner from "./components/Banner";
import Footer from "./components/Footer";
// import RecentProjects2 from "./components/Projects2"; // Removed
import { Link as ScrollLink } from "react-scroll";

// import { navItems } from "./data"; // Removed as app/data is deleted
import { FloatingNav } from "./ui/Navigation";
import Link from "next/link";
import HomeProjects from "./components/HomeProjects";

// Placeholder for navItems if FloatingNav requires it.
// If FloatingNav is updated to not need navItems or navItems are sourced differently, this can be removed.
const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];


export default function Home() {
  return (
    <>
    <FloatingNav navItems={navItems} />
      <div className="relative overflow-hidden h-full flex flex-col items-center justify-center min-h-screen w-full p-4 space-y-8">
        {/* Background Visual Placeholder: User can replace this with an img, video, or a component for a dynamic background */}
        <div className="absolute inset-0 z-0 opacity-20">
          {/* Example: <img src="/path-to-your-hero-image.jpg" alt="Hero Background" className="w-full h-full object-cover" /> */}
          {/* Using a subtle gradient as a placeholder for now */}
          <div className="w-full h-full bg-gradient-to-br from-surface via-background to-background"></div>
        </div>
        <Spotlight
          className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen w-screen z-[1]"
          fill="primary"
        />
        <Spotlight
          className="absolute top-10 right-0 h-[80vh] w-[50vw] z-[1]"
          fill="neutral-700"
        />
        <Spotlight className="absolute left-80 top-28 h-[80vh] w-[50vw] z-[1]" fill="accent" />
        <div className="text-center relative z-10">
          <h1 className="text-xl md:text-2xl font-normal text-foregroundMuted animate-fade-in leading-tight">
           -München-
          </h1>
          <h2 className="text-4xl md:text-7xl font-bold text-foreground animate-fade-in leading-tight">
            Mediengestalter{" "}
            <span className="text-primary">Bild</span>{" "}
            <span className="text-primary">& Ton</span>{" "}
          </h2>
          <p className="text-foregroundMuted max-w-xl mx-auto my-6 text-lg md:text-xl animate-fade-in">
            Hallo! Ich bin Deniz Kaya, ein leidenschaftlicher Mediengestalter im
            Bereich Bild & Ton.
          </p>
          <Link href="#projects">
          <button className="mt-6 px-10 py-4 bg-primary text-white font-bold rounded-full hover:bg-purple-700 transition-all duration-300 animate-fade-in">
            Meine Projekte ansehen
          </button>
          </Link>
        </div>
      </div>

      <section
  id="about"
  className="max-w-4xl mx-auto text-center bg-gradient-to-r from-surface via-background to-background p-8 rounded-xl shadow-2xl my-20 backdrop-filter backdrop-blur-lg bg-opacity-30 border border-neutral-700 animate-fadeIn"
>
  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-primary">
    Über mich
  </h2>
  <p className="text-foreground text-lg md:text-xl mb-4">
    Mediengestalter Bild & Ton.
  </p>
  <p className="text-foregroundMuted text-lg md:text-xl">
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
