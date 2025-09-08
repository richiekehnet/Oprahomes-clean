import React from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <p className="mb-4">&copy; {new Date().getFullYear()} Oprahomes. All rights reserved.</p>

      {/* Social Media Buttons */}
      <div className="flex justify-center gap-6 mb-2">
        <a
          href="https://www.instagram.com/oprahomes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-400 transition-colors duration-300"
          aria-label="Oprahomes Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@oprahomes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-400 transition-colors duration-300"
          aria-label="Oprahomes TikTok"
        >
          <FaTiktok />
        </a>
        <a
          href="https://www.youtube.com/@oprahomes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-400 transition-colors duration-300"
          aria-label="Oprahomes YouTube"
        >
          <FaYoutube />
        </a>
      </div>

      {/* Optional small subtext */}
      <p className="text-gray-500 text-sm">Follow us for cinematic property stories</p>
    </footer>
  );
};

export default Footer;

