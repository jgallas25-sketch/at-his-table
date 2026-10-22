import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "About Us – At His Table",
  description: "Meet Jim and Heather, the people behind At His Table, and what we hope for you.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="section" style={{ background: "var(--linen)" }}>
          <div className="wrap split">
            <img
              src="/images/about/heather.jpg"
              alt="Heather, smiling"
              style={{ width: "100%", maxWidth: 440, aspectRatio: "4 / 5", objectFit: "cover", borderRadius: 12, justifySelf: "center" }}
            />
            <div className="stack">
              <p className="eyebrow">About us</p>
              <h1 className="display h1">The people behind At His Table.</h1>
              <p className="lead">
                Behind every page of At His Table is a family who loves Jesus and knows how full a woman&rsquo;s
                life can get. We&rsquo;d love for you to meet us.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="stack" style={{ maxWidth: 720, margin: "0 auto", gap: 28 }}>
            <h2 className="display h2">A note from Jim and Heather</h2>
            <div className="stack" style={{ gap: 18, fontSize: 19, lineHeight: 1.75, color: "var(--ink-soft)" }}>
              <p style={{ margin: 0 }}>Hi, we&rsquo;re Jim and Heather.</p>
              <p style={{ margin: 0 }}>
                At His Table began as a simple idea: a planner to help Christian women make room for God in busy days.
                We know so many women who love the Lord and want time with Him, but life keeps crowding it out. Most
                devotionals felt like they were written for someone else.
              </p>
              <p style={{ margin: 0 }}>
                So we set out to make one that starts with you: your season, your story, what you&rsquo;re carrying,
                and then leads you to Him, one day at a time.
              </p>
              <p style={{ margin: 0 }}>
                Jim has spent many years in ministry, preaching and teaching the Word. Heather is the heart behind At His
                Table, and the Heather you&rsquo;ll meet in our story series is inspired by her.
              </p>
              <p style={{ margin: 0 }}>
                We use modern tools, including AI, to help create some of the images and videos you see here. The heart
                behind it, and every Scripture and teaching we share, comes from real people: us, our church family and
                our pastor.
              </p>
              <p style={{ margin: 0 }}>
                Our hope for you is simple. That you&rsquo;d open At His Table and find a seat already waiting for you.
                That you&rsquo;d meet Jesus there, every day. And that you&rsquo;d leave a little lighter, and a little
                closer to Him.
              </p>
              <p className="display" style={{ margin: "8px 0 0", fontSize: 26, color: "var(--plum)" }}>
                With love, Jim &amp; Heather
              </p>
            </div>
          </div>
        </section>

        <section className="section stack" style={{ background: "var(--sand-deep)", textAlign: "center", alignItems: "center", gap: 22 }}>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4.5vw, 56px)" }}>
            Your seat is ready.
          </h2>
          <p className="lead" style={{ maxWidth: 560 }}>
            Come as you are. Bring your coffee, your questions and your heart.
          </p>
          <Link href="/your-story" className="btn">
            Take Your Seat <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
