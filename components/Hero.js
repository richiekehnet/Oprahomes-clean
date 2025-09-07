import React, { useEffect, useState } from "react";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Start animation 1.5s after page load
    const timer = setTimeout(() => setAnimate(true), 1500);
    return () => clearTimeout(timer);
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
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        {/* Headline */}
        <h1
          className={`text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg transform transition-all duration-1000 ease-out ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          Where the finest homes meet cinematic marketing.
        </h1>

        {/* Subtext */}
        <p
          className={`text-white text-lg md:text-2xl mb-6 drop-shadow-md transform transition-all duration-1000 ease-out delay-200 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          From Calgary to across provinces, Oprahomes elevates every property with cinematic storytelling.
        </p>

        {/* Buttons */}
        <div
          className={`flex gap-4 flex-wrap justify-center transform transition-all duration-1000 ease-out delay-400 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <button
            onClick={() => scrollToSection("reels")}
            className="px-6 py-3 rounded border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            View Listings
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 rounded border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
