"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  type Answers,
  PROGRESS_KEY,
  type Question,
  UNSAFE,
  matchWomen,
  minutesLabel,
  optionsFor,
  parts,
  safeToStore,
  safetyNeed,
  saveProfile,
  seasonPresets,
  visibleQuestions,
  whatWeHeard,
} from "../lib/story";

/* eslint-disable @next/next/no-img-element */

type Screen = "welcome" | `q:${string}` | "safety" | "heard" | "woman" | "set";
type Safety = { kind: "danger" | "harm"; then: Screen };

const EXCLUSIVE = ["Prefer not to say", "No children"];

export default function Intake({ seasonSlug }: { seasonSlug?: string }) {
  const router = useRouter();
  const preset = useMemo(() => (seasonSlug ? seasonPresets[seasonSlug] ?? {} : {}), [seasonSlug]);
  const [answers, setAnswers] = useState<Answers>(preset);
  const [screen, setScreen] = useState<Screen>("welcome");
  const [saved, setSaved] = useState<{ answers: Answers; screen: Screen } | null>(null);
  const [safety, setSafety] = useState<Safety | null>(null);
  const [seen, setSeen] = useState<{ danger?: boolean; harm?: boolean }>({});

  // Pick up a story she started on this device.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(PROGRESS_KEY);
      if (raw) setSaved(JSON.parse(raw));
    } catch {
      // Storage unavailable: start fresh.
    }
  }, []);

  // Save progress as she goes (never the "not safe at home" answer).
  useEffect(() => {
    if (!screen.startsWith("q:")) return;
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify({ answers: safeToStore(answers), screen }));
    } catch {
      // Storage unavailable: progress isn't kept.
    }
  }, [answers, screen]);

  const visible = visibleQuestions(answers);
  const firstQ: Screen = `q:${visible[0].id}`;

  function next(fromId: string, a: Answers) {
    const vis = visibleQuestions(a);
    const i = vis.findIndex((q) => q.id === fromId);
    const after: Screen = i >= 0 && i < vis.length - 1 ? `q:${vis[i + 1].id}` : "heard";

    if (fromId === "together" && (a.together as string[] | undefined)?.includes(UNSAFE) && !seen.danger) {
      setSeen((s) => ({ ...s, danger: true }));
      setSafety({ kind: "danger", then: after });
      setScreen("safety");
      return;
    }
    if (after === "heard") {
      const need = safetyNeed(a);
      if (need === "harm" && !seen.harm) {
        setSeen((s) => ({ ...s, harm: true }));
        setSafety({ kind: "harm", then: "heard" });
        setScreen("safety");
        return;
      }
      if (need === "danger" && !seen.danger) {
        setSeen((s) => ({ ...s, danger: true }));
        setSafety({ kind: "danger", then: "heard" });
        setScreen("safety");
        return;
      }
    }
    setScreen(after);
    window.scrollTo(0, 0);
  }

  function back(fromId: string) {
    const i = visible.findIndex((q) => q.id === fromId);
    setScreen(i > 0 ? `q:${visible[i - 1].id}` : "welcome");
  }

  function startOver() {
    try {
      localStorage.removeItem(PROGRESS_KEY);
    } catch {}
    setSaved(null);
    setAnswers(preset);
    setSeen({});
    setScreen(`q:${visibleQuestions(preset)[0].id}`);
  }

  const matches = useMemo(() => (screen === "woman" || screen === "set" ? matchWomen(answers) : []), [screen, answers]);
  const name = typeof answers.name === "string" && answers.name.trim() ? answers.name.trim() : "";

  function takeSeat() {
    saveProfile({
      answers: safeToStore(answers),
      woman: matches[0].key,
      others: matches.slice(1).map((w) => w.key),
      savedAt: new Date().toISOString(),
    });
    router.push("/today");
  }

  const q = screen.startsWith("q:") ? visible.find((x) => `q:${x.id}` === screen) : undefined;

  return (
    <div className="app-shell">
      <div className="phone">
        {screen === "welcome" && (
          <div className="phone-body" style={{ justifyContent: "flex-end", gap: 18, padding: "32px 28px 40px", background: "var(--linen)" }}>
            <Link href="/" style={{ marginBottom: "auto" }} aria-label="Back to At His Table home">
              <img src="/images/logo.png" alt="At His Table" style={{ height: 38, width: "auto" }} />
            </Link>
            <p className="label" style={{ fontSize: 12 }}>
              Your story
            </p>
            <h1 className="display" style={{ fontSize: 34, lineHeight: 1.12 }}>
              Before we set your table, we&rsquo;d love to know you.
            </h1>
            <p className="lead" style={{ fontSize: 17 }}>
              The more you share, the more your time with Him is built around your real life. It takes about 6
              minutes. You can skip any question, and stop and come back anytime.
            </p>
            {saved ? (
              <>
                <button
                  className="btn"
                  style={{ marginTop: 12, width: "100%" }}
                  onClick={() => {
                    setAnswers({ ...saved.answers });
                    setScreen(saved.screen);
                  }}
                >
                  Continue where I left off <span aria-hidden="true">→</span>
                </button>
                <button className="ghost" style={{ alignSelf: "center" }} onClick={startOver}>
                  Start over
                </button>
              </>
            ) : (
              <button className="btn" style={{ marginTop: 12, width: "100%" }} onClick={() => setScreen(firstQ)}>
                Let&rsquo;s Begin <span aria-hidden="true">→</span>
              </button>
            )}
            <p className="small" style={{ textAlign: "center", fontSize: 13 }}>
              Your story stays private. For now it&rsquo;s saved only on this device.
            </p>
          </div>
        )}

        {q && (
          <QuestionScreen
            key={q.id}
            q={q}
            answers={answers}
            index={visible.indexOf(q)}
            total={visible.length}
            onBack={() => back(q.id)}
            onAnswer={(value, advance) => {
              const a = { ...answers, [q.id]: value };
              // Her heaviest weight must be one of the things she picked.
              if (q.id === "heart" && typeof a.heaviest === "string" && !(value as string[]).includes(a.heaviest)) {
                delete a.heaviest;
              }
              setAnswers(a);
              if (advance) next(q.id, a);
            }}
            onSkip={() => {
              const a = { ...answers };
              delete a[q.id];
              setAnswers(a);
              next(q.id, a);
            }}
          />
        )}

        {screen === "safety" && safety && (
          <SafetyScreen
            kind={safety.kind}
            onContinue={() => {
              setScreen(safety.then);
              setSafety(null);
            }}
          />
        )}

        {screen === "heard" && (
          <div className="phone-body" style={{ gap: 18, padding: "36px 26px 32px" }}>
            <p className="label" style={{ fontSize: 12 }}>
              Thank you for trusting us with your story
            </p>
            <h1 className="display" style={{ fontSize: 30, lineHeight: 1.15 }}>
              Here&rsquo;s what we heard{name ? `, ${name}` : ""}.
            </h1>
            {whatWeHeard(answers).length ? (
              <div className="stack" style={{ gap: 10 }}>
                {whatWeHeard(answers).map((line) => (
                  <p key={line} className="display" style={{ fontStyle: "italic", fontSize: 19, lineHeight: 1.5, color: "var(--ink)" }}>
                    {line}
                  </p>
                ))}
              </div>
            ) : (
              <p className="lead">You kept things private, and that&rsquo;s okay. You can always tell us more later.</p>
            )}
            <div className="stack" style={{ gap: 8, marginTop: "auto" }}>
              <button className="btn" style={{ width: "100%" }} onClick={() => setScreen("woman")}>
                That&rsquo;s me <span aria-hidden="true">→</span>
              </button>
              <button className="ghost" style={{ alignSelf: "center" }} onClick={() => setScreen(firstQ)}>
                Change something
              </button>
            </div>
          </div>
        )}

        {screen === "woman" && matches[0] && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div className="stack" style={{ background: "var(--plum-dark)", color: "var(--cream)", padding: "44px 28px 32px", gap: 14 }}>
              <p style={{ margin: 0, fontSize: 16, color: "#e6dad2" }}>There&rsquo;s a woman in Scripture who knows this road.</p>
              <h1 className="display" style={{ fontSize: 40, lineHeight: 1.05, color: "var(--cream)" }}>
                {matches[0].name}
              </h1>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: "#f3ebe4" }}>{matches[0].why}</p>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "var(--clay)" }}>Read her story: {matches[0].ref}</p>
            </div>
            <div className="phone-body" style={{ gap: 14 }}>
              {matches.length > 1 && (
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--ink-soft)" }}>
                  As your season unfolds, you&rsquo;ll also walk with{" "}
                  <strong style={{ color: "var(--plum)" }}>{matches.slice(1).map((w) => w.name).join(" and ")}</strong>.
                </p>
              )}
              <button className="btn" style={{ width: "100%", marginTop: "auto" }} onClick={() => setScreen("set")}>
                Set my table <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        )}

        {screen === "set" && matches[0] && (
          <div className="phone-body" style={{ gap: 16, padding: "40px 26px 32px", background: "var(--linen)" }}>
            <p className="label" style={{ fontSize: 12 }}>
              Day 1
            </p>
            <h1 className="display" style={{ fontSize: 32, lineHeight: 1.12 }}>
              Your table is set{name ? `, ${name}` : ""}.
            </h1>
            {[
              ["Walking with", `${matches[0].name} · ${matches[0].ref}`],
              ["Each day", `${minutesLabel(answers).replace(/^about /, "About ")}, beginning with praise`],
              ["Today’s rhythm", "Praise · Scripture · Reflection · Seek God · Gratitude"],
            ].map(([k, v]) => (
              <p key={k} className="card" style={{ margin: 0, padding: "12px 14px", fontSize: 15, lineHeight: 1.45, borderRadius: 8 }}>
                <strong style={{ color: "var(--plum)" }}>{k}:</strong> {v}
              </p>
            ))}
            <button className="btn" style={{ width: "100%", marginTop: "auto" }} onClick={takeSeat}>
              Take Your Seat <span aria-hidden="true">→</span>
            </button>
            <button className="ghost" style={{ alignSelf: "center" }} onClick={startOver}>
              Start over
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function QuestionScreen({
  q,
  answers,
  index,
  total,
  onBack,
  onAnswer,
  onSkip,
}: {
  q: Question;
  answers: Answers;
  index: number;
  total: number;
  onBack: () => void;
  onAnswer: (value: string | string[], advance: boolean) => void;
  onSkip: () => void;
}) {
  const current = answers[q.id];
  const picked = Array.isArray(current) ? current : [];
  const [text, setText] = useState(typeof current === "string" ? current : "");
  const options = optionsFor(q, answers);

  function toggle(o: string) {
    let nextPicked: string[];
    if (picked.includes(o)) nextPicked = picked.filter((p) => p !== o);
    else if (EXCLUSIVE.includes(o)) nextPicked = [o];
    else {
      nextPicked = picked.filter((p) => !EXCLUSIVE.includes(p));
      if (q.max && nextPicked.length >= q.max) return;
      nextPicked = [...nextPicked, o];
    }
    onAnswer(nextPicked, false);
  }

  return (
    <div className="phone-body" style={{ gap: 18 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button className="ghost" onClick={onBack}>
          ← Back
        </button>
        <p className="small" style={{ fontSize: 13 }}>
          Part {q.part} of {parts.length} · {parts[q.part - 1]}
        </p>
      </div>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={index}
        aria-label="Progress"
        style={{ height: 4, background: "var(--line)", borderRadius: 2 }}
      >
        <div style={{ height: 4, borderRadius: 2, background: "var(--terracotta)", width: `${Math.max(4, (index / total) * 100)}%`, transition: "width .3s" }} />
      </div>

      <h2 className="display" style={{ fontSize: 28, lineHeight: 1.18, marginTop: 6 }}>
        {q.title}
      </h2>
      {q.hint && <p className="small" style={{ fontSize: 15, marginTop: -8 }}>{q.hint}</p>}

      {q.kind === "name" && (
        <form
          className="stack"
          style={{ gap: 12 }}
          onSubmit={(e) => {
            e.preventDefault();
            onAnswer(text.trim(), true);
          }}
        >
          <label htmlFor="name" className="label">
            First name
          </label>
          <input
            id="name"
            className="opt"
            style={{ cursor: "text" }}
            autoComplete="given-name"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn" type="submit" style={{ width: "100%" }}>
            Continue
          </button>
        </form>
      )}

      {q.kind === "one" && (
        <div className="stack" style={{ gap: 10 }}>
          {options.map((o) => (
            <button key={o} className="opt" aria-pressed={current === o} onClick={() => onAnswer(o, true)}>
              {o}
            </button>
          ))}
        </div>
      )}

      {q.kind === "many" && (
        <>
          <div className="stack" style={{ gap: 10 }}>
            {options.map((o) => {
              const on = picked.includes(o);
              const full = !on && !!q.max && picked.filter((p) => !EXCLUSIVE.includes(p)).length >= q.max && !EXCLUSIVE.includes(o);
              return (
                <button key={o} className="opt" aria-pressed={on} disabled={full} style={full ? { opacity: 0.45 } : undefined} onClick={() => toggle(o)}>
                  {o}
                </button>
              );
            })}
          </div>
          <button className="btn" style={{ width: "100%" }} disabled={!picked.length} onClick={() => onAnswer(picked, true)}>
            Continue
          </button>
        </>
      )}

      {q.kind === "text" && (
        <div className="stack" style={{ gap: 12 }}>
          <label htmlFor="words" className="label">
            Your words
          </label>
          <textarea
            id="words"
            rows={6}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Lord, I need You to meet me in…"
            style={{ font: "16px var(--font-body)", padding: 14, border: "1px solid var(--line-strong)", borderRadius: 10, background: "#fff", resize: "vertical" }}
          />
          <button className="btn" style={{ width: "100%" }} onClick={() => onAnswer(text.trim(), true)}>
            Finish my story
          </button>
        </div>
      )}

      <button className="ghost" style={{ alignSelf: "center", marginTop: 4 }} onClick={onSkip}>
        Skip this question
      </button>
    </div>
  );
}

function SafetyScreen({ kind, onContinue }: { kind: "danger" | "harm"; onContinue: () => void }) {
  const row: React.CSSProperties = { margin: 0, padding: "14px 16px", fontSize: 16, lineHeight: 1.5, borderRadius: 10 };
  return (
    <div className="phone-body" style={{ gap: 16, padding: "40px 26px 32px" }}>
      <h1 className="display" style={{ fontSize: 30, lineHeight: 1.15 }}>
        {kind === "harm" ? "We’re so glad you told us." : "You matter, and your safety comes first."}
      </h1>
      <p className="lead" style={{ fontSize: 17 }}>
        What you shared matters. Before anything else, we want you to know help is here, and you don&rsquo;t have to
        carry this alone.
      </p>
      {kind === "harm" ? (
        <>
          <p className="card" style={row}>
            <strong style={{ color: "var(--plum)" }}>988 Suicide &amp; Crisis Lifeline</strong>
            <br />
            Call or text <a href="tel:988">988</a>, any time, day or night.
          </p>
          <p className="card" style={row}>
            Please tell someone you trust today: a pastor, a friend, or a counselor.
          </p>
        </>
      ) : (
        <>
          <p className="card" style={row}>
            <strong style={{ color: "var(--plum)" }}>National Domestic Violence Hotline</strong>
            <br />
            Call <a href="tel:18007997233">1-800-799-7233</a> or text START to <a href="sms:88788&body=START">88788</a>.
          </p>
          <p className="card" style={row}>
            A pastor, counselor or social worker can help you make a safety plan.
          </p>
        </>
      )}
      <p className="card" style={row}>
        If you&rsquo;re in danger right now, call <a href="tel:911">911</a>.
      </p>
      <div className="stack" style={{ gap: 8, marginTop: "auto" }}>
        <button className="btn" style={{ width: "100%" }} onClick={onContinue}>
          Continue my story
        </button>
        <button className="btn btn-light" style={{ width: "100%" }} onClick={() => window.location.replace("https://www.google.com")}>
          Leave this site quickly
        </button>
        {kind === "danger" && (
          <p className="small" style={{ textAlign: "center", fontSize: 13 }}>
            This answer is never saved on your device.
          </p>
        )}
      </div>
    </div>
  );
}
