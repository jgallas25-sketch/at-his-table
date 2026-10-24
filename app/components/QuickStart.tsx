"use client";

import Link from "next/link";
import JourneyGuide from "./JourneyGuide";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { seasons } from "../lib/content";
import { matchWomen, safeToStore, saveProfile, seasonPresets } from "../lib/story";
import { dailyNeeds, saveCheckIn, type NeedId } from "../lib/check-in";

export default function QuickStart({ seasonSlug }: { seasonSlug?: string }) {
  const router = useRouter();
  const [season, setSeason] = useState(seasons.some(s => s.slug === seasonSlug) ? seasonSlug! : "");
  const [need, setNeed] = useState<NeedId | "">("");
  const [minutes, setMinutes] = useState("10–15 minutes");
  const [error, setError] = useState("");

  function begin(event: React.FormEvent) {
    event.preventDefault();
    const answers = safeToStore({ ...seasonPresets[season], minutes });
    const matches = matchWomen(answers);
    if (!saveProfile({ answers, woman: matches[0].key, others: matches.slice(1).map(w => w.key), savedAt: new Date().toISOString() })) {
      setError("Your browser couldn’t save your choices. You can still explore a sample day below.");
      return;
    }
    if (need && !saveCheckIn(need)) {
      setError("Your season was saved, but today’s check-in could not be saved. You can choose it again on the Today page.");
      return;
    }
    router.push("/today");
  }

  return <div className="app-shell"><main className="phone intake-panel"><div className="phone-body">
    <JourneyGuide place="story" />
    <p className="eyebrow">Quick start</p>
    <h1 className="display h2">Let’s begin where you are.</h1>
    <p className="lead">Short on time? Answer three questions and begin today. When you can, share your full story so we can introduce you to the woman of Scripture who has walked where you are.</p>
    <Link href="/welcome" className="small">How this works — a one-minute introduction</Link>
    <form onSubmit={begin} className="stack" style={{ gap: 24 }}>
      <label className="stack" style={{ gap: 8 }}><span className="display" style={{ fontSize: 23 }}>1. What season are you in?</span>
        <select className="opt" value={season} onChange={e => setSeason(e.target.value)}>
          <option value="">I’d rather start without choosing</option>
          {seasons.filter(s => !["grateful", "grow", "direction", "fresh-start"].includes(s.slug)).map(s => <option key={s.slug} value={s.slug}>{s.title}</option>)}
        </select>
      </label>
      <fieldset className="stack option-fieldset"><legend className="display" style={{ fontSize: 23, marginBottom: 12 }}>2. What’s on your heart today?</legend>
        <div className="need-grid">{dailyNeeds.map(n => <button type="button" className="opt" key={n.id} aria-pressed={need === n.id} onClick={() => setNeed(need === n.id ? "" : n.id)}>{n.label}</button>)}</div>
        <p className="small">Optional. Today’s choice can change without changing your season.</p>
      </fieldset>
      <label className="stack" style={{ gap: 8 }}><span className="display" style={{ fontSize: 23 }}>3. How much time would you like?</span>
        <select className="opt" value={minutes} onChange={e => setMinutes(e.target.value)}>
          <option>About 5 minutes</option><option>10–15 minutes</option><option>20–30 minutes</option>
        </select>
      </label>
      {error && <p role="alert">{error}</p>}
      <button className="btn" type="submit">Begin my devotional →</button>
    </form>
    <Link href="/today?sample=1" className="link-arrow">Try a sample first</Link>
    <Link href={`/your-story${season ? `?season=${encodeURIComponent(season)}` : ""}`} className="small">Share my full story instead (about 6 minutes) — so we can meet you where you are</Link>
    <p className="small">Your choices stay in this browser on this device. <Link href="/care">Care &amp; privacy</Link></p>
  </div></main></div>;
}
