"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

export function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: "HOME", href: "/", offset: "-translate-x-4" },
    { name: "BLOGS", href: "#", offset: "translate-x-4" },
    { name: "CREDITS", href: "/credits", offset: "-translate-x-4" }
  ];

  return (
    <div className="fixed top-1/2 left-4 md:left-8 -translate-y-1/2 z-50 pointer-events-none flex flex-col items-center">
      {/* Black oval structure */}
      <div className="bg-black rounded-full p-4 py-8 shadow-[8px_8px_0px_0px_rgba(255,51,51,1)] border-4 border-black pointer-events-auto flex flex-col gap-6 w-24">
        {links.map((link, idx) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.name} href={link.href} className={`group ${link.offset} relative flex justify-center w-full`}>
              <motion.div 
                whileHover={{ scale: 1.1, rotate: idx % 2 === 0 ? -5 : 5 }}
                className={`w-12 h-12 flex items-center justify-center rounded-full border-2 transition-colors duration-300 ${isActive ? 'bg-[#ff3333] border-black text-white' : 'bg-white border-black text-black hover:bg-[#e5e5e5]'}`}
              >
                <span className="font-space font-bold text-[10px] tracking-tighter uppercase transform -rotate-45 leading-none">
                  {link.name}
                </span>
              </motion.div>
            </Link>
          );
        })}
      </div>
      
      {/* Decorative lines matching brutalist aesthetic */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-black/20 -z-10 pointer-events-none h-[150vh]" />
    </div>
  );
}
