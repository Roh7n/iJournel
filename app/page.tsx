import Image from "next/image";

export default function Home() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-8 p-0 sm:p-20 relative">

      
      {/* Shared max-width container to perfectly align both grids */}
      <div className="flex w-full max-w-6xl flex-col items-center text-center">
{/* <div className="fixed inset-0 pointer-events-none overflow-hidden">

  <div className="absolute left-[8%] top-0 h-full w-px bg-black/20" />
  <div className="absolute left-[18.3%] top-0 h-full w-px bg-black/40" />
  <div className="absolute left-[19.8%] top-0 h-full w-px bg-black/40" />
  <div className="absolute left-[50%] top-0 h-full w-px bg-black/20" />
  <div className="absolute left-[57.6%] top-0 h-full w-px bg-black/40" />
  <div className="absolute left-[59%] top-0 h-full w-px bg-black/40" />
  <div className="absolute left-[90%] top-0 h-full w-px bg-black/20" />

  
  <div className="absolute top-[5.6%] left-0 w-full h-px bg-black/30" />
  <div className="absolute top-[36.7%] left-0 w-full h-px bg-black/30" />
  <div className="absolute top-[75%] left-0 w-full h-px bg-black/15" />
</div> */}

        {/* Row 1: 5/3 split */}
        <div className="grid w-full grid-cols-8">
          <div className="col-span-5 flex flex-col items-start justify-center space-y-4">
            <h4 className="font-space pl-10 font-bold">/imminent</h4>
            <h1 className="font-thick">ABOUT</h1>
          </div>
          <div className="group relative col-span-3 h-64 w-full cursor-pointer">
            {/* Background shadow positioned relative to the card */}
            <div className="absolute inset-0 rounded-br-xl rounded-tl-xl bg-black transition-opacity duration-500 group-hover:opacity-0"></div>
            {/* Foreground card fills the grid cell */}
            <div className="relative z-10 h-full w-full translate-x-7 -translate-y-7 rounded-xl border border-black bg-gray-100 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
              <h1 className="font-thick absolute top-1/4 left-4 text-5xl text-black">
                News & Update
              </h1>
            </div>
          </div>
        </div>

        {/* Row 2: 5/3 split */}
        <div className="grid w-full grid-cols-8 ">
          <div className="group relative col-span-5 h-124 w-full cursor-pointer">
            {/* Background shadow matching Row 1's aesthetic */}
            <div className="absolute inset-0  rounded-br-xl rounded-tl-xl bg-black transition-opacity duration-500 group-hover:opacity-0"></div>
            {/* Foreground card fills the grid cell */}
            <div className="relative z-10 h-full w-full -translate-x-7 translate-y-7 flex flex-col justify-center p-8 lg:p-12 rounded-xl border border-black bg-gray-100 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0">
              <h1 className="font-space text-xl md:text-2xl lg:text-3xl leading-relaxed text-black text-left uppercase">
                <span className="font-bold">/INTRO:
                  </span> A collection of architectural and digital fabrications. Tinkering with forms, light, and code. Process over perfection. <span className="font-bold">[GET IN TOUCH]
                    </span> Prechuncy designed to person for with project, and how dapitalzasion can and inteperency effect pefectity. <span className="font-bold">[GET IN TOUCH] [VIEW LABS]</span> 
              </h1>
            </div>
          </div>
          <div className="relative col-span-3 h-full w-full overflow-hidden rounded-xl">
            <Image src="/assets/images/brutalist1.png" alt="Brutalist Hero" fill className="object-contain object-center" />
          </div>
        </div>
      </div>
    </section>
  )
}
