import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import ContactSection from "@/components/home/ContactSection";
import InteractiveGallery from "@/components/ui/InteractiveGallery";
import GulmoharHighlights from "@/components/projects/GulmoharHighlights";
import ProjectPartners from "@/components/projects/ProjectPartners";
import { Car, TreePine, ArrowUpCircle, ShieldCheck, Gem, Download, FileText, LayoutTemplate, Building } from "lucide-react";
import BackToHome from "@/components/ui/BackToHome";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const projectData: Record<string, any> = {
  "gulmohar": {
    name: "Gulmohar",
    status: "sold",
    location: "Goa",
    hero: "/assets/Gulmohar-Title.png",
    about: "Gulmohar, our project which aims to reconnect people with nature through meticulously thought-out architecture. While being nestled in lush greenery, it enables immersive access to the landscape, as well as all the amenities of an urban city in close proximity. Gulmohar is the product of a definitive view of the relationship between nature and humans.",
    apartments: [
      {
        title: "1 BHK Apartments",
        desc: "Our compact, yet spacious 1 bedroom apartments have a built up area of 81.46 sq.m. The apartment is Vaastu compliant and consists of a living room, dining area, kitchen, a common bathroom laundry room, a bedroom and 2 balconies.",
        image: "/assets/gulmohar-1bhk.jpg"
      },
      {
        title: "2 BHK Apartments",
        desc: "Our opulent 2 bedroom apartments have a built up area of 108.03 sq.m. The apartment consists of a living room, large dining area and open kitchen, two bedrooms & bathrooms, a laundry room and 2 balconies with a stunning river view.",
        image: "/assets/gulmohar-2bhk.jpg"
      }
    ],
    amenities: [
      { title: "Covered Parking", desc: "Every apartment will be provided with private covered parking ensuring your four wheelers are always safe & clean." },
      { title: "Garden Area", desc: "A beautifully landscaped outdoor garden ideal for all residents, young and old to relax and enjoy." },
      { title: "Children’s Play Area", desc: "An outdoor space for children to play/engage in recreational activities, featuring swings & other playground spaces." },
      { title: "High Speed Elevator", desc: "No more waiting around, every block is equipped with OTIS high speed elevators." },
      { title: "Gated Complex", desc: "Experience the safety and security of a gated complex and community." },
      { title: "Premium Fittings", desc: "We've equipped each apartment with top-of-the-line premium fittings." }
    ],
    highlights: [
      {
        image: "/assets/gulmohar-highlight-1.png",
        title: "Modern Architecture",
        desc: "Designed with a contemporary aesthetic that perfectly blends form and function for everyday luxury."
      },
      {
        image: "/assets/gulmohar-highlight-2.png",
        title: "Lush Surroundings",
        desc: "Nestled in nature, offering serene views and a peaceful environment away from the city hustle."
      },
      {
        image: "/assets/gulmohar-highlight-3.png",
        title: "Spacious Living",
        desc: "Expansive layouts designed to maximize natural light and cross-ventilation."
      },
      {
        image: "/assets/gulmohar-highlight-4.png",
        title: "Premium Finishes",
        desc: "Every corner is crafted with the highest quality materials and attention to detail."
      }
    ],
    brochure: "/assets/GULMOHAR_BROCHURE.pdf"
  },
  "tulip-house": {
    name: "Tulip House",
    location: "Porvorim, Goa",
    hero: "/assets/Tulip-house-main.png",
    about: "An exclusive development featuring two 2BHK apartments and one luxurious 3BHK penthouse. Designed with precision, Tulip House offers premium amenities in a highly connected neighborhood.",
    amenities: [
      { title: "RFID Access", desc: "Gated project with advanced RFID access control for top-tier security." },
      { title: "OTIS Elevators", desc: "High-speed OTIS Elevators equipped with ARD backup for safety." },
      { title: "Dedicated Parking", desc: "Private dedicated parking with built-in EV charging points." },
      { title: "Premium Flooring", desc: "Elegant and durable premium vitrified tile flooring throughout." },
      { title: "CCTV Surveillance", desc: "24/7 comprehensive CCTV surveillance across the entire premises." }
    ]
  },
  "panchist": {
    name: "Panchist",
    location: "Goa",
    hero: "/assets/Panchist-main.jpg",
    aboutTitle: "Panchist — A Home Reimagined",
    about: [
      "Panchist is a 6-bedroom residence of Umesh and Veena Pai, thoughtfully renovated and restored with care and intention.",
      "Originally a 3-bedroom duplex, the home has been seamlessly transformed into a spacious 6-bedroom house. It now features two entertainment rooms and a naturally lit kitchen—designed around a language that blends modern sensibilities with traditional warmth.",
      "Every space is shaped by light, creating an open and inviting atmosphere throughout.",
      "This project holds a special place for us. Having grown up in this home, Umesh and Veena have always been like family.",
      "We, along with Rahul, Shubham, and Raunak Solanki, worked tirelessly on every detail to bring this transformation to life.",
      "Being entrusted with reimagining their home was not just a responsibility—it was a privilege.",
      "We’re grateful to have been a part of building Panchist."
    ],
    gallery: [
      "/assets/panchist-2.jpg",
      "/assets/panchist-1.jpg",
      "/assets/tulip-placeholder.jpg"
    ]
  }
};

