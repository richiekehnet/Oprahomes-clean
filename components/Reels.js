import React from "react";

const ReelsSection = () => {
  const reels = [
    "/reel-1.mp4",
    "/reel-2.mp4",
    "/reel-3.mp4",
    "/reel-4.mp4"
  ];

  return (
    <section className="py-10 px-4 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-6">Reels & Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reels.map((reel, idx) => (
          <div key={idx} className="w-full">
            <video
              src={reel}
              autoPlay
              muted
              loop
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReelsSection;
