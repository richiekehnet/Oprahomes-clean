import React from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      
      {/* Follow Us Text */}
      <p className="mb-4">Follow us for more cinematic property stories</p>
      
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <a 
          href="https://www.instagram.com/oprahomes" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl hover:text-pink-500 transition-colors duration-300" />
        </a>
        <a 
          href="https://www.tiktok.com/@oprahomes" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaTiktok className="text-2xl hover:text-black transition-colors duration-300" />
        </a>
        <a 
          href="https://www.youtube.com/@oprahomes" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-2xl hover:text-red-600 transition-colors duration-300" />
        </a>
      </div>
      
      {/* Copyright */}
      <p>&copy; 2025 Oprahomes. All rights reserved.</p>

    </footer>
  );
};

export default Footer;
