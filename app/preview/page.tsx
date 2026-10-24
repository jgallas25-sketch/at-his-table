import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "../components/SiteChrome";
export const metadata: Metadata = { title: "About this Preview – At His Table" };
export default function PreviewPage() {
  return <><SiteHeader /><main className="section"><div className="wrap stack" style={{ maxWidth: 760 }}>
    <p className="eyebrow">A place to begin</p>
    <h1 className="display h1">Explore At His Table.</h1>
    <p className="lead">This is a free preview. There is no account to create, payment to enter, or subscription to cancel.</p>
    <h2 className="display" style={{ fontSize: 30 }}>What you can try today</h2>
    <p className="lead">Begin a devotional based on your season, choose a daily focus, and save reflections in your testimony journal. You can also explore an example weekly planner and write your own Sunday reflection.</p>
    <h2 className="display" style={{ fontSize: 30 }}>What is still being prepared</h2>
    <p className="lead">The Emily and Heather series, community features, accounts, and subscriptions are not available yet. The planner’s schedule and appointments are examples, not a connected calendar. Subscription details will be shared before any paid service is offered.</p>
    <h2 className="display" style={{ fontSize: 30 }}>Keep your words close</h2>
    <p className="lead">Your story, check-ins, and journal stay in this browser on this device. They do not sync to another phone or computer. Clearing browser data can remove them, so keep a separate copy of writing you want to preserve.</p>
    <p className="lead">Devotional reflections are an invitation to study and pray. Read the referenced passages in context, and bring your questions to a trusted pastor or teacher.</p>
    <div className="action-row"><Link href="/today?sample=1" className="btn">Try a Sample Day</Link><Link href="/care">Care &amp; privacy</Link></div>
  </div></main><SiteFooter /></>;
}
