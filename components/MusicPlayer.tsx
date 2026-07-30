"use client";

import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.25;

    const startAudio = () => {
      audio.play().then(() => {
        setPlaying(true);
        // Remove listeners once playing
        document.removeEventListener("click", startAudio);
        document.removeEventListener("scroll", startAudio);
        document.removeEventListener("touchstart", startAudio);
        document.removeEventListener("keydown", startAudio);
      }).catch(() => {});
    };

    // Try immediately — works in some browsers
    audio.play().then(() => {
      setPlaying(true);
    }).catch(() => {
      // Blocked — start on first interaction instead
      setPlaying(false);
      document.addEventListener("click", startAudio, { once: true });
      document.addEventListener("scroll", startAudio, { once: true });
      document.addEventListener("touchstart", startAudio, { once: true });
      document.addEventListener("keydown", startAudio, { once: true });
    });

    return () => {
      document.removeEventListener("click", startAudio);
      document.removeEventListener("scroll", startAudio);
      document.removeEventListener("touchstart", startAudio);
      document.removeEventListener("keydown", startAudio);
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/white_records-spring-breeze-of-meditation-background-music-for-yoga-and-meditation-200225.mp3"
        loop
        preload="auto"
      />

      {/* Frosted glass outer pill — exact Figma design */}
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause background music" : "Play background music"}
        className="flex items-center gap-[0.005px] rounded-full bg-[rgba(87,94,85,0.40)] p-[3px] backdrop-blur-[10px]"
      >
        {/* Circular button with inner dot — inlined from Figma SVG */}
        <span className="relative flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-full">
          <svg viewBox="0 0 32.8334 32.8334" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
            {/* Outer white circle */}
            <path d="M29.0029 16.4168C29.0029 23.3679 23.3679 29.0029 16.4167 29.0029C9.46562 29.0029 3.83062 23.3679 3.83062 16.4168C3.83062 9.46567 9.46562 3.83067 16.4167 3.83067C23.3679 3.83067 29.0029 9.46567 29.0029 16.4168Z" fill="#FCFCF7"/>
            {/* Inner dark green dot */}
            <path d="M19.1529 16.6904C19.1529 18.0504 18.0504 19.1529 16.6904 19.1529C15.3304 19.1529 14.2279 18.0504 14.2279 16.6904C14.2279 15.3304 15.3304 14.2279 16.6904 14.2279C18.0504 14.2279 19.1529 15.3304 19.1529 16.6904Z" fill="#1C3A13"/>
          </svg>
        </span>

        {/* White inner label pill */}
        <span className="flex w-[49px] items-center justify-center rounded-full bg-[#fcfcf7] px-[10px] py-[7px]">
          <span className="text-[7.5px] font-normal leading-none tracking-[-0.02px] text-green-dark">
            {playing ? "pause" : "play"}
          </span>
        </span>
      </button>
    </>
  );
}
