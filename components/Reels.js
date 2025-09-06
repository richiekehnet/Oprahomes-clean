import React from "react";

const Reels = () => {
  return (
    <section className="py-20 bg-white text-center px-4 animate-fadeInUp">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">Reels & Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <video
            key={i}
            className="w-full h-64 object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            src={`/reel-${i}.mp4`}
            autoPlay
            loop
            muted
            playsInline
          />
        ))}
      </div>
    </section>
  );
};

export default Reels;
