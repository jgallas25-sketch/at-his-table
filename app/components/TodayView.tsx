"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { type Profile, heaviest, loadProfile, minutesLabel, needsCompany } from "../lib/story";
import { women } from "../lib/women";
import Reflect from "./Reflect";
import { AppTabBar } from "./SiteChrome";

// Day 1 of her table, built from her story. Devotion text is a draft pending pastor review.
const PRAISE_VERSE = { text: "I will bless the LORD at all times; His praise shall continually be in my mouth.", ref: "Psalm 34:1" };

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
}

export default function TodayView() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setProfile(loadProfile());
    setReady(true);
  }, []);

  if (!ready) return <div className="app-shell"><div className="phone" /></div>;

  const w = women[profile?.woman ?? ""] ?? women.elizabeth;
  const a = profile?.answers ?? {};
  const name = typeof a.name === "string" && a.name.trim() ? a.name.trim() : "";
  const weight = profile ? heaviest(a) : "";
  const initial = w.name.replace(/^(The |Mary, )/, "").charAt(0);

  return (
    <div className="app-shell">
      <div className="phone">
        <main className="phone-body">
          {!profile && (
            <Link href="/your-story" className="card" style={{ padding: "12px 14px", fontSize: 14, lineHeight: 1.45, textDecoration: "none", color: "var(--ink)", background: "var(--blush)", borderColor: "transparent" }}>
              This is a sample day. <strong style={{ color: "var(--plum)" }}>Tell us your story</strong> and we&rsquo;ll set a table just for you →
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

          <Link href="/care#help" className="small" style={{ alignSelf: "center", fontSize: 13 }}>
            Need someone to talk to right now?
          </Link>
        </main>
        <AppTabBar active="/today" />
      </div>
    </div>
  );
}
