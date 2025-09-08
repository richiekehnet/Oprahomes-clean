import React, { useEffect, useRef, useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  const iconsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.1 }
    );

    if (iconsRef.current) {
      observer.observe(iconsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-8 text-center relative">
      <p className="mb-4">
        &copy; {new Date().getFullYear()} Oprahomes. All rights reserved.
      </p>
      <p className="mb-4">Follow us for more cinematic property stories</p>
      <div
        ref={iconsRef}
        className={`flex justify-center gap-6 text-3xl transition-opacity duration-1500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="https://www.instagram.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 hover:drop-shadow-lg transition-all duration-500"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black hover:drop-shadow-lg transition-all duration-500"
        >
          <SiTiktok />
        </a>
        <a
          href="https://www.youtube.com/@yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-600 hover:drop-shadow-lg transition-all duration-500"
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
