"use client";

import { useSearchParams } from "next/navigation";
import { TelemetryTime } from "./TelemetryTime";
import { TelemetryMem } from "./TelemetryMem";
import { Suspense } from "react";

function TelemetryContent() {
  const searchParams = useSearchParams();
  const isLobby = searchParams.get("view") === "lobby";
  return (
    <>
      <TelemetryTime />
      <TelemetryMem isLobby={isLobby} />
    </>
  );
}

export function GlobalTelemetry() {
  return (
    <Suspense fallback={null}>
      <TelemetryContent />
    </Suspense>
  );
}
