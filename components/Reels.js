import React, { useState, useEffect } from "react";

const reels = [
  { id: 1, src: "/reel-1.mp4" },
  { id: 2, src: "/reel-2.mp4" },
  { id: 3, src: "/reel-3.mp4" },
  { id: 4, src: "/reel-4.mp4" },
];

const ReelsSection = () => {
  const [isPlaying, setIsPlaying] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fade-in effect
    setLoaded(true);

    // Detect mobile on client only
    setIsMobile(window.innerWidth <= 768);
  }, []);

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
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <h2
          className={`text-4xl font-bold text-white text-center mb-8 transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          Reels & Highlights
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className={`overflow-hidden rounded-xl relative group transition-opacity duration-1000 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            >
              <video
                src={reel.src}
                autoPlay={!isMobile} // autoplay only on desktop
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                onClick={() => isMobile && handlePlay(reel.id)}
                style={{
                  display: !isMobile || isPlaying[reel.id] ? "block" : "none",
                }}
              />

              {/* Mobile play overlay */}
              {isMobile && !isPlaying[reel.id] && (
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
