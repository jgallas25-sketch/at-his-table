import type { Metadata } from "next";
import Link from "next/link";
import { AppTabBar } from "../components/SiteChrome";
export const metadata: Metadata = { title: "Your Table – At His Table" };
export default async function OverviewPage({ searchParams }: { searchParams: Promise<{ finished?: string; saved?: string }> }) {
  const { finished, saved } = await searchParams;
  return <div className="app-shell"><div className="phone"><main className="phone-body">
    <Link href="/" className="small">← At His Table home</Link>
    {finished === "1" && <div className="sample-banner" role="status"><strong>Carry His peace into your day.</strong><p>{saved === "1" ? "Your words are saved in your journal. " : ""}You can finish here. Your seat will be here when you return.</p></div>}
    <header className="stack" style={{ gap: 10 }}><p className="eyebrow">The big picture</p><h1 className="display h2">Your time at the table.</h1><p className="lead">A little Scripture. A moment of prayer. Space to hear from God.</p></header>
    <section className="overview-path" aria-label="How your visit works">
      <div><span className="label">01 · To begin</span><h2 className="display">Share your story</h2><p>Three questions help us choose a starting devotional. You can update your story whenever life changes.</p><Link href="/your-story">Answer the three questions →</Link></div>
      <div className="overview-today"><span className="label">02 · Each visit</span><h2 className="display">Sit with Jesus</h2><p>Choose what’s on your heart, then spend time in Scripture and prayer.</p><Link href="/today" className="btn">Open today’s devotional →</Link></div>
      <div><span className="label">03 · If you’d like</span><h2 className="display">Keep a thought</h2><p>Write a reflection or a word of gratitude at the end of your devotional. Or simply finish for today.</p><Link href="/today#reflection">Go to reflection →</Link></div>
    </section>
    <section className="stack" style={{ gap: 14 }}><h2 className="display" style={{ fontSize: 26 }}>Places to return to</h2><p className="small">These are here when you need them. There’s nothing extra to complete.</p><div className="overview-extras"><Link href="/journal" className="card"><strong>Your journal →</strong><span>Revisit saved thoughts and prayers.</span></Link><Link href="/planner" className="card"><strong>Your week →</strong><span>Review check-ins, reflect on Sunday, and explore a sample planner.</span></Link></div></section>
    <p className="small">New here? <Link href="/today?sample=1">Try a sample day</Link>. No questions required.</p>
  </main><AppTabBar active="/overview" /></div></div>;
}
