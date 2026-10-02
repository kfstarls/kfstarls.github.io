"use client";

import { useEffect, useState } from "react";

export default function GraphicMotionControl() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.graphicMotion = paused ? "paused" : "playing";
    return () => { delete document.documentElement.dataset.graphicMotion; };
  }, [paused]);

  return <button className="graphic-motion-control" type="button" aria-pressed={paused} aria-label={paused ? "Resume decorative graphic animations" : "Pause decorative graphic animations"} onClick={() => setPaused(value => !value)}><span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>{paused ? "Resume motion" : "Pause motion"}</button>;
}
