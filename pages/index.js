import { FaTiktok } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* 🔥 Hero Section with Cinematic Video */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="/hero-reel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full bg-black/50 px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Where Calgary’s Finest Homes Meet Cinematic Marketing
        </h1>
        <p className="text-gray-200 text-lg md:text-xl drop-shadow">
          Oprahomes | Realtor & Videographer
        </p>
      </div>
    </section>

      {/* 🔹 Instagram Teaser */}
      <section className="py-20 px-6 md:px-20 bg-neutral-800 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Follow Us on Instagram</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Behind the scenes, aerial reels, and the finest homes in Calgary.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <a
              key={i}
              href="https://www.instagram.com/oprahomes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`/sample-ig${i}.jpg`}
                alt={`Instagram post ${i}`}
                className="rounded-lg hover:opacity-80 transition duration-300"
              />
            </a>
          ))}
        </div>
      </section>

      {/* 🔹 Our Services */}
      <section className="py-20 px-6 md:px-20 bg-black text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
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
              className="bg-neutral-900 p-6 rounded-lg hover:scale-105 transition-transform duration-300 border border-gray-800"
          >
            <div className="text-4xl mb-4">{service.emoji}</div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>

      {/* 🔹 Contact Form */}
      <section className="py-20 px-6 md:px-20 bg-neutral-900 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Work With Oprahomes</h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
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
            className="w-full p-3 rounded bg-black border border-gray-700 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-black border border-gray-700 text-white"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            required
            className="w-full p-3 rounded bg-black border border-gray-700 text-white"
          />
          <textarea
            name="message"
            placeholder="Tell us how we can help..."
            required
            rows="5"
            className="w-full p-3 rounded bg-black border border-gray-700 text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* 🔹 Footer */}
      <footer className="py-10 text-center bg-black border-t border-gray-800 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Oprahomes. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4 text-white text-lg">
          <a href="https://www.instagram.com/oprahomes" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.tiktok.com/@oprahomes" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a href="mailto:oprahomes@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  );
}
