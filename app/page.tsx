import Image from "next/image";
import Link from "next/link";
import HeroMedia from "./components/HeroMedia";
import Icon from "./components/Icon";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { examplePairs, rhythm, seasons } from "./lib/content";

/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ─────────────────────────────────── */}
        <section id="top" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">A devotional journal built around you</p>
            <p className="display" style={{ fontStyle: "italic", fontSize: "clamp(19px, 1.7vw, 23px)", lineHeight: 1.45, color: "var(--ink-soft)", maxWidth: 580 }}>
              Life is full. Make a little room for time with Jesus.
            </p>
            <h1 className="display h1" style={{ maxWidth: 640 }}>
              There&rsquo;s a seat at His table with your name on it.
            </h1>
            <p className="lead" style={{ maxWidth: 580 }}>
              Scripture, prayer, and a place to reflect &mdash; shaped around your season and what is on your heart today.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24 }}>
              <Link href="/your-story" className="btn">
                Take Your Seat <span aria-hidden="true">→</span>
              </Link>
              <Link href="/today?sample=1" className="link-arrow">Try a Sample Day</Link>
            </div>
            <p className="small">Free preview. No account or payment needed.</p>
          </div>
          <div className="hero-photo">
            <HeroMedia />
          </div>
        </section>

        {/* ── How it works ─────────────────────────── */}
        <section id="story" className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)" }}>
          <div className="wrap stack" style={{ gap: 48 }}>
            <div className="stack" style={{ textAlign: "center", alignItems: "center", gap: 14 }}>
              <p className="eyebrow">How it works</p>
              <h2 className="display h2">It starts where you are. It leads you to Him.</h2>
            </div>
            <ol className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 36, listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { t: "Tell us your story", l: "Start with your season, today’s need, and the time you have. Share more whenever you’re ready." },
                { t: "Meet her in Scripture", l: "Explore a biblical story with themes relevant to your life." },
                { t: "Sit with Him daily", l: "Begin with praise, then Scripture, reflection, prayer, and gratitude. Try a sample today." },
              ].map((step, i) => (
                <li key={step.t} className="stack" style={{ gap: 12 }}>
                  <span className="display" style={{ fontSize: 48, lineHeight: 1, color: "var(--terracotta)" }}>
                    {i + 1}
                  </span>
                  <p className="display" style={{ fontSize: 26 }}>
                    {step.t}
                  </p>
                  <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "var(--ink-soft)" }}>{step.l}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Daily rhythm ─────────────────────────── */}
        <section className="section" style={{ textAlign: "center", background: "#fff", paddingTop: 0 }}>
          <h2 className="display h2" style={{ marginBottom: 16 }}>
            A daily rhythm for your walk with God.
          </h2>
          <p className="lead" style={{ margin: "0 auto 48px", maxWidth: 620 }}>
            Every morning at the table begins with praise, then moves through His Word, your heart, prayer and
            thanks.
          </p>
          <ol className="wrap grid-auto rhythm" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 28, listStyle: "none", padding: 0 }}>
            {rhythm.map((r, i) => (
              <li key={r.title} className="stack" style={{ alignItems: "center", gap: 10 }}>
                <span className="season-icon" style={{ width: 64, height: 64 }}>
                  <Icon name={r.icon} size={28} />
                </span>
                <span className="label" style={{ fontSize: 11 }}>
                  Step {i + 1}
                </span>
                <p className="display" style={{ fontSize: 26 }}>
                  {r.title}
                </p>
                <p style={{ margin: 0, fontSize: 16, color: "var(--muted)", maxWidth: 260 }}>{r.line}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Mission ──────────────────────────────── */}
        <section id="vision" className="section series">
          <div className="wrap split">
            <img
              src="/images/hero-woman-bible.jpg"
              alt="A woman writing in her journal beside an open Bible"
              style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 12 }}
            />
            <div className="stack">
              <p className="eyebrow">Our mission</p>
              <h2 className="display h2">
                Draw closer to God in the life you actually have.
              </h2>
              <p className="lead">
                A little time in His Word. An honest prayer. Space to listen. Our hope is to help you return to Jesus, one day at a time.
              </p>
              <details><summary>Scripture behind our mission</summary>              <figure style={{ margin: "8px 0 0" }}>
                <blockquote className="display" style={{ margin: "0 0 12px", fontStyle: "italic", fontSize: 22, lineHeight: 1.5 }}>
                  &ldquo;The LORD your God in your midst, the Mighty One, will save; He will rejoice over you with
                  gladness, He will quiet you with His love, He will rejoice over you with singing.&rdquo;
                </blockquote>
                <figcaption style={{ fontSize: 13, letterSpacing: "0.14em", color: "var(--clay)" }}>ZEPHANIAH 3:17 · NKJV</figcaption>
              </figure></details>
            </div>
          </div>
        </section>

        {/* ── Martha ───────────────────────────────── */}
        <section id="martha" className="section" style={{ background: "var(--clay)" }}>
          <div className="wrap stack" style={{ gap: 40 }}>
            <div className="split">
              <img
                src="/images/martha-kitchen.jpg"
                alt="A mother cooking alone in the kitchen on Thanksgiving while her family laughs at the table in the next room"
                style={{ width: "100%", height: 400, objectFit: "cover", objectPosition: "50% 45%", borderRadius: 12 }}
              />
              <div className="stack">
                <p className="eyebrow" style={{ color: "#5c2a1a" }}>
                  Why the table
                </p>
                <h2 className="display h2" style={{ color: "var(--clay-ink)" }}>
                  For every Martha who forgot she was invited to sit.
                </h2>
                <p className="lead" style={{ color: "#3a2630" }}>
                  Martha welcomed Jesus but became distracted with serving. His invitation to attend to what matters speaks to our busy lives, too. You can bring your responsibilities to Him and make room to listen.
                </p>
                <a href="#seasons" className="link-arrow" style={{ color: "var(--clay-ink)" }}>
                  Find your seat →
                </a>
              </div>
            </div>
            <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {[
                {
                  q: "“Martha, Martha, you are worried and troubled about many things. But one thing is needed.”",
                  ref: "Luke 10:41–42 (NKJV)",
                },
              ].map((v) => (
                <figure key={v.ref} style={{ margin: 0, background: "#faf1e8", borderRadius: 10, padding: 32 }}>
                  <blockquote className="display" style={{ margin: "0 0 14px", fontSize: 23, lineHeight: 1.4, color: "var(--clay-ink)" }}>
                    {v.q}
                  </blockquote>
                  <figcaption style={{ fontSize: 14, color: "#5c2a1a" }}>{v.ref}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── Series ───────────────────────────────── */}
        <section id="series" className="section series">
          <div className="wrap stack" style={{ gap: 56 }}>
            <div className="split">
              <div className="player" role="img" aria-label="Emily and Heather at the kitchen table; series coming soon">
                <img src="/images/hero.jpg" alt="" />
                <div className="player-badge">
                  Episode One · Coming soon
                </div>
              </div>
              <div className="stack">
                <p className="eyebrow">The series</p>
                <h2 className="display h2">Two women. One table. Every season.</h2>
                <p className="lead">
                  Meet Emily and Heather: two women talking honestly about faith in the middle of a full life. Their kitchen-table series is coming soon.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 18 }}>
                  <Link href="/today?sample=1" className="btn btn-light">
                    Try the devotional
                  </Link>
                  <p className="small" style={{ color: "#cfc0c7" }}>
                    Explore the daily experience while the series is in preparation.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="grid-auto"
              style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32, borderTop: "1px solid var(--plum-line)", paddingTop: 40 }}
            >
              {[
                {
                  name: "Emily",
                  img: "/images/emily.jpg",
                  line: "“I keep thinking I’ll find time for God once things slow down. They never slow down.”",
                },
                {
                  name: "Heather",
                  img: "/images/heather.jpg",
                  line: "“Honey, He’s not waiting for you to have it together. He set the table anyway.”",
                },
              ].map((c) => (
                <div key={c.name} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <img src={c.img} alt={c.name} style={{ width: 104, height: 128, objectFit: "cover", borderRadius: 8, flexShrink: 0 }} />
                  <div className="stack" style={{ gap: 8 }}>
                    <p className="display" style={{ fontSize: 26 }}>
                      {c.name}
                    </p>
                    <p style={{ margin: 0, fontSize: 17, lineHeight: 1.55, color: "#e6dad2" }}>{c.line}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Season picker ────────────────────────── */}
        <section id="seasons" className="section" style={{ textAlign: "center", background: "var(--linen)" }}>
          <div className="wrap stack" style={{ alignItems: "center", gap: 14 }}>
            <h2 className="display h2">What season are you in?</h2>
            <p className="lead">Choose a starting point for your walk. You can check in separately with what is on your heart each day.</p>
          </div>
          <div className="wrap grid-auto season-grid" style={{ marginTop: 44 }}>
            {seasons.filter((s) => ["little-ones", "caring-parent", "relationships", "empty-nest"].includes(s.slug)).map((s) => (
              <Link key={s.slug} href={`/your-story?season=${s.slug}`} className="card season-card">
                <span className="season-photo">
                  <Image src={s.img} alt="" fill sizes="(max-width: 560px) 50vw, 290px" />
                </span>
                <span className="season-text">
                  <span className="display" style={{ fontSize: 22 }}>
                    {s.title}
                  </span>
                  <span style={{ fontSize: 15, color: "var(--muted)" }}>{s.line}</span>
                </span>
              </Link>
            ))}
          </div>
          <details className="wrap more-seasons" style={{ marginTop: 24 }}>
            <summary>See more seasons</summary>
            <div className="grid-auto season-grid" style={{ marginTop: 24 }}>
              {seasons.filter((s) => ["single", "divorced", "new-home", "new-job", "busy-good", "good-place", "financial", "through-something"].includes(s.slug)).map((s) => (
                <Link key={s.slug} href={`/your-story?season=${s.slug}`} className="card season-card">
                  <span className="season-photo"><Image src={s.img} alt="" fill sizes="(max-width: 560px) 50vw, 290px" /></span>
                  <span className="season-text"><span className="display" style={{ fontSize: 22 }}>{s.title}</span><span className="small">{s.line}</span></span>
                </Link>
              ))}
            </div>
          </details>
          <div className="wrap card stack" style={{ marginTop: 28, padding: 24, alignItems: "center" }}>
            <h3 className="display" style={{ fontSize: 28 }}>What’s on your heart today?</h3>
            <p className="small">Today may feel different from the rest of your week. Begin with a gentle check-in.</p>
            <Link href="/today#check-in" className="link-arrow">Start today’s check-in →</Link>
          </div>
        </section>

        {/* ── Your Story ───────────────────────────── */}
        <section id="women" className="section" style={{ background: "var(--sand)" }}>
          <div className="wrap stack" style={{ gap: 40 }}>
            <div className="stack" style={{ maxWidth: 760, gap: 18 }}>
              <p className="eyebrow">Your story</p>
              <h2 className="display h2">Find encouragement in the women of Scripture.</h2>
              <p className="lead">
                Explore stories of faith, waiting, courage, and care. Your circumstances are your own; these biblical examples offer a place to begin.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
                <Link href="/your-story" className="btn">
                  Find Your Story <span aria-hidden="true">→</span>
                </Link>
                <p className="small">Three simple questions to begin.</p>
              </div>
            </div>
            <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 24 }}>
              {examplePairs.slice(0, 3).map((p) => (
                <div key={p.name} className="card stack" style={{ padding: 32, gap: 12 }}>
                  <p style={{ margin: 0, fontStyle: "italic", color: "var(--muted)" }}>{p.who}</p>
                  <div style={{ height: 1, background: "var(--line)" }} />
                  <p className="label">You&rsquo;ll meet</p>
                  <p className="display" style={{ fontSize: 30 }}>
                    {p.name}
                  </p>
                  <p style={{ margin: 0, lineHeight: 1.6, color: "var(--ink-soft)" }}>{p.why}</p>
                  <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "var(--terracotta)" }}>{p.ref}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── Planner ──────────────────────────────── */}
        <section className="section" style={{ background: "var(--sand)" }}>
          <div className="wrap split">
            <div className="stack">
              <p className="eyebrow">The planner</p>
              <h2 className="display h2">A planner that makes room for God in the life you actually have.</h2>
              <p className="lead">
                Explore a sample week with Scripture alongside everyday plans. Your daily check-ins and Sunday reflection help you notice what you want to bring to God.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 18 }}>
                <Link href="/your-story" className="btn">
                  Take Your Seat <span aria-hidden="true">→</span>
                </Link>
                <Link href="/planner" className="link-arrow" style={{ fontSize: 16 }}>
                  See a sample week
                </Link>
              </div>
              <p className="small">Free preview. No account or payment needed.</p>
            </div>
            <div className="card stack" style={{ padding: 28, gap: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <p className="display" style={{ fontSize: 26 }}>
                  Your week, with God.
                </p>
                <span className="chip">Sample week</span>
              </div>
              <div style={{ display: "flex", gap: 12, alignItems: "center", background: "var(--linen)", borderRadius: 10, padding: 14 }}>
                <span
                  className="display"
                  style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--plum)", color: "var(--cream)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}
                >
                  E
                </span>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.4 }}>
                  <strong style={{ color: "var(--plum)" }}>Walking with Elizabeth</strong>
                  <br />A new calling in later years · Luke 1
                </p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, minmax(0, 1fr))", gap: 8 }}>
                {[
                  ["Mon", "Luke 1:45"],
                  ["Tue", "Luke 1:13"],
                  ["Wed", "Luke 1:24"],
                  ["Thu", "Luke 1:41"],
                  ["Fri", "Luke 1:58"],
                ].map(([d, v]) => (
                  <div key={d} style={{ border: "1px solid var(--line)", borderRadius: 8, padding: "10px 8px", display: "flex", flexDirection: "column", gap: 6, fontSize: 12 }}>
                    <strong style={{ color: "var(--plum)" }}>{d}</strong>
                    <span style={{ color: "var(--terracotta)" }}>{v}</span>
                    <span style={{ height: 6, background: "var(--sand)", borderRadius: 3 }} />
                    <span style={{ height: 6, background: "var(--sand)", borderRadius: 3, width: "70%" }} />
                  </div>
                ))}
              </div>
              <p className="small" style={{ borderTop: "1px solid var(--line)", paddingTop: 14 }}>
                Sunday: reflect on the week and prepare your heart for what’s ahead.
              </p>
            </div>
          </div>
        </section>

        {/* ── Closing ──────────────────────────────── */}
        <section className="section stack" style={{ background: "var(--sand-deep)", textAlign: "center", alignItems: "center", gap: 22 }}>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 62px)" }}>
            Your seat is ready.
          </h2>
          <p className="lead" style={{ maxWidth: 620 }}>
            Come as you are. Bring your coffee, your questions and your heart.
          </p>
          <Link href="/your-story" className="btn">
            Take Your Seat <span aria-hidden="true">→</span>
          </Link>
          <p className="small">Free preview. No account or payment needed.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
