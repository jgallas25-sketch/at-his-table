// The places to turn when she needs a person right now. Used on the Care page and in the app.
// Numbers checked October 2026; confirm again before launch.
export default function HelpNumbers({ only }: { only?: "harm" | "danger" }) {
  const rows = [
    { key: "now", show: true, title: "In danger right now", body: <>Call <a href="tel:911">911</a>.</> },
    {
      key: "harm",
      show: only !== "danger",
      title: "Thinking about suicide or hurting yourself",
      body: (
        <>
          Call or text <a href="tel:988">988</a>, the Suicide &amp; Crisis Lifeline, any time, day or night.
        </>
      ),
    },
    {
      key: "danger",
      show: only !== "harm",
      title: "Not safe at home",
      body: (
        <>
          National Domestic Violence Hotline: call <a href="tel:18007997233">1-800-799-7233</a> or text START to{" "}
          <a href="sms:88788&body=START">88788</a>.
        </>
      ),
    },
    {
      key: "text",
      show: !only,
      title: "Rather text with someone",
      body: (
        <>
          Text HOME to <a href="sms:741741&body=HOME">741741</a> (Crisis Text Line).
        </>
      ),
    },
  ];
  return (
    <div className="stack" style={{ gap: 10 }}>
      {rows
        .filter((r) => r.show)
        .map((r) => (
          <p key={r.key} className="card" style={{ margin: 0, padding: "14px 16px", fontSize: 16, lineHeight: 1.5, borderRadius: 10 }}>
            <strong style={{ color: "var(--plum)" }}>{r.title}</strong>
            <br />
            {r.body}
          </p>
        ))}
    </div>
  );
}
