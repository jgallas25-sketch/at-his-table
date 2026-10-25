import Image from "next/image";
import Link from "next/link";
import WelcomeIntro from "./components/WelcomeIntro";
import HeroMedia from "./components/HeroMedia";
import Icon from "./components/Icon";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { examplePairs, moreWomen, rhythm, seasons } from "./lib/content";

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
              You carry everyone&rsquo;s schedule, everyone&rsquo;s needs &mdash; and your time with God keeps getting
              squeezed out.
            </p>
            <h1 className="display h1" style={{ maxWidth: 640 }}>
              There&rsquo;s a seat at His table with your name on it.
            </h1>
            <p className="lead" style={{ maxWidth: 580 }}>
              Not another planner. A daily walk built around your life &mdash; your season, your story, what
              you&rsquo;re carrying right now &mdash; and pointed toward Him.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 24 }}>
              <Link href="/your-story" className="btn">
                Take Your Seat <span aria-hidden="true">→</span>
              </Link>
              <Link href="/today?sample=1" className="link-arrow">Try a Sample Day</Link>
            </div>
          </div>
          <div className="hero-photo">
            <HeroMedia />
          </div>
        </section>

        <WelcomeIntro />

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
                To help the busy woman draw closer to God, one day at a time, in the life she actually has.
              </h2>
              <p className="lead">
                Most devotionals are written for women in general. At His Table is written for you &mdash; grounded in
                the Word of God, because Scripture holds the answers for the woman who is stretched thin and
                wants a place to start.
              </p>
              <figure style={{ margin: "8px 0 0" }}>
                <blockquote className="display" style={{ margin: "0 0 12px", fontStyle: "italic", fontSize: 22, lineHeight: 1.5 }}>
                  &ldquo;The LORD your God in your midst, the Mighty One, will save; He will rejoice over you with
                  gladness, He will quiet you with His love, He will rejoice over you with singing.&rdquo;
                </blockquote>
                <figcaption style={{ fontSize: 13, letterSpacing: "0.14em", color: "var(--clay)" }}>ZEPHANIAH 3:17 · NKJV</figcaption>
              </figure>
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
                  Martha opened her home to Jesus and then spent the whole visit in the kitchen, carrying it all
                  alone. Jesus didn&rsquo;t love her less for it. He simply called her by name and showed her the
                  better seat. At His Table is for the woman who serves everyone else and quietly wonders when
                  there will be room for her. There is. It&rsquo;s already set.
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
                { q: "“Casting all your care upon Him, for He cares for you.”", ref: "1 Peter 5:7 (NKJV)" },
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

        {/* ── Every season ─────────────────────────── */}
        <section className="section stack" style={{ background: "var(--sand-deep)", textAlign: "center", alignItems: "center", gap: 22 }}>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 62px)" }}>
            Every season has a seat at His table.
          </h2>
          <p className="lead" style={{ maxWidth: 620 }}>
            Whatever season you&rsquo;re in, there&rsquo;s a seat for you with your name on it. Bring your coffee,
            your questions and your heart.
          </p>
          <figure style={{ margin: "12px 0 0" }}>
            <blockquote className="display" style={{ margin: "0 0 10px", fontSize: 24, lineHeight: 1.45 }}>
              &ldquo;To everything there is a season,
              <br />a time for every purpose under heaven.&rdquo;
            </blockquote>
            <figcaption style={{ fontSize: 13, letterSpacing: "0.14em", color: "var(--terracotta-deep)" }}>
              ECCLESIASTES 3:1 · NKJV
            </figcaption>
          </figure>
        </section>

        {/* ── Season picker ────────────────────────── */}
        <section id="seasons" className="section" style={{ textAlign: "center", background: "var(--linen)" }}>
          <div className="wrap stack" style={{ alignItems: "center", gap: 14 }}>
            <h2 className="display h2">Where are you today?</h2>
            <p className="lead">Tap the one that feels most like your life right now. We&rsquo;ll start your story from there.</p>
          </div>
          <div className="wrap grid-auto season-grid" style={{ marginTop: 44 }}>
            {seasons.map((s) => (
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
          <p
            className="display"
            style={{ fontStyle: "italic", fontSize: "clamp(18px, 1.6vw, 21px)", lineHeight: 1.5, color: "var(--ink-soft)", maxWidth: 660, margin: "40px auto 0" }}
          >
            Sometimes life is full of good things &mdash; and that&rsquo;s when time with Him slips away first. Hard
            seasons, new seasons, happy seasons: every one has a seat at His table.
          </p>
          <div className="wrap card stack" style={{ marginTop: 28, padding: 24, alignItems: "center" }}>
            <h3 className="display" style={{ fontSize: 28 }}>What’s on your heart today?</h3>
            <p className="small">Your season stays the same, but some days feel different. Tell Him what you&rsquo;re carrying today.</p>
            <Link href="/today#check-in" className="link-arrow">Start today’s check-in →</Link>
          </div>
        </section>

        {/* ── Your Story ───────────────────────────── */}
        <section id="women" className="section" style={{ background: "var(--sand)" }}>
          <div className="wrap stack" style={{ gap: 40 }}>
            <div className="stack" style={{ maxWidth: 760, gap: 18 }}>
              <p className="eyebrow">Your story</p>
              <h2 className="display h2">There&rsquo;s a woman in Scripture who has walked where you are.</h2>
              <p className="lead">
                Tell us a little about your life: your season, your home, where you are with God and where you
                long to go. We&rsquo;ll introduce you to a woman of the Bible who knows that road, and shape your
                planner, devotions and journal around you.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 20 }}>
                <Link href="/your-story" className="btn">
                  Find Your Story <span aria-hidden="true">→</span>
                </Link>
                <p className="small">About 6 minutes. Skip anything you like.</p>
              </div>
            </div>
            <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 24 }}>
              {examplePairs.map((p) => (
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
            <p className="display" style={{ fontStyle: "italic", fontSize: 20, lineHeight: 1.5, color: "var(--ink-soft)", textAlign: "center" }}>
              You might also walk with {moreWomen.join(", ")} and many more.
            </p>
          </div>
        </section>

        {/* ── Daily rhythm ─────────────────────────── */}
        <section className="section" style={{ textAlign: "center", background: "#fff" }}>
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
              <p className="small">7 days free. Cancel anytime.</p>
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
          <p className="small">7 days free. Cancel anytime.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
