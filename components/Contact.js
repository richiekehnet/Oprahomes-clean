import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Use Formspree fetch API
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
          form.reset();
        } else {
          alert("Oops! There was a problem submitting your form.");
        }
      })
      .catch(() => {
        alert("Oops! There was a problem submitting your form.");
      });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white text-center px-4 sm:px-6 md:px-0 animate-fadeInUp"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
        Ready to elevate your real estate marketing? Contact Oprahomes today.
      </p>

      {submitted ? (
        <p className="text-green-600 font-semibold text-lg animate-fadeInUp">
          Thank you! Your message has been sent. We'll get back to you soon.
        </p>
      ) : (
        <form
          action="https://formspree.io/f/xzzvvpwg"
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 border rounded focus:ring-2 focus:ring-black focus:outline-none transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 border rounded focus:ring-2 focus:ring-black focus:outline-none transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 border rounded focus:ring-2 focus:ring-black focus:outline-none transition"
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 hover:scale-105 transform transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;
