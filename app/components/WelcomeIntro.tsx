import Link from "next/link";

const steps = [
  { title: "Tell us a little.", timing: "Your first visit", text: "Share your season, what you’re carrying, and where you are with God. We’ll introduce you to a woman of Scripture who has walked your road. Short on time? Three quick questions will get you started.", question: "“Where do I start?”", answer: "“Begin right where you are. There’s a seat for you.”" },
  { title: "Sit with Jesus.", timing: "Each day", text: "Begin with praise, read His Word, and use the prayer to help put your heart into words. Tomorrow, come straight back to Today.", question: "“What if tomorrow feels different?”", answer: "“Choose what’s on your heart that day, or simply begin.”" },
  { title: "Carry a thought with you.", timing: "Writing is optional", text: "Save a reflection or a word of thanks—or choose ‘Finish for today.’ Your journal and weekly review are there whenever they help.", question: "“Do I have to write something?”", answer: "“Only if you’d like. Some days, simply being here is enough.”" },
];

export default function WelcomeIntro({ full = false }: { full?: boolean }) {
  const Heading = full ? "h1" : "h2";
  return <section id="story" className="section welcome-intro" aria-labelledby="welcome-title">
    <div className="wrap stack" style={{ gap: 28 }}>
      <header className="welcome-heading"><p className="eyebrow">{full ? "A one-minute introduction" : "First time here?"}</p><Heading id="welcome-title" className="display h2">Let Heather show you.</Heading><p className="lead">A little time. An open heart. A place to begin.</p></header>
      <div className="welcome-conversation">
        <div className="welcome-person">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/emily.jpg" alt="Emily" width={104} height={128} />
          <div><p className="label">Emily</p><p>“I want to spend time with Jesus. But some mornings, I don’t even know where to begin.”</p></div>
        </div>
        <div className="welcome-person">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/heather.jpg" alt="Heather" width={104} height={128} />
          <div><p className="label">Heather</p><p>“Begin right where you are. There’s a seat for you. Let’s take it one step at a time.”</p></div>
        </div>
      </div>
      <ol className="welcome-steps">{steps.map((step, i) => <li key={step.title}>
        <span className="welcome-step-number" aria-hidden="true">{i + 1}</span><p className="label">{step.timing}</p><h3 className="display">{step.title}</h3><p>{step.text}</p>
        {full && i > 0 && <div className="welcome-exchange"><p><strong>Emily:</strong> {step.question}</p><p><strong>Heather:</strong> {step.answer}</p></div>}
      </li>)}</ol>
      <div className="welcome-ending"><p className="display">Miss a day? Just come back. Your seat is still here.</p><div className="action-row"><Link href="/your-story" className="btn">Take Your Seat →</Link><Link href="/today">Already started? Go to Today</Link></div>{full ? <Link href="/overview" className="small">See the whole picture →</Link> : <Link href="/welcome" className="small">Read the one-minute introduction →</Link>}</div>
    </div>
  </section>;
}
