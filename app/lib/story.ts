// "Your Story" — the first sitting of the free trial.
// Questions follow the "Her Story Questions" doc. Matching weighs her whole story.
import { women, type Woman } from "./women";

export type Answers = Record<string, string | string[]>;

export type Question = {
  id: string;
  part: number; // 1–7
  title: string;
  hint?: string;
  kind: "name" | "one" | "many" | "text";
  max?: number; // for "many"
  options?: string[];
  /** Only ask when this returns true. */
  when?: (a: Answers) => boolean;
};

export const parts = [
  "About you",
  "Home and relationships",
  "Body, work and money",
  "Your heart right now",
  "Your walk with God",
  "Your time with Him",
  "In your own words",
];

const PARTNERED = ["Dating", "Engaged", "Married", "Remarried"];
const UNPARTNERED = ["Single", "Separated", "Divorced", "Widowed"];
export const UNSAFE = "I don’t feel safe at home";
const NOT_SAY = "Prefer not to say";

export const questions: Question[] = [
  { id: "name", part: 1, kind: "name", title: "What should we call you?" },
  {
    id: "age",
    part: 1,
    kind: "one",
    title: "Which age range are you in?",
    options: ["18–24", "25–34", "35–44", "45–54", "55–64", "65+"],
  },
  {
    id: "life",
    part: 1,
    kind: "many",
    title: "What does life look like right now?",
    hint: "Pick all that apply.",
    options: [
      "Raising little ones (0–5)",
      "School-age kids",
      "Teens",
      "Adult children",
      "Empty nest",
      "Grandchildren",
      "Stepmom or blended family",
      "Caring for an aging parent",
      "Just moved into a new home",
      "Working full time",
      "Working part time",
      "Running my own business",
      "In school",
      "Serving in ministry",
      "Retired",
    ],
  },
  {
    id: "status",
    part: 2,
    kind: "one",
    title: "What’s your relationship status?",
    options: ["Single", "Dating", "Engaged", "Married", "Remarried", "Separated", "Divorced", "Widowed"],
  },
  {
    id: "together",
    part: 2,
    kind: "many",
    title: "How is your relationship right now?",
    hint: "Pick all that apply.",
    options: [
      "Strong",
      "Growing",
      "Distant",
      "Strained",
      "Lonely",
      "He doesn’t share my faith",
      "We’re working through hurt",
      UNSAFE,
      NOT_SAY,
    ],
    when: (a) => PARTNERED.includes(a.status as string),
  },
  {
    id: "season",
    part: 2,
    kind: "many",
    title: "How do you feel about this season?",
    hint: "Pick all that apply.",
    options: [
      "Content",
      "Lonely",
      "Hoping for marriage",
      "Healing from a loss",
      "Rebuilding after divorce",
      "Enjoying this freedom",
      NOT_SAY,
    ],
    when: (a) => UNPARTNERED.includes(a.status as string),
  },
  {
    id: "children",
    part: 2,
    kind: "many",
    title: "What’s true about children in your life?",
    hint: "Pick all that apply.",
    options: [
      "No children",
      "Waiting or hoping for children",
      "Pregnant",
      "Pregnancy or child loss",
      "A child who has walked away from faith",
      "A child with special needs or health challenges",
      "A child who is struggling",
      "Raising grandchildren",
      "My kids are doing well",
    ],
  },
  {
    id: "friends",
    part: 2,
    kind: "one",
    title: "Do you have women around you who walk with you in faith?",
    options: ["Yes, several", "A few", "One", "Not really", "I used to"],
  },
  {
    id: "body",
    part: 3,
    kind: "many",
    title: "How are you doing physically?",
    hint: "Pick all that apply.",
    options: [
      "I feel healthy",
      "Constantly tired",
      "Chronic illness or pain",
      "Menopause",
      "Pregnancy or postpartum",
      "A recent diagnosis",
      "Someone I love is sick",
      NOT_SAY,
    ],
  },
  {
    id: "work",
    part: 3,
    kind: "many",
    title: "What’s true about work and money right now?",
    hint: "Pick all that apply.",
    options: [
      "Stable",
      "Financial strain",
      "Lost a job or searching",
      "Overworked",
      "Starting a new job",
      "Starting something new",
      "Sensing a call but not sure what",
      "Burned out from serving",
      NOT_SAY,
    ],
  },
  {
    id: "heart",
    part: 4,
    kind: "many",
    max: 3,
    title: "What is your heart carrying right now?",
    hint: "Pick up to 3.",
    options: [
      "Worry or anxiety",
      "Grief",
      "Loneliness",
      "Shame or regret",
      "Anger or bitterness",
      "Waiting on God",
      "Disappointment",
      "Fear about the future",
      "Exhaustion",
      "Too busy, even with good things",
      "Hope",
      "Gratitude",
      "Joy",
    ],
  },
  {
    id: "heaviest",
    part: 4,
    kind: "one",
    title: "Which one feels heaviest today?",
    when: (a) => Array.isArray(a.heart) && a.heart.length > 1,
  },
  {
    id: "walk",
    part: 5,
    kind: "one",
    title: "How would you describe your walk with God right now?",
    hint: "Pick the one that fits best. There’s no wrong answer.",
    options: [
      "I’m just starting to know Him",
      "I’m finding my way back to Him",
      "I’m walking steadily with Him",
      "He feels far away lately",
      "I’m hurting and have questions",
      "I’m hungry for more of Him",
    ],
  },
  {
    id: "bible",
    part: 5,
    kind: "one",
    title: "How familiar are you with the Bible?",
    options: ["New to it", "I know the stories", "I read it regularly", "I study it deeply"],
  },
  {
    id: "longing",
    part: 5,
    kind: "many",
    max: 2,
    title: "Where do you long to go with Him?",
    hint: "Pick up to 2.",
    options: [
      "Deeper prayer",
      "Knowing His Word",
      "Peace in the storm",
      "Healing",
      "Freedom from something",
      "Purpose and calling",
      "Hearing His voice",
      "Getting my joy back",
      "A stronger marriage or family",
    ],
  },
  {
    id: "minutes",
    part: 6,
    kind: "one",
    title: "On most days, how much time can you really give?",
    options: ["About 5 minutes", "10–15 minutes", "20–30 minutes", "More on weekends"],
  },
  {
    id: "when",
    part: 6,
    kind: "one",
    title: "When does it fit best?",
    options: ["Early morning", "On my commute", "Lunch break", "While the kids nap", "Evening", "Bedtime", "It changes"],
  },
  {
    id: "connect",
    part: 6,
    kind: "many",
    title: "How do you connect with God best?",
    hint: "Pick all that apply.",
    options: ["Reading", "Writing", "Listening", "Praying out loud", "Worship music", "Quiet stillness"],
  },
  {
    id: "words",
    part: 7,
    kind: "text",
    title: "Is there anything else you want God to meet you in right now?",
    hint: "Optional, and private. Write as much or as little as you like.",
  },
];

