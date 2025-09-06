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
      className="relative w-full py-20"
      style={{
        backgroundImage: "url('/reels-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Small heading */}
        <h3 className="text-sm md:text-base font-semibold text-white/90 uppercase tracking-widest mb-2 drop-shadow-md">
          Our Services
        </h3>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
          Real Estate
        </h2>

        {/* Services description */}
        <p className="text-white text-base md:text-lg max-w-2xl mx-auto mb-12 drop-shadow-md">
          We help realtors showcase their listings through cinematic reels,
          providing buyers and sellers with an immersive property experience.
          Additionally, we assist construction companies in tracking project
          progress with consistent aerial footage, offering a clear view of
          every stage of development.
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
                playsInline // fixes mobile autoplay
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
