"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { addEntry } from "../lib/journal";
import { type SafetyNeed, textNeed } from "../lib/story";
import HelpNumbers from "./HelpNumbers";

const fieldStyle: React.CSSProperties = {
  font: "15px var(--font-body)",
  padding: 12,
  border: "1px solid var(--line-strong)",
  borderRadius: 8,
  background: "#fff",
  resize: "vertical",
};

function StepLabel({ n, children, htmlFor }: { n: number; children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="label">
      {n} · {children}
    </label>
  );
}

/**
 * Steps 3–5 of the daily rhythm: Reflection, Seek God and Gratitude.
 * Saving writes the reflection and gratitude to the testimony journal.
 */
export default function Reflect({
  prompt,
  scripture,
  prayer,
}: {
  prompt: string;
  scripture: string;
  prayer: string;
}) {
  const [reflection, setReflection] = useState("");
  const [gratitude, setGratitude] = useState("");
  const router = useRouter();
  const [help, setHelp] = useState<SafetyNeed>(null);

  function save() {
    const date = new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
    if (gratitude.trim()) addEntry({ tag: "Gratitude", date, text: gratitude.trim(), ref: "Today’s thanks" });
    if (reflection.trim()) addEntry({ tag: "Reflection", date, text: reflection.trim(), ref: scripture });
    // If what she wrote suggests she may be in danger, point her to a person first.
    const need = textNeed(`${reflection} ${gratitude}`);
    if (need) {
      setHelp(need);
      return;
    }
    router.push("/journal");
  }

  if (help) {
    return (
      <section className="stack" role="alert" style={{ gap: 12 }}>
        <h2 className="display" style={{ fontSize: 22 }}>
          Thank you for writing that down. You matter.
        </h2>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--ink-soft)" }}>
          Your words are saved in your journal. What you wrote sounds heavy, and you don&rsquo;t have to carry it alone.
          Please reach out to someone today: your pastor, a trusted friend, or one of these.
        </p>
        <HelpNumbers only={help} />
        <button className="btn" style={{ width: "100%" }} onClick={() => router.push("/journal")}>
          Go to my journal
        </button>
      </section>
    );
  }

  return (
    <>
      <section className="stack" style={{ gap: 8 }}>
        <StepLabel n={3} htmlFor="reflect">
          Reflection
        </StepLabel>
        <p style={{ margin: 0, fontSize: 15 }}>{prompt}</p>
        <textarea
          id="reflect"
          rows={3}
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          placeholder="Write a line or two…"
          style={fieldStyle}
        />
      </section>

      <section className="stack" style={{ gap: 6, background: "var(--sand)", borderRadius: 12, padding: 16 }}>
        <StepLabel n={4}>Seek God</StepLabel>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "#3a2630", fontStyle: "italic" }}>{prayer}</p>
      </section>

      <section className="stack" style={{ gap: 8 }}>
        <StepLabel n={5} htmlFor="gratitude">
          Gratitude
        </StepLabel>
        <p style={{ margin: 0, fontSize: 15 }}>Name one good gift He gave you yesterday.</p>
        <textarea
          id="gratitude"
          rows={2}
          value={gratitude}
          onChange={(e) => setGratitude(e.target.value)}
          placeholder="Thank You, Lord, for…"
          style={fieldStyle}
        />
      </section>

      <button className="btn" style={{ width: "100%" }} onClick={save}>
        Save to my testimony journal
      </button>
    </>
  );
}
