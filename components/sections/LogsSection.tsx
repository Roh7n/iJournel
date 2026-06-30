"use client";

import { motion } from "motion/react";
import { useState, useEffect, useRef, useCallback } from "react";
import { TimelineRuler } from "../ui/TimelineRuler";

export interface JournalLog {
  id: string;
  title: string;
  date: string;
  preview: string;
  content: React.ReactNode;
}

const DUMMY_LOGS: JournalLog[] = [
  {
    id: "log-5",
    title: "RENAMED BLOGS TO LOGS",
    date: "2026-06-29",
    preview: "Aligning terminology with system aesthetic.",
    content: (
      <div className="flex flex-col gap-4">
        <p className="font-space font-bold text-lg">System Update 2.4.1</p>
        <p>The term &apos;blogs&apos; implies a standard web format. &apos;Logs&apos; implies raw system output. We have aligned the UI terminology to match the overarching brutalist architecture of the iJournel system.</p>
      </div>
    )
  },
  {
    id: "log-4",
    title: "UPDATED AGENT MODES",
    date: "2026-06-25",
    preview: "Re-architecting the AI instructions.",
    content: (
      <div className="flex flex-col gap-4">
        <p className="font-space font-bold text-lg">Knowledge Base Restructure</p>
        <p>Divided the AI agent roles into specific archetypes: Senior Frontend Engineer, Motion UX Designer, Code Critic, and Frontend Performance Engineer. This specialization ensures higher quality output and stricter adherence to design tokens.</p>
      </div>
    )
  },
  {
    id: "log-3",
    title: "ADDED BOUNCE ANIMATION",
    date: "2026-06-25",
    preview: "Enhancing micro-interactions.",
    content: (
      <div className="flex flex-col gap-4">
        <p className="font-space font-bold text-lg">Motion Update</p>
        <p>Implemented lightweight physics-based spring animations for interactive elements. This creates a tactile feel without compromising the raw brutalist aesthetic.</p>
      </div>
    )
  },
  {
    id: "log-2",
    title: "INITIALIZED IJOURNEL",
    date: "2026-06-20",
    preview: "First commit of the system.",
    content: (
      <div className="flex flex-col gap-4">
        <p className="font-space font-bold text-lg">Project Genesis</p>
        <p>Repository created. Next.js 16 App Router configured. Tailwind CSS v4 design tokens established. The grid is alive.</p>
      </div>
    )
  },
  {
    id: "log-1",
    title: "BRUTALISM THEME CONCEPT",
    date: "2026-05-15",
    preview: "Defining the visual language.",
    content: (
      <div className="flex flex-col gap-4">
        <p className="font-space font-bold text-lg">Visual Strategy</p>
        <p>Rejecting generic polished forms. Prioritizing raw utility, high-tension aesthetics, and visceral interactions over standardized perfection. Thick borders, solid shadows, monospaced typography.</p>
      </div>
    )
  }
];

export function LogsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isWheeling = useRef(false);

  const navigate = useCallback((direction: 'prev' | 'next') => {
    setActiveIndex((prev) => {
      if (direction === 'prev') return Math.max(0, prev - 1);
      return Math.min(DUMMY_LOGS.length - 1, prev + 1);
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        navigate('prev');
      } else if (e.key === "ArrowRight") {
        navigate('next');
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  // Wheel navigation (debounced)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isWheeling.current) return;
      
      const threshold = 40; // Prevent hypersensitive trackpad triggering
      if (Math.abs(e.deltaX) > threshold || Math.abs(e.deltaY) > threshold) {
        isWheeling.current = true;
        
        if (e.deltaX > 0 || e.deltaY > 0) {
          navigate('next');
        } else {
          navigate('prev');
        }
        
        // Debounce lock
        setTimeout(() => {
          isWheeling.current = false;
        }, 600);
      }
    };
    
    // Add passive listener for better scroll performance
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [navigate]);

  // Drag handler
  const handleDragEnd = (e: any, { offset }: any) => {
    const swipeThreshold = 50;
    if (offset.x < -swipeThreshold) {
      navigate('next');
    } else if (offset.x > swipeThreshold) {
      navigate('prev');
    }
  };

  return (
    <section className="relative w-full h-[100vh] flex flex-col justify-center overflow-hidden bg-white/5 pb-24 sm:pb-32">
      {/* Title / Header */}
      <div className="w-full pl-[10vw] pr-20 lg:px-[15vw] z-[60] pointer-events-none flex flex-col mb-4 sm:mb-8 mt-16 lg:mt-0">
        <div className="font-space text-xs sm:text-sm font-bold tracking-widest text-[#ff3333] uppercase mb-2 md:mb-4">
          [ SYSTEM ARCHIVE ]
        </div>
        <h1 className="font-thick text-[3rem] sm:text-7xl lg:text-[8rem] leading-none text-white uppercase drop-shadow-[0_4px_0_rgba(255,51,51,1)] break-words">
          LOGS
        </h1>
        <div className="w-full h-2 bg-white/20 mt-1 md:mt-6" />
      </div>

      {/* Horizontal Slider Track */}
      {/* 
        Width calculation: 
        Item width = 70vw. 
        Margin per item = 2.5vw left + 2.5vw right = 5vw.
        Total space per item = 75vw.
        Track padding = 12.5vw left.
        First item center: 12.5vw + 2.5vw + 35vw = 50vw! Perfect center.
      */}
      <motion.div 
        className="flex items-center w-max px-[12.5vw] cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        animate={{ x: `-${activeIndex * 75}vw` }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        {DUMMY_LOGS.map((log, idx) => {
          const isActive = activeIndex === idx;
          
          return (
            <motion.div 
              key={log.id} 
              className={`w-[70vw] h-[60vh] shrink-0 p-6 sm:p-12 mx-[2.5vw] border-4 border-black bg-white flex flex-col justify-between transition-all duration-500 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${
                isActive ? "opacity-100 scale-100 grayscale-0" : "opacity-30 scale-95 grayscale pointer-events-none"
              }`}
              onClick={() => {
                if (!isActive) setActiveIndex(idx);
              }}
            >
              {/* Log Header */}
              <div className="border-b-4 border-black pb-4 sm:pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end">
                <div className="font-thick text-2xl sm:text-4xl lg:text-5xl max-w-[80%] uppercase">{log.title}</div>
                <div className="font-space font-bold bg-[#ff3333] text-white px-3 py-1 text-sm sm:text-base mt-4 sm:mt-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {log.date}
                </div>
              </div>
              
              {/* Log Content */}
              <div className="flex-1 mt-6 overflow-y-auto font-space text-sm sm:text-base pr-4">
                {log.content}
              </div>
              
              {/* Log Footer */}
              <div className="mt-6 pt-4 border-t-2 border-black/20 text-xs font-space font-bold text-black/50 uppercase tracking-widest flex justify-between">
                <span>ID: {log.id}</span>
                <span>STATUS: ARCHIVED</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Timeline Navigation */}
      <TimelineRuler logs={DUMMY_LOGS} activeIndex={activeIndex} onNavigate={setActiveIndex} />
    </section>
  );
}
