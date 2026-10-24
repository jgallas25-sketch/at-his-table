"use client";

import { useMemo, useSyncExternalStore } from "react";
import { JOURNAL_KEY, JournalEntry, sampleEntries } from "../lib/journal";

const noSubscribe = () => () => {};
function readRaw() {
  try {
    return localStorage.getItem(JOURNAL_KEY) ?? "";
  } catch {
    return "";
  }
}

export default function JournalList() {
  const raw = useSyncExternalStore(noSubscribe, readRaw, () => "");
  const saved = useMemo<JournalEntry[]>(() => {
    try {
      const value = raw ? JSON.parse(raw) : [];
      return Array.isArray(value) ? value.filter(e => e && typeof e.text === "string" && typeof e.tag === "string" && typeof e.date === "string") : [];
    } catch {
      return [];
    }
  }, [raw]);

  const isSample = saved.length === 0;
  const entries = isSample ? sampleEntries : saved;
  const prayers = entries.filter((e) => e.tag === "Prayer").length;
  const answered = entries.filter((e) => e.tag === "Answered").length;

  return (
    <>
      {isSample && <div className="sample-banner"><strong>Example journal</strong><p>These entries illustrate how a journal can grow. They are not your prayers or experiences. Your own entries will appear here when you save them.</p></div>}
      <div style={{ display: "flex", gap: 8 }}>
        {[
          [String(prayers), "Prayers I’m carrying"],
          [String(answered), "Answered"],
          [String(entries.length), isSample ? "Example entries" : "Entries so far"],
        ].map(([n, l]) => (
          <div key={l} className="card" style={{ flex: 1, padding: 12, textAlign: "center", borderRadius: 10 }}>
            <p className="display" style={{ fontSize: 26 }}>
              {n}
            </p>
            <p className="small" style={{ fontSize: 12 }}>
              {l}
            </p>
          </div>
        ))}
      </div>

      <ul className="stack" style={{ listStyle: "none", margin: 0, padding: 0, gap: 10 }}>
        {entries.map((e, i) => (
          <li key={`${e.date}-${i}`} className="card stack" style={{ padding: "14px 16px", gap: 6 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  fontWeight: 600,
                  padding: "4px 8px",
                  borderRadius: 99,
                  textTransform: "uppercase",
                  background: e.tag === "Answered" ? "var(--terracotta)" : "var(--blush)",
                  color: e.tag === "Answered" ? "#fff" : "var(--terracotta-deep)",
                }}
              >
                {e.tag}
              </span>
              <span className="small" style={{ fontSize: 12 }}>
                {e.date}
              </span>
            </div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5 }}>{e.text}</p>
            <p style={{ margin: 0, fontSize: 12, color: "var(--terracotta)" }}>{e.ref}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
