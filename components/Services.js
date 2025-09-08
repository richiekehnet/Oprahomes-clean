import React from "react";

const Services = () => {
  const services = [
    { icon: "🎥", title: "Videography", desc: "Cinematic videos that sell homes faster." },
    { icon: "🏡", title: "Buying & Selling", desc: "Expert guidance to achieve real estate goals." },
    { icon: "🚁", title: "Drone", desc: "Aerial footage showcasing properties cinematically." },
    { icon: "📸", title: "Branding", desc: "High-quality visuals to elevate your real estate brand." },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",
      }}
    >
      {/* Subtle abstract pattern using pseudo-elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="rgba(0,0,0,0.02)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <h2 className="relative text-3xl md:text-4xl font-bold mb-12 z-10">Our Services</h2>
