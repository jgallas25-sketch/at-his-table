/** Photography direction briefs — replace files in public/images/ when brand shoots are ready */
import imageVersions from "./imageVersions.json";

export type PhotoBrief = {
  id: string;
  label: string;
  file: string;
  step?: string;
  concept: string;
  ideas: string[];
  emotion: string;
  message: string;
  src: string;
  alt: string;
  objectPosition?: string;
  aspectRatio?: string;
};

/** Set false once final photography replaces the placeholder JPGs in public/images/ */
export const usingPlaceholderImages = false;

/** Canonical image filenames — swap these files in public/images/ for final photography */
export const collectionFiles = {
  hero: "hero-woman-bible.jpg",
  everySeason: "women-of-every-season.jpg",
  discover: "season-assessment.jpg",
  walk: "faith-planner.jpg",
  gather: "community-group.jpg",
  share: "testimony-journal.jpg",
} as const;

const imagePath = (file: string) => {
  const version = imageVersions[file as keyof typeof imageVersions] ?? 0;
  return `/images/${file}?v=${version}`;
};

export const collectionImages = {
  hero: {
    file: collectionFiles.hero,
    path: imagePath(collectionFiles.hero),
    width: 1600,
    height: 2000,
  },
  everySeason: {
    file: collectionFiles.everySeason,
    path: imagePath(collectionFiles.everySeason),
    width: 2400,
    height: 1200,
  },
  discover: {
    file: collectionFiles.discover,
    path: imagePath(collectionFiles.discover),
    width: 1600,
    height: 2000,
  },
  walk: {
    file: collectionFiles.walk,
    path: imagePath(collectionFiles.walk),
    width: 1600,
    height: 2000,
  },
  gather: {
    file: collectionFiles.gather,
    path: imagePath(collectionFiles.gather),
    width: 1920,
    height: 1280,
  },
  share: {
    file: collectionFiles.share,
    path: imagePath(collectionFiles.share),
    width: 1600,
    height: 2000,
  },
} as const;

export const replaceablePhotoFiles = Object.values(collectionFiles);

export const journeyPhotos: Record<string, PhotoBrief> = {
  hero: {
    id: "hero",
    label: "Sit With Jesus",
    file: collectionFiles.hero,
    // Future photography: woman engaging the product and warmly looking toward the viewer
    concept: "A warm devotional moment — a woman spending time with Jesus",
    ideas: [
      "Bible open",
      "Quiet corner",
      "Morning light",
      "Peaceful presence",
      "Future swap: woman engaging the product, warmly looking toward the viewer",
    ],
    emotion: "Peaceful, grounded, present",
    message: "Christ meets you before the day begins.",
    src: collectionImages.hero.path,
    alt: "Woman in a warm devotional moment, spending quiet time with Jesus and an open Bible",
    objectPosition: "center 30%",
    aspectRatio: "aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]",
  },
  everySeason: {
    id: "every-season",
    label: "Every Season",
    file: collectionFiles.everySeason,
    concept: "Diverse women in different seasons of life — one table",
    ideas: [
      "Young believer",
      "Busy mother",
      "Professional",
      "Woman in transition",
      "Ministry leader",
      "Mature believer",
    ],
    emotion: "Belonging, diversity, warmth",
    message: "There is a place for every woman.",
    src: collectionImages.everySeason.path,
    alt: "Wide photo of diverse women in different seasons of life gathered at one table",
    objectPosition: "center center",
    aspectRatio: "aspect-[16/9] sm:aspect-[21/9]",
  },
  discover: {
    id: "discover",
    label: "Discover Your Season",
    file: collectionFiles.discover,
    step: "Assessment",
    concept: "A woman thoughtfully completing her season assessment",
    ideas: ["Laptop open", "Journal nearby", "Coffee on table", "Reflective expression"],
    emotion: "Curious, thoughtful, hopeful",
    message: "Naming your season is the first step.",
    src: collectionImages.discover.path,
    alt: "Woman thoughtfully completing her season assessment with laptop and journal",
    objectPosition: "center 25%",
    aspectRatio: "aspect-[4/5] lg:aspect-[5/6]",
  },
  sitWithJesus: {
    id: "sit-with-jesus",
    label: "Sit With Jesus",
    file: collectionFiles.hero,
    step: "Devotion",
    concept: "A warm devotional moment — a woman spending time with Jesus",
    ideas: ["Bible open", "Journal and pen", "Morning light", "Quiet corner of home"],
    emotion: "Peaceful, grounded, present",
    message: "Presence before productivity.",
    src: collectionImages.hero.path,
    alt: "Woman spending intentional time with Jesus — Bible open in warm morning light",
    objectPosition: "center 35%",
    aspectRatio: "aspect-[4/5] lg:aspect-[5/6]",
  },
  walk: {
    id: "walk",
    label: "Walk With Intention",
    file: collectionFiles.walk,
    step: "Planning",
    concept:
      "A warm, natural-light photo of a woman presenting or working with the At His Table weekly planner, with the planner facing the viewer clearly, readable orientation, Bible and coffee nearby, peaceful faith-based home setting",
    ideas: [
      "Planner facing viewer — right-side up and readable",
      "Woman presenting or working with the weekly layout",
      "Bible and coffee on the table",
      "Soft natural light in a peaceful home",
      "Faith-based, calm atmosphere",
    ],
    emotion: "Purposeful and calm",
    message: "Faith shaping everyday life.",
    src: collectionImages.walk.path,
    alt: "Woman presenting the At His Table weekly planner toward the viewer in readable orientation, with Bible and coffee nearby in a peaceful, faith-based home setting",
    objectPosition: "center 40%",
    aspectRatio: "aspect-[4/5] lg:aspect-[5/6]",
  },
  gather: {
    id: "gather",
    label: "Gather Around the Table",
    file: collectionFiles.gather,
    step: "Community",
    concept: "A small group of women gathered for prayer, Bible study, or coffee",
    ideas: ["Coffee shop", "Living room", "Church Bible study", "Prayer circle"],
    emotion: "Connection, encouragement, belonging",
    message: "You do not walk alone.",
    src: collectionImages.gather.path,
    alt: "Small group of women gathered for prayer, Bible study, or coffee",
    objectPosition: "center center",
    aspectRatio: "aspect-[4/3] lg:aspect-[3/2]",
  },
  share: {
    id: "share",
    label: "Share Your Story",
    file: collectionFiles.share,
    step: "Testimony",
    concept: "A woman writing reflections or testimony in her journal",
    ideas: [
      "Handwritten pages",
      "Quiet reflection",
      "Gratitude and testimony",
      "Pen on open journal",
    ],
    emotion: "Grateful, honest, strengthened",
    message: "Your story strengthens others.",
    src: collectionImages.share.path,
    alt: "Woman writing reflections and testimony in her journal",
    objectPosition: "center 30%",
    aspectRatio: "aspect-[4/5] lg:aspect-[5/6]",
  },
};

/** Ordered multi-woman journey — assessment → devotion → planning → community → testimony */
export const journeyArc: PhotoBrief[] = [
  journeyPhotos.discover,
  journeyPhotos.sitWithJesus,
  journeyPhotos.walk,
  journeyPhotos.gather,
  journeyPhotos.share,
];
