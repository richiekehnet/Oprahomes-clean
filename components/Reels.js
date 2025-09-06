import React, { useRef } from "react";

const reels = [
  { id: 1, src: "/reel-1.mp4" },
  { id: 2, src: "/reel-2.mp4" },
  { id: 3, src: "/reel-3.mp4" },
  { id: 4, src: "/reel-4.mp4" },
  { id: 7, src: "/reel-7.mp4" },
  { id: 5, src: "/reel-5.mp4" },
  { id: 6, src: "/reel-6.mp4" }, // Add more manually if needed
];

const Reels = () => {
  const scrollRefDesktop = useRef(null);
  const scrollRefMobile = useRef(null);

  const scroll = (direction, ref) => {
    if (ref.current) {
      const container = ref.current;
      const reel = container.querySelector("div"); // first reel item
      if (!reel) return;

      const gap = 16; // matches Tailwind gap-4 (desktop: gap-6 = 24px)
      const scrollAmount = reel.clientWidth + gap;

      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="reels"
      className="relative w-full py-20"
      style={{
        backgroundImage: "url('/reels-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
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

        {/* Desktop Horizontal Scroll */}
        <div className="hidden md:block relative">
          {/* Scroll Arrows */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 px-2 z-20">
            <button
              onClick={() => scroll("left", scrollRefDesktop)}
              className="bg-white/30 text-white p-2 rounded-full hover:bg-white/60 transition"
            >
              &#8249;
            </button>
            <button
              onClick={() => scroll("right", scrollRefDesktop)}
              className="bg-white/30 text-white p-2 rounded-full hover:bg-white/60 transition"
            >
              &#8250;
            </button>
          </div>

          {/* Scrollable Desktop Container */}
          <div
            ref={scrollRefDesktop}
            className="flex gap-6 overflow-x-auto scroll-smooth py-2 px-2 snap-x snap-mandatory"
          >
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="flex-shrink-0 w-72 overflow-hidden rounded-xl transform transition duration-500 ease-in-out hover:scale-105 drop-shadow-xl snap-center"
              >
                <video
                  src={reel.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Horizontal Carousel */}
        <div className="md:hidden relative">
          {/* Scroll Arrows */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 px-2 z-20">
            <button
              onClick={() => scroll("left", scrollRefMobile)}
              className="bg-white/30 text-white p-2 rounded-full hover:bg-white/60 transition"
            >
              &#8249;
            </button>
            <button
              onClick={() => scroll("right", scrollRefMobile)}
              className="bg-white/30 text-white p-2 rounded-full hover:bg-white/60 transition"
            >
              &#8250;
            </button>
          </div>

          {/* Scrollable Mobile Container */}
          <div
            ref={scrollRefMobile}
            className="flex gap-4 overflow-x-auto scroll-smooth py-2 px-2 snap-x snap-mandatory"
          >
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="flex-shrink-0 w-72 overflow-hidden rounded-xl transform transition duration-500 ease-in-out hover:scale-105 drop-shadow-xl snap-center"
              >
                <video
                  src={reel.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reels;
