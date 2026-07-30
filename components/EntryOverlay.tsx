"use client";

import { useEffect, useRef, useState } from "react";

export default function EntryOverlay() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Only show once per browser session
    if (!sessionStorage.getItem("tifb_entered")) {
      setVisible(true);
    }
  }, []);

  function enter() {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.25;
      audio.play().catch(() => {});
    }
    sessionStorage.setItem("tifb_entered", "1");
    setFading(true);
    setTimeout(() => setVisible(false), 1000);
  }

  if (!visible) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/white_records-spring-breeze-of-meditation-background-music-for-yoga-and-meditation-200225.mp3"
        loop
        preload="auto"
        id="tifb-audio"
      />

      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream transition-opacity duration-1000 ${
          fading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Logo */}
        <div className="mb-10 text-center">
          <p className="text-[12px] font-normal leading-[1.25] text-muted">The</p>
          <p className="text-[28px] font-semibold leading-[1.1] text-green-dark">Informed</p>
          <p className="text-[28px] font-semibold leading-[1.1] text-green-dark">Family</p>
          <p className="text-[12px] font-normal leading-[1.25] text-muted">Builder</p>
        </div>

        {/* Entry button */}
        <button
          type="button"
          onClick={enter}
          className="rounded-button bg-green-dark px-8 py-3 text-[14px] font-medium leading-[1.25] text-cream transition-opacity hover:opacity-90"
        >
          Enter
        </button>

        <p className="mt-4 text-[11px] font-normal leading-[1.25] text-muted">
          🎵 with sound
        </p>
      </div>
    </>
  );
}
