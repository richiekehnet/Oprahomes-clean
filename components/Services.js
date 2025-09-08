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
        background: `
          linear-gradient(-45deg, #f9fafb, #f3f4f6, #e0e7ff, #fef3c7),
          url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)" opacity="0.05"/></svg>')`,
        backgroundBlendMode: "overlay",
        backgroundSize: "400% 400%, cover",
        animation: "gradientShift 15s ease infinite",
      }}
    >
      {/* Animated gradient keyframes */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%, center; }
            50% { background-position: 100% 50%, center; }
            100% { background-position: 0% 50%, center; }
          }
        `}
      </style>

      <h2 className="relative text-3xl md:text-4xl font-bold mb-12 z-10">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
