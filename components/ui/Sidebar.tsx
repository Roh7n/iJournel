"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "HOME", href: "/", offset: "-translate-y-2 lg:translate-y-0 lg:-translate-x-4" },
    { name: "LOGS", href: "/logs", offset: "translate-y-2 lg:translate-y-0 lg:translate-x-4" },
    { name: "CREDITS", href: "/credits", offset: "-translate-y-2 lg:translate-y-0 lg:-translate-x-4" }
  ];

  return (
    <div className="fixed top-4 left-0 right-0 lg:top-1/2 lg:bottom-auto lg:left-8 lg:right-auto lg:-translate-y-1/2 z-[100] pointer-events-none flex flex-row lg:flex-col items-center justify-center lg:justify-start">
      {/* Black oval structure */}
      <div className="bg-black rounded-full px-6 py-3 sm:px-8 sm:py-4 lg:px-4 lg:py-8 shadow-[8px_8px_0px_0px_rgba(255,51,51,1)] border-4 border-black pointer-events-auto flex flex-row lg:flex-col gap-4 sm:gap-6 w-auto lg:w-24">
        {links.map((link, idx) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.name} href={link.href} className={`group ${link.offset} relative flex justify-center transition-transform`}>
              <motion.div 
                whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? -5 : 5 }}
                className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${isActive ? 'bg-[#ff3333] border-black text-white' : 'bg-white border-black text-black hover:bg-[#e5e5e5]'}`}
              >
                <span className="font-space font-bold text-[8px] sm:text-[10px] tracking-tighter uppercase transform -rotate-45 leading-none">
                  {link.name}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
      
      {/* Decorative lines matching brutalist aesthetic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/20 -z-10 pointer-events-none w-[200vw] h-px lg:w-px lg:h-[150vh]" />
    </div>
  );
}
