import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4 animate-fadeInUp">
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
