

const credits = [
  { role: "ARCHITECT_01", name: "J. DOE", task: "CORE SYSTEMS" },
  { role: "SYS_ADMIN", name: "M. SMITH", task: "NETWORK PROTOCOLS" },
  { role: "FRONTEND_OPS", name: "A. WANG", task: "INTERFACE STRESS" },
  { role: "DATA_NODE", name: "K. RAHMAN", task: "TELEMETRY CACHE" },
  { role: "CREATIVE_DIR", name: "R. CHEN", task: "BRUTALIST AESTHETIC" },
];

export default function CreditsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col p-8 sm:p-20 relative overflow-hidden bg-[#e5e5e5]">
      {/* Background Noise overlay */}
      <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-10 pointer-events-none mix-blend-multiply" />

      {/* Hero Header */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-12 mt-12 sm:mt-0">
        <div className="flex flex-col">
          <div className="font-space text-sm sm:text-base font-bold tracking-widest text-[#ff3333] uppercase mb-4">
            [ DIRECTORY / CONTRIBUTORS ]
          </div>
          <h1 className="font-thick text-6xl sm:text-8xl lg:text-[8rem] leading-none text-black uppercase tracking-tighter mix-blend-difference drop-shadow-[4px_4px_0_rgba(255,51,51,1)]">
            CREDITS
          </h1>
          <div className="w-full h-2 bg-black mt-4 sm:mt-8" />
        </div>

        {/* Credits List in Zig-Zag / Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 w-full mt-8 relative">
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-2 bg-black hidden md:block" />

          {credits.map((credit, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(255,51,51,1)] transition-all duration-300 ${
                idx % 2 === 0 ? "md:mr-8 md:text-right" : "md:ml-8 md:mt-16"
              }`}
            >
              <div className="font-space font-bold text-[#ff3333] text-sm uppercase tracking-widest border-b-2 border-black pb-2 mb-4">
                {credit.role}
              </div>
              <div className="font-thick text-4xl sm:text-5xl uppercase text-black">
                {credit.name}
              </div>
              <div className="font-space font-bold text-black/60 text-xs sm:text-sm mt-4 bg-black/5 p-2 border-l-4 border-black self-start md:self-auto">
                <span className="text-black">ASSIGNMENT:</span> {credit.task}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
