import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close mobile menu after click
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <div className="text-white text-xl font-bold cursor-pointer" onClick={() => handleScroll("top")}>
          Oprahomes
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <button
            onClick={() => handleScroll("top")}
            className="text-white hover:text-gray-300 transition"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("reels")}
            className="text-white hover:text-gray-300 transition"
          >
            Services
          </button>
          <a
            href="#contact"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Book Consultation
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-md">
          <nav className="flex flex-col gap-4 px-6 py-4">
            <button
              onClick={() => handleScroll("top")}
              className="text-white hover:text-gray-300 transition text-lg text-left"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("reels")}
              className="text-white hover:text-gray-300 transition text-lg text-left"
            >
              Services
            </button>
            <a
              href="#contact"
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition text-left"
            >
              Book Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
