"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import BackToHome from "@/components/ui/BackToHome";
import ContactSection from "@/components/home/ContactSection";

const teamMembers = [
  {
    name: "Pravin Solanki",
    role: "Founder",
    bio: "A graduate from the Regional Engineering College in Nagpur, Mr. Solanki started his first ownership project under the name Solanki and Sons in 1986. His motto being \"Quality and Timely Delivery.\" he believes in undertaking projects one at a time so that they get their sole focus. At Solanki and Sons they believe there is no substitute for hard work. When you put in the work, and give it your best, success will follow.",
    image: "/team/Pravin Solanki.png",
  },
  {
    name: "Kunal Solanki",
    role: "Architect",
    bio: "Kunal was born in Goa. Growing up surrounded by dense forests, serene beaches, and majestic hills has shaped his modern approach to architecture. He was also exposed to diverse forms of art, music and architecture which inspired him to travel and understand how these elements impact lives. Through his projects, he aims to create a window into the Goa of his memories, with the goal of preserving it for future generations to enjoy.",
    image: "/team/Kunal Solanki.png",
  },
  {
    name: "Shubham Solanki",
    role: "Civil Engineer",
    bio: "Shubham Solanki is a civil engineer and the third generation of his family to join the construction and hospitality business. His goal is to grow the business by incorporating new ideas and innovation in construction design. He finds inspiration for the business by traveling and observing different design and cultures. He is also interested in entering the restaurant business, as he is a food enthusiast.",
    image: "/team/Shubham Solaki.png",
  },
  {
    name: "Rahul Solanki",
    role: "Architect",
    bio: "Rahul has always had an insatiable curiosity and a love for hands-on, creative pursuits, be it the art of sketching, painting, or pottery. Growing up, watching his father pour himself into his work with dedication and extreme attention to detail inspired Rahul to pursue a career in architecture. As an architect today, he aims to exceed client expectations by bringing their vision to life with innovative, beautiful, and functional design.",
    image: "/team/Rahul Solanki.png",
  },
  {
    name: "Raunak Solanki",
    role: "Civil Engineer & Sustainability Lead",
    bio: "With a family background in construction, Raunak Solanki, inspired by his father decided to take up civil engineering. A wildlife enthusiast and botanist, he has worked alongside a Conservation Architect on projects like forts, temples and churches. Eager to make the business more sustainable he aims to use locally sourced materials, reduce their carbon footprint and help them become one with the environment.",
    image: "/team/Rounak Solanki.png",
  },
  {
    name: "Sonam Kunkolikar",
    role: "Administration & Accounts",
    bio: "A B.Com Graduate with a Diploma in Computer Application, Sonam Kunkolikar has been working with Solanki and Sons for the last 4 years. Handling company accounts, and other administrative duties she believes she is continually growing professionally alongside the company.",
    image: "/team/Sonam.jpg",
  },
  {
    name: "Hira Jalmi",
    role: "Administration & Accounts",
    bio: "A B.Com Graduate with a diploma in Accounting, Hira Jalmi has been working with Solanki and Sons for the last 20 years. Handling company accounts and various other administrative duties over the past two decades she has grown professionally in tandem with the company.",
    image: "/team/Hira.jpg",
  }
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const HorizontalScrollTeam = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(teamMembers.length - 1) * 100}vw`]);

  return (
    <section ref={targetRef} className="relative bg-[#FAFAFA]" style={{ height: `${teamMembers.length * 100}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0 w-max">
          {teamMembers.map((member) => (
             <div key={member.name} className="w-screen h-screen flex flex-col items-center justify-center px-6">
                <div className="max-w-4xl w-full mx-auto flex flex-col items-center">
                  
                  {/* Image */}
                  <div className="w-full flex justify-center mb-6">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      width={1200}
                      height={800}
                      className="w-auto h-auto max-w-full max-h-[45vh] rounded-xl shadow-xl hover:scale-105 transition-transform duration-1000 object-contain"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="text-center px-4">
                    <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-xs md:text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">{member.role}</p>
                    <p className="text-gray-600 font-light leading-relaxed max-w-3xl mx-auto text-base md:text-lg">
                      {member.bio}
                    </p>
                  </div>

                </div>
             </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default function StoryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-gray-900">
      
      {/* Container for Hero and The House (Regular Scroll) */}
      <div className="pt-32 pb-24 container mx-auto px-6 max-w-7xl">
        
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
            The <span className="font-medium">Story</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
            Discover the legacy, the passion, and the people behind Solanki & Sons.
          </p>
        </motion.div>

        {/* The House Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="mb-12"
        >
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl text-[#0A1A3A] font-serif mb-6">A Legacy Built on Trust</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Our legacy began in 1986 with the launch of our first project, Swastik. We have remained dedicated to delivering quality homes to our customers, and have since completed over 50 projects in the Porvorim and Panjim.
            </p>
          </div>
          
          <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] bg-gray-200 rounded-xl overflow-hidden shadow-2xl">
            {/* The Swastik Apartment Image */}
            <Image 
              src="/team/Apartment.png" 
              alt="Swastik Apartment" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </motion.section>
      </div>

      {/* Title for the Team Section before horizontal scroll begins */}
      <div className="bg-[#FAFAFA] py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">The <span className="font-medium">Team</span></h2>
          <div className="h-[1px] w-24 bg-black mx-auto"></div>
        </motion.div>
      </div>

      {/* Horizontal Scroll Team Section */}
      <HorizontalScrollTeam />

      {/* Final Group Photo Section */}
      <section className="bg-white py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light text-[#0A1A3A] mb-6">Building the Future, <span className="font-medium">Together</span></h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
              At Solanki & Sons, we are more than just a company; we are a family. Our collective expertise, shared passion, and unwavering commitment to quality continue to drive us forward as we shape the skyline for generations to come.
            </p>
          </motion.div>

        </div>
      </section>

      <BackToHome />
      <ContactSection />
    </main>
  );
}
