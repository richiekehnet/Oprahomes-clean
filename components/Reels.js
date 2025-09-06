import React, { useRef } from "react";

const reels = [
  { id: 1, src: "/reel-1.mp4" },
  { id: 2, src: "/reel-2.mp4" },
  { id: 3, src: "/reel-3.mp4" },
  { id: 4, src: "/reel-4.mp4" },
  { id: 5, src: "/reel-5.mp4" }, // add more reels here
];

const ReelsSection = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "right" ? clientWidth : -clientWidth,
        behavior: "smooth",
      });
    }
  };

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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Headings */}
        <h3 className="text-sm md:text-base font-semibold text-white/90 uppercase tracking-widest mb-2 drop-shadow-md">
          Our Services
        </h3>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
          Real Estate
        </h2>
        <p className="text-white text-base md:text-lg max-w-2xl mx-auto mb-12 drop-shadow-md">
          We help realtors showcase their listings through cinematic reels,
          providing buyers and sellers with an immersive property experience.
          Additionally, we assist construction companies in tracking project
          progress with consistent aerial footage, giving a clear view of every
          stage of development.
        </p>

        {/* Desktop arrows */}
        <div className="hidden md:flex justify-between absolute top-1/2 left-0 right-0 px-4 z-20">
          <button
            onClick={() => scroll("left")}
            className="bg-white/30 text-white p-3 rounded-full hover:bg-white/60 transition"
          >
            &#8249;
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-white/30 text-white p-3 rounded-full hover:bg-white/60 transition"
          >
            &#8250;
          </button>
        </div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 touch-pan-x"
        >
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="flex-shrink-0 w-72 rounded-xl drop-shadow-xl relative transform transition duration-500 ease-in-out hover:scale-105 snap-center"
            >
              {/* Inner wrapper allows double zoom without cropping */}
              <div className="w-full h-full overflow-visible">
                <video
                  src={reel.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-110 origin-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
