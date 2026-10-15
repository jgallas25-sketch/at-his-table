"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

const ALT =
  "Emily sits at the kitchen table with her iPad, Bible and journal while Heather stands behind her with a mug; both look up and smile";

// Plays the short "they look up and notice you" clip once, fading from a soft
// haze to full colour, then rests on its last frame. Falls back to the still
// photo when motion is reduced, autoplay is blocked, or the video fails.
export default function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<"loading" | "playing" | "still">("loading");

  useEffect(() => {
    const v = videoRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!v || reduce) {
      // Defer so the state change happens outside the effect body.
      const t = setTimeout(() => setMode("still"), 0);
      return () => clearTimeout(t);
    }
    let started = false;
    const onPlaying = () => {
      started = true;
      setMode("playing");
    };
    v.addEventListener("playing", onPlaying);
    v.play().catch(() => setMode("still"));
    const giveUp = setTimeout(() => {
      if (!started) setMode("still");
    }, 2500);
    return () => {
      v.removeEventListener("playing", onPlaying);
      clearTimeout(giveUp);
    };
  }, []);

  return (
    <>
      {mode === "still" ? (
        <img src="/images/hero.jpg" alt={ALT} />
      ) : (
        <video
          ref={videoRef}
          className={mode === "playing" ? "hero-video is-playing" : "hero-video"}
          muted
          playsInline
          preload="auto"
          aria-label={ALT}
          onError={() => setMode("still")}
        >
          <source src="/video/hero.webm" type="video/webm" />
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
      )}
      <noscript>
        <img src="/images/hero.jpg" alt={ALT} />
      </noscript>
    </>
  );
}