/** Options for a question, including the "heaviest" one that's built from her heart answers. */
export function optionsFor(q: Question, a: Answers): string[] {
  if (q.id === "heaviest") return (a.heart as string[]) ?? [];
  return q.options ?? [];
}

export function visibleQuestions(a: Answers) {
  return questions.filter((q) => !q.when || q.when(a));
}

const list = (a: Answers, id: string) => (Array.isArray(a[id]) ? (a[id] as string[]) : a[id] ? [a[id] as string] : []);
const one = (a: Answers, id: string) => (typeof a[id] === "string" ? (a[id] as string) : "");

export function heaviest(a: Answers) {
  return one(a, "heaviest") || list(a, "heart")[0] || "";
}

// ── Season cards on the homepage pre-fill one answer ───────────────
export const seasonPresets: Record<string, Answers> = {
  "little-ones": { life: ["Raising little ones (0–5)"] },
  "caring-parent": { life: ["Caring for an aging parent"] },
  single: { status: "Single" },
  divorced: { status: "Divorced" },
  "empty-nest": { life: ["Empty nest"] },
  "new-home": { life: ["Just moved into a new home"] },
  "new-job": { work: ["Starting a new job"] },
  "busy-good": { heart: ["Too busy, even with good things"] },
  "good-place": { heart: ["Joy"] },
  grateful: { heart: ["Gratitude"] },
  grow: { walk: "I’m hungry for more of Him" },
  direction: { work: ["Sensing a call but not sure what"] },
  financial: { work: ["Financial strain"] },
  "fresh-start": { walk: "I’m finding my way back to Him" },
};

