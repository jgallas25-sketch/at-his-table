"use client";

import Link from "next/link";
import { useState } from "react";
import { matchWoman, questions, seasons } from "../lib/content";

/* eslint-disable @next/next/no-img-element */

const STORAGE_KEY = "aht-your-story";

export default function Intake({ seasonSlug }: { seasonSlug?: string }) {
  // A season card on the homepage passes ?season=slug, which pre-selects question 5.
  const preset = seasons.find((s) => s.slug === seasonSlug)?.title;
  const initialAnswers = () => (preset ? ["", "", "", "", preset] : []);
  const [step, setStep] = useState(0); // 0 = intro, 1–5 = questions, 6 = result
  const [answers, setAnswers] = useState<string[]>(initialAnswers);

  function choose(option: string) {
    const next = [...answers];
    next[step - 1] = option;
    setAnswers(next);
    if (step === 5) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers: next, savedAt: new Date().toISOString() }));
      } catch {
        // Storage can be unavailable (private browsing); the result still shows.
      }
    }
    setStep(step + 1);
  }

  function restart() {
    setAnswers(initialAnswers());
    setStep(0);
  }

  const match = matchWoman(answers);
  const q = questions[Math.min(Math.max(step - 1, 0), 4)];

  return (
    <div className="app-shell">
      <div className="phone">
        {step === 0 && (
          <div className="phone-body" style={{ justifyContent: "flex-end", gap: 18, padding: "32px 28px 40px", background: "var(--linen)" }}>
            <Link href="/" style={{ marginBottom: "auto" }} aria-label="Back to At His Table home">
              <img src="/images/logo.png" alt="At His Table" style={{ height: 34, width: "auto" }} />
            </Link>
            <p className="label" style={{ fontSize: 12 }}>
              Your story
            </p>
            <h1 className="display" style={{ fontSize: 36, lineHeight: 1.12 }}>
              There&rsquo;s a woman in Scripture who has walked where you are.
            </h1>
            <p className="lead" style={{ fontSize: 17 }}>
              Five short questions. Then we&rsquo;ll introduce you to her, and set your table for the week ahead.
            </p>
            <button className="btn" style={{ marginTop: 12, width: "100%" }} onClick={() => setStep(1)}>
              Begin
            </button>
            <p className="small" style={{ textAlign: "center", fontSize: 13 }}>
              About two minutes. Your answers stay private.
            </p>
          </div>
        )}

        {step >= 1 && step <= 5 && (
          <div className="phone-body" style={{ gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <button className="ghost" onClick={() => setStep(step - 1)}>
                ← Back
              </button>
              <p className="small" style={{ fontSize: 13 }}>
                Question {step} of 5
              </p>
            </div>
            <div
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={5}
              aria-valuenow={step - 1}
              aria-label="Progress"
              style={{ height: 4, background: "var(--line)", borderRadius: 2 }}
            >
              <div
                style={{
                  height: 4,
                  borderRadius: 2,
                  background: "var(--terracotta)",
                  width: `${Math.max(6, ((step - 1) / 5) * 100)}%`,
                  transition: "width .3s",
                }}
              />
            </div>
            <h2 className="display" style={{ fontSize: 30, lineHeight: 1.15, marginTop: 8 }}>
              {q.title}
            </h2>
            <div className="stack" style={{ gap: 10 }}>
              {q.options.map((o) => (
                <button key={o} className="opt" aria-pressed={answers[step - 1] === o} onClick={() => choose(o)}>
                  {o}
                </button>
              ))}
            </div>
          </div>
        )}

        {step > 5 && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div className="stack" style={{ background: "var(--plum-dark)", color: "var(--cream)", padding: "36px 28px 30px", gap: 12 }}>
              <p className="label" style={{ fontSize: 12, color: "var(--clay)" }}>
                Your woman of the Bible
              </p>
              <h1 className="display" style={{ fontSize: 40, lineHeight: 1.05, color: "var(--cream)" }}>
                {match.name}
              </h1>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "#e6dad2" }}>{match.why}</p>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "var(--clay)" }}>Read her story: {match.ref}</p>
            </div>
            <div className="phone-body" style={{ gap: 12 }}>
              <h2 className="display" style={{ fontSize: 22 }}>
                Your table is set
              </h2>
              {[
                ["Season", answers[4]],
                ["Where you are", answers[2]],
                ["Where you’re going", answers[3]],
              ].map(([k, v]) => (
                <p key={k} className="card" style={{ margin: 0, padding: "12px 14px", fontSize: 15, lineHeight: 1.45, borderRadius: 8 }}>
                  <strong style={{ color: "var(--plum)" }}>{k}:</strong> {v}
                </p>
              ))}
              <Link href="/today" className="btn" style={{ marginTop: "auto" }}>
                Start my first morning <span aria-hidden="true">→</span>
              </Link>
              <button className="ghost" style={{ alignSelf: "center" }} onClick={restart}>
                Start over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
