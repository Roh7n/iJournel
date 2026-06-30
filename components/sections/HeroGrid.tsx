"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export function HeroGrid({ isLobby, isDesktop }: { isLobby: boolean; isDesktop: boolean }) {
  return (
    <div className="flex w-full max-w-6xl flex-col items-center text-center relative z-10">
      
      {/* Row 1 */}
      <motion.div 
        initial="rest" 
        whileHover="rowHover" 
        className="relative grid w-full grid-cols-8"
      >
        {/* Animated horizontal line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] pointer-events-none z-0">
          <motion.div 
            variants={{ rest: { y: "-1.55rem" }, rowHover: { y: ".2rem" } }} 
            transition={{ duration: 0.3 }}
            className="w-full h-px bg-black/30" 
          />
        </div>
        
        <motion.div 
          layout="position"
          className={`flex flex-col items-start justify-center space-y-2 sm:space-y-4 ${isLobby ? "col-span-4 sm:col-span-3 order-2 pl-2 sm:pl-10" : "col-span-4 sm:col-span-5 order-1"}`}
        >
          <motion.h4 className="font-space text-xs sm:text-sm font-bold tracking-widest text-[#ff3333] uppercase mb-2">
            {isLobby ? "[ waiting_area ]" : "[ imminent ]"}
          </motion.h4>
          <motion.h1 className="font-thick uppercase text-white drop-shadow-[0_4px_0_rgba(255,51,51,1)]">
            {isLobby ? "LOBBY" : "INDEX"}
          </motion.h1>
        </motion.div>

        <motion.div 
          layout="position"
          initial="homeRest"    
          animate={isLobby ? "lobbyRest" : "homeRest"}
          whileHover="hover"
          className={`relative top-1 min-h-48 sm:h-64 w-full cursor-pointer z-10 ${isLobby ? "col-span-4 sm:col-span-5 order-1" : "col-span-4 sm:col-span-3 order-2"}`}
        >
          {/* Vertical lines */}
          <div className="absolute top-[-100vh] bottom-[-100vh] left-0 w-px bg-black/30 pointer-events-none" />
          <motion.div 
            variants={{ homeRest: { x: "1.75rem" }, lobbyRest: { x: "1.75rem" }, hover: { x: 0 } }} 
            transition={{ duration: 0.3 }}
            className="absolute top-[-100vh] bottom-[-100vh] left-0 w-px bg-black/30 pointer-events-none will-change-transform" 
          />
          <motion.div 
            variants={{ homeRest: { x: "-1.75rem" }, lobbyRest: { x: "-1.75rem" }, hover: { x: 0 } }} 
            transition={{ duration: 0.3 }}
            className="absolute top-[-100vh] bottom-[-100vh] right-0 w-px bg-black/30 pointer-events-none will-change-transform" 
          />
          
          <motion.div 
            variants={{ homeRest: { opacity: 1 }, lobbyRest: { opacity: 1 }, hover: { opacity: 0 } }} 
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 -translate-y-[1%] bg-black ${isLobby ? "rounded-tr-xl rounded-bl-xl" : "rounded-br-xl rounded-tl-xl"}`}
          ></motion.div>
          
          <motion.div 
            layout
            variants={
              isDesktop 
                ? { homeRest: { x: 28, y: -30 }, lobbyRest: { x: -28, y: -30 }, hover: { x: 0, y: -2 } }
                : { homeRest: { x: 0, y: -2 }, lobbyRest: { x: 0, y: -2 }, hover: { x: 0, y: 0 } }
            } 
            transition={{ duration: 0.3 }}
            className="relative z-10 h-full w-full rounded-xl border-2 border-black bg-gray-100 flex items-center justify-center overflow-hidden"
          >
            <AnimatePresence>
              {isLobby ? (
                <motion.div 
                  key="lobby-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 p-4 sm:p-8 text-left flex flex-col justify-center bg-[#fdf2f2]"
                >
                  <h2 className="font-thick text-black mb-4">Visitor Terminal</h2>
                  <p className="font-space text-black/80 font-bold">Please stand by. Network synchronization in progress. The iJournel archive is loading.</p>
                </motion.div>
              ) : (
                <motion.div 
                  key="home-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 p-4 sm:p-8 text-left flex flex-col justify-center overflow-hidden"
                >
                  <h2 className="font-thick absolute top-1 left-4 sm:top-8 sm:left-8 text-black md:text-2xl text-lg underline decoration-4 decoration-[#ff3333] underline-offset-4 z-10">
                    LATEST LOGS
                  </h2>
                  
                  <div className="mt-5 sm:mt-16 space-y-1.5 sm:space-y-4 font-space text-[10px] sm:text-sm pr-1 sm:pr-4">
                     <div className="border-l-2 sm:border-l-4 border-black pl-2 sm:pl-3 group cursor-pointer hover:bg-black/5 py-1 sm:p-2 transition-colors">
                        <div className="font-bold text-[#ff3333] mb-0.5 sm:mb-0">2026.06.29</div>
                        <div className="font-bold text-black leading-tight group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300">RENAMED BLOGS TO LOGS.</div>
                     </div>
                     <div className="border-l-2 sm:border-l-4 border-black pl-2 sm:pl-3 group cursor-pointer hover:bg-black/5 py-1 sm:p-2 transition-colors">
                        <div className="font-bold text-[#ff3333] mb-0.5 sm:mb-0">2026.06.25</div>
                        <div className="font-bold text-black leading-tight group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300">UPDATED AGENT MODES DOCUMENTATION.</div>
                     </div>
                     <div className="border-l-2 sm:border-l-4 border-black pl-2 sm:pl-3 group cursor-pointer hover:bg-black/5 py-1 sm:p-2 transition-colors">
                        <div className="font-bold text-[#ff3333] mb-0.5 sm:mb-0">2026.06.25</div>
                        <div className="font-bold text-black leading-tight group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300">ADDED BOUNCE ANIMATION TO UI.</div>
                     </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Row 2 */}
      <div className="relative grid w-full grid-cols-8">
        {/* Horizontal line stretching the whole section/page */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-px bg-black/30 pointer-events-none z-0" />
        
        <motion.div 
          layout="position"
          initial="homeRest" 
          animate={isLobby ? "lobbyRest" : "homeRest"}
          whileHover="hover"
          className={`relative min-h-[24rem] sm:min-h-[31rem] w-full z-10 ${isLobby ? "col-span-4 sm:col-span-3 order-2" : "col-span-4 sm:col-span-5 order-1 cursor-pointer"}`}
        >
          {/* Vertical lines */}
          <div className="absolute top-[-100vh] bottom-[-100vh] left-0 w-px bg-black/30 pointer-events-none" />
          
          {/* Horizontal lines */}
          <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-px bg-black/30 pointer-events-none" />
          <div className="absolute bottom-0 left-[-100vw] right-[-100vw] pointer-events-none">
            <motion.div 
              variants={{ homeRest: { y: "1.75rem" }, lobbyRest: { y: "1.75rem" }, hover: { y: 0 } }} 
              transition={{ duration: 0.3 }}
              className="w-full h-px bg-black/30" 
            />
          </div>
          
          <motion.div 
            variants={{ homeRest: { opacity: 1 }, lobbyRest: { opacity: 1 }, hover: { opacity: isLobby ? 1 : 0 } }} 
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 bg-black ${isLobby ? "rounded-tr-xl rounded-bl-xl" : "rounded-br-xl rounded-tl-xl"}`}
          ></motion.div>
          
          <motion.div 
            layout
            variants={
              isDesktop
                ? { homeRest: { x: -28, y: 28 }, lobbyRest: { x: 28, y: 28 }, hover: isLobby ? { x: 28, y: 28 } : { x: 0, y: 0 } }
                : { homeRest: { x: 0, y: 0 }, lobbyRest: { x: 0, y: 0 }, hover: { x: 0, y: 0 } }
            } 
            transition={{ duration: 0.3 }}
            className="relative z-10 h-full w-full flex flex-col justify-center rounded-xl border-2 border-black bg-gray-100 overflow-hidden"
          >
            <AnimatePresence>
              {isLobby ? (
                <motion.div
                  key="lobby-chat"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col bg-[#f4f4f4] p-3 sm:p-6"
                >
                  <div className="border-b-2 sm:border-b-4 border-black pb-1.5 sm:pb-4 mb-2 sm:mb-4 font-thick uppercase tracking-widest flex justify-between items-center text-[9px] sm:text-base">
                    <span className="truncate mr-2">iJournel Guestbook</span>
                    <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-600 animate-pulse rounded-full border border-black shrink-0"></span>
                  </div>
                  <div className="flex-1 overflow-y-auto font-space space-y-2 sm:space-y-4 pr-1 sm:pr-2 font-bold text-left text-[8.5px] leading-tight sm:text-sm">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-black text-white p-1.5 sm:p-2 rounded-br-lg sm:rounded-br-xl w-fit max-w-[90%]">SYS: Terminal active.</motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-gray-300 p-1.5 sm:p-2 border border-black rounded-tl-lg sm:rounded-tl-xl text-black w-fit ml-auto max-w-[90%]">USER_994: Loving the brutalist vibes.</motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white p-1.5 sm:p-2 border border-black rounded-bl-lg sm:rounded-bl-xl text-black w-fit max-w-[90%]">GUEST_11: The animations are so smooth.</motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-[#ff3333] text-white p-1.5 sm:p-2 border border-black rounded-br-lg sm:rounded-br-xl font-space w-fit max-w-[90%]">ADMIN: WELCOME TO THE ARCHIVE.</motion.div>
                  </div>
                  <div className="mt-2 sm:mt-4 border-t-2 sm:border-t-4 border-black pt-2 sm:pt-4 flex">
                    <input type="text" aria-label="Chat input" className="flex-1 bg-white border-2 border-black px-1.5 sm:px-3 py-1 sm:py-2 outline-none font-space font-bold placeholder-black/50 text-[8.5px] sm:text-base min-w-0" placeholder="SIGN..." />
                    <button aria-label="Send message" className="font-thick bg-black text-white px-2 sm:px-4 border-y-2 border-r-2 border-black hover:bg-[#ff3333] transition-colors text-[9px] sm:text-base shrink-0">SIGN</button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="home-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col sm:flex-row overflow-hidden"
                >
                  <div className="flex-1 px-4 sm:px-10 lg:px-12 flex flex-col justify-center">
                    <h4 className="font-space leading-normal md:leading-relaxed text-black text-left text-xs md:text-xl z-10">
                      <span className="font-bold bg-black text-white px-2 py-1 mr-2">/ABOUT:</span> 
                      iJournel is my personal laboratory for exploring brutalist web design and experimental user interfaces. I aim to reject generic polished forms and prioritize raw utility, pushing the boundaries of frontend architecture through Next.js and high-tension aesthetics.
                      <br />
                      <span role="link" tabIndex={0} className="inline-block mt-2 font-bold bg-[#ff3333] text-white px-4 py-2 border-2 border-black hover:bg-black transition-colors cursor-pointer mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] uppercase tracking-widest">[CONTACT]</span> 
                      <Link href="/logs" className="inline-block mt-2 font-bold bg-white text-black px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] uppercase tracking-widest">[LOGS]</Link> 
                    </h4>
                  </div>
                  <div className="hidden sm:block w-1/3 border-l-4 border-black relative bg-black/10">
                    <Image 
                      src="/assets/images/brutalist1.png" 
                      alt="Brutalist Architecture" 
                      fill
                      sizes="33vw"
                      priority
                      className="object-cover mix-blend-multiply"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
        
        <motion.div 
          layout="position"
          className={`relative h-full w-full overflow-hidden rounded-xl z-10 border-2 border-transparent ${isLobby ? "col-span-4 sm:col-span-5 order-1 ml-0.5" : "col-span-4 sm:col-span-3 order-2 -ml-0.5"}`}
        >
           <AnimatePresence mode="wait">
              {isLobby ? (
                <motion.div
                  key="lobby-image"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image src="/assets/images/brutalist-lobby.png" alt="Brutalist Lobby" fill priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover object-center hover:grayscale transition-all duration-500" />
                </motion.div>
              ) : (
                <motion.div
                  key="home-image"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-[#e5e5e5] py-14 sm:p-12 flex flex-col justify-between overflow-hidden group cursor-crosshair"
                >
                  <div className="absolute inset-0 bg-black/5 pointer-events-none z-0" />
                  
                  <div className="relative z-10 font-space text-xs sm:text-sm font-bold tracking-widest text-black/50 uppercase">
                    [ Architecture / Protocol 001 ]
                  </div>

                  <div className="relative z-10 flex flex-col ">
                    <span className="font-thick text-4xl sm:text-7xl lg:text-[5rem] leading-none text-black uppercase group-hover:text-[#ff3333] transition-colors duration-500">
                      Raw Function
                    </span>
                    <span className="font-thick text-5xl sm:text-7xl lg:text-[5rem] leading-none text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] group-hover:translate-x-4 transition-transform duration-500">
                      Zero Polish
                    </span>
                  </div>

                  
                </motion.div>   
              )}
           </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
