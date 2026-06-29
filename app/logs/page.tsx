import { LogsSection } from "@/components/sections/LogsSection";

export default function LogsPage() {
  return (
    <main 
      className="flex h-screen w-full flex-col relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/hero-bg.webp')" }}
    >
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-gray-500/20 z-0 pointer-events-none mix-blend-multiply" />
      <LogsSection />
    </main>
  );
}
