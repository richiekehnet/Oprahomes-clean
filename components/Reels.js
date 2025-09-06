import React, { useState } from "react";

const reels = [
  { id: 1, src: "/reel-1.mp4" },
  { id: 2, src: "/reel-2.mp4" },
  { id: 3, src: "/reel-3.mp4" },
  { id: 4, src: "/reel-4.mp4" },
];

const ReelsSection = () => {
  const [isPlaying, setIsPlaying] = useState({});

  const handlePlay = (id) => {
    setIsPlaying((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      className="relative w-full py-16"
      style={{
        backgroundImage: "url('/reels-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Reels & Highlights
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="overflow-hidden rounded-xl relative group"
            >
              {/* Video */}
              <video
                src={reel.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                // Mobile autoplay fix: only play if user tapped
                onClick={() => handlePlay(reel.id)}
                style={{
                  display:
                    isPlaying[reel.id] || window.innerWidth > 768
                      ? "block"
                      : "none",
                }}
              />

              {/* Fallback play button for mobile */}
              {!isPlaying[reel.id] && window.innerWidth <= 768 && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                  onClick={() => handlePlay(reel.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-6.518-3.758A1 1 0 007 8.278v7.444a1 1 0 001.234.97l6.518-3.758a1 1 0 000-1.72z"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
