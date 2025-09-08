import React, { useEffect, useState } from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const socialMedia = [
  { icon: <FaInstagram />, link: "https://www.instagram.com/oprahomes" },
  { icon: <FaFacebook />, link: "https://www.facebook.com/oprahomes" },
  { icon: <FaYoutube />, link: "https://www.youtube.com/@oprahomes" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/oprahomes" },
];

const Footer = () => {
  const [visibleIcons, setVisibleIcons] = useState([]);

  useEffect(() => {
    // Staggered fade-in
    socialMedia.forEach((_, index) => {
      setTimeout(() => {
        setVisibleIcons((prev) => [...prev, index]);
      }, index * 300); // 300ms delay between icons
    });
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <p>&copy; {new Date().getFullYear()} Oprahomes. All rights reserved.</p>
      <div className="flex justify-center mt-4 space-x-6">
        {socialMedia.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl transition-opacity duration-1000 ${
              visibleIcons.includes(index) ? "opacity-100" : "opacity-0"
            } hover:text-yellow-500`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
