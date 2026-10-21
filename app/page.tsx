import Image from "next/image";
import Link from "next/link";
import HeroMedia from "./components/HeroMedia";
import Icon from "./components/Icon";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import { examplePairs, plannerFeatures, rhythm, seasons } from "./lib/content";

/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ─────────────────────────────────── */}
        <section id="vision" className="hero">
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
              <a href="#series" className="link-arrow" style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                <Icon name="play" size={16} /> Watch Episode One
              </a>
            </div>
            <p className="small">7 days free. Cancel anytime.</p>
          </div>
          <div className="hero-photo">
            <HeroMedia />
          </div>
        </section>

        {/* ── Mission ──────────────────────────────── */}
        <section id="mission" className="section series">
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

        {/* ── Martha ───────────────────────────────── */}
        <section id="martha" className="section" style={{ background: "var(--clay)" }}>
          <div className="wrap stack" style={{ gap: 40 }}>
            <div className="split">
              <img
                src="/images/table-mug.jpg"
                alt="An At His Table mug waiting on the table"
                style={{ width: "100%", height: 380, objectFit: "cover", objectPosition: "50% 52%", borderRadius: 12 }}
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

        {/* ── Started before ───────────────────────── */}
        <section className="section stack" style={{ textAlign: "center", alignItems: "center", gap: 18 }}>
          <p className="display" style={{ fontStyle: "italic", fontSize: "clamp(21px, 2vw, 27px)", lineHeight: 1.45, color: "var(--ink-soft)", maxWidth: 760 }}>
            If you&rsquo;ve started a devotional and stopped, you&rsquo;re not alone. Most were never built for your life.
          </p>
          <h2 className="display h2">This one is.</h2>
          <p className="lead" style={{ maxWidth: 680 }}>
            At His Table learns who you are and where you are with God, then walks with you every day &mdash;
            alongside a woman of Scripture who&rsquo;s been exactly where you are.
          </p>
        </section>

        {/* ── More than a planner ───────────────────── */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap stack" style={{ gap: 44 }}>
            <div className="stack" style={{ textAlign: "center", alignItems: "center", gap: 14 }}>
              <h2 className="display h2">More than a planner. Made for you.</h2>
              <p className="lead" style={{ maxWidth: 680 }}>
                Other devotionals hand you a tool and leave you to do the work. At His Table meets you where you are
                and walks with you.
              </p>
            </div>
            <div className="grid-auto" style={{ gap: 20 }}>
              {[
                { t: "Planner", l: "Built around your real schedule and the minutes you really have." },
                { t: "Devotional guide", l: "Each day speaks to your season and what you\u2019re carrying right now." },
                { t: "Study in the Word", l: "Walk alongside a woman of Scripture who has been where you are." },
                { t: "Testimony journal", l: "Your prayers and His answers, kept so you can look back and remember." },
              ].map((c) => (
                <div key={c.t} className="card stack" style={{ padding: 28, gap: 10 }}>
                  <p className="display" style={{ fontSize: 24 }}>
                    {c.t}
                  </p>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: "var(--ink-soft)" }}>{c.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Series ───────────────────────────────── */}
        <section id="series" className="section series">
          <div className="wrap stack" style={{ gap: 56 }}>
            <div className="split">
              <div className="player" role="img" aria-label="Episode One preview: Emily and Heather at the kitchen table">
                <img src="/images/hero.jpg" alt="" />
                <div className="player-badge">
                  <span className="circle">
                    <Icon name="play" size={28} />
                  </span>
                  Episode One · Coming soon
                </div>
              </div>
              <div className="stack">
                <p className="eyebrow">The series</p>
                <h2 className="display h2">Two women. One table. Every season.</h2>
                <p className="lead">
                  Emily is holding it all together, or trying to. Heather has walked a few more seasons than she
                  has. Each episode sits with them at the kitchen table for a real conversation about faith in the
                  middle of an ordinary, overwhelming life. No sermons. No easy answers. Just honest talk and the
                  God who meets us there.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 18 }}>
                  <Link href="/your-story" className="btn btn-light">
                    Save my seat for Episode One
                  </Link>
                  <p className="small" style={{ color: "#cfc0c7" }}>
                    New episodes with each season of the planner.
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

        {/* ── Planner ──────────────────────────────── */}
        <section className="section" style={{ background: "var(--sand)" }}>
          <div className="wrap split">
            <div className="stack">
              <p className="eyebrow">The planner</p>
              <h2 className="display h2">A planner that makes room for God in the life you actually have.</h2>
              <p className="lead">
                Most planners ask what you need to get done. This one starts with where you are. Choose your
                season, and your planner fills with Scripture, prayers and reflections written for it, alongside
                space for the week ahead.
              </p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {plannerFeatures.map((f) => (
                  <li key={f.title} style={{ padding: "14px 0", borderTop: "1px solid var(--line-strong)", lineHeight: 1.5 }}>
                    <strong style={{ color: "var(--plum)" }}>{f.title}</strong> — {f.line}
                  </li>
                ))}
              </ul>
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
                <span className="chip">Season: I Need Direction</span>
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
                ▶ Watch, then reflect: Episode One, &ldquo;The Better Seat&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ── How it works ─────────────────────────── */}
        <section id="how" className="section" style={{ background: "#fff", borderTop: "1px solid var(--line)" }}>
          <div className="wrap stack" style={{ gap: 48 }}>
            <div className="stack" style={{ textAlign: "center", alignItems: "center", gap: 14 }}>
              <p className="eyebrow">How it works</p>
              <h2 className="display h2">It starts where you are. It leads you to Him.</h2>
            </div>
            <ol className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 36, listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { t: "Tell us your story", l: "Your season, your home, what you\u2019re carrying and where you are with God. Skip anything you like." },
                { t: "Meet her in Scripture", l: "We\u2019ll give your story back to you, then introduce you to a woman of the Bible who walked your road." },
                { t: "Sit with Him daily", l: "Every day begins with praise, then Scripture, reflection, prayer and gratitude \u2014 sized to the time you have." },
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

        {/* ── Your Story ───────────────────────────── */}
        <section id="story" className="section" style={{ background: "var(--sand)" }}>
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
          </div>
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
        </section>

        {/* ── Stories ──────────────────────────────── */}
        <section className="section" style={{ textAlign: "center" }}>
          <h2 className="display h2" style={{ marginBottom: 16 }}>
            You&rsquo;re not alone at the table.
          </h2>
          <p className="lead" style={{ margin: "0 auto 40px", maxWidth: 640 }}>
            Real stories from the first women to take their seat will go here once early testing begins.
          </p>
          {/* TODO: replace with real tester stories before launch */}
          <div className="wrap grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {["a young mom", "reacting to the series", "an empty nester"].map((t) => (
              <div key={t} className="display" style={{ border: "1px dashed #c9b6a2", borderRadius: 12, padding: "40px 28px", fontSize: 21, color: "#7a6a72" }}>
                [Tester story: {t}]
              </div>
            ))}
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
