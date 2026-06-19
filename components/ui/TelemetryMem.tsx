"use client";

import { useState, useEffect } from "react";

export function TelemetryMem({ isLobby }: { isLobby: boolean }) {
  const [mem, setMem] = useState(420);
  
  useEffect(() => {
    const memInterval = setInterval(() => setMem(Math.floor(Math.random() * 200 + 400)), 1500);
    return () => clearInterval(memInterval);
  }, []);

  return (
    <div className="absolute bottom-12 left-8 z-40 hidden md:flex flex-col font-space text-xs font-bold pointer-events-none text-black/60 mix-blend-multiply">
      <span>VER 1.0.4.992</span>
      <span>LOBBY_STATE: {isLobby ? "ACTIVE" : "STANDBY"}</span>
      <span>MEM_ALLOC: {mem} MB</span>
    </div>
  );
}
