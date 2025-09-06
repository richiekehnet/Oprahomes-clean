// ReelsSection.jsx
import React from "react";

const reels = [
  "/reels/reel-1.mp4",
  "/reels/reel-2.mp4",
  "/reels/reel-3.mp4",
  "/reels/reel-4.mp4"
];

const ReelsSection = () => {
  return (
    <section className="reels-section py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Our Reels & Highlights
      </h2>
      <div className="reels-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {reels.map((src, index) => (
          <div key={index} className="video-container w-full aspect-[9/16] overflow-hidden rounded-lg shadow-lg">
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelsSection;
