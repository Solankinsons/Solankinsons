import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import UpcomingProjects from "@/components/home/UpcomingProjects";
import HospitalityPreview from "@/components/home/HospitalityPreview";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      
      {/* Story Banner Strip */}
      <div className="w-full bg-white flex flex-col items-center justify-center border-t border-b border-gray-200">
        <div className="text-center max-w-3xl mx-auto px-6 pt-24 pb-12">
          <h2 className="text-3xl md:text-5xl font-medium text-[#111111] mb-6">Over 50 Projects & More Than 500 Clients</h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            As one of the leading construction companies in Goa, our rich history spans over 50 years. With over 50 projects and more than 500 clients, we have played a crucial role in shaping the landscape of North Goa.
          </p>
        </div>
        <div className="w-full max-w-6xl mx-auto px-6 pb-24 flex items-center justify-center">
          <div className="relative w-full h-[300px] md:h-[500px]">
            <Image 
              src="/assets/projects-places.png" 
              alt="Over 50 Projects and More Than 500 Clients" 
              fill 
              className="object-contain" 
            />
          </div>
        </div>
        <Link href="/story" className="w-full py-10 md:py-14 flex items-center justify-center group hover:bg-gray-50 transition-colors cursor-pointer relative overflow-hidden border-t border-gray-100">
          <span className="text-lg md:text-xl font-light text-gray-900 uppercase tracking-[0.25em] group-hover:tracking-[0.3em] transition-all duration-500 relative z-10">
            Know Our Story
          </span>
        </Link>
      </div>

      <HospitalityPreview />
      <UpcomingProjects />
      <ContactSection />
    </main>
  );
}
