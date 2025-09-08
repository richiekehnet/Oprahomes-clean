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
      className="py-20 px-4 text-center bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50 overflow-hidden"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
      {/* Accent line under heading */}
      <div className="w-24 h-1 bg-red-500 mx-auto mb-12 rounded-full"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-6 bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            style={{
              animation: `fadeInUp 0.6s ease forwards`,
              animationDelay: `${idx * 0.2}s`,
              opacity: 0,
            }}
          >
            <div className="text-4xl mb-4 transition-transform duration-300 ease-in-out hover:scale-110">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Keyframes for fadeInUp */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
