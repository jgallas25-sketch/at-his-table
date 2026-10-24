"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { type Profile, heaviest, loadProfile, minutesLabel, needsCompany } from "../lib/story";
import { clearTodayCheckIn, dailyNeeds, dateKey, loadCheckIns, saveCheckIn, type NeedId } from "../lib/check-in";
import { women } from "../lib/women";
import Reflect from "./Reflect";
import JourneyGuide from "./JourneyGuide";
import { AppTabBar } from "./SiteChrome";

// Day 1 of her table, built from her story. Devotion text is a draft pending pastor review.
const PRAISE_VERSE = { text: "I will bless the LORD at all times; His praise shall continually be in my mouth.", ref: "Psalm 34:1" };

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
}

export default function TodayView({ sample = false }: { sample?: boolean }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [need, setNeed] = useState<NeedId | "">("");
  const [notice, setNotice] = useState("");
  const [ready, setReady] = useState(false);
  // Opened when she arrives via a "Start today’s check-in" link. Content renders only after mount, so no hydration mismatch.
  const [checkOpen, setCheckOpen] = useState(() => typeof window !== "undefined" && window.location.hash === "#check-in");

  useEffect(() => {
    setProfile(sample ? null : loadProfile());
    setNeed(sample ? "" : loadCheckIns().find(e => e.date === dateKey())?.need ?? "");
    setNotice("");
    setReady(true);
  }, [sample]);

  useEffect(() => {
    if (!ready) return;
    const id = window.location.hash.slice(1);
    if (id === "reflection" || id === "check-in") document.getElementById(id)?.scrollIntoView();
  }, [ready]);

  if (!ready) return <div className="app-shell"><div className="phone" /></div>;

  const weeklyWoman = women[profile?.woman ?? ""] ?? women.elizabeth;
  const dailyChoice = dailyNeeds.find(n => n.id === need);
  // Her matched woman of Scripture stays with her. Without a story yet, today's choice sets the devotional;
  // with a story, today's choice adds a verse alongside it.
  const dailyWoman = dailyChoice ? women[dailyChoice.woman] : undefined;
  const w = profile ? weeklyWoman : dailyWoman ?? weeklyWoman;
  const wordForToday = profile && dailyWoman && dailyWoman !== weeklyWoman ? dailyWoman : undefined;

  function checkIn(value: NeedId | "") {
    setNeed(value);
    const stored = sample || (value ? saveCheckIn(value) : clearTodayCheckIn());
    setNotice(sample ? "Sample updated. Your saved check-ins have not changed." : stored ? "Saved for today. Your season stays the same." : "Updated for this visit only. Your browser could not save the check-in.");
  }
  const a = profile?.answers ?? {};
  const name = typeof a.name === "string" && a.name.trim() ? a.name.trim() : "";
  const weight = profile ? heaviest(a) : "";
  const initial = w.name.replace(/^(The |Mary, )/, "").charAt(0);

  return (
    <div className="app-shell">
      <div className="phone">
        <main className="phone-body">
          <JourneyGuide place="today" sample={sample} />
          {!profile && (
            <Link href="/your-story" className="card" style={{ padding: "12px 14px", fontSize: 14, lineHeight: 1.45, textDecoration: "none", color: "var(--ink)", background: "var(--blush)", borderColor: "transparent" }}>
              {sample ? "This is a sample day." : "You’re exploring a sample day."}{" "}<strong style={{ color: "var(--plum)" }}>Tell us your story</strong>{" "}and we&rsquo;ll set a table just for you →
            </Link>
          )}

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
            <div>
              <p className="small" style={{ fontSize: 13 }}>
                Day 1 · {profile ? minutesLabel(a).replace(/^about /, "about ") : "about 15 minutes"}
              </p>
              <h1 className="display" style={{ fontSize: 28 }}>
                {greeting()}
                {name ? `, ${name}` : ""}.
              </h1>
            </div>
            {weight && <span className="chip">{weight}</span>}
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center", background: "var(--plum-dark)", color: "var(--cream)", borderRadius: 12, padding: "14px 16px" }}>
            <span
              className="display"
              aria-hidden="true"
              style={{ width: 42, height: 42, borderRadius: "50%", background: "var(--clay)", color: "var(--plum-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}
            >
              {initial}
            </span>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.4 }}>
              <span style={{ color: "var(--clay)", fontWeight: 600 }}>Walking with {w.name}</span>
              <br />
              Day 1 · {w.ref}
            </p>
          </div>

          <section className="stack" style={{ gap: 8, background: "var(--plum-dark)", color: "var(--cream)", borderRadius: 12, padding: 18 }}>
            <p className="label" style={{ color: "var(--clay)" }}>
              1 · Praise
            </p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "#e6dad2" }}>
              Begin by declaring with your mouth who God is and what He has done. Say it out loud.
            </p>
            <blockquote className="display" style={{ margin: 0, fontSize: 18, lineHeight: 1.45, color: "var(--cream)" }}>
              &ldquo;{PRAISE_VERSE.text}&rdquo;
            </blockquote>
            <p style={{ margin: 0, fontSize: 13, color: "var(--clay)" }}>{PRAISE_VERSE.ref} (NKJV)</p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "#e6dad2", fontStyle: "italic" }}>Lord, {w.praise}</p>
          </section>

          {/* Daily check-in: optional and compact, so her time still begins with praise. */}
          <details id="check-in" className="card stack check-in" style={{ padding: "16px 20px", gap: 12 }} open={checkOpen} onToggle={e => setCheckOpen(e.currentTarget.open)}>
            <summary>What&rsquo;s on your heart today?<small>{dailyChoice ? `Today: ${dailyChoice.label}` : "Optional — tap to choose"}</small></summary>
            <div className="need-grid" style={{ marginTop: 12 }}>{dailyNeeds.map(n => <button key={n.id} className="opt" aria-pressed={need === n.id} onClick={() => checkIn(n.id)}>{n.label}</button>)}</div>
            {need && <button className="ghost" style={{ alignSelf: "flex-start" }} onClick={() => checkIn("")}>Clear today&rsquo;s choice</button>}
            <p className="small" role="status">{notice || (profile ? `You’re walking with ${weeklyWoman.name}. Today’s choice adds a word for your heart.` : "Choose one, or simply begin below.")}</p>
            {profile && <Link href="/planner" className="small">See this week&rsquo;s check-ins</Link>}
          </details>
          <figure className="card stack" style={{ margin: 0, padding: 18, gap: 8 }}>
            <p className="label">2 · Scripture</p>
            <blockquote className="display" style={{ margin: 0, fontSize: 19, lineHeight: 1.4 }}>
              &ldquo;{w.verse.text}&rdquo;
            </blockquote>
            <figcaption className="small" style={{ fontSize: 13 }}>
              {w.verse.ref} (NKJV)
            </figcaption>
          </figure>

          {wordForToday && (
            <figure className="card stack" style={{ margin: 0, padding: 18, gap: 8, background: "var(--linen)" }}>
              <p className="label">A word for today · {dailyChoice?.label}</p>
              <blockquote className="display" style={{ margin: 0, fontSize: 18, lineHeight: 1.4 }}>&ldquo;{wordForToday.verse.text}&rdquo;</blockquote>
              <figcaption className="small" style={{ fontSize: 13 }}>{wordForToday.verse.ref} (NKJV) · from the story of {wordForToday.name}</figcaption>
            </figure>
          )}

          <section className="stack" style={{ gap: 8 }}>
            <p className="label">Today&rsquo;s devotion</p>
            <h2 className="display" style={{ fontSize: 21 }}>
              {w.title}
            </h2>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--ink-soft)" }}>{w.devotion}</p>
          </section>

          <p className="small">{a.minutes === "About 5 minutes" ? "A short sitting: read the verse, pray, and carry one thought into your day. Writing is optional." : a.minutes === "20–30 minutes" ? `A longer sitting: read ${w.ref} in your Bible, then take time with the reflection and prayer.` : "Read slowly, pause with the reflection, and pray in your own words. Take the time you need."}</p>
          <Reflect prompt={w.prompt} scripture={w.verse.ref} prayer={w.prayer} sample={sample} />

          {profile && needsCompany(a) && (
            <section className="stack" style={{ gap: 8, background: "var(--blush)", borderRadius: 12, padding: 18 }}>
              <h2 className="display" style={{ fontSize: 20 }}>
                You don&rsquo;t have to carry this alone.
              </h2>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--ink-soft)" }}>
                Along with your time at the table, consider sharing what&rsquo;s on your heart with your pastor or a trusted
                friend this week. God often sends His comfort through people.
              </p>
              <Link href="/care" style={{ fontSize: 15, fontWeight: 600 }}>
                When to reach out →
              </Link>
            </section>
          )}

          {profile && <Link href="/your-story" className="small" style={{ alignSelf: "center" }}>Update my story</Link>}
          <Link href="/care" className="small" style={{ alignSelf: "center", fontSize: 13 }}>
            Care &amp; privacy
          </Link>
        </main>
        <AppTabBar active="/today" />
      </div>
    </div>
  );
}
