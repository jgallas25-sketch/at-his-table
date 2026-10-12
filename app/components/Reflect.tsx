"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { addEntry } from "../lib/journal";

export default function Reflect({ prompt, scripture }: { prompt: string; scripture: string }) {
  const [text, setText] = useState("");
  const router = useRouter();

  function save() {
    if (text.trim()) {
      addEntry({
        tag: "Reflection",
        date: new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
        text: text.trim(),
        ref: scripture,
      });
    }
    router.push("/journal");
  }

  return (
    <>
      <div className="stack" style={{ gap: 8 }}>
        <label htmlFor="reflect" className="label">
          Reflect
        </label>
        <p style={{ margin: 0, fontSize: 15 }}>{prompt}</p>
        <textarea
          id="reflect"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a line or two…"
          style={{ font: "15px var(--font-body)", padding: 12, border: "1px solid var(--line-strong)", borderRadius: 8, background: "#fff", resize: "vertical" }}
        />
      </div>
      <button className="btn" style={{ width: "100%" }} onClick={save}>
        Save to my testimony journal
      </button>
    </>
  );
}
