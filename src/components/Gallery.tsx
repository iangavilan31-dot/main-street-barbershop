import { SHOP } from "../lib/data";
import { useI18n } from "../lib/i18n";

const TILES = [
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=85&auto=format&fit=crop&crop=top", h: "tall", caption: "Skin fade · Tuesday" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1400&q=85&auto=format&fit=crop", h: "wide", caption: "Eddie's chair · 2024" },
  { src: "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=1200&q=85&auto=format&fit=crop", h: "tall", caption: "Hot towel · ritual" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=85&auto=format&fit=crop", h: "tall", caption: "Beard sculpt · Marco" },
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1400&q=85&auto=format&fit=crop", h: "wide", caption: "The floor at 4pm" },
  { src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=1200&q=85&auto=format&fit=crop", h: "tall", caption: "Classic taper · Luis" },
  { src: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=1200&q=85&auto=format&fit=crop", h: "tall", caption: "Father & son · Sat" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1400&q=85&auto=format&fit=crop", h: "wide", caption: "Walk-in · 6:42pm" },
];

export default function Gallery() {
  const { t } = useI18n();
  return (
    <section id="gallery" className="relative w-full bg-ink py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-12 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-widestest text-bone/65">
              {t("galleryEyebrow")}
            </div>
            <h2 className="mt-4 font-display font-medium text-bone-100 text-[clamp(1.25rem,1.9vw,1.7rem)] leading-[1.2] tracking-tight reveal max-w-xl">
              {t("galleryHeading1")}{" "}
              <span className="italic font-normal text-bone/85" style={{ fontFamily: '"Instrument Serif", serif' }}>
                {t("galleryHeading2")}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-bone/65 text-[13.5px] leading-[1.75] reveal" data-delay="200">
              {t("galleryBlurb")}
            </p>
            <a href={SHOP.instagram} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widestest text-bone hover:opacity-70 underline-link">
              {SHOP.instagramHandle}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] md:auto-rows-[180px] gap-3 lg:gap-4">
          {TILES.map((tile, i) => (
            <a
              key={i}
              href={SHOP.instagram}
              target="_blank"
              rel="noreferrer"
              className={`relative group overflow-hidden bg-ink-700 reveal ${
                tile.h === "tall" ? "row-span-2" : "row-span-1"
              } ${i === 1 ? "md:col-span-2" : ""} ${i === 4 ? "md:col-span-2" : ""}`}
              data-delay={i * 80}
            >
              <img
                src={tile.src}
                alt={tile.caption}
                className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-95 group-hover:opacity-100 transition"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widestest text-bone-100/95">
                  {tile.caption}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widestest text-bone/55">
                  0{i + 1}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
