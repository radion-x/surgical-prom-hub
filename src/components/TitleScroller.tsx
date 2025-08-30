"use client";

import { useEffect, useRef } from "react";

export default function TitleScroller() {
  const baseTitle = "Surgical Prom Hub - Prof. Aaron Buckland";
  // add a small separator so end and start don't meld together
  const separator = "   ";
  const scrollString = baseTitle + separator;
  const delay = 180; // ms per frame (tuned for smoothness)
  const intervalRef = useRef<number | null>(null);
  const titleRef = useRef(scrollString);

  useEffect(() => {
    // initialize
    document.title = baseTitle;

    function step() {
      // move first char to the end for the opposite (left-to-right) direction
      const cur = titleRef.current;
      const next = cur.slice(1) + cur.charAt(0);
      titleRef.current = next;
      document.title = next;
    }

    // run at fixed interval; pause when tab is hidden
    function start() {
      if (intervalRef.current == null) intervalRef.current = window.setInterval(step, delay) as unknown as number;
    }
    function stop() {
      if (intervalRef.current != null) { clearInterval(intervalRef.current); intervalRef.current = null; }
    }

    const onVisibility = () => {
      if (document.hidden) stop(); else start();
    };

    document.addEventListener("visibilitychange", onVisibility);
    start();

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return null;
}
