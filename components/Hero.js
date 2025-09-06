import React, { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center">
      <iframe
        className="absolute w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${
          isMobile ? "Yn_Rdl2t0Qs" : "qpkg_Anh_vI"
        }?autoplay=1&mute=1&loop=1&playlist=${
          isMobile ? "Yn_Rdl2t0Qs" : "qpkg_Anh_vI"
        }`}
        title="Oprahomes Hero Video"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4 animate-fadeInUp">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Where Calgary's Finest Homes Meet Cinematic Marketing
        </h1>
        <p className="text-white text-lg md:text-2xl mb-6">
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
