import React, { useRef, useState, useEffect } from "react";

const reels = [
  { id: 1, src: "/reel-1.mp4" },
  { id: 2, src: "/reel-2.mp4" },
  { id: 3, src: "/reel-3.mp4" },
  { id: 4, src: "/reel-4.mp4" },
  { id: 5, src: "/reel-5.mp4" }, // add more reels if needed
];

const Reels = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Scroll function
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "right" ? clientWidth : -clientWidth,
        behavior: "smooth",
      });
    }
  };

  // Update arrow states based on scroll position
  const updateArrows = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateArrows);
      updateArrows();
      return () => container.removeEventListener("scroll", updateArrows);
    }
  }, []);

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

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="overflow-hidden rounded-xl transform transition duration-500 ease-in-out hover:scale-105 drop-shadow-xl"
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

        {/* Mobile Horizontal Carousel */}
        <div className="md:hidden relative">
          {/* Scroll Arrows */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 px-2 z-20">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full transition ${
                canScrollLeft
                  ? "bg-white/30 text-white hover:bg-white/60"
                  : "bg-white/10 text-white/30 cursor-not-allowed"
              }`}
            >
              &#8249;
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-full transition ${
                canScrollRight
                  ? "bg-white/30 text-white hover:bg-white/60"
                  : "bg-white/10 text-white/30 cursor-not-allowed"
              }`}
            >
              &#8250;
            </button>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth py-2 px-4 snap-x snap-mandatory"
            style={{ paddingBottom: "10px" }} // extra space for hover zoom
          >
            {reels.map((reel) => (
              <div
                key={reel.id}
                className="flex-shrink-0 w-72 overflow-visible rounded-xl transform transition duration-500 ease-in-out hover:scale-105 drop-shadow-xl snap-center"
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
