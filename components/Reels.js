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
      className="relative w-full py-16"
      style={{
        backgroundImage: "url('/reels-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Optional overlay to make text readable */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Title without hover effects */}
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Reels & Highlights
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="overflow-hidden rounded-xl"
            >
              <video
                src={reel.src}
                autoPlay
                loop
                muted
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
