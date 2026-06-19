"use client";

import { useState, useEffect, useRef } from "react";

export function TelemetryTime() {
  const [time, setTime] = useState("00:00:00:000");
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}:${now.getMilliseconds().toString().padStart(3, '0')}`);
      requestRef.current = requestAnimationFrame(updateTime);
    };

    requestRef.current = requestAnimationFrame(updateTime);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute top-10 right-8 z-40 hidden md:flex flex-col text-right font-space text-xs font-bold pointer-events-none text-black/60 mix-blend-multiply">
      <span>SYS.TIME: {time}</span>
      <span>LAT: 40.7128 N</span>
      <span>LON: 74.0060 W</span>
      <span className="text-[#ff3333] animate-pulse">REC ●</span>
    </div>
  );
}
