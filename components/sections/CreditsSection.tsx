const credits = [
  { role: "LEAD ARCHITECT", name: "ROHAN", task: "CORE SYSTEMS & UI/UX" },
  { role: "AI ASSISTANT", name: "ANTIGRAVITY", task: "IMPLEMENTATION & LOGIC" },
  { role: "VISUAL REFERENCE", name: "MOBBIN / DRIBBBLE", task: "DESIGN PATTERNS" },
  { role: "MOCK INSPIRATION", name: "GEMINI", task: "CONCEPT GENERATION" },
];

export function CreditsSection() {
  return (
    <section className="flex min-h-[100dvh] w-full flex-col p-4 sm:p-12 relative z-10">
      {/* Hero Header */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col justify-start lg:justify-center min-h-full pt-20 pb-12 lg:py-0">
        <div className="flex flex-col mb-8 sm:mb-12 pr-16 lg:pr-0">
          <div className="font-space text-xs sm:text-sm font-bold tracking-widest text-[#ff3333] uppercase mb-2 md:mb-4">
            [ DIRECTORY / CONTRIBUTORS ]
          </div>
          <h1 className="font-thick text-5xl sm:text-7xl lg:text-huge leading-none text-white uppercase drop-shadow-[0_4px_0_rgba(255,51,51,1)] break-words">
            CREDITS
          </h1>
          <div className="w-full h-2 bg-white/20 mt-1 md:mt-6" />
        </div>

        {/* Credits List in Zig-Zag / Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full relative">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-2 bg-black hidden md:block" />

          {credits.map((credit, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col border-4 border-black p-5 sm:p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(255,51,51,1)] transition-all duration-300 ${
                idx % 2 === 0 ? "md:mr-4 md:text-right" : "md:ml-4 md:mt-12"
              }`}
            >
              <div className="font-space font-bold text-[#ff3333] text-xs sm:text-sm uppercase tracking-widest border-b-2 border-black pb-2 mb-3 sm:mb-4">
                {credit.role}
              </div>
              <div className="font-thick text-2xl leading-[1.1] sm:text-4xl uppercase text-black break-words">
                {credit.name}
              </div>
              <div className="font-space font-bold text-black/60 text-tiny sm:text-xs mt-3 sm:mt-4 bg-black/5 p-2 border-l-4 border-black self-start md:self-auto">
                <span className="text-black">ASSIGNMENT:</span> {credit.task}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