const SlideIcon = ({ className, strokeWidth = 2 }: { className?: string, strokeWidth?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={strokeWidth} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M6 21V4" />
    <path d="M10 21V4" />
    <path d="M6 8h4" />
    <path d="M6 12h4" />
    <path d="M6 16h4" />
    <path d="M6 4h5" />
    <path d="M11 4l8 15" />
    <path d="M19 19h3" />
  </svg>
);

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projectData[resolvedParams.slug];

  if (!project) {
    notFound();
  }

  // Dynamically load gallery images for Panchist
  let panchistGalleryImages: string[] = [];
  if (resolvedParams.slug === "panchist") {
    try {
      const galleryDir = path.join(process.cwd(), 'public', 'assets', 'panchist-gallery');
      const files = fs.readdirSync(galleryDir);
      panchistGalleryImages = files
        .filter(file => file.match(/\.(jpg|jpeg|png)$/i))
        .map(file => `/assets/panchist-gallery/${file}`);
    } catch (e) {
      console.error("Error reading gallery directory", e);
    }
  }

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Project Hero (Static, no cloud animation) */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-end pb-24">
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.hero} 
            alt={project.name} 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-white">
          <Link href="/#projects" className="text-white/60 hover:text-white transition-colors uppercase tracking-widest text-xs font-medium mb-6 inline-block">
            &larr; Back to Projects
          </Link>
          <div className="flex items-center gap-6 mb-2">
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight">{project.name}</h1>
            {project.status === 'sold' && (
              <div className="bg-red-600/90 backdrop-blur-sm px-4 py-1.5 rounded flex items-center justify-center translate-y-1">
                <span className="text-white text-sm md:text-base font-bold tracking-[0.2em] uppercase">Sold</span>
              </div>
            )}
          </div>
          <p className="text-xl font-light tracking-wide text-white/80">{project.location}</p>
        </div>
      </section>

      {/* About Project */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">About The Project</h2>
          {project.aboutTitle && (
            <h3 className="text-3xl md:text-5xl font-medium text-[#111111] mb-12">{project.aboutTitle}</h3>
          )}
          
          {Array.isArray(project.about) ? (
            <div className="flex flex-col gap-8 text-xl md:text-2xl font-light text-[#111111] leading-relaxed">
              {project.about.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ) : (
            <p className="text-2xl md:text-4xl font-light text-[#111111] leading-relaxed">
              {project.about}
            </p>
          )}
        </div>
      </section>

      {resolvedParams.slug === "gulmohar" ? (
        <>
          {/* Apartments Available */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-medium text-[#111111] mb-6">Apartments Available</h2>
                <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                  Thoughtfully designed, each apartment is built with the highest quality materials & fittings.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {project.apartments.map((apt: any, i: number) => (
                  <div key={i} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow group">
                    {apt.image && (
                      <div className="relative w-full h-64 md:h-80 overflow-hidden">
                        <Image 
                          src={apt.image} 
                          alt={apt.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                      </div>
                    )}
                    <div className="p-10 md:p-14 flex flex-col items-start flex-grow">
                      <h3 className="text-2xl font-medium text-[#111111] mb-6 border-b-2 border-[#111111] pb-2 inline-block">{apt.title}</h3>
                      <p className="text-gray-600 font-light leading-relaxed text-lg">
                        {apt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Project Highlights (Full Screen Sticky Scroll) */}
          {project.highlights && (
            <GulmoharHighlights highlights={project.highlights} />
          )}

          {/* Brochure CTA */}
          <section className="py-24 bg-[#0A1A3A] text-white relative z-20">
            <div className="container mx-auto px-6 max-w-4xl text-center flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-medium mb-6">for more info of Gulmohar</h2>
              <p className="text-lg md:text-xl font-light text-white/80 mb-12">
                If you’d like to learn more about Solsons Gulmohar and view its floor plans, download our brochure!
              </p>
              <a 
                href={project.brochure} 
                download
                className="bg-white text-[#0A1A3A] hover:bg-gray-100 transition-colors px-8 py-4 rounded-full font-medium tracking-wide uppercase text-sm inline-flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download Brochure
              </a>
            </div>
          </section>
        </>
      ) : (
        <>
          {resolvedParams.slug === "panchist" ? (
            <section className="py-12 bg-white w-full">
              <div className="w-full">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-5xl font-medium text-[#111111]">Project Gallery</h2>
                </div>
                <InteractiveGallery images={panchistGalleryImages} />
              </div>
            </section>
          ) : project.gallery && project.gallery.length > 0 ? (
            <section className="py-12 bg-gray-50">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.gallery.map((img: string, i: number) => (
                    <div key={i} className="relative aspect-square md:aspect-[3/4] overflow-hidden rounded-xl group">
                      <Image 
                        src={img} 
                        alt={`Gallery ${i}`} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {/* Layout Plans */}
          {project.floorplan && (
            <section className="py-24 md:py-32 bg-white">
              <div className="container mx-auto px-6 max-w-5xl">
                <h3 className="text-3xl font-medium mb-12 text-[#111111] text-center">Layout Plans</h3>
                <div className="w-full aspect-[4/3] md:aspect-[16/9] relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center p-8">
                  <Image 
                    src={project.floorplan} 
                    alt="Floor Plan" 
                    fill 
                    className="object-contain p-4 md:p-12"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Tulip House Plans Gallery */}
          {resolvedParams.slug === "tulip-house" && (
            <section className="py-16 md:py-24 bg-white border-t border-gray-200">
              <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-medium text-[#111111] mb-6">Project Plans & Location</h2>
                  <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                    View the detailed layout, floor plans, and location QR for Tulip House. You can download each plan directly.
                  </p>
                </div>
                <div className="flex flex-col gap-12">
                  {[
                    "/assets/tulip-house-plans/plan-title.png",
                    "/assets/tulip-house-plans/plan-6.png",
                    "/assets/tulip-house-plans/plan-7.png"
                  ].map((planImg, idx) => (
                    <div key={idx} className="relative group w-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex items-center justify-center bg-gray-50">
                      <Image
                        src={planImg}
                        alt={`Tulip House Plan ${idx + 1}`}
                        width={1200}
                        height={800}
                        className="w-full h-auto max-h-[70vh] md:max-h-[80vh] object-contain"
                      />
                      <a
                        href={planImg}
                        download
                        className="absolute top-4 right-4 bg-white/90 hover:bg-white text-[#0A1A3A] p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110 flex items-center justify-center"
                        title="Download Plan"
                      >
                        <Download className="w-5 h-5" />
                        <span className="sr-only">Download</span>
                      </a>
                    </div>
                  ))}
                </div>

                {/* QR Code Section */}
                <div className="mt-16 flex flex-col items-center border-t border-gray-100 pt-16">
                  <h3 className="text-2xl font-medium text-[#111111] mb-4">Location QR</h3>
                  <p className="text-gray-600 mb-8 text-center max-w-md">
                    Scan this QR code to view the exact location of Tulip House on your device.
                  </p>
                  <div className="relative group rounded-2xl overflow-hidden border border-gray-200 shadow-sm w-64 h-64 p-6 bg-white">
                    <Image
                      src="/assets/tulip-house-plans/plan-5.png"
                      alt="Location QR Code"
                      width={256}
                      height={256}
                      className="w-full h-full object-contain"
                    />
                    <a
                      href="/assets/tulip-house-plans/plan-5.png"
                      download
                      className="absolute top-2 right-2 bg-white/90 hover:bg-gray-50 text-[#0A1A3A] p-2 rounded-full shadow-md backdrop-blur-sm transition-all hover:scale-110 flex items-center justify-center border border-gray-100"
                      title="Download QR"
                    >
                      <Download className="w-4 h-4" />
                      <span className="sr-only">Download</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Tulip House Downloads */}
          {resolvedParams.slug === "tulip-house" && (
            <section className="py-24 bg-gray-50 border-t border-gray-200">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-medium text-[#111111] mb-6">Downloads & Plans</h2>
                  <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                    Download the official brochure and floor plans for Solsons Tulip House.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <a href="/assets/SOLSONS TULIP HOUSE.pdf" download className="bg-white hover:bg-gray-50 border border-gray-200 shadow-sm rounded-2xl p-8 flex flex-col items-center text-center transition-all hover:shadow-md group">
                    <div className="w-16 h-16 bg-[#0A1A3A]/10 text-[#0A1A3A] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <FileText className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Main Brochure</h3>
                    <p className="text-sm text-gray-500 mb-6 font-light">Complete details and specifications</p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-[#0A1A3A] border-b border-[#0A1A3A] pb-1">
                      <Download className="w-4 h-4" /> Download
                    </span>
                  </a>

                  <a href="/assets/Solsons Tulip House (2BHK).pdf" download className="bg-white hover:bg-gray-50 border border-gray-200 shadow-sm rounded-2xl p-8 flex flex-col items-center text-center transition-all hover:shadow-md group">
                    <div className="w-16 h-16 bg-[#0A1A3A]/10 text-[#0A1A3A] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Building className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-medium mb-2">2BHK Layout</h3>
                    <p className="text-sm text-gray-500 mb-6 font-light">Detailed floor plan for 2BHK</p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-[#0A1A3A] border-b border-[#0A1A3A] pb-1">
                      <Download className="w-4 h-4" /> Download
                    </span>
                  </a>

                  <a href="/assets/Solsons Tulip House (Penthouse).pdf" download className="bg-white hover:bg-gray-50 border border-gray-200 shadow-sm rounded-2xl p-8 flex flex-col items-center text-center transition-all hover:shadow-md group">
                    <div className="w-16 h-16 bg-[#0A1A3A]/10 text-[#0A1A3A] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <LayoutTemplate className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-medium mb-2">Penthouse Layout</h3>
                    <p className="text-sm text-gray-500 mb-6 font-light">Detailed floor plan for Penthouse</p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-[#0A1A3A] border-b border-[#0A1A3A] pb-1">
                      <Download className="w-4 h-4" /> Download
                    </span>
                  </a>
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* Features & Amenities (For projects that have amenities defined) */}
      {project.amenities && project.amenities.length > 0 && (
        <section className="py-24 md:py-32 bg-white relative z-10 border-t border-gray-100">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-medium text-[#111111] mb-6">Features & Amenities</h2>
              <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                We’ve thoughtfully curated a host of features & amenities that you’ll love.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {project.amenities.map((amenity: any, i: number) => {
                let Icon = Gem;
                if (amenity.title === "Covered Parking" || amenity.title === "Dedicated Parking") Icon = Car;
                if (amenity.title === "Garden Area") Icon = TreePine;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (amenity.title === "Children’s Play Area") Icon = SlideIcon as any;
                if (amenity.title === "High Speed Elevator" || amenity.title === "OTIS Elevators") Icon = ArrowUpCircle;
                if (amenity.title === "Gated Complex" || amenity.title === "RFID Access") Icon = ShieldCheck;
                if (amenity.title === "CCTV Surveillance") Icon = ShieldCheck;
                if (amenity.title === "Premium Flooring" || amenity.title === "Premium Fittings") Icon = Gem;

                return (
                <div key={i} className="flex flex-col items-center text-center w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2.66rem)]">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100 text-[#111111]">
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-medium text-[#111111] mb-4">{amenity.title}</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    {amenity.desc}
                  </p>
                </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {resolvedParams.slug === "tulip-house" && <ProjectPartners />}

      <BackToHome />
      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
