import { useI18n } from "../lib/i18n";
import { SHOP } from "../lib/data";

const LEFT_TILES = [
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=80&auto=format&fit=crop&crop=top", caption: "Skin fade · Tuesday", cls: "aspect-[4/3]" },
  { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&q=80&auto=format&fit=crop", caption: "Eddie's chair · 2024", cls: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?w=1600&q=80&auto=format&fit=crop", caption: "Hot towel · ritual", cls: "aspect-[4/3]" },
  { src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1600&q=80&auto=format&fit=crop", caption: "Beard sculpt · Marco", cls: "aspect-[1/1]" },
];

const RIGHT_TILES = [
  { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1600&q=80&auto=format&fit=crop", caption: "The floor at 4pm", cls: "aspect-[3/4]" },
  { src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=1600&q=80&auto=format&fit=crop", caption: "Classic taper · Luis", cls: "aspect-[4/3]" },
  { src: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=1600&q=80&auto=format&fit=crop", caption: "Father & son · Sat", cls: "aspect-[1/1]" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80&auto=format&fit=crop", caption: "Walk-in · 6:42pm", cls: "aspect-[4/3]" },
];

function Tile({ src, caption, cls }: { src: string; caption: string; cls: string }) {
  return (
    <div className={`editorial-tile group relative overflow-hidden ${cls}`}>
      <img src={src} alt={caption} className="editorial-img" loading="lazy" decoding="async" />
      <div className="editorial-caption">
        <span className="font-mono text-[9px] uppercase tracking-widestest text-bone/70">{caption}</span>
      </div>
    </div>
  );
}

export default function Gallery() {
  const { t } = useI18n();
  return (
    <section id="gallery" className="relative w-full bg-ink py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1420px] mx-auto px-4 lg:px-5">
        <div className="flex items-baseline justify-between mb-4 px-1">
          <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/38 reveal">
            {t("galleryEyebrow")}
          </div>
          <a
            href={SHOP.instagram}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] uppercase tracking-widestest text-bone/38 hover:text-bone/65 transition reveal"
            data-delay="80"
          >
            {SHOP.instagramHandle} ↗
          </a>
        </div>

        <div className="flex gap-[3px]">
          <div className="flex-[1.45] flex flex-col gap-[3px]">
            {LEFT_TILES.map((tile, i) => <Tile key={i} {...tile} />)}
          </div>
          <div className="flex-1 flex flex-col gap-[3px]">
            {RIGHT_TILES.map((tile, i) => <Tile key={i} {...tile} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
