"use client";

import { useEffect, useId, useState } from "react";

const SEASONS = [
  "Mom of young children",
  "Working professional",
  "Homemaker",
  "Ministry or pastor's wife",
  "Caregiver",
  "In transition",
] as const;

const WEIGHTS = [
  "Anxiety and overwhelm",
  "Finances and provision",
  "Marriage or relationships",
  "Health and energy",
  "Loneliness",
  "Direction and decisions",
] as const;

const LONGINGS = [
  "Peace",
  "Strength",
  "Provision",
  "Wisdom and direction",
  "To feel seen",
  "Rest",
] as const;

type Season = (typeof SEASONS)[number];
type Weight = (typeof WEIGHTS)[number];
type Longing = (typeof LONGINGS)[number];

type VerseLayer = {
  label: string;
  reference: string;
  text: string;
};

const QUESTIONS = [
  {
    key: "season" as const,
    label: "What season are you in?",
    options: SEASONS,
  },
  {
    key: "weight" as const,
    label: "What's weighing on you most right now?",
    options: WEIGHTS,
  },
  {
    key: "longing" as const,
    label: "What do you long for from God this season?",
    options: LONGINGS,
  },
];

const SEASON_PHRASES: Record<Season, string> = {
  "Mom of young children": "mom of young children",
  "Working professional": "working professional",
  Homemaker: "homemaker",
  "Ministry or pastor's wife": "ministry wife",
  Caregiver: "caregiver",
  "In transition": "woman in transition",
};

const LONGING_PHRASES: Record<Longing, string> = {
  Peace: "peace",
  Strength: "strength",
  Provision: "provision",
  "Wisdom and direction": "wisdom and direction",
  "To feel seen": "to feel seen",
  Rest: "rest",
};

const BURDEN_LAYERS: Record<Weight, VerseLayer[]> = {
  "Anxiety and overwhelm": [
    {
      label: "The promise",
      reference: "Matthew 11:28 (KJV)",
      text:
        "Come unto me, all ye that labour and are heavy laden, and I will give you rest.",
    },
  ],
  "Finances and provision": [
    {
      label: "The promise",
      reference: "Philippians 4:19 (KJV)",
      text:
        "But my God shall supply all your need according to his riches in glory by Christ Jesus.",
    },
    {
      label: "Your part",
      reference: "Luke 6:38 (KJV)",
      text:
        "Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over, shall men give into your bosom. For with the same measure that ye mete withal it shall be measured to you again.",
    },
    {
      label: "When it's hard",
      reference: "Matthew 6:33 (KJV)",
      text:
        "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
    },
  ],
  "Marriage or relationships": [
    {
      label: "The promise",
      reference: "1 Peter 4:8 (KJV)",
      text:
        "And above all things have fervent charity among yourselves: for charity shall cover the multitude of sins.",
    },
  ],
  "Health and energy": [
    {
      label: "The promise",
      reference: "Isaiah 40:31 (KJV)",
      text:
        "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles.",
    },
  ],
  Loneliness: [
    {
      label: "The promise",
      reference: "Deuteronomy 31:6 (KJV)",
      text:
        "Be strong and of a good courage, fear not, nor be afraid of them: for the LORD thy God, he it is that doth go with thee; he will not fail thee, nor forsake thee.",
    },
  ],
  "Direction and decisions": [
    {
      label: "The promise",
      reference: "Proverbs 3:5–6 (KJV)",
      text:
        "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
    },
  ],
};

const ENCOURAGEMENTS: Record<Longing, string> = {
  Peace:
    "The peace you long for isn't something you have to earn in this season — Christ is already near, ready to quiet what weighs on you.",
  Strength:
    "The strength you long for is being renewed even now — not in rushing ahead, but in turning toward the One who carries you through what feels impossible.",
  Provision:
    "The provision you're asking God for echoes a heart that trusts Him — and He is faithful to meet you in every need this season brings.",
  "Wisdom and direction":
    "The wisdom and direction you crave begins with Him — and He is gentle with every step when the path ahead feels unclear.",
  "To feel seen":
    "The longing to feel seen is a holy one — and your Father sees you fully, in this season and in every weight you carry.",
  Rest:
    "The rest you long for starts at His feet — even before the demands of this season slow down, you are invited to pause with Him.",
};

function getCurrentStep(
  season: Season | null,
  weight: Weight | null,
  longing: Longing | null,
): number {
  if (season === null) return 0;
  if (weight === null) return 1;
  if (longing === null) return 2;
  return 3;
}

function OptionButton({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`rounded-full border px-4 py-2.5 text-left text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:px-5 sm:text-base ${
        selected
          ? "border-terracotta bg-terracotta/10 text-deep-brown shadow-sm"
          : "border-blush/60 bg-warm-white text-deep-brown/80 hover:border-terracotta/40 hover:bg-cream"
      }`}
    >
      {label}
    </button>
  );
}

