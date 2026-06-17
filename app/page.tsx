import type { ReactNode } from "react";
import { AssessmentGrid, SeasonMoments, SectionBackground } from "./components/HomeSections";
import { TasteOfPersonalization } from "./components/TasteOfPersonalization";
import {
  EverySeasonVisual,
  HeroVisual,
  JourneyPhotoStrip,
  JourneySection,
  PhotoDirection,
} from "./components/PhotoDirection";
import { journeyPhotos } from "./lib/photography";

const audiences = [
  "New believers",
  "Women seeking deeper discipleship",
  "Mothers",
  "Professionals",
  "Ministry leaders",
  "Women in transition",
  "Women carrying burdens",
];

const howItWorksSteps = [
  {
    number: "1",
    title: "Bring What You're Carrying",
    description:
      "Each week, bring Him your season — what's weighing on you, what you long for. Like Martha running to meet Jesus, you don't carry it alone. You cast your care on the One who cares for you.",
  },
  {
    number: "2",
    title: "Meet Him in His Word",
    description:
      "We walk with you to His table — Scripture matched to your season, daily prompts, and gentle guidance for where you actually are. Not a blank page, but a companion for the journey.",
  },
  {
    number: "3",
    title: "Let His Peace Shape Your Days",
    description:
      "As you sit with Him, His peace settles the heart — and the rest follows. Your plans, your habits, your ordinary days, lived from a place of rest instead of striving.",
  },
];

