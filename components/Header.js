import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const navRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const sections = [
    { id: "top", label: "Home" },
    { id: "reels", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll handler for active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + window.innerHeight / 3;
      const reels = document.getElementById("reels");
      const contact = document.getElementById("contact");

      if (contact && scrollPos >= contact.offsetTop) setActiveSection("contact");
      else if (reels && scrollPos >= reels.offsetTop) setActiveSection("reels");
      else setActiveSection("top");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate underline position
  const updateUnderline = () => {
    if (navRef.current) {
      const buttons = navRef.current.querySelectorAll("button[data-section]");
      const activeBtn = Array.from(buttons).find((b) => b.dataset.section === activeSection);
      if (activeBtn) {
        const navRect = navRef.current.getBoundingClientRect();
        const btnRect = activeBtn.getBoundingClientRect();
        setUnderlineStyle({
          left: btnRect.left - navRect.left, // relative to nav container
          width: btnRect.width,
        });
      }
    }
  };

  useEffect(() => updateUnderline(), [activeSection]);
  useEffect(() => {
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [activeSection]);

  const scrollToSection = (id) => {
    if (id === "top") window.scrollTo({ top: 0, behavior: "smooth" });
    else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("top")}
          className="text-white text-2xl font-bold tracking-widest drop-shadow-lg"
        >
          Oprahomes
        </button>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden md:flex space-x-6 relative">
          {sections.map((section) => (
            <button
              key={section.id}
              data-section={section.id}
              onClick={() => scrollToSection(section.id)}
              className="px-3 py-2 text-white hover:text-gray-300 relative transition"
            >
              {section.label}
            </button>
          ))}

          {/* Sliding underline */}
          <div
            className="absolute bottom-0 h-1 bg-yellow-400 transition-all duration-300"
            style={{ left: underlineStyle.left, width: underlineStyle.width }}
          />
        </nav>

        {/* Mobile Menu */}
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