function VerseLayerBlock({
  layer,
  animateIn,
}: {
  layer: VerseLayer;
  animateIn: boolean;
}) {
  const [visible, setVisible] = useState(!animateIn);

  useEffect(() => {
    if (!animateIn) return;
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [animateIn]);

  return (
    <div
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-sage">
        {layer.label}
      </p>
      <blockquote className="mt-2 border-l-2 border-gold pl-5">
        <p className="font-serif text-lg italic leading-relaxed text-deep-brown/85 sm:text-xl">
          &ldquo;{layer.text}&rdquo;
        </p>
        <footer className="mt-3 text-sm font-medium text-deep-brown/50">
          — {layer.reference}
        </footer>
      </blockquote>
    </div>
  );
}

export function TasteOfPersonalization() {
  const headingId = useId();
  const [season, setSeason] = useState<Season | null>(null);
  const [weight, setWeight] = useState<Weight | null>(null);
  const [longing, setLonging] = useState<Longing | null>(null);
  const [resultVisible, setResultVisible] = useState(false);
  const [revealedLayers, setRevealedLayers] = useState(1);
  const [layerAnnouncement, setLayerAnnouncement] = useState("");

  const step = getCurrentStep(season, weight, longing);
  const isComplete = step === 3;
  const layers = weight ? BURDEN_LAYERS[weight] : [];
  const hasMoreLayers = revealedLayers < layers.length;

  useEffect(() => {
    setRevealedLayers(1);
    setLayerAnnouncement("");
  }, [season, weight, longing]);

  useEffect(() => {
    if (isComplete) {
      const frame = requestAnimationFrame(() => setResultVisible(true));
      return () => cancelAnimationFrame(frame);
    }
    setResultVisible(false);
  }, [isComplete]);

  function handleSelect(
    questionKey: (typeof QUESTIONS)[number]["key"],
    value: string,
  ) {
    if (questionKey === "season") {
      setSeason(value as Season);
      setWeight(null);
      setLonging(null);
      return;
    }
    if (questionKey === "weight") {
      setWeight(value as Weight);
      setLonging(null);
      return;
    }
    setLonging(value as Longing);
  }

  function handleRevealNextLayer() {
    const nextLayer = layers[revealedLayers];
    if (!nextLayer) return;

    setRevealedLayers((count) => count + 1);
    setLayerAnnouncement(
      `${nextLayer.label}. ${nextLayer.reference}. ${nextLayer.text}`,
    );
  }

  function getAnswer(questionKey: (typeof QUESTIONS)[number]["key"]) {
    if (questionKey === "season") return season;
    if (questionKey === "weight") return weight;
    return longing;
  }

  const personalizedIntro =
    season && longing
      ? `For the ${SEASON_PHRASES[season]} longing for ${LONGING_PHRASES[longing]} —`
      : "";
  const encouragement = longing ? ENCOURAGEMENTS[longing] : "";

  return (
    <div aria-labelledby={headingId}>
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage">
          A taste of personalization
        </p>
        <h2
          id={headingId}
          className="mt-4 font-serif text-3xl font-semibold leading-snug text-deep-brown sm:text-4xl"
        >
          Where are you right now?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-deep-brown/70">
          Answer three quick questions and see how At His Table meets you in
          your season.
        </p>
      </div>

      <div className="mt-10 space-y-8">
        {QUESTIONS.map((question, index) => {
          if (index > step) return null;

          const answer = getAnswer(question.key);
          const isActive = index === step && !isComplete;

          return (
            <div
              key={question.key}
              className={`rounded-2xl border border-blush/50 bg-warm-white p-5 shadow-sm transition-opacity duration-300 sm:p-6 ${
                isActive ? "opacity-100" : "opacity-90"
              }`}
              role="group"
              aria-label={question.label}
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-serif text-lg font-semibold text-deep-brown sm:text-xl">
                  {question.label}
                </p>
                <span className="shrink-0 text-xs font-medium uppercase tracking-wider text-deep-brown/40">
                  {index + 1} of 3
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
                {question.options.map((option) => (
                  <OptionButton
                    key={option}
                    label={option}
                    selected={answer === option}
                    onSelect={() => handleSelect(question.key, option)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {isComplete && season && weight && longing && layers.length > 0 && (
        <div
          role="region"
          aria-label="Your personalized result"
          className={`mt-8 transition-all duration-700 ease-out ${
            resultVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          <div className="rounded-2xl border border-blush/50 bg-warm-white p-6 shadow-md sm:p-8">
            <p className="font-serif text-xl font-semibold italic leading-snug text-terracotta sm:text-2xl">
              {personalizedIntro}
            </p>

            <div className="mt-6 space-y-6">
              {layers.slice(0, revealedLayers).map((layer, index) => (
                <VerseLayerBlock
                  key={`${layer.label}-${layer.reference}`}
                  layer={layer}
                  animateIn={index > 0}
                />
              ))}
            </div>

            {hasMoreLayers && (
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleRevealNextLayer}
                  className="inline-flex items-center justify-center rounded-full border border-terracotta/30 px-6 py-2.5 text-sm font-medium text-terracotta transition-colors hover:border-terracotta hover:bg-terracotta/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white"
                >
                  See how God works
                </button>
              </div>
            )}

            <p className="sr-only" aria-live="polite" aria-atomic="true">
              {layerAnnouncement}
            </p>

            <p className="mt-6 leading-relaxed text-deep-brown/75">
              {encouragement}
            </p>

            <div className="mt-8 text-center sm:text-left">
              <a
                href="#membership"
                className="inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-3.5 text-base font-medium text-warm-white shadow-md transition-all hover:bg-deep-brown hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-warm-white"
              >
                See your full season
              </a>
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-deep-brown/45">
            This is just a taste. Inside, your guidance grows with you — every
            season.
          </p>
        </div>
      )}
    </div>
  );
}
