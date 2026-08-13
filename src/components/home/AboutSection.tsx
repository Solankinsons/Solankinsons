"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-32 md:py-48 bg-white relative z-40">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-sm md:text-base tracking-[0.2em] uppercase text-gray-400 mb-8"
        >
          A Legacy of Excellence
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-3xl md:text-5xl lg:text-6xl font-light text-[#111111] leading-tight mb-12"
        >
          Crafting architectural masterworks that seamlessly blend <span className="font-medium italic">modern luxury</span> with enduring quality.
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="w-px h-24 bg-gray-300 mx-auto"
        />
      </div>
    </section>
  );
}
