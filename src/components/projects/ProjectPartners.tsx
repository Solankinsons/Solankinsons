"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LOGOS = [
  { src: "/assets/logos/Anchor.png", alt: "Anchor" },
  { src: "/assets/logos/Daikin.png", alt: "Daikin" },
  { src: "/assets/logos/Finolex.png", alt: "Finolex" },
  { src: "/assets/logos/Jaguar.png", alt: "Jaguar" },
  { src: "/assets/logos/Somany.png", alt: "Somany" },
  { src: "/assets/logos/otis-logo.png", alt: "Otis" },
];

export default function ProjectPartners() {
  return (
    <section className="py-24 bg-[#0A1A3A] border-t border-white/10 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-light tracking-[0.2em] uppercase text-white/90">
          Project Partners
        </h2>
        <div className="w-16 h-px bg-white/30 mx-auto mt-6" />
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex items-center overflow-hidden h-32">
        {/* Left/Right Gradients for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#0A1A3A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#0A1A3A] to-transparent z-10" />

        <motion.div 
          className="flex whitespace-nowrap items-center h-full"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {/* Repeat logos to create a seamless infinite loop */}
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="inline-flex items-center justify-center w-48 md:w-64 h-24 mx-8 md:mx-12 shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="relative w-full h-full">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  fill 
                  className="object-contain" 
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
