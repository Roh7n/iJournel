

const credits = [
  { role: "LEAD ARCHITECT", name: "ROHAN", task: "CORE SYSTEMS & UI/UX" },
  { role: "AI ASSISTANT", name: "ANTIGRAVITY", task: "IMPLEMENTATION & LOGIC" },
  { role: "VISUAL REFERENCE", name: "MOBBIN / DRIBBBLE", task: "DESIGN PATTERNS" },
  { role: "MOCK INSPIRATION", name: "GEMINI", task: "CONCEPT GENERATION" },
];

export default function CreditsPage() {
  return (
    <main 
      className="flex h-screen w-full flex-col p-4 sm:p-12 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/hero-bg.webp')" }}
    >
      {/* Dark overlay for legibility without heavy blur */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

      {/* Hero Header */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col justify-center h-full pt-16 sm:pt-0">
        <div className="flex flex-col mb-4 sm:mb-8">
          <div className="font-space text-xs sm:text-sm font-bold tracking-widest text-[#ff3333] uppercase mb-2">
            [ DIRECTORY / CONTRIBUTORS ]
          </div>
          <h1 className="font-thick text-5xl sm:text-7xl lg:text-[7rem] leading-none text-white uppercase drop-shadow-[0_4px_0_rgba(255,51,51,1)]">
            CREDITS
          </h1>
          <div className="w-full h-2 bg-white/20 mt-4" />
        </div>

        {/* Credits List in Zig-Zag / Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 w-full relative">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-2 bg-black hidden md:block" />

          {credits.map((credit, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col border-4 border-black p-4 sm:p-6 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(255,51,51,1)] transition-all duration-300 ${
                idx % 2 === 0 ? "md:mr-4 md:text-right" : "md:ml-4 md:mt-8"
              }`}
            >
              <div className="font-space font-bold text-[#ff3333] text-xs sm:text-sm uppercase tracking-widest border-b-2 border-black pb-2 mb-2 sm:mb-4">
                {credit.role}
              </div>
              <div className="font-thick text-2xl sm:text-4xl uppercase text-black">
                {credit.name}
              </div>
              <div className="font-space font-bold text-black/60 text-[10px] sm:text-xs mt-2 sm:mt-4 bg-black/5 p-2 border-l-4 border-black self-start md:self-auto">
                <span className="text-black">ASSIGNMENT:</span> {credit.task}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
