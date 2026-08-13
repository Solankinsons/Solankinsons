"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-4xl md:text-6xl font-medium tracking-tight mb-4"
            >
              Contact Us
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-gray-400 mb-12 text-lg font-light"
            >
              Get in touch with us instantly for any queries.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <a 
                href="https://wa.me/917798609389" 
                target="_blank" 
                rel="noreferrer"
                className="group relative overflow-hidden bg-white text-black px-8 py-5 rounded-full font-medium tracking-wide flex items-center justify-center gap-4 w-full sm:w-auto"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-6 h-6 relative z-10 transition-colors group-hover:text-white">
                  <path d="M12.031 21.365c-1.528 0-3.023-.404-4.34-1.168l-4.821 1.265 1.285-4.697a9.38 9.38 0 01-1.28-4.73C2.875 6.945 7.02 2.8 12.115 2.8c2.482 0 4.815.966 6.57 2.721A9.227 9.227 0 0121.37 12.03c0 5.088-4.143 9.227-9.224 9.227h-.115zM7.172 18.665c1.464.867 3.23 1.353 5.083 1.353 4.298 0 7.798-3.498 7.798-7.798 0-2.083-.811-4.04-2.285-5.513A7.838 7.838 0 0012.25 4.423c-4.3 0-7.798 3.498-7.798 7.798 0 1.636.42 3.197 1.205 4.607l-.76 2.776 2.84-.744zm7.697-3.931c-.183-.364-.668-.581-1.4-.945-.733-.364-4.33-2.138-5.002-2.381-.67-.243-1.157-.364-1.644.364-.486.729-1.884 2.381-2.31 2.868-.425.485-.85.546-1.581.182-3.153-1.558-4.398-4.453-4.914-5.323-.516-.869-.055-1.341.31-1.705.329-.328.733-.85 1.099-1.275.365-.425.486-.729.73-1.215.242-.486.121-.911-.06-1.275-.183-.364-1.644-3.966-2.253-5.431-.59-1.423-1.188-1.229-1.643-1.251-.425-.022-.912-.022-1.398-.022C4.195 5.56 3.587 5.742 3.1 6.29c-.486.547-1.884 1.843-1.884 4.492 0 2.65 1.93 5.21 2.2 5.575.27.364 3.799 5.803 9.206 8.136 1.288.555 2.294.887 3.076 1.135 1.293.411 2.47.352 3.398.213 1.04-.156 3.203-1.31 3.658-2.574.455-1.264.455-2.348.319-2.574z"/>
                </svg>
                <span className="relative z-10 transition-colors group-hover:text-white">WhatsApp</span>
                <div className="absolute inset-0 bg-[#25D366] transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              </a>

              <a 
                href="mailto:solankinsons@gmail.com" 
                className="group relative overflow-hidden bg-white/10 text-white border border-white/20 px-8 py-5 rounded-full font-medium tracking-wide flex items-center justify-center gap-4 w-full sm:w-auto"
              >
                <Mail className="w-6 h-6 relative z-10 transition-colors group-hover:text-black" />
                <span className="relative z-10 transition-colors group-hover:text-black">Email Us</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Info & Map */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-12 lg:space-y-0">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Office Address</h3>
                <p className="text-xl font-light text-gray-300 leading-relaxed">
                  4th floor, Padmavati Towers, 18th June Rd,<br />
                  Altinho, Panaji, Goa 403001
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</h3>
                  <div className="flex flex-col space-y-2">
                    <a href="tel:+917798609389" className="text-lg font-light text-gray-300 hover:text-white transition-colors flex items-center justify-between group">
                      <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors mr-3">Raunak</span>
                      <span>+91 77986 09389</span>
                    </a>
                    <a href="tel:+919527612261" className="text-lg font-light text-gray-300 hover:text-white transition-colors flex items-center justify-between group">
                      <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors mr-3">Shubham</span>
                      <span>+91 95276 12261</span>
                    </a>
                    <a href="tel:+919527612271" className="text-lg font-light text-gray-300 hover:text-white transition-colors flex items-center justify-between group">
                      <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors mr-3">Rahul</span>
                      <span>+91 95276 12271</span>
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Email</h3>
                  <a href="mailto:solankinsons@gmail.com" className="text-lg font-light text-gray-300 hover:text-white transition-colors">solankinsons@gmail.com</a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full aspect-video bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/5 relative"
            >
              {/* Google Maps Iframe */}
              <iframe
                src="https://maps.google.com/maps?q=Padmavati%20Towers,%2018th%20June%20Rd,%20Altinho,%20Panaji,%20Goa%20403001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
