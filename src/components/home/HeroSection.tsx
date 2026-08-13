"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textLeftRef = useRef<HTMLSpanElement>(null);
  const textRightRef = useRef<HTMLSpanElement>(null);
  const buildingRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro Animation (on load)
      gsap.from(textLeftRef.current, {
        x: "-50vw",
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2
      });

      gsap.from(textRightRef.current, {
        x: "50vw",
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.2
      });

      // Create a timeline that is scrubbed with scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%", // Pin for 150% of viewport height
          scrub: 1, // Smooth scrubbing
          pin: true, // Pin the section while animating
          pinSpacing: false, // Allow next sections to overlap and cover the building
        }
      });

      // Clouds rise up
      tl.to(cloudsRef.current, {
        y: "0%", // Move to original position (starts lower)
        ease: "none"
      }, 0);

      // Text splits: SOLANKI moves left, BUILDERS moves right
      tl.fromTo(textLeftRef.current, 
        { x: 0, opacity: 1 },
        { x: "-100vw", opacity: 0, ease: "power2.in" },
        0
      );

      tl.fromTo(textRightRef.current, 
        { x: 0, opacity: 1 },
        { x: "100vw", opacity: 0, ease: "power2.in" },
        0
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-white flex flex-col"
    >
      {/* Text Area - Overlapping building slightly */}
      <div className="absolute top-[25vh] w-full flex items-center justify-center z-20">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-[#0A1A3A] text-center leading-none tracking-tight transform-gpu flex flex-row items-center justify-center gap-4 md:gap-6 uppercase whitespace-nowrap">
          <span ref={textLeftRef} className="block transform-gpu">SOLANKI</span>
          <span ref={textRightRef} className="block transform-gpu">& SONS</span>
        </h1>
      </div>

      {/* Bottom 2/3: Building Image */}
      <div
        ref={buildingRef}
        className="absolute bottom-0 w-full h-[67vh] z-10 transform-gpu"
      >
        <Image
          src="/assets/final-landing.png"
          alt="Solanki Building Render"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Fade to white at the top to remove the hard edge */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />
      </div>

      {/* 3. Clouds Layer (Foreground) */}
      <div
        ref={cloudsRef}
        className="absolute bottom-0 left-0 right-0 z-30 h-[250px] md:h-[350px] transform-gpu translate-y-[60%] overflow-hidden"
      >
        <div className="flex w-[110%] h-full -ml-[5%]">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="relative w-1/5 h-full">
              <Image
                src="/assets/clouds.png"
                alt="Cloud transition"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          ))}
        </div>
        {/* Gradient mask to blend into the white section below it */}
        <div className="absolute bottom-[-2px] left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
}
