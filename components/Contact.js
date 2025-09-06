import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-center px-4 animate-fadeInUp">
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
  );
};

export default Contact;
