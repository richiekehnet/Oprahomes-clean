import React, { useState, useRef } from "react";

const Services = () => {
  const services = [
    {
      icon: "🎥",
      title: "Videography",
      desc: "Cinematic videos that sell homes faster.",
      extra: "We craft cinematic property videos using high-end cameras and drones to showcase homes like never before.",
    },
    {
      icon: "🏡",
      title: "Buying & Selling",
      desc: "Expert guidance to achieve real estate goals.",
      extra: "From start to finish, we ensure a smooth buying or selling experience, with advice tailored to Calgary’s market.",
    },
    {
      icon: "🚁",
      title: "Drone",
      desc: "Aerial footage showcasing properties cinematically.",
      extra: "Our drone footage captures unique perspectives of properties, construction projects, ideal for listings and marketing campaigns.",
    },
    {
      icon: "📸",
      title: "Branding",
      desc: "High-quality visuals to elevate your real estate brand.",
      extra: "We help realtors and developers create a cohesive brand identity with professional photos, videos, and design.",
    },
  ];

  const [expanded, setExpanded] = useState(Array(services.length).fill(false));
  const refs = useRef([]);

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  // Helper: split text into 4 segments
  const splitText = (text) => {
    const len = text.length;
    const quarter = Math.ceil(len / 4);
    return [
      text.slice(0, quarter),
      text.slice(quarter, quarter * 2),
      text.slice(quarter * 2, quarter * 3),
      text.slice(quarter * 3),
    ];
  };

  return (
    <section
      id="services"
      className="py-20 px-4 text-center relative overflow-hidden"
      style={{
        background: "linear-gradient(-45deg, #f9fafb, #f3f4f6, #e0e7ff, #fef3c7)",
        backgroundSize: "400% 400%",
        animation: "gradientShift 15s ease infinite",
      }}
    >
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <h2 className="relative text-3xl md:text-4xl font-bold mb-12 z-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {services.map((service, idx) => {
          const segments = splitText(service.extra);

          return (
            <div key={idx} className="flex flex-col">
              <div
                onClick={() => toggleExpand(idx)}
                className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-2xl cursor-pointer flex flex-col"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p>{service.desc}</p>

                <div
                  ref={(el) => (refs.current[idx] = el)}
                  style={{
                    maxHeight: expanded[idx]
                      ? refs.current[idx]?.scrollHeight + "px"
                      : "0px",
                    transition: "max-height 0.6s ease-in-out",
                    overflow: "hidden",
                    marginTop: expanded[idx] ? "1rem" : "0",
                  }}
                >
                  <p className="text-sm text-gray-600 flex flex-col">
                    {segments.map((seg, i) => (
                      <span
                        key={i}
                        style={{
                          opacity: expanded[idx] ? 1 : 0,
                          transform: expanded[idx] ? "translateY(0)" : "translateY(10px)",
                          transition: "opacity 0.4s ease, transform 0.4s ease",
                          transitionDelay: expanded[idx] ? `${0.1 + i * 0.15}s` : "0s",
                          display: "block",
                        }}
                      >
                        {seg}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
