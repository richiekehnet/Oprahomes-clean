import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine which section is in view
      const topSection = document.getElementById("top");
      const reelsSection = document.getElementById("reels");
      const contactSection = document.getElementById("contact");

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      if (contactSection && scrollPosition >= contactSection.offsetTop) {
        setActiveSection("contact");
      } else if (reelsSection && scrollPosition >= reelsSection.offsetTop) {
        setActiveSection("reels");
      } else {
        setActiveSection("top");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setMenuOpen(false);
  };

  const buttonClass = (section) =>
    `px-3 py-2 transition ${
      activeSection === section
        ? "text-yellow-400 border-b-2 border-yellow-400"
        : "text-white hover:text-gray-300"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("top")}
          className="text-white text-2xl font-bold tracking-widest drop-shadow-lg"
        >
          Oprahomes
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection("top")} className={buttonClass("top")}>
            Home
          </button>
          <button onClick={() => scrollToSection("reels")} className={buttonClass("reels")}>
            Services
          </button>
          <button onClick={() => scrollToSection("contact")} className={buttonClass("contact")}>
            Contact
          </button>
        </nav>

        {/* Mobile Burger Menu */}
        <div className="md:hidden relative">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-md rounded shadow-lg py-2 flex flex-col">
              <button
                onClick={() => scrollToSection("top")}
                className={`px-4 py-2 transition text-left ${
                  activeSection === "top" ? "text-yellow-400" : "text-white hover:bg-white/20"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("reels")}
                className={`px-4 py-2 transition text-left ${
                  activeSection === "reels" ? "text-yellow-400" : "text-white hover:bg-white/20"
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`px-4 py-2 transition text-left ${
                  activeSection === "contact" ? "text-yellow-400" : "text-white hover:bg-white/20"
                }`}
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
