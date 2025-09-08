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
            footerObserver.disconnect();
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
            } hover:shadow-[0_0_8px_rgba(255,255,0,0.5)] animate-slow-pulse hover:animate-shimmer`}
            style={{ transitionDelay: `${idx * 200}ms` }}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <p className="mt-6">&copy; {new Date().getFullYear()} Oprahomes. All rights reserved.</p>

      <style jsx>{`
        @keyframes slow-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-slow-pulse {
          animation: slow-pulse 2s ease-in-out infinite;
        }

        .hover\\:animate-shimmer:hover {
          animation: shimmer 1.5s linear infinite;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.2) 0%,
            rgba(255,255,255,0.6) 50%,
            rgba(255,255,255,0.2) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
