import Image from "next/image";
// Unused import Link removed
import ContactSection from "@/components/home/ContactSection";
import BackToHome from "@/components/ui/BackToHome";

// Icons for Amenities
const ConferenceIcon = () => (
  <svg className="w-10 h-10 mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
  </svg>
);

const WifiIcon = () => (
  <svg className="w-10 h-10 mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
  </svg>
);

const RestaurantIcon = () => (
  <svg className="w-10 h-10 mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
  </svg>
); 

const ToiletriesIcon = () => (
  <svg className="w-10 h-10 mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const LaundryIcon = () => (
  <svg className="w-10 h-10 mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>
);

const GymIcon = () => (
  <svg className="w-10 h-10 mb-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
  </svg>
); 

const features = [
  { icon: ConferenceIcon, title: "Conference Hall", desc: "Our 30 seater conference hall is perfect for small corporate events & meetings." },
  { icon: WifiIcon, title: "Free WiFi", desc: "Every room comes equipped with high speed free wireless internet connectivity." },
  { icon: RestaurantIcon, title: "Restaurant", desc: "Our restaurant, Amber Breakfast serves healthy breakfast every morning." },
  { icon: ToiletriesIcon, title: "Toiletries & Bedding", desc: "Each room comes with premium bedding and basic toiletries for the duration of your stay." },
  { icon: LaundryIcon, title: "Laundry Services", desc: "We offer third-party laundry service to all guests in addition to the clothing iron provided." },
  { icon: GymIcon, title: "Gym Access", desc: "Guests get a one day access pass to Crossfit Karma, a gym a few buildings away." },
];

export default function HospitalityPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/hospitality/Premium Double Room with Balcony Amber Rooms.jpg" 
            alt="Premium Double Room with Balcony Amber Rooms" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight" style={{ fontFamily: "serif" }}>
            Amber Rooms: Luxurious rooms in Porvorim city.
          </h1>
        </div>
      </section>

      {/* Intro & Rooms Showcase */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-medium text-[#0A1A3A] mb-6" style={{ fontFamily: "serif" }}>For the Modern Explorer</h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              A quirky colorful place situated in the heart of Porvorim city. Central to anything you might want to do in Goa
            </p>
          </div>

          <div className="flex flex-col gap-32">
            {/* Room 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                <Image src="/assets/hospitality/premium room Amber Rooms.jpg" alt="Premium Rooms" fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl md:text-4xl font-medium text-[#0A1A3A] mb-6" style={{ fontFamily: "serif" }}>Premium Rooms</h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  The suite/studio features a balcony, soundproofing and seating area, it can accommodate up to 4 guests and is equipped with a kitchenette and a common bathroom. The suite is suitable for month-long stays.
                </p>
              </div>
            </div>

            {/* Room 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
              <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                <Image src="/assets/hospitality/Premium Double Room with Balcony Amber Rooms.jpg" alt="Premium double with balcony" fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl md:text-4xl font-medium text-[#0A1A3A] mb-6" style={{ fontFamily: "serif" }}>Premium double with balcony</h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  This room (air-conditioned) features a balcony, soundproofing and seating area, it can accommodate up to 2 guests comfortably and is equipped with a bathroom and free WIFI. The room is suitable for month-long stays.
                </p>
              </div>
            </div>

            {/* Room 3 */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <div className="w-full md:w-1/2 aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
                <Image src="/assets/hospitality/without balcony.png" alt="Premium double without balcony" fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl md:text-4xl font-medium text-[#0A1A3A] mb-6" style={{ fontFamily: "serif" }}>Premium double without balcony</h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  The room (air-conditioned) features soundproofing and a seating area, it can accommodate up to 2 guests comfortably and is equipped with a bathroom and free WIFI. The room is suitable for month-long stays.
                </p>
              </div>
            </div>

            {/* Room 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
              <div className="w-full md:w-1/2 aspect-[4/5] relative rounded-lg overflow-hidden shadow-xl">
                <Image src="/assets/hospitality/Premium Room with City View.png" alt="Premium room with city view" fill className="object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-3xl md:text-4xl font-medium text-[#0A1A3A] mb-6" style={{ fontFamily: "serif" }}>Premium room with city view</h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed">
                  This room (air-conditioned) has a city view features soundproofing and a seating area, it can accommodate up to 2 guests comfortably and is equipped with a bathroom and free WIFI. The room is suitable for short stays.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features & Amenities */}
      <section className="py-24 md:py-32 bg-[#0d1430] text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-medium mb-6" style={{ fontFamily: "serif" }}>Features & Amenities</h2>
            <p className="text-lg text-white/80 font-light">
              We&apos;ve thoughtfully curated a host of features & amenities that you&apos;ll love
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <Icon />
                  <h4 className="text-xl font-medium mb-4">{item.title}</h4>
                  <p className="text-white/70 font-light leading-relaxed text-sm md:text-base px-4">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] relative overflow-hidden group">
              <Image src="/assets/hospitality/Solsons Reception.png" alt="Solsons Reception" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-[4/3] relative overflow-hidden group">
              <Image src="/assets/hospitality/Solsons kitchen.jpg" alt="Solsons Kitchen" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-[3/4] relative overflow-hidden group">
              <Image src="/assets/hospitality/Solsons Toilet.png" alt="Solsons Toilet" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-[3/4] relative overflow-hidden group">
              <Image src="/assets/hospitality/Solsons Terrace.jpg" alt="Solsons Terrace" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Query Section */}
      <section className="bg-[#0d1430] text-white">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex items-center justify-center p-16 md:p-24 text-center md:text-left">
            <div className="max-w-md w-full">
              <h2 className="text-4xl md:text-5xl font-medium mb-6" style={{ fontFamily: "serif" }}>For Queries</h2>
              <p className="text-lg md:text-xl font-light text-white/80 mb-12">
                Interested in booking a stay? Contact us directly:
              </p>
              <div className="flex flex-col gap-8 md:gap-6">
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/50 mb-1">Raunak</h4>
                  <a href="tel:+917798609389" className="text-2xl font-light hover:text-gray-300 transition-colors">+91 77986 09389</a>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/50 mb-1">Shubham Solanki</h4>
                  <a href="tel:+919527612261" className="text-2xl font-light hover:text-gray-300 transition-colors">+91 95276 12261</a>
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-white/50 mb-1">Rahul</h4>
                  <a href="tel:+919527612271" className="text-2xl font-light hover:text-gray-300 transition-colors">+91 95276 12271</a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto relative min-h-[500px]">
            <Image src="/assets/hospitality/Premium Double Room with Balcony Amber Rooms.jpg" alt="Balcony view" fill className="object-cover" />
          </div>
        </div>
      </section>

      <BackToHome />
      <ContactSection />
    </main>
  );
}
