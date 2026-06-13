"use client";

import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";
import { journeyArc, journeyPhotos, usingPlaceholderImages } from "../lib/photography";
import type { PhotoBrief } from "../lib/photography";

interface PhotoDirectionProps {
  brief: PhotoBrief;
  aspectRatio?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  showDirection?: boolean;
  showStep?: boolean;
  showPlaceholderLabel?: boolean;
}

function PlaceholderLabel({ brief }: { brief: PhotoBrief }) {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center p-4">
      <div className="max-w-[90%] rounded-xl border border-deep-brown/20 bg-warm-white/95 px-4 py-3 text-center shadow-lg backdrop-blur-sm">
        <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-sage">
          {brief.label}
        </p>
        <p className="mt-2 font-serif text-sm font-semibold leading-snug text-deep-brown">
          {brief.concept}
        </p>
        <p className="mt-3 font-mono text-[11px] font-semibold leading-relaxed text-terracotta sm:text-xs">
          Replace with /public/images/{brief.file}
        </p>
      </div>
    </div>
  );
}

export function PhotoDirection({
  brief,
  aspectRatio,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  showDirection = false,
  showStep = false,
  showPlaceholderLabel = usingPlaceholderImages,
}: PhotoDirectionProps) {
  const [imageError, setImageError] = useState(false);
  const ratio = aspectRatio ?? brief.aspectRatio ?? "aspect-[4/5]";
  const showLabel = showPlaceholderLabel || imageError;

  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border border-blush/50 bg-blush/30 shadow-sm ring-1 ring-blush/20 ${ratio} ${className}`}
    >
      {showStep && brief.step && !showLabel && (
        <div className="absolute left-3 top-3 z-10 rounded-full bg-warm-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-terracotta shadow-sm backdrop-blur-sm">
          {brief.step}
        </div>
      )}

      {!imageError && (
        <Image
          src={brief.src}
          alt={brief.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          style={{ objectPosition: brief.objectPosition ?? "center center" }}
          onError={() => setImageError(true)}
        />
      )}

      {!showLabel && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-deep-brown/20 to-transparent" />
      )}

      {showLabel && <PlaceholderLabel brief={brief} />}

      {showDirection && !showLabel && (
        <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-deep-brown/80 via-deep-brown/55 to-transparent p-5 pt-12 text-warm-white sm:p-6 sm:pt-14">
          <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-warm-white/70">
            Photo direction · {brief.label}
          </p>
          <p className="mt-1.5 font-serif text-base font-semibold leading-snug sm:text-lg">
            {brief.concept}
          </p>
        </figcaption>
      )}
    </figure>
  );
}

export function EverySeasonVisual() {
  const brief = journeyPhotos.everySeason;

  return (
    <div>
      <p className="mb-6 text-center text-sm font-medium uppercase tracking-[0.2em] text-sage">
        Diverse women · different seasons · one table
      </p>
      <PhotoDirection
        brief={brief}
        aspectRatio="aspect-[16/9] sm:aspect-[21/9]"
        className="shadow-lg"
        sizes="(max-width: 1280px) 100vw, 1200px"
      />
    </div>
  );
}

export function JourneyPhotoStrip() {
  return (
    <div>
      <p className="mb-2 text-center text-sm font-medium uppercase tracking-[0.2em] text-sage">
        Your journey at His table
      </p>
      <p className="mb-8 text-center font-serif text-lg text-deep-brown/70">
        Assessment → Devotion → Planning → Community → Testimony
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {journeyArc.map((brief, index) => (
          <div key={brief.id} className="relative">
            {index < journeyArc.length - 1 && (
              <div
                className="absolute -right-2 top-1/2 z-10 hidden h-px w-4 bg-terracotta/30 lg:block"
                aria-hidden="true"
              />
            )}
            <PhotoDirection
              brief={brief}
              aspectRatio="aspect-[3/4]"
              sizes="(max-width: 640px) 45vw, 220px"
              showStep={!usingPlaceholderImages}
            />
            <p className="mt-3 text-center font-serif text-sm font-semibold text-deep-brown">
              {brief.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function JourneySection({
  id,
  eyebrow,
  title,
  description,
  brief,
  children,
  imageFirst = false,
  className = "",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  brief: PhotoBrief;
  children?: ReactNode;
  imageFirst?: boolean;
  className?: string;
}) {
  const copy = (
    <div>
      {brief.step && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-terracotta">
          {brief.step}
        </p>
      )}
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sage">{eyebrow}</p>
      <h2 className="font-serif text-3xl font-semibold leading-snug text-deep-brown sm:text-4xl">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-relaxed text-deep-brown/70">{description}</p>
      {children && <div className="mt-8">{children}</div>}
    </div>
  );

  const photo = (
    <PhotoDirection
      brief={brief}
      className="shadow-lg"
      sizes="(max-width: 1024px) 92vw, 520px"
    />
  );

  return (
    <section id={id} className={`px-6 py-24 ${className}`}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {imageFirst ? (
          <>
            {photo}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {photo}
          </>
        )}
      </div>
    </section>
  );
}

export function HeroVisual() {
  return (
    <PhotoDirection
      brief={journeyPhotos.hero}
      priority
      className="shadow-lg"
      sizes="(max-width: 1024px) 92vw, 560px"
    />
  );
}
