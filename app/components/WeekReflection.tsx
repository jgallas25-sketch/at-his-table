"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { dailyNeeds, loadCheckIns, weekCheckIns, type CheckIn } from "../lib/check-in";
import { addEntry } from "../lib/journal";

export default function WeekReflection() {
  const [entries, setEntries] = useState<CheckIn[]>([]);
  const [reflection, setReflection] = useState("");
  const [nextWeek, setNextWeek] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => { setEntries(weekCheckIns(loadCheckIns())); }, []);

  function save(event: React.FormEvent) {
    event.preventDefault();
    if (!reflection.trim() && !nextWeek.trim()) { setMessage("Add a reflection or a prayer for the week ahead before saving."); return; }
    const text = [reflection.trim() && `Looking back: ${reflection.trim()}`, nextWeek.trim() && `The week ahead: ${nextWeek.trim()}`].filter(Boolean).join("\n\n");
    const date = new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
    if (addEntry({ tag: "Reflection", date, text, ref: "Sunday review" })) {
      setReflection(""); setNextWeek(""); setMessage("Your weekly reflection is saved in your testimony journal.");
    } else setMessage("Your browser could not save this reflection. Please copy your writing before leaving.");
  }
  return <>
    <section className="card stack" style={{ padding: 20, gap: 12 }}>
      <h2 className="display" style={{ fontSize: 26 }}>Your check-ins this week</h2>
      <p className="small">A changing day can have its own focus while your season stays the same.</p>
      {entries.length ? <ul className="stack" style={{ margin: 0, paddingLeft: 20, gap: 8 }}>{entries.map(e => <li key={e.date}><time dateTime={e.date}>{new Date(`${e.date}T12:00:00`).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</time> · {dailyNeeds.find(n => n.id === e.need)?.label}</li>)}</ul> : <p className="small">Your daily choices will appear here after your first check-in.</p>}
      <Link href="/today#check-in">Check in today →</Link>
    </section>
    <section id="sunday" className="stack" style={{ background: "var(--sand)", padding: 24, borderRadius: 12 }}>
      <p className="eyebrow">Sunday reflection</p>
      <h2 className="display" style={{ fontSize: 28 }}>Look back. Make room for the week ahead.</h2>
      <p className="small">Use this whenever you are ready to pause, even if it is not Sunday.</p>
      <form className="stack" onSubmit={save}>
        <label className="stack" style={{ gap: 8 }}>Where did you notice God’s care this week?<textarea className="opt" rows={3} value={reflection} onChange={e => setReflection(e.target.value)} /></label>
        <label className="stack" style={{ gap: 8 }}>What will you bring to Him in the coming week?<textarea className="opt" rows={3} value={nextWeek} onChange={e => setNextWeek(e.target.value)} /></label>
        <button className="btn" type="submit">Save my weekly reflection</button>
        <p className="small" role="status">{message}</p>
      </form>
      <Link href="/journal">Open my journal →</Link>
    </section>
  </>;
}
