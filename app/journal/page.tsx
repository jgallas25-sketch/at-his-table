import type { Metadata } from "next";
import Link from "next/link";
import JournalList from "../components/JournalList";
import { AppTabBar } from "../components/SiteChrome";

export const metadata: Metadata = { title: "Testimony Journal – At His Table" };

export default function JournalPage() {
  return (
    <div className="app-shell">
      <div className="phone">
        <main className="phone-body">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 12 }}>
            <div>
              <p className="small" style={{ fontSize: 13 }}>
                Your testimony journal
              </p>
              <h1 className="display" style={{ fontSize: 28 }}>
                What God is doing
              </h1>
            </div>
            <Link href="/today" className="btn" style={{ minHeight: 44, padding: "0 16px", fontSize: 15 }}>
              + New
            </Link>
          </div>

          <JournalList />

          <p style={{ margin: 0, background: "var(--plum-dark)", color: "var(--cream)", borderRadius: 12, padding: "14px 16px", fontSize: 14, lineHeight: 1.5 }}>
            <span style={{ color: "var(--clay)", fontWeight: 600 }}>Look back:</span> On Monday you wrote, &ldquo;I
            don&rsquo;t know the next step.&rdquo; By Thursday you wrote that you felt peace about it. That&rsquo;s a
            testimony.
          </p>
        </main>
        <AppTabBar active="/journal" />
      </div>
    </div>
  );
}