// ── Matching: every answer adds weight to the women whose stories fit ──
const weights: Record<string, Record<string, number>> = {
  // life
  "Raising little ones (0–5)": { mary: 2 },
  "School-age kids": { mary: 1 },
  Teens: { hannah: 1 },
  "Adult children": { elizabeth: 1 },
  "Empty nest": { elizabeth: 2 },
  Grandchildren: { anna: 1 },
  "Stepmom or blended family": { ruth: 1 },
  "Caring for an aging parent": { ruth: 3 },
  "Just moved into a new home": { lydia: 2 },
  "Working full time": { lydia: 1 },
  "Working part time": { lydia: 1 },
  "Running my own business": { lydia: 2 },
  "In school": { esther: 1 },
  "Serving in ministry": { martha: 1 },
  Retired: { anna: 2 },
  // status
  Widowed: { naomi: 3 },
  Divorced: { well: 2, rahab: 1 },
  Separated: { leah: 2 },
  Single: { maryBethany: 1, lydia: 1 },
  // together
  Distant: { leah: 2 },
  Strained: { leah: 3 },
  Lonely: { leah: 2, hagar: 1 },
  "He doesn’t share my faith": { leah: 2 },
  "We’re working through hurt": { leah: 2 },
  [UNSAFE]: { hagar: 3 },
  // season
  "Hoping for marriage": { sarah: 1 },
  "Healing from a loss": { naomi: 2 },
  "Rebuilding after divorce": { well: 2, rahab: 1 },
  Content: { lydia: 1 },
  // children
  "Waiting or hoping for children": { sarah: 2, hannah: 2 },
  "Pregnancy or child loss": { hannah: 3 },
  "A child who has walked away from faith": { canaanite: 3 },
  "A child with special needs or health challenges": { canaanite: 2 },
  "A child who is struggling": { canaanite: 3 },
  "Raising grandchildren": { ruth: 1 },
  // body
  "Constantly tired": { martha: 1 },
  "Chronic illness or pain": { reached: 2 },
  "A recent diagnosis": { reached: 2 },
  "Someone I love is sick": { reached: 1, ruth: 1 },
  // work
  "Financial strain": { zarephath: 3 },
  "Lost a job or searching": { zarephath: 2, esther: 1 },
  Overworked: { martha: 2 },
  "Starting a new job": { esther: 2 },
  "Starting something new": { esther: 1, lydia: 1 },
  "Sensing a call but not sure what": { esther: 2 },
  "Burned out from serving": { martha: 2 },
  // heart (each pick)
  "Worry or anxiety": { martha: 2 },
  Grief: { naomi: 2 },
  Loneliness: { hagar: 2 },
  "Shame or regret": { well: 2 },
  "Anger or bitterness": { naomi: 2 },
  "Waiting on God": { sarah: 2 },
  Disappointment: { hannah: 2 },
  "Fear about the future": { esther: 2 },
  Exhaustion: { martha: 2 },
  "Too busy, even with good things": { martha: 2 },
  Hope: { elizabeth: 2 },
  Gratitude: { miriam: 2 },
  Joy: { miriam: 2 },
  // walk
  "I’m just starting to know Him": { maryBethany: 1 },
  "I’m finding my way back to Him": { rahab: 1, well: 1 },
  "He feels far away lately": { hagar: 2 },
  "I’m hurting and have questions": { magdalene: 2 },
  "I’m hungry for more of Him": { maryBethany: 2 },
  // longing
  "Peace in the storm": { martha: 1 },
  Healing: { reached: 1 },
  "Freedom from something": { magdalene: 1 },
  "Purpose and calling": { esther: 1 },
  "Hearing His voice": { maryBethany: 1 },
  "Knowing His Word": { maryBethany: 1 },
  "Getting my joy back": { miriam: 1 },
  "A stronger marriage or family": { ruth: 1 },
};

const HEAVIEST_BONUS = 4;

