import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Hero Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={isMobile ? "/hero-mobile.mp4" : "/hero-desktop.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 animate-fadeInUp">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Where Calgary's Finest Homes Meet Cinematic Marketing
        </h1>
        <p className="text-white text-lg md:text-2xl mb-6 drop-shadow-md">
          Realtor | Videographer | Oprahomes
        </p>
        <div className="flex gap-4">
          <a
            href="#services"
            className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition"
          >
            View Listings
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
