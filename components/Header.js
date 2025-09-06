import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-white text-2xl font-bold tracking-widest drop-shadow-lg">
            Oprahomes
          </a>
        </Link>

        {/* Navigation */}
        <nav className="space-x-6">
          <Link href="#services">
            <a className="text-white hover:text-gray-300 transition">Services</a>
          </Link>
          <Link href="#reels">
            <a className="text-white hover:text-gray-300 transition">Reels</a>
          </Link>
          <Link href="#contact">
            <a className="text-white hover:text-gray-300 transition">Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