/** Her first woman of Scripture, plus two who'll walk with her later. */
export function matchWomen(a: Answers): Woman[] {
  const score: Record<string, number> = {};
  const add = (id: string, answer: string) => {
    // "Lonely" means something different for a single woman than for a married one.
    const w = id === "season" && answer === "Lonely" ? { hagar: 2 } : weights[answer] ?? {};
    for (const [k, n] of Object.entries(w)) score[k] = (score[k] ?? 0) + n;
  };
  for (const id of ["life", "status", "together", "season", "children", "body", "work", "heart", "walk", "longing"]) {
    for (const ans of list(a, id)) add(id, ans);
  }
  const heavy = heaviest(a);
  if (heavy) for (const [k, w] of Object.entries(weights[heavy] ?? {})) score[k] = (score[k] ?? 0) + w * HEAVIEST_BONUS;
  const ranked = Object.entries(score)
    .sort((x, y) => y[1] - x[1])
    .map(([k]) => women[k]);
  const out = ranked.length ? ranked : [women.martha];
  if (!out.includes(women.martha) && out.length < 3) out.push(women.martha);
  return out.slice(0, 3);
}

// ── "What we heard" — her story given back gently ───────────────
const lifePhrases: Record<string, string> = {
  "Raising little ones (0–5)": "raising little ones",
  "School-age kids": "raising school-age kids",
  Teens: "raising teenagers",
  "Adult children": "loving your grown children",
  "Empty nest": "settling into an empty nest",
  Grandchildren: "enjoying grandchildren",
  "Stepmom or blended family": "loving a blended family",
  "Caring for an aging parent": "caring for an aging parent",
  "Just moved into a new home": "settling into a new home",
  "Working full time": "working full time",
  "Working part time": "working part time",
  "Running my own business": "running your own business",
  "In school": "in school",
  "Serving in ministry": "serving in ministry",
  Retired: "enjoying retirement",
};

const togetherPhrases: Record<string, string> = {
  Strong: "Your marriage is a strength right now.",
  Growing: "Your relationship is growing.",
  Distant: "Home has felt a little distant lately.",
  Strained: "Your relationship feels strained right now.",
  Lonely: "You’ve felt lonely, even at home.",
  "He doesn’t share my faith": "You’re walking in faith without your husband beside you.",
  "We’re working through hurt": "You’re working through some hurt together.",
};

const seasonPhrases: Record<string, string> = {
  Content: "You’re content in this season.",
  Lonely: "This season has felt lonely.",
  "Hoping for marriage": "You’re hoping for marriage.",
  "Healing from a loss": "You’re healing from a loss.",
  "Rebuilding after divorce": "You’re rebuilding after divorce.",
  "Enjoying this freedom": "You’re enjoying the freedom of this season.",
};

const childPhrases: Record<string, string> = {
  "Waiting or hoping for children": "you’re waiting and hoping for children",
  Pregnant: "you’re expecting a baby",
  "Pregnancy or child loss": "you’re carrying the loss of a little one",
  "A child who has walked away from faith": "one of your children is in a heavy season",
  "A child with special needs or health challenges": "one of your children needs extra care",
  "A child who is struggling": "one of your children is struggling",
  "Raising grandchildren": "you’re raising grandchildren",
};

const heartPhrases: Record<string, string> = {
  "Worry or anxiety": "worry",
  Grief: "grief",
  Loneliness: "loneliness",
  "Shame or regret": "some regret",
  "Anger or bitterness": "some hurt that’s hard to let go",
  "Waiting on God": "the weight of waiting",
  Disappointment: "disappointment",
  "Fear about the future": "fear about what’s ahead",
  Exhaustion: "exhaustion",
  "Too busy, even with good things": "a full calendar, even with good things",
  Hope: "hope",
  Gratitude: "gratitude",
  Joy: "joy",
};

const walkPhrases: Record<string, string> = {
  "I’m just starting to know Him": "You’re just starting to know God.",
  "I’m finding my way back to Him": "You’re finding your way back to God.",
  "I’m walking steadily with Him": "You’re walking steadily with God.",
  "He feels far away lately": "God has felt far away lately.",
  "I’m hurting and have questions": "You’re hurting, and you have honest questions for God.",
  "I’m hungry for more of Him": "You’re hungry for more of God.",
};

const longingPhrases: Record<string, string> = {
  "Deeper prayer": "deeper prayer",
  "Knowing His Word": "to know His Word",
  "Peace in the storm": "peace in the storm",
  Healing: "healing",
  "Freedom from something": "freedom",
  "Purpose and calling": "your purpose",
  "Hearing His voice": "to hear His voice",
  "Getting my joy back": "your joy back",
  "A stronger marriage or family": "a stronger family",
};

