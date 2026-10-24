import type { Metadata } from "next";
import DeleteMyStory from "../components/DeleteMyStory";
import HelpNumbers from "../components/HelpNumbers";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export const metadata: Metadata = {
  title: "Your Care and Privacy – At His Table",
  description: "What At His Table is and isn’t, when to reach out to someone, and how your story is kept private.",
};

const h2: React.CSSProperties = { fontSize: "clamp(26px, 3vw, 34px)" };

export default function CarePage() {
  return (
    <>
      <SiteHeader />
      <main className="section">
        <div className="stack" style={{ maxWidth: 720, margin: "0 auto", gap: 44 }}>
          <div className="stack" style={{ gap: 16 }}>
            <p className="eyebrow">Your care and privacy</p>
            <h1 className="display h2">At His Table walks with you. It doesn&rsquo;t replace the people God puts in your life.</h1>
            <p className="lead">
              At His Table is a devotional journal. It can help you pray, read Scripture and reflect on what you&rsquo;re
              carrying. It isn&rsquo;t pastoral counseling, therapy, medical care or emergency help. Some seasons are too
              heavy to carry with an app alone, and that&rsquo;s okay. God often sends His help through people.
            </p>
          </div>

          <section className="stack" style={{ gap: 14 }}>
            <h2 className="display" style={h2}>
              When to reach out to someone
            </h2>
            <p className="lead">Please talk with a pastor, a trusted friend, a counselor or your doctor if:</p>
            <ul style={{ margin: 0, paddingLeft: 22, listStyle: "disc", fontSize: 18, lineHeight: 1.7, color: "var(--ink-soft)" }}>
              <li>you feel hopeless, or the heaviness isn&rsquo;t lifting</li>
              <li>you&rsquo;ve had thoughts of hurting yourself</li>
              <li>you don&rsquo;t feel safe at home, or someone is hurting or threatening you</li>
              <li>grief, worry or sadness is making it hard to get through the day</li>
              <li>your sleep, eating or health has changed and you&rsquo;re worried</li>
              <li>you simply need someone to pray with you in person</li>
            </ul>
            <p className="lead">
              Reaching out isn&rsquo;t a lack of faith. &ldquo;Bear one another&rsquo;s burdens, and so fulfill the law of
              Christ&rdquo; (Galatians 6:2, NKJV).
            </p>
          </section>

          <section id="help" className="stack" style={{ gap: 14, scrollMarginTop: 100 }}>
            <h2 className="display" style={h2}>
              Help right now
            </h2>
            <HelpNumbers />
            <p className="small" style={{ fontSize: 15, lineHeight: 1.6 }}>
              If something you write in At His Table suggests you may be in danger, we&rsquo;ll show you these numbers.
              We can&rsquo;t read what you write and we can&rsquo;t contact anyone for you, so please reach out yourself,
              or ask someone you trust to help you.
            </p>
          </section>

          <section id="privacy" className="stack" style={{ gap: 14, scrollMarginTop: 100 }}>
            <h2 className="display" style={h2}>
              Your privacy
            </h2>
            <ul style={{ margin: 0, paddingLeft: 22, listStyle: "disc", fontSize: 18, lineHeight: 1.7, color: "var(--ink-soft)" }}>
              <li>
                Right now, your story, daily check-ins and journal are saved only on this device, in this browser. They aren&rsquo;t sent to
                us, and we can&rsquo;t see them.
              </li>
              <li>We will never sell or share your story.</li>
              <li>If you share that you don&rsquo;t feel safe at home, that answer is never saved.</li>
              <li>
                On a shared phone or computer, someone else could open your journal. You can delete everything here at
                any time.
              </li>
              <li>When accounts arrive, we&rsquo;ll update this page and ask you before anything is saved beyond your device.</li>
            </ul>
            <DeleteMyStory />
          </section>

          <p className="small">Last updated October 21, 2026.</p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
