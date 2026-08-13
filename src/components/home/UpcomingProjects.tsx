"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function UpcomingProjects() {
  return (
    <section id="upcoming" className="py-32 bg-[#111111] text-white">
      <div className="container mx-auto px-6 max-w-7xl text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="text-5xl md:text-7xl font-medium tracking-tight mb-24"
        >
          Upcoming Projects
        </motion.h2>
        
        <div className="w-full relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          <Image 
            src="/assets/asoka-blueprint.png" 
            alt="Solsons Asoka Blueprint" 
            fill 
            className="object-cover opacity-70" 
          />
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="relative z-10 text-center px-6">
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight uppercase"
            >
              Solsons Asoka<br />Porvorim Goa
            </motion.h3>
          </div>
        </div>

        <motion.p 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl font-light tracking-[0.3em] uppercase text-gray-400 mt-12"
        >
          Coming Soon
        </motion.p>
      </div>
    </section>
  );
}
