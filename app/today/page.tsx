import type { Metadata } from "next";
import Reflect from "../components/Reflect";
import { AppTabBar } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Today – At His Table" };

// Sample day for a member matched with Elizabeth. Devotion text pending pastor review.
export default function TodayPage() {
  return (
    <div className="app-shell">
      <div className="phone">
        <main className="phone-body">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
            <div>
              <p className="small" style={{ fontSize: 13 }}>
                Monday · Week 1
              </p>
              <h1 className="display" style={{ fontSize: 28 }}>
                Good morning, Sarah.
              </h1>
            </div>
            <span className="chip">I Need Direction</span>
          </div>

          <div style={{ display: "flex", gap: 12, alignItems: "center", background: "var(--plum-dark)", color: "var(--cream)", borderRadius: 12, padding: "14px 16px" }}>
            <span className="display" style={{ width: 42, height: 42, borderRadius: "50%", background: "var(--clay)", color: "var(--plum-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>
              E
            </span>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.4 }}>
              <span style={{ color: "var(--clay)", fontWeight: 600 }}>Walking with Elizabeth</span>
              <br />
              Day 1 of 7 · Luke 1
            </p>
          </div>

          <figure className="card stack" style={{ margin: 0, padding: 18, gap: 8 }}>
            <p className="label">Scripture</p>
            <blockquote className="display" style={{ margin: 0, fontSize: 19, lineHeight: 1.4 }}>
              &ldquo;Blessed is she who believed, for there will be a fulfillment of those things which were told her
              from the Lord.&rdquo;
            </blockquote>
            <figcaption className="small" style={{ fontSize: 13 }}>
              Luke 1:45 (NKJV)
            </figcaption>
          </figure>

          <section className="stack" style={{ gap: 8 }}>
            <p className="label">Today&rsquo;s devotion · 3 min</p>
            <h2 className="display" style={{ fontSize: 21 }}>
              When the next season isn&rsquo;t clear
            </h2>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--ink-soft)" }}>
              Elizabeth had waited a long time and stopped expecting anything new. Then God moved in her later
              years, in a quiet house, with no crowd watching. If you can&rsquo;t see what&rsquo;s next,
              you&rsquo;re not forgotten. He still writes new chapters.
            </p>
          </section>

          <section className="stack" style={{ gap: 6, background: "var(--sand)", borderRadius: 12, padding: 16 }}>
            <p className="label" style={{ color: "var(--terracotta-deep)" }}>
              Pray
            </p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "#3a2630", fontStyle: "italic" }}>
              Lord, I don&rsquo;t know the next step. Help me trust that You do. Amen.
            </p>
          </section>

          <Reflect prompt="Where do you need to hear that it isn’t too late?" scripture="Luke 1:45" />
        </main>
        <AppTabBar active="/today" />
      </div>
    </div>
  );
}
