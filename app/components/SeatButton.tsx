"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { PROFILE_KEY } from "../lib/story";

// "Take Your Seat" doubles as sign-in: a woman who has already shared her story
// on this device goes straight to her table; everyone else starts her story.
// (When real accounts arrive, this is the one place to point at the sign-in page.)
function hasSeat(): boolean {
  try { return !!localStorage.getItem(PROFILE_KEY); } catch { return false; }
}
const subscribe = (cb: () => void) => { window.addEventListener("storage", cb); return () => window.removeEventListener("storage", cb); };

export default function SeatButton() {
  const returning = useSyncExternalStore(subscribe, hasSeat, () => false);
  return (
    <Link href={returning ? "/today" : "/your-story"} className="btn" aria-label={returning ? "Take Your Seat — go to your table" : "Take Your Seat — sign in or begin"}>
      Take Your Seat
    </Link>
  );
}
