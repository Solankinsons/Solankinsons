"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "tulip-house",
    name: "Tulip House",
    location: "Porvorim, Goa",
    images: [
      "/assets/Tulip-house-main.png"
    ],
    description: "Tulip House represents the pinnacle of modern residential development in the serene environs of Porvorim, Goa. Conceived as a complete, ground-up architectural masterwork, this impressive multi-story building harmoniously blends luxury with highly functional living spaces."
  },
  {
    id: "gulmohar",
    name: "Gulmohar",
    location: "Goa",
    images: [
      "/assets/Gulmohar-Title.png"
    ],
    description: "Gulmohar, our project which aims to reconnect people with nature through meticulously thought-out architecture. While being nestled in lush greenery, it enables immersive access to the landscape, as well as all the amenities of an urban city in close proximity. Gulmohar is the product of a definitive view of the relationship between nature and humans."
  },
  {
    id: "panchist",
    name: "Panchist",
    location: "Goa",
    images: [
      "/assets/Panchist-main.jpg"
    ],
    description: "Panchist is a stunning testament to the art of architectural transformation. This comprehensive, top-to-bottom home renovation project located in the heart of Goa focuses on honoring the original structural integrity of a beloved residence while injecting it with a fresh, highly sophisticated modern design aesthetic."
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImageIdx((prev) => (prev + 1) % project.images.length);
      }, 2000); // Crossfade every 2 seconds on hover
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentImageIdx(0);
    }
    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

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

  // Determine text alignment based on index
  let alignClass = 'items-center text-center'; // Gulmohar (0)
  if (index === 1) alignClass = 'items-start text-left'; // Tulip House (1)
  if (index === 2) alignClass = 'items-end text-right'; // Panchist (2)

  const CardWrapper = 'div';
  const wrapperProps = { 
    className: 'block relative w-full h-full outline-none overflow-hidden group',
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  };

  return (
    <CardWrapper {...(wrapperProps as React.HTMLAttributes<HTMLDivElement>)}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIdx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={project.images[currentImageIdx]}
            alt={project.name}
            fill
            className="object-cover"
            sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
          />
          {/* If the image fails to load, we can show a placeholder background */}
          <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-gray-500 bg-gray-200">
             <span className="text-sm font-medium uppercase tracking-widest text-gray-400">Image Placeholder: {project.name}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-30" />

      {/* White Strip on Hover */}
      <motion.div
        className={`absolute bg-white z-10 ${
          index === 0 ? 'bottom-0 left-0 right-0' :
          index === 1 ? 'top-0 bottom-0 left-0' :
          'top-0 bottom-0 right-0'
        }`}
        initial={index === 0 ? { height: "0%" } : { width: "0%" }}
        animate={
          index === 0 
            ? { height: isHovered ? "100%" : "0%" } 
            : { width: isHovered ? "100%" : "0%" }
        }
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className={`absolute inset-0 p-8 md:p-16 flex flex-col justify-center z-20 pointer-events-none transition-colors duration-500 ${isHovered ? 'text-black' : 'text-white'} ${alignClass}`}>
        <motion.div
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-full"
        >
          <h3 className="text-4xl md:text-6xl font-medium tracking-tight mb-4">{project.name}</h3>
          <p className={`${isHovered ? 'text-black/80' : 'text-white/80'} text-lg font-light tracking-wide transition-colors duration-500`}>{project.location}</p>
          
          <motion.div 
            initial={{ opacity: 0, height: 0, marginTop: 0 }} 
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              height: isHovered ? "auto" : 0,
              marginTop: isHovered ? (index === 0 ? 32 : 24) : 0 
            }} 
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`overflow-hidden max-w-md ${index === 0 ? 'max-w-4xl mx-auto' : index === 2 ? 'ml-auto' : 'mr-auto'}`}
          >
            <p className={`text-black/80 text-sm md:text-base leading-relaxed font-light line-clamp-6 md:line-clamp-none ${index === 2 ? 'text-right' : 'text-left'} ${index === 0 ? '!text-center' : ''}`}>
              {project.description}
            </p>
          </motion.div>
          
          <div className={`mt-8 ${index === 2 ? 'text-right' : index === 1 ? 'text-left' : 'text-center'} w-full`}>
            <Link 
              href={`/projects/${project.id}`} 
              className={`inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium border-b pb-1 transition-colors pointer-events-auto ${isHovered ? 'border-black hover:text-gray-500' : 'border-white/50 hover:border-white text-white/80 hover:text-white'}`}
            >
              Explore Project
            </Link>
          </div>
        </motion.div>
      </div>
    </CardWrapper>
  );
}

export default function FeaturedProjects() {
  return (
    <section id="projects" className="w-full relative z-40 bg-white flex flex-col">
      {/* Floorplan Intro Banner */}
      <div className="w-full h-[500px] md:h-[700px] bg-white overflow-hidden relative flex items-center">
        {/* Large Image Container */}
        <motion.div
          className="absolute top-0 left-0 w-full md:w-[75%] h-[105%] transform -translate-x-4 -translate-y-12 md:translate-x-20 md:-translate-y-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <Image
            src="/assets/Projects-new.png"
            alt="Projects Overview"
            fill
            className="object-contain object-left"
            priority
          />
        </motion.div>
        
        {/* Floating Text on the Right */}
        <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full flex justify-end pointer-events-none mt-32 md:-mt-24">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: 0.2 }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-[#0A1A3A] tracking-tighter uppercase leading-none text-right">
              PROJECTS
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Featured Projects Layout */}
      <div className="w-full flex flex-col">
        
        {/* Gulmohar (Full Width) */}
        {projects.length > 0 && (
          <div className="w-full h-[60vh] md:h-[80vh] relative">
            <ProjectCard 
              project={projects[0]} 
              index={0} 
            />
          </div>
        )}

        {/* Split-screen Project Cards (Tulip and Panchist) */}
        {projects.length > 1 && (
          <div className="w-full min-h-[60vh] md:min-h-[80vh] flex flex-col md:flex-row">
            {projects.slice(1).map((project, i) => (
              <div key={project.id} className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative">
                <ProjectCard 
                  project={project} 
                  index={i + 1} 
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
