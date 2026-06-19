"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function BootSequence() {
  const [showBoot, setShowBoot] = useState<boolean | null>(null);

  useEffect(() => {
    const hasPlayed = sessionStorage.getItem("bootSequencePlayed");
    
    if (!hasPlayed) {
      setShowBoot(true);
      sessionStorage.setItem("bootSequencePlayed", "true");
      
      const timer = setTimeout(() => {
        setShowBoot(false);
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      setShowBoot(false);
    }
  }, []);

  if (showBoot === null) return null;

  return (
    <AnimatePresence>
      {showBoot && (
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
  );
}
