"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { JournalLog } from "../sections/LogsSection";

import React from "react";

interface TimelineRulerProps {
  logs: JournalLog[];
  activeIndex: number;
  onNavigate: (index: number) => void;
}

export function TimelineRuler({ logs, activeIndex, onNavigate }: TimelineRulerProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isRulerHovered, setIsRulerHovered] = useState(false);

  // Helper to determine if an entry is a "major" mark (new month/year compared to previous entry)
  // Since ordered newest -> oldest, we check against the PREVIOUS index in the array (which is newer in time).
  const isMajorMark = (idx: number) => {
    if (idx === 0) return true;
    
    const currDate = new Date(logs[idx].date);
    const prevDate = new Date(logs[idx - 1].date);
    
    return currDate.getMonth() !== prevDate.getMonth() || currDate.getFullYear() !== prevDate.getFullYear();
  };

  return (
    <div className="fixed bottom-4 sm:bottom-8 left-0 right-0 h-24 bg-transparent z-50 pointer-events-none flex flex-col justify-end">
      {/* Interaction area */}
      <div 
        className={`w-full h-16 pointer-events-auto relative flex items-end border-t-2 border-black/10 backdrop-blur-sm transition-all duration-500 ${
          isRulerHovered ? "bg-white/30 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]" : "bg-white/5"
        }`}
        onMouseEnter={() => setIsRulerHovered(true)}
        onMouseLeave={() => setIsRulerHovered(false)}
      >
        
        <div className="w-full flex justify-between items-end px-4 sm:px-12 h-full">
          {logs.map((log, idx) => {
            const major = isMajorMark(idx);
            const active = activeIndex === idx;
            const hovered = hoveredIndex === idx;
            const showLabel = isRulerHovered || active;

            const isLast = idx === logs.length - 1;
            const minorMarksCount = 8; // 8 minor ticks between logs

            return (
              <React.Fragment key={log.id}>
                <div 
                  className="relative flex flex-col items-center justify-end h-full group cursor-pointer w-full"
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => onNavigate(idx)}
                >
                  {/* Tooltip / Heading */}
                  <AnimatePresence>
                    {showLabel && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-14 sm:bottom-16 mb-2 flex flex-col items-center z-50 pointer-events-none"
                      >
                        <div className={`font-space font-bold text-[10px] sm:text-xs uppercase whitespace-nowrap px-2 py-1 border-2 transition-all duration-300 origin-bottom ${
                          active 
                            ? "bg-[#ff3333] text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" 
                            : hovered 
                              ? "bg-white text-black border-black shadow-[4px_4px_0px_0px_rgba(255,51,51,1)] scale-110" 
                              : "bg-black text-white border-transparent"
                        }`}>
                          {log.title}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Mark */}
                  <motion.div
                    layout
                    className={`w-[2px] transition-all duration-300 ${
                      active 
                        ? "bg-[#ff3333] h-12" 
                        : hovered
                          ? "bg-black h-10"
                          : major 
                            ? (isRulerHovered ? "bg-black h-10" : "bg-black h-8") 
                            : (isRulerHovered ? "bg-black/60 h-6" : "bg-black/40 h-4")
                    }`}
                  />
                  
                  {/* Active Indicator Base */}
                  {active && (
                    <motion.div 
                      layoutId="active-mark-indicator"
                      className="absolute -bottom-1 w-2 h-2 bg-[#ff3333]" 
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>

                {/* Minor marks for continuous scale */}
                {!isLast && Array.from({ length: minorMarksCount }).map((_, i) => (
                  <div key={`minor-${idx}-${i}`} className="flex flex-col items-center justify-end h-full w-full pointer-events-none">
                    <div className={`w-[1px] transition-all duration-300 ${isRulerHovered ? "h-3 bg-black/40" : "h-2 bg-black/30"} mb-0`} />
                  </div>
                ))}
              </React.Fragment>
            );
          })}
        </div>
        
        {/* Base Timeline Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"></div>
      </div>
    </div>
  );
}
