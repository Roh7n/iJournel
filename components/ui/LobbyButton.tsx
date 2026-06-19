"use client";

import { motion } from "motion/react";

export function LobbyButton({ isLobby, toggleLobby }: { isLobby: boolean; toggleLobby: () => void }) {
  return (
    <motion.div 
      className="fixed bottom-8 right-8 sm:right-16 z-50 flex flex-col items-end"
    >
      <div className="text-xs font-space font-bold text-white/80 mb-2 pointer-events-none uppercase tracking-widest drop-shadow-md">
         System Status: <span className={isLobby ? "text-green-400" : "text-[#ff3333]"}>{isLobby ? "LOBBY SECURED" : "PENDING AUTH"}</span>
      </div>
      <button 
        onClick={toggleLobby}
        className="group relative bg-[#e5e5e5] border-4 border-black p-2 flex items-center space-x-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-300"
        aria-label={isLobby ? "Return to base" : "Enter lobby"}
      >
         <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black flex items-center justify-center group-hover:rotate-90 transition-transform duration-500">
           <span className="text-[#ff3333] text-2xl font-thick">+</span>
         </div>
         <div className="overflow-hidden h-10 sm:h-12 flex flex-col justify-center pr-2 sm:pr-4 relative">
            <span className="font-thick text-xl sm:text-2xl uppercase text-black leading-none group-hover:-translate-y-16 transition-transform duration-300">
              {isLobby ? "EXIT LOBBY" : "ENTER LOBBY"}
            </span>
            <span className="font-thick text-xl sm:text-2xl uppercase text-[#ff3333] leading-none absolute translate-y-16 group-hover:translate-y-0 transition-transform duration-300">
              {isLobby ? "CONFIRM EXIT" : "INITIALIZE"}
            </span>
         </div>
      </button>
    </motion.div>
  );
}
