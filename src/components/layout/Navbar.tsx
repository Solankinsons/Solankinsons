"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Story", href: "/story" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Upcoming", href: "/#upcoming" },
  { name: "Hospitality", href: "/hospitality" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isImageHeroPage = pathname.startsWith('/projects/') || pathname === '/hospitality';
  const textColor = isImageHeroPage && !scrolled ? 'text-black' : 'text-gray-800';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-md py-4 border-b border-gray-200/50" 
          : isImageHeroPage
            ? "bg-white/50 backdrop-blur-md py-6"
            : "bg-transparent py-6"
      }`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="group flex items-center" onClick={() => setMobileMenuOpen(false)}>
          <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-105">
            <Image 
              src="/assets/Solsons-Main-logo.png" 
              alt="Solanki Builders" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors duration-500 ${textColor} hover:text-black`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className={`md:hidden flex items-center justify-center p-2 -mr-2 transition-colors ${textColor} hover:text-black focus:outline-none`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-md"
          >
            <nav className="flex flex-col py-4 px-6 space-y-2 mt-4 border-t border-gray-100">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-black hover:bg-gray-50 transition-colors block py-3 px-4 rounded-xl"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
