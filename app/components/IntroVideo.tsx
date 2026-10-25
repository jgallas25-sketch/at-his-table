/* eslint-disable @next/next/no-img-element */

// The introduction episode ("Your seat is here"). When the finished video is ready,
// put it at public/videos/welcome.mp4 (and captions at public/videos/welcome.vtt)
// and set VIDEO_READY to true. Until then, the poster shows "coming soon".
const VIDEO_READY = false;

export default function IntroVideo() {
  return (
    <figure className="intro-video" style={{ margin: 0 }}>
      {VIDEO_READY ? (
        <video controls preload="metadata" poster="/images/hero.jpg" playsInline>
          <source src="/videos/welcome.mp4" type="video/mp4" />
          <track kind="captions" src="/videos/welcome.vtt" srcLang="en" label="English" default />
        </video>
      ) : (
        <div className="player" role="img" aria-label="Emily and Heather at the kitchen table. The introduction video is coming soon.">
          <img src="/images/hero.jpg" alt="" />
          <div className="player-badge">Video coming soon · Read along below</div>
        </div>
      )}
      <figcaption className="small" style={{ marginTop: 10, textAlign: "center" }}>
        The Series · Introduction — &ldquo;Your seat is here&rdquo; with Emily and Heather
      </figcaption>
    </figure>
  );
}