const minutesPhrases: Record<string, string> = {
  "About 5 minutes": "about 5 minutes",
  "10–15 minutes": "about 15 minutes",
  "20–30 minutes": "20 to 30 minutes",
  "More on weekends": "a little time on weekdays and more on weekends",
};

const whenPhrases: Record<string, string> = {
  "Early morning": "early in the morning",
  "On my commute": "on your commute",
  "Lunch break": "on your lunch break",
  "While the kids nap": "while the kids nap",
  Evening: "in the evening",
  Bedtime: "at bedtime",
};

function joinList(xs: string[]) {
  if (xs.length <= 1) return xs[0] ?? "";
  return `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`;
}
const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export function whatWeHeard(a: Answers): string[] {
  const out: string[] = [];
  const life = list(a, "life").map((x) => lifePhrases[x]).filter(Boolean).slice(0, 3);
  if (life.length) out.push(`You’re ${joinList(life)}.`);

  const status = one(a, "status");
  if (status === "Widowed") out.push("You’re carrying the loss of your husband.");
  for (const t of list(a, "together")) if (togetherPhrases[t]) out.push(togetherPhrases[t]);
  for (const s of list(a, "season")) if (seasonPhrases[s]) out.push(seasonPhrases[s]);

  const kids = list(a, "children").map((x) => childPhrases[x]).filter(Boolean).slice(0, 2);
  if (kids.length) out.push(cap(`${joinList(kids)}.`));

  const heart = list(a, "heart");
  const heavy = heaviest(a);
  if (heavy) {
    const others = heart.filter((h) => h !== heavy).map((h) => heartPhrases[h]);
    out.push(
      others.length
        ? `Your heart is carrying ${heartPhrases[heavy]} most of all, along with ${joinList(others)}.`
        : `Your heart is carrying ${heartPhrases[heavy]} right now.`
    );
  }

  const walk = one(a, "walk");
  if (walkPhrases[walk]) out.push(walkPhrases[walk]);

  const minutes = minutesPhrases[one(a, "minutes")];
  const when = whenPhrases[one(a, "when")];
  if (minutes) out.push(`You have ${minutes}${when ? `, usually ${when}` : ""}.`);

  const longing = list(a, "longing").map((x) => longingPhrases[x]).filter(Boolean);
  if (longing.length) out.push(`You long for ${joinList(longing)}.`);

  return out;
}

export function minutesLabel(a: Answers) {
  return minutesPhrases[one(a, "minutes")] ?? "about 15 minutes";
}

// ── Safety: answers that mean she needs a person, not just a devotional ──
const harmWords = [
  /kill (myself|me)/i,
  /suicid/i,
  /end (my|it all|my life)/i,
  /want to die/i,
  /don'?t want to (live|be here)/i,
  /hurt(ing)? myself/i,
  /self[- ]?harm/i,
  /cut(ting)? myself/i,
];
const dangerWords = [
  /(hits|hit|beats|beat|chokes|choked|hurts|hurt) me/i,
  /afraid (of|he|she)/i,
  /abus/i,
  /not safe/i,
  /threaten/i,
];

export type SafetyNeed = "harm" | "danger" | null;

export function safetyNeed(a: Answers): SafetyNeed {
  const words = one(a, "words");
  if (harmWords.some((r) => r.test(words))) return "harm";
  if (list(a, "together").includes(UNSAFE) || dangerWords.some((r) => r.test(words))) return "danger";
  return null;
}

// ── Saving on her device (until accounts exist) ───────────────────
export const PROFILE_KEY = "aht-profile";
export const PROGRESS_KEY = "aht-story-progress";

export type Profile = { answers: Answers; woman: string; others: string[]; savedAt: string };

/** Never store the "not safe at home" answer on a shared device. */
export function safeToStore(a: Answers): Answers {
  const copy = { ...a };
  if (Array.isArray(copy.together)) copy.together = copy.together.filter((t) => t !== UNSAFE);
  return copy;
}

export function loadProfile(): Profile | null {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    return raw ? (JSON.parse(raw) as Profile) : null;
  } catch {
    return null;
  }
}

export function saveProfile(p: Profile) {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(p));
    localStorage.removeItem(PROGRESS_KEY);
  } catch {
    // Storage unavailable (private browsing): the flow still works for this visit.
  }
}
