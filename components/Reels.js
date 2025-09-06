import React, { useEffect, useState } from "react";

const ReelsSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const section = document.getElementById("reels-section");
    const handleVisibility = () => {
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleVisibility);
    handleVisibility(); // check on load
    return () => window.removeEventListener("scroll", handleVisibility);
  }, []);

  const reels = ["/reel-1.mp4", "/reel-2.mp4", "/reel-3.mp4", "/reel-4.mp4"];

  return (
    <section
      id="reels-section"
      className={`py-10 px-4 text-white relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      }`}
      style={{
        backgroundImage: "url('/reels-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: `center ${offsetY * 0.5}px`,
        backgroundAttachment: "scroll",
        transition: "background-position 0.1s ease-out",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-center mb-6">
          Reels & Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel, idx) => (
            <div
              key={idx}
              className="w-full transform transition-transform duration-500 ease-in-out hover:scale-105 hover:-translate-y-2"
            >
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
      </div>
    </section>
  );
};

export default ReelsSection;