const sitWithJesusFeatures = [
  {
    title: "Season-Tuned Devotionals",
    description:
      "Short, soul-nourishing readings written for the season you're in — not a one-size-fits-all checklist.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Sacred Stillness",
    description:
      "Gentle prompts that draw you into Scripture and prayer — making space to sit at His feet before you step into your day.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

const walkFeatures = [
  {
    title: "Guided Journal",
    description:
      "Thoughtful prompts rooted in Scripture help you process your season and grow with gentle guidance.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Faithful Planner",
    description:
      "Organize your weeks with intention — balancing calling, rest, and relationships with Christ at the center.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Prayer & Goals",
    description:
      "Record prayer requests, write goals, and plan family responsibilities — faith shaping everyday life.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
];

const communityPillars = [
  {
    title: "Prayer",
    description:
      "Intercession rooted in real life — the joys, questions, and longings of your shared season.",
  },
  {
    title: "Encouragement",
    description:
      "Sisters who understand where you are and speak life over your journey with Christ.",
  },
  {
    title: "Wisdom",
    description:
      "Insight, Scripture, and gentle accountability from women walking similar paths.",
  },
  {
    title: "Testimony",
    description:
      "Witness what God is doing and celebrate His faithfulness together around the table.",
  },
];

const plans = [
  {
    name: "Monthly",
    price: "$12",
    period: "per month",
    description:
      "Begin your season with full access to every personalized resource and community feature.",
    features: [
      "Personalized season assessment",
      "Custom faith journey path",
      "Daily season-tuned devotionals",
      "Guided journal & weekly planner",
      "Community matched by season",
    ],
    highlighted: false,
  },
  {
    name: "Annual",
    price: "$99",
    period: "per year",
    description:
      "Commit to a full year — two months free and deeper seasonal resources.",
    features: [
      "Everything in Monthly",
      "Seasonal transition guides",
      "Exclusive member gatherings",
      "Annual reflection workbook",
    ],
    highlighted: true,
  },
];

function JoinButton({
  className = "",
  size = "lg",
  variant = "primary",
  label = "Take Your Seat",
  href = "#membership",
}: {
  className?: string;
  size?: "lg" | "sm";
  variant?: "primary" | "olive";
  label?: string;
  href?: string;
}) {
  const sizeClasses = size === "lg" ? "px-8 py-3.5 text-base" : "px-6 py-2.5 text-sm";
  const colorClasses =
    variant === "olive"
      ? "bg-olive text-warm-white hover:bg-olive/90"
      : "bg-terracotta text-warm-white hover:bg-deep-brown";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full font-medium shadow-md transition-all duration-300 hover:shadow-lg ${sizeClasses} ${colorClasses} ${className}`}
    >
      {label}
    </a>
  );
}

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-blush/50 bg-warm-white p-6 shadow-sm transition-all duration-300 hover:border-rose/60 hover:shadow-md">
      <div className="mb-4 inline-flex rounded-xl bg-blush/40 p-3 text-terracotta transition-colors group-hover:bg-blush/60">
        {icon}
      </div>
      <h3 className="font-serif text-2xl font-semibold text-deep-brown">{title}</h3>
      <p className="mt-3 leading-relaxed text-deep-brown/70">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-cream text-deep-brown">
      <header className="sticky top-0 z-50 border-b border-blush/40 bg-warm-white/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <span className="font-serif text-2xl font-semibold tracking-wide text-deep-brown">
              At His Table
            </span>
            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] text-deep-brown/45">
              For everything there is a season
            </p>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-deep-brown/70 lg:flex">
            <a href="#vision" className="transition-colors hover:text-terracotta">Vision</a>
            <a href="#every-season" className="transition-colors hover:text-terracotta">Every Season</a>
            <a href="#martha" className="transition-colors hover:text-terracotta">Martha</a>
            <a href="#discover" className="transition-colors hover:text-terracotta">Your Journey</a>
            <a href="#community" className="transition-colors hover:text-terracotta">Community</a>
          </div>
          <JoinButton size="sm" />
        </nav>
      </header>

      {/* 1. Ecclesiastes 3 — Scripture & vision */}
      <section id="vision" className="relative overflow-hidden px-6 pt-20 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blush/30 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-rose/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="text-center lg:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage">Ecclesiastes 3</p>
            <h1 className="mt-4 font-serif text-[2.5rem] font-semibold leading-tight text-[#26215C] sm:text-[3.35rem] lg:text-[4.15rem]">
              Life moves in seasons.
            </h1>
            <p className="mt-4 max-w-xl font-serif text-xl leading-relaxed text-deep-brown/75 sm:text-[1.35rem] lg:mx-0">
              &ldquo;To every thing there is a season, and a time to every purpose under the
              heaven.&rdquo;
              <span className="mt-2 block text-base font-sans font-medium not-italic text-deep-brown/50">
                — Ecclesiastes 3:1
              </span>
            </p>
            <h2 className="mt-6 font-serif text-2xl font-semibold leading-snug text-terracotta sm:text-3xl">
              Every season has a seat at His table.
            </h2>

            <div className="mx-auto mt-8 max-w-xl lg:mx-0">
              <SeasonMoments />
            </div>

            <p className="mx-auto mt-8 max-w-xl text-xl leading-relaxed text-deep-brown/70 lg:mx-0">
              Wherever your season finds you, Christ meets you there. God works
              differently in different seasons — and faith is lived in the
              everyday, not only on the mountaintop.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#every-season"
                className="inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-3.5 text-base font-medium text-warm-white shadow-md transition-all hover:bg-deep-brown hover:shadow-lg"
              >
                See yourself here
              </a>
              <a
                href="#martha"
                className="inline-flex items-center justify-center rounded-full border border-terracotta/30 px-8 py-3.5 text-base font-medium text-terracotta transition-colors hover:border-terracotta hover:bg-terracotta/5"
              >
                Read Martha&apos;s story
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Empathy — full seasons */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-deep-brown/70">
            Some seasons are full. The early mornings and the lost sleep. The doctor visits and
            the demanding job. The unexpected bill, the child who needs you, the to-do list that
            never ends. You love the Lord — but the days are loud, and quiet time with Him keeps
            slipping to tomorrow.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-deep-brown/70">
            We understand — we&apos;ve all been there, and felt the frustration. But time with God
            shouldn&apos;t be one more thing you&apos;re failing to get to. At His Table meets you
            in the few minutes you have and ushers you into His presence — bringing His Word to
            your season, so you can lay your burdens down instead of carrying them alone.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-blush/40 bg-warm-white px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage">
              How At His Table Works
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-snug text-deep-brown sm:text-4xl">
              Bring Your Season to His Table
            </h2>
            <blockquote className="mx-auto mt-6 max-w-2xl font-serif text-lg italic leading-relaxed text-terracotta sm:text-xl">
              &ldquo;Casting all your care upon him; for he careth for you.&rdquo;
              <footer className="mt-2 text-sm font-sans font-medium not-italic text-deep-brown/50">
                — 1 Peter 5:7
              </footer>
            </blockquote>
            <p className="mt-6 text-lg leading-relaxed text-deep-brown/70">
              Every season brings something to carry — the full hands of one day, the grief of
              another. Martha learned it isn&apos;t ours to carry alone. When we bring our season
              to Jesus, He meets us there — and we&apos;ll walk with you, every step.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {howItWorksSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-blush/50 bg-cream/50 p-6 text-center shadow-sm md:text-left"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/10 font-serif text-lg font-semibold text-terracotta md:mx-0">
                  {step.number}
                </div>
                <h3 className="font-serif text-xl font-semibold text-deep-brown sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-deep-brown/70">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="font-serif text-xl leading-relaxed text-deep-brown sm:text-2xl">
              Wherever this season finds you, there&apos;s a seat saved for you at His table.
            </p>
            <div className="mt-8">
              <JoinButton />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Every season — visual band of women */}
      <section id="every-season" className="relative overflow-hidden border-y border-blush/40 bg-warm-white px-6 pb-16">
        <SectionBackground />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage">Every Season</p>
            <h2 className="font-serif text-3xl font-semibold leading-snug text-deep-brown sm:text-4xl">
              Every woman is in a different season. Christ meets women in every season.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-deep-brown/70">
              Transformation happens through presence, intentionality, and community —
              not performance. You should see yourself in this story.
            </p>
          </div>

          <div className="mt-10">
            <EverySeasonVisual />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {audiences.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-blush/60 bg-cream px-5 py-2.5 text-sm font-medium text-deep-brown/80"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Martha — origin story */}
      <section id="martha" className="px-6 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage">
            Why At His Table Exists
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-snug text-deep-brown sm:text-4xl">
            Martha learned that sitting at Jesus&apos; feet wasn&apos;t reserved
            for easy seasons.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-deep-brown/70">
            At His Table began with Martha — a woman who discovered that
            presence with Christ isn&apos;t a luxury for when life slows down.
            It is the foundation for every season. Her story is the reason this
            table exists — and every woman who follows finds her own path through
            it.
          </p>
          <blockquote className="mx-auto mt-8 max-w-2xl border-l-2 border-gold pl-6 text-left font-serif text-xl italic leading-relaxed text-terracotta sm:text-2xl">
            &ldquo;Martha, Martha, you are worried and upset about many things,
            but few things are needed — or indeed only one.&rdquo;
            <footer className="mt-3 text-sm font-sans font-medium not-italic text-deep-brown/50">
              — Luke 10:41–42
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Journey arc overview */}
      <section className="border-y border-blush/40 bg-warm-white px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <JourneyPhotoStrip />
        </div>
      </section>

      {/* 4. Discover Your Season — Assessment */}
      <section id="discover" className="border-y border-blush/40 bg-warm-white px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
            <PhotoDirection
              brief={journeyPhotos.discover}
              className="shadow-lg lg:order-2"
              sizes="(max-width: 1024px) 92vw, 520px"
            />
            <div className="lg:order-1">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-terracotta">
                Assessment
              </p>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage">
                Discover Your Season
              </p>
              <h2 className="font-serif text-3xl font-semibold leading-snug text-deep-brown sm:text-4xl">
                What does your season look like when you&apos;re walking with Jesus through it?
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-deep-brown/70">
                Every woman begins here — thoughtfully naming where you are in faith
                and life. The assessment listens, then opens a path forward shaped
                for your season.
              </p>
              <div className="mt-8">
                <JoinButton variant="olive" label="Start Your Season Assessment" href="#membership" />
              </div>
            </div>
          </div>

          <div id="taste" className="mx-auto mt-10 max-w-2xl">
            <TasteOfPersonalization />
          </div>

          <div className="mt-10">
            <AssessmentGrid />
          </div>
        </div>
      </section>

      {/* 5. Sit With Jesus */}
      <JourneySection
        id="sit-with-jesus"
        eyebrow="Sit With Jesus"
        title="Before you do anything, be with Him."
        description="At His Table leads with presence, not content. A warm devotional moment — Bible open, quiet stillness, and time with Jesus before anything else is asked of you."
        brief={journeyPhotos.sitWithJesus}
        imageFirst
        className="border-t border-blush/40"
        below={
          <div className="grid gap-6 sm:grid-cols-2">
            {sitWithJesusFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        }
      />

      {/* 6. Walk With Intention */}
      <JourneySection
        id="walk"
        eyebrow="Walk With Intention"
        title="Faith shaping everyday life."
        description="With journal, Bible, and planner open, she shapes her week with intention — writing goals, recording prayer requests, and letting faith guide the everyday."
        brief={journeyPhotos.walk}
        className="border-t border-blush/40 bg-warm-white"
        below={
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {walkFeatures.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        }
      />

      {/* 7. Gather Around the Table */}
      <JourneySection
        id="community"
        eyebrow="Gather Around the Table"
        title="You weren't meant to walk this season alone."
        description="A small group gathered for prayer, Bible study, or coffee — sisters matched by season, walking together with encouragement, wisdom, and gentle accountability."
        brief={journeyPhotos.gather}
        imageFirst
        below={
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {communityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-blush/50 bg-warm-white p-6 text-center shadow-sm"
              >
                <h3 className="font-serif text-xl font-semibold text-terracotta">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-deep-brown/70">{pillar.description}</p>
              </div>
            ))}
          </div>
        }
      />

      {/* 8. Share Your Story */}
      <JourneySection
        id="share"
        eyebrow="Share Your Story"
        title="Your story strengthens others."
        description="Every season carries a testimony. In her journal, she writes what God is doing — reflections, gratitude, and story — strengthening faith for everyone at the table."
        brief={journeyPhotos.share}
        className="border-t border-blush/40 bg-warm-white"
      />

      {/* 9. Membership */}
      <section id="membership" className="border-t border-blush/40 px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage">Take Your Seat</p>
            <h2 className="font-serif text-3xl font-semibold text-deep-brown sm:text-4xl">
              Your seat is waiting.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-deep-brown/70">
              However you come — planting, waiting, mourning, or beginning again —
              there is a place for you here. The assessment, devotionals, planner,
              community, and testimony are our response to a God who meets you in
              every season.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-terracotta bg-warm-white shadow-lg ring-1 ring-terracotta/20"
                    : "border-blush/50 bg-warm-white shadow-sm"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-terracotta px-4 py-1 text-xs font-medium uppercase tracking-wider text-warm-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-serif text-2xl font-semibold text-deep-brown">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-serif text-5xl font-semibold text-deep-brown">{plan.price}</span>
                  <span className="text-deep-brown/50">{plan.period}</span>
                </div>
                <p className="mt-4 text-deep-brown/70">{plan.description}</p>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-deep-brown/80">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <JoinButton
                  className={`mt-8 w-full ${
                    plan.highlighted
                      ? ""
                      : "!bg-transparent !text-terracotta ring-1 ring-terracotta/40 hover:!bg-terracotta hover:!text-warm-white"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-blush/40 bg-warm-white px-6 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage">Ecclesiastes 3:1</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-snug text-deep-brown sm:text-4xl">
            For everything there is a season, and a time for every matter under heaven.
          </h2>
          <p className="mt-6 font-serif text-xl text-terracotta">
            Every season has a seat at His table.
          </p>
          <div className="mt-8">
            <JoinButton />
          </div>
        </div>
      </section>

      <footer className="border-t border-blush/40 bg-cream px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <span className="font-serif text-xl font-semibold text-deep-brown">At His Table</span>
            <p className="text-[10px] uppercase tracking-[0.2em] text-deep-brown/40">
              For everything there is a season
            </p>
          </div>
          <p className="text-sm text-deep-brown/50">
            &copy; {new Date().getFullYear()} At His Table. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
