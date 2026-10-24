"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { type Profile, heaviest, loadProfile, minutesLabel, needsCompany } from "../lib/story";
import { clearTodayCheckIn, dailyNeeds, dateKey, loadCheckIns, saveCheckIn, type NeedId } from "../lib/check-in";
import { women } from "../lib/women";
import Reflect from "./Reflect";
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

  useEffect(() => {
    setProfile(sample ? null : loadProfile());
    setNeed(sample ? "" : loadCheckIns().find(e => e.date === dateKey())?.need ?? "");
    setNotice("");
    setReady(true);
  }, [sample]);

  if (!ready) return <div className="app-shell"><div className="phone" /></div>;

  const weeklyWoman = women[profile?.woman ?? ""] ?? women.elizabeth;
  const dailyChoice = dailyNeeds.find(n => n.id === need);
  const w = dailyChoice ? women[dailyChoice.woman] : weeklyWoman;

  function checkIn(value: NeedId | "") {
    setNeed(value);
    const stored = sample || (value ? saveCheckIn(value) : clearTodayCheckIn());
    setNotice(sample ? "Sample updated. Your saved check-ins have not changed." : stored ? "Today’s focus updated. Your season stays the same." : "Updated for this visit only. Your browser could not save the check-in.");
  }
  const a = profile?.answers ?? {};
  const name = typeof a.name === "string" && a.name.trim() ? a.name.trim() : "";
  const weight = profile ? heaviest(a) : "";
  const initial = w.name.replace(/^(The |Mary, )/, "").charAt(0);

  return (
    <div className="app-shell">
      <div className="phone">
        <main className="phone-body">
          <Link href="/" className="small">← Back to At His Table</Link>
          {!profile && (
            <Link href="/your-story" className="card" style={{ padding: "12px 14px", fontSize: 14, lineHeight: 1.45, textDecoration: "none", color: "var(--ink)", background: "var(--blush)", borderColor: "transparent" }}>
              {sample ? "This is a sample day." : "You’re exploring a sample day."}{" "}<strong style={{ color: "var(--plum)" }}>Tell us your story</strong> and we&rsquo;ll set a table just for you →
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

          <section id="check-in" className="card stack" style={{ padding: 20, gap: 12 }}>
            <h2 className="display" style={{ fontSize: 25 }}>What’s on your heart today?</h2>
            <p className="small">Choose a focus for today’s Scripture, reflection, and prayer.</p>
            <div className="need-grid">{dailyNeeds.map(n => <button key={n.id} className="opt" aria-pressed={need === n.id} onClick={() => checkIn(n.id)}>{n.label}</button>)}</div>
            {need && <button className="ghost" style={{ alignSelf: "flex-start" }} onClick={() => checkIn("")}>Return to my season’s focus</button>}
            <p className="small" role="status">{notice || "You can skip this and begin below."}</p>
            {profile && <p className="small">Your season’s biblical starting point: {weeklyWoman.name}. <Link href="/planner">See this week’s check-ins</Link></p>}
          </section>
          {profile && <Link href="/your-story?full=1" className="small">Share more of my story</Link>}

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

          <figure className="card stack" style={{ margin: 0, padding: 18, gap: 8 }}>
            <p className="label">2 · Scripture</p>
            <blockquote className="display" style={{ margin: 0, fontSize: 19, lineHeight: 1.4 }}>
              &ldquo;{w.verse.text}&rdquo;
            </blockquote>
            <figcaption className="small" style={{ fontSize: 13 }}>
              {w.verse.ref} (NKJV)
            </figcaption>
          </figure>

          <section className="stack" style={{ gap: 8 }}>
            <p className="label">Today&rsquo;s devotion</p>
            <h2 className="display" style={{ fontSize: 21 }}>
              {w.title}
            </h2>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--ink-soft)" }}>{w.devotion}</p>
          </section>

          <p className="small">{a.minutes === "About 5 minutes" ? "A short sitting: read the verse, pray, and carry one thought into your day. Writing is optional." : a.minutes === "20–30 minutes" ? `A longer sitting: read ${w.ref} in your Bible, then take time with the reflection and prayer.` : "Read slowly, pause with the reflection, and pray in your own words. Take the time you need."}</p>
          <Reflect prompt={w.prompt} scripture={w.verse.ref} prayer={w.prayer} />

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

          <Link href="/care" className="small" style={{ alignSelf: "center", fontSize: 13 }}>
            Care &amp; privacy
          </Link>
        </main>
        <AppTabBar active="/today" />
      </div>
    </div>
  );
}
