import React, { useEffect, useState } from "react";

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start animation after 1.5s
    const timer = setTimeout(() => setAnimate(true), 1500);

    // Scroll listener to toggle visibility
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      const scrollY = window.scrollY;
      setIsVisible(scrollY < heroHeight);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full max-w-none max-h-none -translate-x-1/2 -translate-y-1/2 object-cover"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-700 ${
          animate && isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Where the finest homes meet cinematic marketing.
        </h1>
        <p className="text-white text-lg md:text-2xl mb-6 drop-shadow-md">
          From Calgary to across provinces, Oprahomes elevates every property with cinematic storytelling.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="#services"
            className="text-white border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
          >
            View Listings
          </a>
          <a
            href="#contact"
            className="text-white border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
