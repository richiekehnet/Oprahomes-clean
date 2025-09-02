import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero */}
      <section className="relative h-screen">
        <iframe
          className="absolute w-full h-full object-cover"
          src="https://www.youtube.com/embed/qpkg_Anh_vI?autoplay=1&mute=1&loop=1&playlist=qpkg_Anh_vI"
          title="Oprahomes Hero Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </section>

      {/* Instagram/Reels */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1,2,3,4].map(i => (
          <video key={i} src={`/reel-${i}.mp4`} autoPlay loop muted playsInline className="w-full h-64 object-cover rounded-lg" />
        ))}
      </section>

      {/* Services */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>🎥 Videography</div>
          <div>🏡 Buying/Selling</div>
          <div>🚁 Drone</div>
          <div>📸 Branding</div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="max-w-xl mx-auto flex flex-col gap-4">
          <input type="text" name="name" placeholder="Name" required className="p-2 border rounded" />
          <input type="email" name="email" placeholder="Email" required className="p-2 border rounded" />
          <textarea name="message" placeholder="Message" required className="p-2 border rounded"></textarea>
          <button type="submit" className="bg-black text-white p-2 rounded">Send</button>
        </form>
      </section>
    </div>
  )
}
