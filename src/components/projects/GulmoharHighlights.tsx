"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function GulmoharHighlights({ highlights }: { highlights: any[] }) {
  if (!highlights || highlights.length === 0) return null;
  
  return (
    <div className="w-full relative bg-gray-100 py-16 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {highlights.map((highlight: any, i: number) => (
          <motion.section 
            key={i} 
            className="relative w-full min-h-[70vh] flex flex-col lg:flex-row items-center justify-between bg-white rounded-[2rem] shadow-2xl p-6 md:p-12 lg:p-16 mb-24 sticky top-16 lg:top-24 border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Text Side */}
            <div className="w-full lg:w-1/3 mb-10 lg:mb-0 lg:pr-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-medium text-[#0A1A3A] mb-6 tracking-tight border-b-2 border-[#0A1A3A] pb-4 inline-block self-start">
                {highlight.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                {highlight.desc}
              </p>
            </div>
            
            {/* Image Side (Uncropped) */}
            <div className="w-full lg:w-2/3 h-[50vh] lg:h-[70vh] relative bg-white rounded-2xl overflow-hidden flex items-center justify-center">
              <Image 
                src={highlight.image} 
                alt={highlight.title} 
                fill 
                className="object-contain p-2"
                priority={i === 0}
              />
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
