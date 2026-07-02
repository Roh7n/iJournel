import { CreditsSection } from "@/components/sections/CreditsSection";

export default function CreditsPage() {
  return (
    <main 
      className="flex min-h-[100dvh] w-full flex-col relative overflow-x-hidden overflow-y-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/assets/images/hero-bg.webp')" }}
    >
      {/* Dark overlay for legibility without heavy blur */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none fixed" />
      <CreditsSection />
    </main>
  );
}
