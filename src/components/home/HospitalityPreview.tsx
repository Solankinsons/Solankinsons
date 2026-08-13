"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HospitalityPreview() {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 2000);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsHovered(false);
  };

  return (
    <section className="w-full relative z-40 bg-white flex flex-col">
      <div className="w-full h-[60vh] md:h-[80vh] relative">
        <div 
          className="block relative w-full h-full outline-none overflow-hidden group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/assets/hospitality/amber Rooms wide.jpg"
                alt="Hospitality - Amber Rooms"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black opacity-30" />

          {/* White Strip on Hover */}
          <motion.div
            className="absolute bg-white z-10 bottom-0 left-0 right-0"
            initial={{ height: "0%" }}
            animate={{ height: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          <div className={`absolute inset-0 p-8 md:p-16 flex flex-col justify-center items-center text-center z-20 pointer-events-none transition-colors duration-500 ${isHovered ? 'text-black' : 'text-white'}`}>
            <motion.div
              animate={{ y: isHovered ? -10 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full max-w-full"
            >
              <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-4" style={{ fontFamily: "serif" }}>Hospitality</h3>
              <p className={`${isHovered ? 'text-black/80' : 'text-white/80'} text-lg font-light tracking-wide transition-colors duration-500`}>Porvorim, Goa</p>
              
              <motion.div 
                initial={{ opacity: 0, height: 0, marginTop: 0 }} 
                animate={{ 
                  opacity: isHovered ? 1 : 0, 
                  height: isHovered ? "auto" : 0,
                  marginTop: isHovered ? 32 : 0 
                }} 
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="overflow-hidden max-w-4xl mx-auto"
              >
                <p className="text-black/80 text-sm md:text-base leading-relaxed font-light line-clamp-6 md:line-clamp-none !text-center">
                  Amber Rooms is a quirky colorful place situated in the heart of Porvorim city. Central to anything you might want to do in Goa, it offers luxurious rooms and suites perfect for the modern explorer.
                </p>
              </motion.div>
              
              <div className="mt-8 text-center w-full">
                <Link 
                  href="/hospitality" 
                  className={`inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium border-b pb-1 transition-colors pointer-events-auto ${isHovered ? 'border-black hover:text-gray-500' : 'border-white/50 hover:border-white text-white/80 hover:text-white'}`}
                >
                  Explore Project
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
