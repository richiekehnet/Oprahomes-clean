import React from "react";

const Services = () => {
  const services = [
    { icon: "🎥", title: "Videography", desc: "Cinematic videos that sell homes faster." },
    { icon: "🏡", title: "Buying & Selling", desc: "Expert guidance to achieve real estate goals." },
    { icon: "🚁", title: "Drone", desc: "Aerial footage showcasing properties cinematically." },
    { icon: "📸", title: "Branding", desc: "High-quality visuals to elevate your real estate brand." },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 text-center px-4 animate-fadeInUp">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
