// All site copy that appears in lists lives here, so it can be edited in one place.
// Scripture framing and pairings are pending pastor review.

export const seasons = [
  { slug: "grow", title: "I Want to Grow", line: "A little deeper in faith." },
  { slug: "grateful", title: "I’m Grateful Today", line: "A moment to notice His goodness." },
  { slug: "direction", title: "I Need Direction", line: "Space to listen for what’s next." },
  { slug: "through-something", title: "I’m Going Through Something", line: "You don’t have to walk alone." },
  { slug: "good-place", title: "I’m in a Good Place", line: "Stay grateful and grounded." },
  { slug: "relationships", title: "Relationships & Family", line: "Bring your relationships to God." },
  { slug: "financial", title: "Financial Pressure", line: "Faith for what you’re facing." },
  { slug: "fresh-start", title: "I Need a Fresh Start", line: "There is room to begin again." },
] as const;

export const examplePairs = [
  {
    who: "A young mom, running on empty",
    name: "Jochebed",
    why: "She trusted God with the child she couldn’t protect on her own.",
    ref: "Exodus 2",
  },
  {
    who: "An empty nester, wondering what’s next",
    name: "Elizabeth",
    why: "God surprised her with a new calling later in life.",
    ref: "Luke 1",
  },
  {
    who: "Starting over after divorce",
    name: "The woman at the well",
    why: "Jesus met her with truth and dignity, not shame.",
    ref: "John 4",
  },
];

export const rhythm = [
  { title: "Scripture", line: "A little truth to carry with you.", icon: "book" },
  { title: "Prayer", line: "A moment to speak from the heart.", icon: "hands" },
  { title: "Reflection", line: "Space to listen and grow.", icon: "heart" },
  { title: "Testimony", line: "Write down what God is doing.", icon: "pen" },
] as const;

export const plannerFeatures = [
  { title: "Planned by season", line: "devotionals and prompts matched to the season you choose" },
  { title: "Your week, with God in it", line: "weekly planning pages with a daily Scripture and prayer built in" },
  { title: "Watch, then reflect", line: "journal prompts that follow each episode of the series" },
  {
    title: "A testimony journal",
    line: "record prayers, answers and the ways God shows up, and look back on how far you’ve come",
  },
  { title: "A table of women", line: "a community of women walking the same seasons" },
];

// ── Your Story intake ─────────────────────────────────────
export const questions = [
  {
    title: "What season of life are you in?",
    options: ["Young mom", "Mom of teens", "Empty nester", "Caring for a parent", "Building a career", "Retired"],
  },
  {
    title: "What’s home like right now?",
    options: ["Single", "Married", "Separated or divorced", "Widowed", "Remarried"],
  },
  {
    title: "Where are you with God today?",
    options: ["Just beginning", "Coming back", "Steady", "Feeling dry or distant", "Hungry for more"],
  },
  {
    title: "Where do you long to go with Him?",
    options: ["Deeper prayer", "Knowing His Word", "Peace in the storm", "Healing", "Purpose and calling"],
  },
  {
    title: "What’s weighing on you most?",
    options: seasons.map((s) => s.title as string),
  },
];

export type Woman = { name: string; why: string; ref: string };

export const women: Record<string, Woman> = {
  jochebed: {
    name: "Jochebed",
    why: "She trusted God with the child she couldn’t protect on her own, and He carried what she couldn’t.",
    ref: "Exodus 2:1–10",
  },
  hannah: {
    name: "Hannah",
    why: "She poured out her whole heart to God, then placed her son in His hands.",
    ref: "1 Samuel 1",
  },
  elizabeth: {
    name: "Elizabeth",
    why: "God surprised her with a new calling later in life, when others thought her season was over.",
    ref: "Luke 1:5–45",
  },
  ruth: {
    name: "Ruth",
    why: "Her faithful love for the one in her care became part of God’s bigger story.",
    ref: "Ruth 1–4",
  },
  lydia: {
    name: "Lydia",
    why: "A working woman whose open heart and open home became a place for the gospel.",
    ref: "Acts 16:13–15",
  },
  anna: {
    name: "Anna",
    why: "In her later years she stayed close to God in worship and prayer, and saw His promise fulfilled.",
    ref: "Luke 2:36–38",
  },
  well: {
    name: "The woman at the well",
    why: "Jesus met her with truth and dignity, not shame, and gave her a new beginning.",
    ref: "John 4:1–42",
  },
  naomi: {
    name: "Naomi",
    why: "She spoke her grief honestly, and God was quietly at work in her loss.",
    ref: "Ruth 1–4",
  },
  martha: {
    name: "Martha",
    why: "She was invited to sit, not scolded, and Jesus called her by name.",
    ref: "Luke 10:38–42",
  },
};

/** Matching rules, checked in order. answers[0] = life season, answers[1] = home. */
export function matchWoman(answers: string[]): Woman {
  const [season, home] = answers;
  if (home === "Separated or divorced") return women.well;
  if (home === "Widowed") return women.naomi;
  if (season === "Young mom") return women.jochebed;
  if (season === "Mom of teens") return women.hannah;
  if (season === "Empty nester") return women.elizabeth;
  if (season === "Caring for a parent") return women.ruth;
  if (season === "Building a career" || home === "Single") return women.lydia;
  if (season === "Retired") return women.anna;
  return women.martha;
}
