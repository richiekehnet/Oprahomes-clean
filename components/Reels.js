import { useState, useEffect } from "react";

const reels = [
  "reel-1.mp4",
  "reel-2.mp4",
  "reel-3.mp4",
  "reel-4.mp4",
];

export default function ReelsSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll to trigger section fade-in
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("reels-section");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="reels-section"
      className={`py-10 px-4 text-white relative overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      }`}
      style={{
        backgroundImage: "url('/reels-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-8">Reels & Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reels.map((video, index) => (
          <div
            key={video}
            className={`transition-transform duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 opacity-0 ${
              isVisible ? "animate-fadeIn" : ""
            }`}
            style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
          >
            <video
              src={`/${video}`}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        ))}
      </div>

      {/* Inline Tailwind animation for fadeIn */}
      <style jsx>{`
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </section>
  );
}
