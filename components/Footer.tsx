import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto text-center">
        <div className="backdrop-blur-md bg-gradient-to-br from-white/5 to-white/2 rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto">
          <p className="text-blue-200 mb-6 font-medium">&copy; 2024 Deniz Kaya. Alle Rechte vorbehlten.</p>
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.tiktok.com/@deniz.sk07"
              className="text-blue-300 hover:text-orange-400 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-lg"
            >
              <FaTiktok size={28} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCET7SLUDY3Auhdb79ZddiIQ"
              className="text-blue-300 hover:text-orange-400 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-lg"
            >
              <FaYoutube size={28} />
            </a>
            <a
              href="https://www.instagram.com/deniz.sk07?igsh=MW1wb2loeDl5dWFlOQ%3D%3D"
              className="text-blue-300 hover:text-orange-400 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-lg"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
