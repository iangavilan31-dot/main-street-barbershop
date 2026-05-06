import { useEffect, useState } from "react";
import { SHOP } from "../lib/data";
import { useI18n } from "../lib/i18n";

const TILES = [
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1800&q=85&auto=format&fit=crop&crop=top", caption: "Skin fade · Tuesday" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1800&q=85&auto=format&fit=crop", caption: "Eddie's chair · 2024" },
  { src: "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=1800&q=85&auto=format&fit=crop", caption: "Hot towel · ritual" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1800&q=85&auto=format&fit=crop", caption: "Beard sculpt · Marco" },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1800&q=85&auto=format&fit=crop", caption: "The floor at 4pm" },
  { src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=1800&q=85&auto=format&fit=crop", caption: "Classic taper · Luis" },
  { src: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=1800&q=85&auto=format&fit=crop", caption: "Father & son · Sat" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1800&q=85&auto=format&fit=crop", caption: "Walk-in · 6:42pm" },
];

export default function Gallery() {
  const { t } = useI18n();
  const [idx, setIdx] = useState(0);
  const total = TILES.length;
  const next = () => setIdx((i) => (i + 1) % total);
  const prev = () => setIdx((i) => (i - 1 + total) % total);

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Touch swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart == null) return;
    const dx = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    setTouchStart(null);
  };

  // Preload neighbors so transitions feel instant
  useEffect(() => {
    [(idx + 1) % total, (idx - 1 + total) % total].forEach((i) => {
      const img = new Image();
      img.src = TILES[i].src;
    });
  }, [idx, total]);

  return (
    <section id="gallery" className="relative w-full bg-ink py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        {/* Header — centered "Our Work" with IG handle anchored bottom right */}
        <div className="relative text-center mb-14 lg:mb-16">
          <div className="font-mono text-[11px] uppercase tracking-widestest text-bone/55 reveal">
            {t("galleryEyebrow")}
          </div>
          <h2 className="mt-4 font-display font-light text-bone-100 text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.2] tracking-tight reveal" data-delay="80">
            Our work.
          </h2>
          <a
            href={SHOP.instagram}
            target="_blank"
            rel="noreferrer"
            className="gallery-handle reveal mt-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widestest text-bone/55 hover:text-bone underline-link"
            data-delay="160"
          >
            {SHOP.instagramHandle}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17 17 7M9 7h8v8" />
            </svg>
          </a>
        </div>

        {/* Carousel */}
        <div
          className="gallery-stage reveal"
          data-delay="200"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="gallery-arrow gallery-arrow-prev"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <div className="gallery-frame">
            {TILES.map((tile, i) => (
              <img
                key={i}
                src={tile.src}
                alt={tile.caption}
                className={`gallery-img ${i === idx ? "is-active" : ""}`}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            ))}
            <div className="gallery-meta">
              <span className="gallery-caption">{TILES[idx].caption}</span>
              <span className="gallery-counter">
                {String(idx + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="gallery-arrow gallery-arrow-next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        {/* Dots / thumbnails */}
        <div className="gallery-dots">
          {TILES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`gallery-dot ${i === idx ? "is-active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
