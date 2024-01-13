"use client";

import { useEffect, useState } from "react";

type Viewport = { width: number; height: number };

export function useViewport() {
  const [viewport, setViewport] = useState<Viewport>({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    const updateViewport = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);
  return viewport;
}
