import Link from "next/link";

type Place = "story" | "today" | "reflection" | "journal" | "week";
const purpose: Record<Place, string> = {
  story: "Your story helps us set a table just for you. Next: time in Scripture and prayer.",
  today: "You’re here for Scripture and prayer. Reflect below if you’d like, or simply finish for today.",
  reflection: "Keep a thought or prayer from today. Writing is always optional.",
  journal: "A place to revisit your words and prayers. This is not another step to complete.",
  week: "Look back on your week and prepare for the next. Return here whenever it helps.",
};
export default function JourneyGuide({ place, sample = false }: { place: Place; sample?: boolean }) {
  const today = sample ? "/today?sample=1" : "/today";
  const steps = [
    { id: "story", label: "Your story", href: "/your-story", note: "To begin" },
    { id: "today", label: "Today’s devotional", href: today, note: "Each visit" },
    { id: "reflection", label: "Your reflection", href: `${today}#reflection`, note: "Optional" },
  ];
  return <aside className="journey-guide" aria-label="Your time at the table">
    <div className="journey-heading"><span>Your time at the table</span><Link href="/overview">Overview ↗</Link></div>
    <nav aria-label="Daily journey"><ol>{steps.map((step, i) => <li key={step.id}>
      <Link href={step.href} aria-current={place === step.id ? "step" : undefined}>
        <span className="journey-number" aria-hidden="true">{i + 1}</span><span>{step.label}<small>{place === step.id ? "You are here" : step.note}</small></span>
      </Link>
    </li>)}</ol></nav>
    <p>{purpose[place]}</p>
  </aside>;
}
