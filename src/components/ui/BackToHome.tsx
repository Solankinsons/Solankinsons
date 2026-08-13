import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToHome() {
  return (
    <div className="w-full bg-white flex justify-center py-16 border-t border-gray-100 relative z-40">
      <Link 
        href="/" 
        className="group flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300"
      >
        <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-[#0A1A3A] group-hover:border-[#0A1A3A] group-hover:text-white transition-colors duration-300 text-gray-400">
          <ArrowLeft strokeWidth={1.5} className="w-8 h-8" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 group-hover:text-[#0A1A3A] transition-colors duration-300">
          Back to Home
        </span>
      </Link>
    </div>
  );
}
