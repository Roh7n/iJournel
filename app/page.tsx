"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";

function TelemetryTime() {
  const [time, setTime] = useState("00:00:00:000");
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const now = new Date();
      setTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}:${now.getMilliseconds().toString().padStart(3, '0')}`);
    }, 47);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="absolute top-10 right-8 z-40 hidden md:flex flex-col text-right font-space text-xs font-bold pointer-events-none text-black/60 mix-blend-multiply">
      <span>SYS.TIME: {time}</span>
      <span>LAT: 40.7128 N</span>
      <span>LON: 74.0060 W</span>
      <span className="text-[#ff3333] animate-pulse">REC ●</span>
    </div>
  );
}

function TelemetryMem({ isLobby }: { isLobby: boolean }) {
  const [mem, setMem] = useState(420);
  useEffect(() => {
    const memInterval = setInterval(() => setMem(Math.floor(Math.random() * 200 + 400)), 1500);
    return () => clearInterval(memInterval);
  }, []);

  return (
    <div className="absolute bottom-12 left-8 z-40 hidden md:flex flex-col font-space text-xs font-bold pointer-events-none text-black/60 mix-blend-multiply">
      <span>VER 1.0.4.992</span>
      <span>LOBBY_STATE: {isLobby ? "ACTIVE" : "STANDBY"}</span>
      <span>MEM_ALLOC: {mem} MB</span>
    </div>
  );
}

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isLobby = searchParams.get("view") === "lobby";

  const [isDesktop, setIsDesktop] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    
    // Simulate boot sequence loading
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 2500);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const toggleLobby = () => {
    if (isLobby) {
      router.push("/", { scroll: false });
    } else {
      router.push("?view=lobby", { scroll: false });
    }
  };

  return (
    <>
      <AnimatePresence>
        {!hasLoaded && (
          <motion.div 
            key="boot-sequence"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100vh" }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }} // Ocean wave fluid easing
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black text-white font-space overflow-hidden"
          >
            {/* Cygilism / Brutalist loading elements */}
            <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-20 pointer-events-none mix-blend-screen" />
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-thick text-5xl sm:text-8xl tracking-tighter uppercase mb-4 text-[#ff3333]"
            >
              SYS.INIT
            </motion.h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-1 bg-white mb-8"
            />
            <div className="text-xs sm:text-sm text-gray-400 flex flex-col items-center space-y-1 font-bold">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>[LOADING CORE MODULES...]</motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>[ESTABLISHING CYGILISM LINK...]</motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>[SYNCING TO THE GRID...]</motion.span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="text-white">ACCESS GRANTED.</motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="flex min-h-screen w-full flex-col items-center justify-center gap-8 p-0 sm:p-20 relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/images/hero-bg.webp')" }}>
        {/* Dark overlay for legibility without heavy blur */}
        <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>
      



      {/* Telemetry Top Right */}
      <TelemetryTime />

      {/* Telemetry Bottom Left */}
      <TelemetryMem isLobby={isLobby} />

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

      {/* Shared max-width container to perfectly align both grids */}
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
            <motion.h4 className="font-space pl-2 sm:pl-10 font-bold uppercase hover:animate-glitch cursor-crosshair text-white/80">
              {isLobby ? "/waiting_area" : "/imminent"}
            </motion.h4>
            <motion.h1 className="font-thick uppercase text-white drop-shadow-[0_4px_0_rgba(255,51,51,1)]">
              {isLobby ? "LOBBY" : "ABOUT"}
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
              className={`absolute inset-0 bg-black ${isLobby ? "rounded-tr-xl rounded-bl-xl" : "rounded-br-xl rounded-tl-xl"}`}
            ></motion.div>
            
            <motion.div 
              layout
              variants={
                isDesktop 
                  ? { homeRest: { x: 28, y: -28 }, lobbyRest: { x: -28, y: -28 }, hover: { x: 0, y: 0 } }
                  : { homeRest: { x: 0, y: 0 }, lobbyRest: { x: 0, y: 0 }, hover: { x: 0, y: 0 } }
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
                    <h2 className="font-thick text-black mb-4">Awaiting Connection</h2>
                    <p className="font-space text-black/80 font-bold">Please stand by. Network synchronization in progress. The grid is reforming.</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="home-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 p-4 sm:p-8 text-left flex flex-col justify-center overflow-hidden"
                  >
                    <h2 className="font-thick absolute top-4 left-4 sm:top-8 sm:left-8 text-black text-xl sm:text-2xl underline decoration-4 decoration-[#ff3333] underline-offset-4 z-10">
                      NEWS & UPDATE
                    </h2>
                    
                    <div className="mt-12 sm:mt-16 space-y-3 sm:space-y-4 font-space text-xs sm:text-sm pr-2 sm:pr-4">
                       <div className="border-l-4 border-black pl-3 group cursor-pointer hover:bg-black/5 p-2 transition-colors">
                          <div className="font-bold text-[#ff3333]">2026.06.18</div>
                          <div className="font-bold text-black group-hover:translate-x-2 transition-transform duration-300">SYSTEM ARCHITECTURE UPGRADE COMPLETE.</div>
                       </div>
                       <div className="border-l-4 border-black pl-3 group cursor-pointer hover:bg-black/5 p-2 transition-colors">
                          <div className="font-bold text-[#ff3333]">2026.06.12</div>
                          <div className="font-bold text-black group-hover:translate-x-2 transition-transform duration-300">NEW LAB EXPERIMENTS PUBLISHED.</div>
                       </div>
                       <div className="border-l-4 border-black pl-3 group cursor-pointer hover:bg-black/5 p-2 transition-colors">
                          <div className="font-bold text-[#ff3333]">2026.06.01</div>
                          <div className="font-bold text-black group-hover:translate-x-2 transition-transform duration-300">GLOBAL COMM-LINK STRESS TESTING.</div>
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
                    <div className="border-b-4 border-black pb-2 sm:pb-4 mb-2 sm:mb-4 font-thick uppercase tracking-widest flex justify-between items-center text-xs sm:text-base">
                      <span>Global Comm-Link</span>
                      <span className="w-3 h-3 bg-red-600 animate-pulse rounded-full border border-black"></span>
                    </div>
                    <div className="flex-1 overflow-y-auto font-space space-y-4 pr-2 font-bold text-left">
                      <div className="bg-black text-white p-2 rounded-br-xl w-fit">SYS: Connection established. Server 01.</div>
                      <div className="bg-gray-300 p-2 border border-black rounded-tl-xl text-black w-fit ml-auto">USER_994: Anyone here?</div>
                      <div className="bg-white p-2 border border-black rounded-bl-xl text-black w-fit">GUEST_11: Yeah, waiting for the drop.</div>
                      <div className="bg-[#ff3333] text-white p-2 border border-black rounded-br-xl font-thick w-fit">ADMIN: LOBBY INITIATED.</div>
                    </div>
                    <div className="mt-4 border-t-4 border-black pt-4 flex">
                      <input type="text" aria-label="Chat input" className="flex-1 bg-white border-2 border-black px-2 sm:px-3 py-1 sm:py-2 outline-none font-space font-bold placeholder-black/50 text-xs sm:text-base" placeholder="TRANSMIT MESSAGE..." />
                      <button aria-label="Send message" className="font-thick bg-black text-white px-2 sm:px-4 border-y-2 border-r-2 border-black hover:bg-[#ff3333] transition-colors text-xs sm:text-base">SEND</button>
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
                      <h4 className="font-space leading-relaxed text-black text-left text-sm sm:text-lg z-10">
                        <span className="font-bold bg-black text-white px-2 py-1 mr-2">/SYS.LOG:</span> 
                        Documenting structural intersections between raw code and brutalist architecture. Rejecting generic polished forms. Prioritizing raw utility, high-tension aesthetics, and visceral interactions over standardized perfection. 
                        <br /><br />
                        <span role="link" tabIndex={0} className="inline-block mt-2 font-bold bg-[#ff3333] text-white px-4 py-2 border-2 border-black hover:bg-black transition-colors cursor-pointer mr-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] uppercase tracking-widest">[INITIATE CONTACT]</span> 
                        <span role="link" tabIndex={0} className="inline-block mt-2 font-bold bg-white text-black px-4 py-2 border-2 border-black hover:bg-black hover:text-white transition-colors cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] uppercase tracking-widest">[ACCESS LABS]</span> 
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
            className={`relative h-full w-full overflow-hidden rounded-xl z-10 border-2 border-transparent ${isLobby ? "col-span-4 sm:col-span-5 order-1" : "col-span-4 sm:col-span-3 order-2"}`}
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
                    <Image src="/assets/images/brutalist-lobby.png" alt="Brutalist Lobby" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover object-center hover:grayscale transition-all duration-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="home-image"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-[#e5e5e5] p-6 sm:p-12 flex flex-col justify-between overflow-hidden group cursor-crosshair"
                  >
                    <div className="absolute inset-0 bg-black/5 pointer-events-none z-0" />
                    
                    <div className="relative z-10 font-space text-xs sm:text-sm font-bold tracking-widest text-black/50 uppercase">
                      [ Architecture / Protocol 001 ]
                    </div>

                    <div className="relative z-10 flex flex-col mt-4">
                      <span className="font-thick text-5xl sm:text-7xl lg:text-[5rem] leading-none text-black uppercase tracking-tighter group-hover:text-[#ff3333] transition-colors duration-500">
                        Raw Function
                      </span>
                      <span className="font-thick text-5xl sm:text-7xl lg:text-[5rem] leading-none text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] group-hover:translate-x-4 transition-transform duration-500">
                        Zero Polish
                      </span>
                    </div>

                    <div className="relative z-10 font-space text-sm sm:text-base font-bold text-black mt-8 overflow-hidden h-20 sm:h-24">
                       <p className="absolute inset-0 leading-tight group-hover:-translate-y-full transition-transform duration-500">
                         Embracing the friction of the digital medium. Neo-brutalism is not about ugliness; it's about structural honesty and mechanical exposure.
                       </p>
                       <p className="absolute inset-0 translate-y-full group-hover:translate-y-0 text-[#ff3333] leading-tight transition-transform duration-500">
                         <span className="bg-black text-white px-2 py-1 mr-2 inline-block mb-1">INTERACTION DETECTED</span><br/>
                         The grid is responsive. The system is alive. Awaiting final sequence.
                       </p>
                    </div>
                  </motion.div>
                )}
             </AnimatePresence>
          </motion.div>
        </div>
        </div>
      </section>



      {/* 10% Left Vertical Line */}
      <div className="fixed top-0 bottom-0 left-[10%] w-px bg-black/80 z-30 pointer-events-none" />

    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-transparent w-full" />}>
      <HomeContent />
    </Suspense>
  );
}
