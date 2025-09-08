import React, { useEffect, useState } from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position and window height
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      // Trigger fade-in when user is near the bottom 200px
      if (scrollY + windowHeight >= documentHeight - 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-8 text-center relative overflow-hidden">
      <p className="mb-4">&copy; {new Date().getFullYear()} Oprahomes. All rights reserved.</p>

      {/* Social Media Buttons */}
      <div
        className={`flex justify-center gap-6 mb-2 transition-opacity duration-1000 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
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

      <p className="text-gray-500 text-sm">Follow us for cinematic property stories</p>
    </footer>
  );
};

export default Footer;
