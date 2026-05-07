import { Flourish } from "./Ornaments";
import { useI18n } from "../lib/i18n";

const BG =
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=2400&q=60&auto=format&fit=crop";

export default function Story() {
  const { t } = useI18n();

  const lines = [
    t("storyHeadingPart1"),
    t("storyShowingUp"),
    t("storyHeadingPart2"),
  ];

  return (
    <section id="story" className="story-scene relative w-full overflow-hidden">
      <div className="story-bg" aria-hidden="true">
        <img src={BG} alt="" className="story-bg-img" loading="lazy" decoding="async" />
      </div>
      <div className="story-veil" aria-hidden="true" />

      <div className="relative z-10 max-w-[940px] mx-auto px-6 lg:px-10 py-44 lg:py-64 text-center">
        <div className="font-mono text-[11px] uppercase tracking-widestest text-bone/40 reveal">
          {t("storyEyebrow")}
        </div>

        {/* Line-by-line cinematic reveal — no italic, clean display weight */}
        <h2 className="story-h reveal mt-10 text-bone-100 leading-[1.12] tracking-[-0.01em] text-[clamp(2.4rem,5.8vw,5.4rem)]">
          {lines.map((line, i) => (
            <span key={i} className="story-line-mask">
              <span className="story-line-inner font-display font-extralight" style={{ transitionDelay: `${i * 140}ms` }}>
                {line}
              </span>
            </span>
          ))}
        </h2>

        <Flourish
          className="story-flourish reveal mx-auto mt-16 w-[120px] text-bone/18"
          data-delay="480"
        />

        <div
          className="reveal mt-20 flex items-start justify-center gap-16 sm:gap-24 lg:gap-32"
          data-delay="620"
        >
          {[
            { n: "21", l: "Years" },
            { n: "120k", l: "Cuts" },
            { n: "04", l: "Chairs" },
          ].map(({ n, l }) => (
            <div key={l} className="flex flex-col items-center gap-3">
              <span className="font-display font-extralight text-bone-100 text-[clamp(2.6rem,4.8vw,4.4rem)] leading-none tracking-tight">
                {n}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widestest text-bone/32">
                {l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
