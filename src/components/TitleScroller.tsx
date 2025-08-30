"use client";

import { useEffect, useRef } from "react";

export default function TitleScroller() {
  const baseTitle = "Surgical Prom Hub - Prof. Aaron Buckland";
  const delay = 200; // ms per frame
  const intervalRef = useRef<number | null>(null);
  const titleRef = useRef(baseTitle);

  useEffect(() => {
    // initialize
    document.title = baseTitle;

    function step() {
      // move last char to front for a left-to-right marquee effect
      const cur = titleRef.current;
      const next = cur.slice(-1) + cur.slice(0, -1);
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
