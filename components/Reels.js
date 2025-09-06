{/* Horizontal scroll wrapper (mobile only) */}
<div className="md:hidden relative">
  <div
    ref={scrollRef}
    className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-4"
    style={{ paddingLeft: "1rem", paddingRight: "1rem" }} // ensures edges aren't cropped
  >
    {reels.map((reel) => (
      <div
        key={reel.id}
        className="flex-shrink-0 w-72 overflow-visible rounded-xl transform transition duration-500 ease-in-out hover:scale-105"
      >
        <video
          src={reel.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform transition duration-500 ease-in-out hover:scale-110 origin-center"
        />
      </div>
    ))}
  </div>

  {/* Optional arrows */}
  <div className="flex justify-between absolute top-1/2 left-0 right-0 px-4 z-20">
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
</div>
