import React from "react";
import Header from "../components/Header";
import dynamic from "next/dynamic";
import WhatWeDo from "../components/WhatWeDo";
import Reels from "../components/Reels";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Hero video as dynamic component to avoid SSR issues
const Hero = dynamic(() => import("../components/Hero"), { ssr: false });

export default function Home() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Hero />
      <WhatWeDo />
      <Reels />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
