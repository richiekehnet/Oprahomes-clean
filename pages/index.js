import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
import { FaYoutube, FaTiktok } from 'react-icons/fa';

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [currentVideoId, setCurrentVideoId] = useState('');
  
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="text-center py-20 px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Where Calgary’s Finest Homes Meet Cinematic Marketing
        </h1>
        <p className="text-gray-400 text-lg">Oprahomes | Realtor & Videographer</p>
      </section>

      <section className="py-20 px-6 md:px-20 bg-black text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Watch Our Best Work</h2>

        <ModalVideo
          channel="youtube"
          isOpen={videoOpen}
          videoId={currentVideoId}
          onClose={() => setVideoOpen(false)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Xx1a2b3C", "Yy4d5e6F", "Zz7g8h9I"].map((videoId, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentVideoId(videoId);
                setVideoOpen(true);
              }}
              className="cursor-pointer"
              >
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt={`Video thumbnail ${index + 1}`}
                  className="rounded-lg hover:opacity-80 transition duration-300"
                />
              </div>
            ))}
          </div>
        </section>


      
      {/* 🔽 Instagram contact link*/}
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


      {/* 🔽 contact me form below */}
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
    {/* 🔼 End Contact Form */}
        
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