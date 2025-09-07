import React from "react";

const Hero = () => {
  // Smooth scroll function
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
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg opacity-0 animate-fadeInUp delay-100">
          Where the finest homes meet cinematic marketing.
        </h1>

        {/* Description */}
        <p className="text-white/80 text-lg md:text-2xl mb-6 drop-shadow-md max-w-xl opacity-0 animate-fadeInUp delay-200">
          From Calgary to across provinces, Oprahomes elevates every property with cinematic storytelling.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center mt-4 opacity-0 animate-fadeInUp delay-300">
          <button
            onClick={() => scrollToSection("reels")}
            className="px-6 py-3 border border-white text-white font-semibold rounded transition duration-300 hover:bg-white/20 focus:bg-white/30 active:bg-white/40"
            aria-label="View listings"
          >
            View Listings
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 border border-white text-white font-semibold rounded transition duration-300 hover:bg-white/20 focus:bg-white/30 active:bg-white/40"
            aria-label="Book consultation"
          >
            Book Consultation
          </button>
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .animate-fadeInUp {
          animation: fadeInUp 1s forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
