import React from "react";

const reels = [
  { id: 1, src: "/reel-1.mp4" },
  { id: 2, src: "/reel-2.mp4" },
  { id: 3, src: "/reel-3.mp4" },
  { id: 4, src: "/reel-4.mp4" },
];

const ReelsSection = () => {
  return (
    <section
      className="relative w-full py-20 bg-black"
      style={{
        backgroundImage: "url('/reels-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Cinematic Reels
        </h2>

        {/* Section Description */}
        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Dive into our latest projects, home highlights, and cinematic journeys
          through Calgary’s finest properties. Each reel showcases the magic we
          bring to real estate marketing.
        </p>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="overflow-hidden rounded-xl transform transition duration-500 ease-in-out hover:scale-105"
            >
              <video
                src={reel.src}
                autoPlay
                loop
                muted
                className="w-full h-full object-contain transform transition duration-500 ease-in-out hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
