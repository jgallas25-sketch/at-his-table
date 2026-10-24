import JourneyGuide from "../components/JourneyGuide";
import WeekReflection from "../components/WeekReflection";
import type { Metadata } from "next";
import Link from "next/link";
import { AppTabBar } from "../components/SiteChrome";

export const metadata: Metadata = { title: "My Planner – At His Table" };

/* eslint-disable @next/next/no-img-element */

const days = [
  { dow: "Mon", date: "12", faith: "Luke 1:45 · Blessed is she who believed", plan: "Work 9–5 · Grocery pickup", today: false },
  { dow: "Tue", date: "13", faith: "Luke 1:13 · Your prayer is heard", plan: "Call Mom · Dentist 3:30" },
  { dow: "Wed", date: "14", faith: "Luke 1:24–25 · He looked on me", plan: "Small group 7:00" },
  { dow: "Thu", date: "15", faith: "Luke 1:41 · Joy that leaps", plan: "Lunch with Karen" },
  { dow: "Fri", date: "16", faith: "Luke 1:57–58 · Rejoicing with others", plan: "Rest. Nothing planned." },
];

// Sample week for a member matched with Elizabeth.
export default function PlannerPage() {
  return (
    <div className="app-shell">
      <div className="phone">
        <main className="phone-body" style={{ gap: 14 }}>
          <JourneyGuide place="week" />
          <div className="sample-banner"><strong>Sample week</strong><p>The Scripture schedule and appointments below are examples. Your check-ins and Sunday reflection are kept separately on this device.</p></div>
          <div>
            <p className="small" style={{ fontSize: 13 }}>
              Example week · Oct 12–18
            </p>
            <h1 className="display" style={{ fontSize: 28 }}>
              Your week, with God.
            </h1>
          </div>

          <section className="stack" style={{ background: "var(--sand)", borderRadius: 12, padding: "14px 16px", gap: 4 }}>
            <p className="label" style={{ color: "var(--terracotta-deep)" }}>
              This week&rsquo;s focus
            </p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: "#3a2630" }}>
              Trusting God with what&rsquo;s next, alongside Elizabeth.
            </p>
          </section>

          <ol className="stack" style={{ listStyle: "none", margin: 0, padding: 0, gap: 8 }}>
            {days.map((d) => (
              <li
                key={d.dow}
                aria-current={d.today ? "date" : undefined}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "center",
                  padding: "10px 12px",
                  borderRadius: 10,
                  background: "#fff",
                  border: d.today ? "2px solid var(--plum)" : "1px solid var(--line)",
                }}
              >
                <div style={{ width: 40, flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "var(--muted)" }}>{d.dow}</span>
                  <span className="display" style={{ fontSize: 22 }}>
                    {d.date}
                  </span>
                </div>
                <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--terracotta)" }}>{d.faith}</span>
                  <span style={{ fontSize: 14, lineHeight: 1.4 }}>{d.plan}</span>
                </div>
              </li>
            ))}
          </ol>

          <Link href="/#series" className="card" style={{ display: "flex", gap: 12, alignItems: "center", padding: 12, textDecoration: "none", color: "var(--ink)" }}>
            <img src="/images/hero.jpg" alt="" style={{ width: 64, height: 44, objectFit: "cover", borderRadius: 6 }} />
            <span style={{ fontSize: 14, lineHeight: 1.4 }}>
              <strong style={{ color: "var(--plum)" }}>Saturday: meet Emily & Heather</strong>
              <br />
              Episode One is coming soon.
            </span>
          </Link>
          <WeekReflection />
        </main>
        <AppTabBar active="/planner" />
      </div>
    </div>
  );
}
