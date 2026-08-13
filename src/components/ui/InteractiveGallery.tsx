"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface InteractiveGalleryProps {
  images: string[];
}

export default function InteractiveGallery({ images }: InteractiveGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-scroll thumbnails to keep active one in view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const container = thumbnailContainerRef.current;
      const activeThumbnail = container.children[currentIndex] as HTMLElement;
      if (activeThumbnail) {
        const scrollLeft = activeThumbnail.offsetLeft - container.offsetWidth / 2 + activeThumbnail.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [currentIndex]);

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center h-[90vh] min-h-[600px]">
      {/* Main Image Display */}
      <div className="relative w-full flex-grow bg-[#FAFAFA] overflow-hidden mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-8 mb-6 shrink-0">
        <button
          onClick={prevImage}
          className="w-12 h-12 border border-gray-300 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-colors"
          aria-label="Previous image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-sm font-medium tracking-widest text-gray-400">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={nextImage}
          className="w-12 h-12 border border-gray-300 flex items-center justify-center text-gray-500 hover:text-black hover:border-black transition-colors"
          aria-label="Next image"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thumbnail Strip */}
      <div 
        ref={thumbnailContainerRef}
        className="w-full overflow-x-auto flex items-center gap-4 pb-2 snap-x shrink-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          ::-webkit-scrollbar { display: none; }
        `}} />
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-24 overflow-hidden transition-all duration-300 snap-center ${
              i === currentIndex 
                ? "ring-2 ring-black ring-offset-2 opacity-100 scale-105 z-10" 
                : "opacity-40 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 96px, 128px"
              quality={50}
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
