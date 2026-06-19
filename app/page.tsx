"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import { TelemetryTime } from "@/components/ui/TelemetryTime";
import { TelemetryMem } from "@/components/ui/TelemetryMem";
import { BootSequence } from "@/components/ui/BootSequence";
import { LobbyButton } from "@/components/ui/LobbyButton";
import { HeroGrid } from "@/components/sections/HeroGrid";

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isLobby = searchParams.get("view") === "lobby";

  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleLobby = () => {
    if (isLobby) {
      router.push("/", { scroll: false });
    } else {
      router.push("?view=lobby", { scroll: false });
    }
  };

  return (
    <>
      <BootSequence />

      <section className="flex min-h-screen w-full flex-col items-center justify-center gap-8 p-0 sm:p-20 relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/images/hero-bg.webp')" }}>
        {/* Dark overlay for legibility without heavy blur */}
        <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>

        {/* Telemetry Top Right */}
        <TelemetryTime />

        {/* Telemetry Bottom Left */}
        <TelemetryMem isLobby={isLobby} />

        {/* Toggle Lobby Button */}
        <LobbyButton isLobby={isLobby} toggleLobby={toggleLobby} />

        {/* Main Grid Content */}
        <HeroGrid isLobby={isLobby} isDesktop={isDesktop} />

      </section>

      {/* 10% Left Vertical Line */}
      <div className="fixed top-0 bottom-0 left-[10%] w-px bg-black/80 z-30 pointer-events-none" />

    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-transparent w-full" />}>
      <HomeContent />
    </Suspense>
  );
}
