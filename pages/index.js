import { FaTiktok } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans overflow-x-hidden">

      {/* 🔼 Header */}
      <header className="fixed top-0 w-full bg-white text-black z-50 shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="font-bold text-xl">Oprahomes</h1>
        <nav className="space-x-4 text-sm md:text-base">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="https://www.instagram.com/oprahomes" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
        </nav>
      </header>

      {/* 🔥 Hero Section with Responsive YouTube Embeds */}
      <section className="relative w-full overflow-hidden pt-20 h-screen">
        {/* YouTube Portrait for Mobile */}
        <div className="block sm:hidden absolute inset-0 w-full h-full z-0">
          <div className="relative w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/Yn_Rdl2t0Qs?autoplay=1&mute=1&controls=0&loop=1&playlist=Yn_Rdl2t0Qs&modestbranding=1&showinfo=0"
              title="Mobile Hero Reel"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* YouTube Landscape for Desktop/Tablet */}
        <div className="hidden sm:block absolute inset-0 w-full h-full z-0">
          <div className="relative w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/qpkg_Anh_vI?autoplay=1&mute=1&controls=0&loop=1&playlist=qpkg_Anh_vI&modestbranding=1&showinfo=0"
              title="Desktop Hero Reel"
              className="absolute top-50 left-50 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Overlayed Hero Text */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Welcome to Oprahomes
          </h1>
          <p className="text-gray-200 text-lg md:text-xl drop-shadow">
            Oprahomes | Realtor & Videographer
          </p>
        </div>
      </section>

      {/* 🔹 Instagram Teaser with Local Portrait Videos */}
      <section className="py-20 px-6 md:px-20 bg-neutral-100 text-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Follow Us on Instagram</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Behind the scenes, aerial reels, and the finest homes in Calgary.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <video
              key={i}
              autoPlay
              muted
              loop
              playsInline
              className="rounded-lg shadow-md w-full h-auto object-cover"
              src={`/reel-${i}.mp4`}
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      </section>

      {/* 🔹 Our Services Section */}
      <section id="services" className="py-20 px-6 md:px-20 bg-white text-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Providing cinematic solutions for Calgary’s premium real estate market.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Real Estate Videography", emoji: "🎥" },
            { title: "Buying & Selling Homes", emoji: "🏡" },
            { title: "Drone & Aerial Tracking", emoji: "🚁" },
            { title: "Branding for Realtors", emoji: "📸" }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-neutral-100 p-6 rounded-lg hover:scale-105 transition-transform duration-300 border border-gray-200"
            >
              <div className="text-4xl mb-4">{service.emoji}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Contact Form Section */}
      <section id="contact" className="py-20 px-6 md:px-20 bg-neutral-100 text-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Work With Oprahomes</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          Whether you’re a realtor, buyer, seller, or developer — we’d love to hear from you.
        </p>
        <form
          action="https://formspree.io/f/xzzvvpwg"
          method="POST"
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-white border border-gray-300 text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-white border border-gray-300 text-black"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            className="w-full p-3 rounded bg-white border border-gray-300 text-black"
          />
          <textarea
            name="message"
            placeholder="Tell us how we can help..."
            required
            rows="5"
            className="w-full p-3 rounded bg-white border border-gray-300 text-black"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* 🔹 Footer Section */}
      <footer className="py-10 text-center bg-white border-t border-gray-200 text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Oprahomes. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4 text-black text-lg">
          <a href="https://www.instagram.com/oprahomes" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@oprahomes" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="mailto:oprahomes@gmail.com">Email</a>
        </div>
      </footer>

    </div>
  );
}
