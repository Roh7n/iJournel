"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-8 p-0 sm:p-20 relative overflow-hidden">

      {/* Shared max-width container to perfectly align both grids */}
      <div className="flex w-full max-w-6xl flex-col items-center text-center">
        {/* Row 1: 5/3 split */}
        <motion.div 
          initial="rest" 
          whileHover="rowHover" 
          className="relative grid w-full grid-cols-8"
        >
          {/* Horizontal line stretching the whole section/page */}
          
          {/* Animated horizontal line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] pointer-events-none">
            <motion.div 
              variants={{ rest: { y: "-1.75rem" }, rowHover: { y: 0 } }} 
              transition={{ duration: 0.3 }}
              className="w-full h-px bg-black/30" 
            />
          </div>
          
          <div className="col-span-5 flex flex-col items-start justify-center space-y-4">
            <h4 className="font-space pl-10 font-bold">/imminent</h4>
            <h1 className="font-thick">ABOUT</h1>
          </div>
          <motion.div 
            initial="rest"    
            whileHover="hover"
            className="relative col-span-3 h-64 w-full cursor-pointer"
          >
            {/* Vertical line left of the card stretching the whole page */}
            <div className="absolute top-[-100vh] bottom-[-100vh] left-0 w-px bg-black/30 pointer-events-none" />
            
            <motion.div 
              variants={{ rest: { left: "1.75rem" }, hover: { left: 0 } }} 
              transition={{ duration: 0.3 }}
              className="absolute top-[-100vh] bottom-[-100vh] w-px bg-black/30 pointer-events-none" 
            />
            <motion.div 
              variants={{ rest: { right: "-1.75rem" }, hover: { right: 0 } }} 
              transition={{ duration: 0.3 }}
              className="absolute top-[-100vh] bottom-[-100vh] w-px bg-black/30 pointer-events-none" 
            />
            
            {/* Background shadow positioned relative to the card */}
            <motion.div 
              variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }} 
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-br-xl rounded-tl-xl bg-black"
            ></motion.div>
            {/* Foreground card fills the grid cell */}
            <motion.div 
              variants={{ rest: { x: 28, y: -28 }, hover: { x: 0, y: 0 } }} 
              transition={{ duration: 0.3 }}
              className="relative z-10 h-full w-full rounded-xl border border-black bg-gray-100"
            >
              <h2 className="font-thick absolute top-1/4 left-4  text-black">
                News & Update
              </h2>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Row 2: 5/3 split */}
        <div className="relative grid w-full grid-cols-8 ">
          {/* Horizontal line stretching the whole section/page */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-px bg-black/30 pointer-events-none" />
          
          <motion.div 
            initial="rest" 
            whileHover="hover"
            className="relative col-span-5 h-124 w-full cursor-pointer"
          >
            {/* Vertical line left of the card stretching the whole page */}
            <div className="absolute top-[-100vh] bottom-[-100vh] left-0 w-px bg-black/30 pointer-events-none" />
            <motion.div 
              variants={{ rest: { left: "-1.75rem" }, hover: { left: 0 } }} 
              transition={{ duration: 0.3 }}
              className="absolute top-[-100vh] bottom-[-100vh] w-px bg-black/30 pointer-events-none" 
            />
            {/* Horizontal line at bottom of the card */}
            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-px bg-black/30 pointer-events-none" />
            <div className="absolute bottom-0 left-[-100vw] right-[-100vw] pointer-events-none">
              <motion.div 
                variants={{ rest: { y: "1.75rem" }, hover: { y: 0 } }} 
                transition={{ duration: 0.3 }}
                className="w-full h-px bg-black/30" 
              />
            </div>
            {/* Background shadow matching Row 1's aesthetic */}
            <motion.div 
              variants={{ rest: { opacity: 1 }, hover: { opacity: 0 } }} 
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-br-xl rounded-tl-xl bg-black"
            ></motion.div>
            {/* Foreground card fills the grid cell */}
            <motion.div 
              variants={{ rest: { x: -28, y: 28 }, hover: { x: 0, y: 0 } }} 
              transition={{ duration: 0.3 }}
              className="relative z-10 h-full w-full flex flex-col justify-center px-10  lg:px-12 rounded-xl border border-black bg-gray-100"
            >
              <h4 className="font-space leading-relaxed text-black text-left ">
                <span className="font-bold ">/INTRO:
                  </span> A collection of architectural and digital fabrications. Tinkering with forms, light, and code. Process over perfection. <span className="font-bold underline decoration-red-700 decoration-4 underline-offset-4">[GET IN TOUCH]
                    </span> Prechuncy designed to person for with project, and how dapitalzasion can and inteperency effect pefectity. <span className="font-bold underline decoration-red-700 decoration-4 underline-offset-4">[GET IN TOUCH]</span> <span className="font-bold underline decoration-red-700 decoration-4 underline-offset-4"> [VIEW LABS]</span> 
              </h4>
             
            </motion.div>
          </motion.div>
          <div className="relative col-span-3 h-full w-full overflow-hidden rounded-xl">
            <Image src="/assets/images/brutalist1.png" alt="Brutalist Hero" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-contain object-center" />
          </div>
        </div>
      </div>
    </section>
  )
}
