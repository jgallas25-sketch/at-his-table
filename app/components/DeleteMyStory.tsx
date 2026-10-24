"use client";

import { useState } from "react";
import { CHECK_IN_KEY } from "../lib/check-in";
import { JOURNAL_KEY } from "../lib/journal";
import { PROFILE_KEY, PROGRESS_KEY } from "../lib/story";

export default function DeleteMyStory() {
  const [done, setDone] = useState(false);
  function remove() {
    if (!window.confirm("Delete your story, your Day 1 table and your journal from this device? This can’t be undone.")) return;
    try {
      for (const k of [PROFILE_KEY, PROGRESS_KEY, JOURNAL_KEY, CHECK_IN_KEY, "aht-your-story"]) localStorage.removeItem(k);
    } catch {
      // Nothing stored.
    }
    setDone(true);
  }
  return done ? (
    <p className="small" role="status" style={{ fontSize: 15 }}>
      Done. Your story and journal have been removed from this device.
    </p>
  ) : (
    <button className="btn btn-light" style={{ alignSelf: "flex-start", border: "1px solid var(--line-strong)" }} onClick={remove}>
      Delete my story and journal
    </button>
  );
}
