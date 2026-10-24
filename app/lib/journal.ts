// A simple journal kept in the member's own browser until accounts exist.

export type JournalEntry = { tag: "Answered" | "Prayer" | "Reflection" | "Gratitude" | "Praise"; date: string; text: string; ref: string };

export const JOURNAL_KEY = "aht-journal";

export function loadEntries(): JournalEntry[] {
  try {
    const raw = localStorage.getItem(JOURNAL_KEY);
    const value = raw ? JSON.parse(raw) : [];
    return Array.isArray(value) ? value.filter(e => e && typeof e.text === "string" && typeof e.tag === "string" && typeof e.date === "string") : [];
  } catch {
    return [];
  }
}

export function addEntry(entry: JournalEntry) {
  try {
    localStorage.setItem(JOURNAL_KEY, JSON.stringify([entry, ...loadEntries()]));
    return true;
  } catch {
    return false;
  }
}

export const sampleEntries: JournalEntry[] = [
  {
    tag: "Answered",
    date: "Thu, Oct 15",
    text: "Peace about the job decision. I didn’t get every answer, but I stopped carrying it alone.",
    ref: "Prayed since Monday",
  },
  { tag: "Prayer", date: "Tue, Oct 13", text: "For Mom’s test results this Friday.", ref: "Luke 1:13 · Your prayer is heard" },
  {
    tag: "Reflection",
    date: "Mon, Oct 12",
    text: "I need to hear that it isn’t too late to start something new.",
    ref: "Luke 1:45",
  },
];
