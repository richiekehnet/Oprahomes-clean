import React from "react";
import { useInView } from "react-intersection-observer";

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [whatWeDoRef, whatWeDoInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [reelsRef, reelsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="font-sans text-gray-900">

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center">
        <iframe
          className="absolute w-full h-full object-cover"
          src={`https://www.youtube.com/embed/${
            isMobile ? "Yn_Rdl2t0Qs" : "qpkg_Anh_vI"
          }?autoplay=1&mute=1&loop=1&playlist=${
            isMobile ? "Yn_Rdl2t0Qs" : "qpkg_Anh_vI"
          }`}
          title="Oprahomes Hero Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
        <div
          className={`absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-1000 ${
            heroInView ? "opacity-100 animate-fadeInUp" : "opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Where Calgary's Finest Homes Meet Cinematic Marketing
          </h1>
          <p className="text-white text-lg md:text-2xl mb-6">
            Realtor | Videographer | Oprahomes
          </p>
          <div className="flex gap-4">
            <a
              href="#services"
              className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition"
            >
              View Listings
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section
        ref={whatWeDoRef}
        className={`py-20 bg-gray-50 text-center px-4 transition-opacity duration-1000 ${
          whatWeDoInView ? "opacity-100 animate-fadeInUp" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
          At Oprahomes, we combine professional real estate expertise with
          cinematic marketing to help buyers, sellers, and investors achieve
          their goals. From high-quality property videos to aerial drone
          footage, we ensure every project tells a compelling story. Everyone
          is a client – your vision is our priority.
        </p>
      </section>

      {/* Instagram / Reels Section */}
      <section
        ref={reelsRef}
        id="reels"
        className={`py-20 bg-white text-center px-4 transition-opacity duration-1000 ${
          reelsInView ? "opacity-100 animate-fadeInUp" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Reels & Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <video
              key={i}
              className="w-full h-64 object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              src={`/reel-${i}.mp4`}
              autoPlay
              loop
              muted
              playsInline
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        id="services"
        className={`py-20 bg-gray-50 text-center px-4 transition-opacity duration-1000 ${
          servicesInView ? "opacity-100 animate-fadeInUp" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: "🎥", title: "Videography", desc: "Cinematic videos that sell homes faster." },
            { icon: "🏡", title: "Buying & Selling", desc: "Expert guidance to achieve real estate goals." },
            { icon: "🚁", title: "Drone", desc: "Aerial footage showcasing properties cinematically." },
            { icon: "📸", title: "Branding", desc: "High-quality visuals to elevate your real estate brand." },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-lg transition transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        id="contact"
        className={`py-20 bg-white text-center px-4 transition-opacity duration-1000 ${
          contactInView ? "opacity-100 animate-fadeInUp" : "opacity-0"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Ready to elevate your real estate marketing? Contact Oprahomes today.
        </p>
        <form
          action="https://formspree.io/f/richiekehnet@gmail.com"
          method="POST"
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <input type="text" name="name" placeholder="Your Name" className="p-3 border rounded" required />
          <input type="email" name="email" placeholder="Your Email" className="p-3 border rounded" required />
          <textarea name="message" placeholder="Your Message" rows="5" className="p-3 border rounded" required></textarea>
          <button type="submit" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Oprahomes. All rights reserved.</p>
      </footer>
    </div>
  );
}
