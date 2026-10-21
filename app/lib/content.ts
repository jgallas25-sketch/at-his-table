// All site copy that appears in lists lives here, so it can be edited in one place.
// Scripture framing and pairings are pending pastor review.

// Season photos are AI-generated (Higgsfield). Most live in /public/images/seasons; any still on its CDN use SEASON_IMG.
const SEASON_IMG = "https://d8j0ntlcm91z4.cloudfront.net/user_3F0QoPgZBOkWEuVFH5CmKCoX8Q3/";

export const seasons = [
  { slug: "little-ones", title: "Raising Little Ones", line: "Strength for full hands and short nights.", img: SEASON_IMG + "hf_20261021_231132_eafc3cc6-7684-4cac-8ede-9a3cd8badadf.png" },
  { slug: "caring-parent", title: "Caring for a Parent", line: "Rest for the one who cares for everyone.", img: SEASON_IMG + "hf_20261021_231132_0779e09f-5f17-40c1-a9fc-c31089331c27.png" },
  { slug: "single", title: "I’m Single", line: "A whole life, held in His hands.", img: SEASON_IMG + "hf_20261021_231132_e5804b1d-a6cf-4756-a302-b3f94df95b9c.png" },
  { slug: "divorced", title: "I’m Divorced", line: "Healing, and room to begin again.", img: SEASON_IMG + "hf_20261021_231132_2eeb123d-36be-44c3-849c-2798de74dfc6.png" },
  { slug: "relationships", title: "Relationships & Family", line: "Bring your relationships to God.", img: SEASON_IMG + "hf_20261021_231132_ba6213d0-ddad-490c-99f4-db22644682c9.png" },
  { slug: "empty-nest", title: "Empty Nest", line: "A new season, and a new calling.", img: SEASON_IMG + "hf_20261021_231132_4319bd02-fef5-42fe-b3ee-f81ba974326f.png" },
  { slug: "new-home", title: "Starting a New Home", line: "Making room for Him from the start.", img: SEASON_IMG + "hf_20261021_231132_54790c00-0165-4a7a-ae65-7cb0fe08c763.png" },
  { slug: "new-job", title: "Starting a New Job", line: "Wisdom and peace for what’s new.", img: SEASON_IMG + "hf_20261021_231132_2d3feac4-b4bb-4447-b4af-a96ca9e1a1f7.png" },
  { slug: "busy-good", title: "Busy with Good Things", line: "Don’t let the good crowd out the best.", img: SEASON_IMG + "hf_20261021_231132_bfa59bda-8e0a-4011-9734-fec547f60db3.png" },
  { slug: "good-place", title: "I’m in a Good Place", line: "Stay grateful and grounded.", img: SEASON_IMG + "hf_20261021_231132_09eb67d0-0f6e-45cb-adf9-620963b0536a.png" },
  { slug: "grateful", title: "I’m Grateful Today", line: "A moment to notice His goodness.", img: SEASON_IMG + "hf_20261021_231132_a8bd291d-ee5c-4a19-96a9-a5540f68b5b4.png" },
  { slug: "grow", title: "I Want to Grow", line: "A little deeper in faith.", img: SEASON_IMG + "hf_20261021_231132_744f6008-1101-4149-b72b-ec2f2661787a.png" },
  { slug: "direction", title: "I Need Direction", line: "Space to listen for what’s next.", img: SEASON_IMG + "hf_20261021_231431_ad53d8f0-2ed9-4592-9b54-3d47cbffc5a9.png" },
  { slug: "financial", title: "Financial Pressure", line: "Faith for what you’re facing.", img: SEASON_IMG + "hf_20261021_231136_6d1a6d1b-a16d-4d5f-a14f-0e835d4b4d1a.png" },
  { slug: "through-something", title: "I’m Going Through Something", line: "You don’t have to walk alone.", img: SEASON_IMG + "hf_20261021_231136_234cdb68-eea5-4ec3-9b1d-c61add87523b.png" },
  { slug: "fresh-start", title: "I Need a Fresh Start", line: "There is room to begin again.", img: SEASON_IMG + "hf_20261021_231137_616ebcc6-ffe5-4a4c-a604-e94f20ad5563.png" },
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
