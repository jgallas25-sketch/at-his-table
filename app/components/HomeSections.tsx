import Image from "next/image";
import { editorialImages } from "../lib/images";

const seasonMoments = [
  "A time to mourn",
  "A time to laugh",
  "A time to plant",
  "A time to harvest",
  "A time to wait",
  "A time to move",
  "A time to begin again",
];

export function SeasonMoments() {
  return (
    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
      {seasonMoments.map((moment) => (
        <li
          key={moment}
          className="font-serif text-base italic text-deep-brown/65 sm:text-lg"
        >
          {moment}
        </li>
      ))}
    </ul>
  );
}

const assessmentAreas = [
  { label: "My Family", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0z" },
  { label: "My Work & Calling", icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m0 0A2.18 2.18 0 0012 6.226V4.082A2.18 2.18 0 0010.5 2.25h-3A2.18 2.18 0 005.318 4.082v2.144m0 0A2.18 2.18 0 003.75 8.706v3.783a2.18 2.18 0 00.75 1.661m16.5 0h-16.5" },
  { label: "My Challenges", icon: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" },
  { label: "My Health", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
  { label: "My Finances", icon: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" },
  { label: "My Faith Journey", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { label: "My Prayer Needs", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" },
  { label: "My Season of Life", icon: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" },
];

export function AssessmentGrid() {
  return (
    <div className="rounded-2xl border border-blush/50 bg-warm-white p-6 shadow-sm sm:p-8">
      <h3 className="text-center font-serif text-xl font-semibold text-deep-brown sm:text-2xl">
        It starts with you
      </h3>
      <p className="mt-2 text-center text-sm text-deep-brown/50">
        Your season assessment listens to every area of your life
      </p>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
        {assessmentAreas.map((area) => (
          <div
            key={area.label}
            className="flex flex-col items-center rounded-xl border border-blush/40 bg-cream/50 px-3 py-4 text-center"
          >
            <svg
              className="mb-2 h-6 w-6 text-terracotta/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.25}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d={area.icon} />
            </svg>
            <span className="text-xs font-medium leading-tight text-deep-brown/80">
              {area.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectionBackground() {
  const { everySeasonTexture } = editorialImages;

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Image
        src={everySeasonTexture.src}
        alt=""
        fill
        className="object-cover opacity-[0.08]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-warm-white/85 via-warm-white/70 to-warm-white/90" />
    </div>
  );
}
