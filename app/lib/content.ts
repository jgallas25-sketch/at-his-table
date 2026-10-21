// All site copy that appears in lists lives here, so it can be edited in one place.
// Scripture framing and pairings are pending pastor review.

// Season photos are AI-generated (Higgsfield) and served from its CDN.
const SEASON_IMG = "https://d8j0ntlcm91z4.cloudfront.net/user_3F0QoPgZBOkWEuVFH5CmKCoX8Q3/";

export const seasons = [
  { slug: "little-ones", title: "Raising Little Ones", line: "Strength for full hands and short nights.", img: SEASON_IMG + "hf_20261021_224831_0591d57c-ab2a-4e8d-ab9d-0dad308b08df.png" },
  { slug: "caring-parent", title: "Caring for a Parent", line: "Rest for the one who cares for everyone.", img: SEASON_IMG + "hf_20261021_224756_6b1b7687-f52d-425b-9e52-a480498f32ab.png" },
  { slug: "single", title: "I’m Single", line: "A whole life, held in His hands.", img: SEASON_IMG + "hf_20261021_224755_eb95b910-2f2f-4b40-8c74-3227bc35ef28.png" },
  { slug: "divorced", title: "I’m Divorced", line: "Healing, and room to begin again.", img: SEASON_IMG + "hf_20261021_224756_4d6645ad-7b54-4f25-9624-32dd843da4a7.png" },
  { slug: "relationships", title: "Relationships & Family", line: "Bring your relationships to God.", img: SEASON_IMG + "hf_20261021_224757_e4737e8e-e88b-44ce-b99b-41f48d41bee4.png" },
  { slug: "empty-nest", title: "Empty Nest", line: "A new season, and a new calling.", img: SEASON_IMG + "hf_20261021_224756_143ac6d9-2572-4694-999c-a3e807c79f36.png" },
  { slug: "new-home", title: "Starting a New Home", line: "Making room for Him from the start.", img: SEASON_IMG + "hf_20261021_224757_a452ddf2-fcb1-42fe-8e79-be4beb16d8a2.png" },
  { slug: "new-job", title: "Starting a New Job", line: "Wisdom and peace for what’s new.", img: SEASON_IMG + "hf_20261021_224756_9d03d8b6-83c8-4ae6-baed-737fd840cd5e.png" },
  { slug: "busy-good", title: "Busy with Good Things", line: "Don’t let the good crowd out the best.", img: SEASON_IMG + "hf_20261021_224755_cec613ba-bf25-4afe-957a-a16a656a49ad.png" },
  { slug: "good-place", title: "I’m in a Good Place", line: "Stay grateful and grounded.", img: SEASON_IMG + "hf_20261021_224757_783c013d-3cf2-4640-9248-cefeb1ad5adf.png" },
  { slug: "grateful", title: "I’m Grateful Today", line: "A moment to notice His goodness.", img: SEASON_IMG + "hf_20261021_224757_420b9961-1860-43f9-bdc6-ca717a6f621d.png" },
  { slug: "grow", title: "I Want to Grow", line: "A little deeper in faith.", img: SEASON_IMG + "hf_20261021_224757_ee7cf35d-d8f3-4227-a99e-ab6c12cb26ea.png" },
  { slug: "direction", title: "I Need Direction", line: "Space to listen for what’s next.", img: SEASON_IMG + "hf_20261021_224800_757d26ea-68a8-435e-8885-a7f4158eae7d.png" },
  { slug: "financial", title: "Financial Pressure", line: "Faith for what you’re facing.", img: SEASON_IMG + "hf_20261021_224801_fbb3bc29-cc2f-4401-83ec-5149a872090b.png" },
  { slug: "through-something", title: "I’m Going Through Something", line: "You don’t have to walk alone.", img: SEASON_IMG + "hf_20261021_224802_83fc7f71-1d4e-46af-9010-cbae4c486ace.png" },
  { slug: "fresh-start", title: "I Need a Fresh Start", line: "There is room to begin again.", img: SEASON_IMG + "hf_20261021_224801_d57834fd-c4bf-4964-a0b2-00cde906baf6.png" },
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

// The daily rhythm, in order. It always begins with praise.
export const rhythm = [
  { title: "Praise", line: "Declare who God is and what He has done.", icon: "praise" },
  { title: "Scripture", line: "A little truth to carry with you.", icon: "book" },
  { title: "Reflection", line: "Space to listen and grow.", icon: "pen" },
  { title: "Seek God", line: "Bring Him your heart in prayer.", icon: "hands" },
  { title: "Gratitude", line: "Notice the good He has given.", icon: "heart" },
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
    title: "Which of these feels most like your life right now?",
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
