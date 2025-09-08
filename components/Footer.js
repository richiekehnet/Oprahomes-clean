import React, { useEffect, useState } from "react";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  const [iconsVisible, setIconsVisible] = useState(false);

  useEffect(() => {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIconsVisible(true);
            footerObserver.disconnect(); // Trigger only once
          }
        });
      },
      { threshold: 0.3 }
    );

    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerObserver.observe(footerElement);
    }

    return () => footerObserver.disconnect();
  }, []);

  const socialLinks = [
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/oprahomes/",
      name: "Instagram",
    },
    {
      icon: <SiTiktok />,
      url: "https://www.tiktok.com/@oprahomes",
      name: "TikTok",
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@oprahomes",
      name: "YouTube",
    },
  ];

  return (
    <footer
      id="footer"
      className="bg-gray-900 text-white py-8 text-center relative overflow-hidden"
    >
      <p className="mb-4 text-lg">
        Follow us for more cinematic property stories.
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-2">
        {socialLinks.map((social, idx) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl transition-all duration-700 ease-out transform ${
              iconsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            } hover:text-yellow-400 hover:drop-shadow-[0_0_12px_rgba(255,255,0,0.8)] hover:animate-pulse`}
            style={{ transitionDelay: `${idx * 200}ms` }}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <p className="mt-6">&copy; {new Date().getFullYear()} Oprahomes. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
