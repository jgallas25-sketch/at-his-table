export const CHECK_IN_KEY = "aht-check-ins-v1";
export const dailyNeeds = [
  { id: "peace", label: "I need peace", woman: "martha" },
  { id: "direction", label: "I need direction", woman: "deborah" },
  { id: "rest", label: "I feel worn out", woman: "maryBethany" },
  { id: "comfort", label: "I need comfort", woman: "hannah" },
  { id: "fresh-start", label: "I need a fresh start", woman: "well" },
  { id: "gratitude", label: "I’m grateful", woman: "miriam" },
] as const;
export type NeedId = typeof dailyNeeds[number]["id"];
export type CheckIn = { date: string; need: NeedId };

export function dateKey(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export function parseCheckIns(raw: string | null): CheckIn[] {
  try {
    const parsed: unknown = JSON.parse(raw ?? "[]");
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((entry): entry is CheckIn => entry !== null && typeof entry === "object" &&
      typeof entry.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(entry.date) &&
      dailyNeeds.some(n => n.id === entry.need));
  } catch { return []; }
}
export function loadCheckIns(): CheckIn[] {
  try { return parseCheckIns(localStorage.getItem(CHECK_IN_KEY)); } catch { return []; }
}
export function weekCheckIns(entries: CheckIn[], date = new Date()): CheckIn[] {
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  monday.setDate(monday.getDate() - (monday.getDay() + 6) % 7);
  return entries.filter(e => e.date >= dateKey(monday) && e.date <= dateKey(date)).sort((a, b) => a.date.localeCompare(b.date));
}
export function saveCheckIn(need: NeedId, date = new Date()): boolean {
  try {
    const today = dateKey(date);
    // Retain this week's check-ins only, with one current choice per day.
    const entries = weekCheckIns(loadCheckIns(), date).filter(e => e.date !== today);
    localStorage.setItem(CHECK_IN_KEY, JSON.stringify([...entries, { date: today, need }]));
    return true;
  } catch { return false; }
}
export function clearTodayCheckIn(): boolean {
  try {
    localStorage.setItem(CHECK_IN_KEY, JSON.stringify(loadCheckIns().filter(e => e.date !== dateKey())));
    return true;
  } catch { return false; }
}
