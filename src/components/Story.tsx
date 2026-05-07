import { Flourish } from "./Ornaments";
import { useI18n } from "../lib/i18n";

const BG =
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=2400&q=60&auto=format&fit=crop";

export default function Story() {
  const { t } = useI18n();

  const headingWords = `${t("storyHeadingPart1")} ${t("storyShowingUp")} ${t("storyHeadingPart2")}`
    .split(" ")
    .filter(Boolean);

  return (
    <section id="story" className="story-scene relative w-full overflow-hidden">
      <div className="story-bg" aria-hidden="true">
        <img src={BG} alt="" className="story-bg-img" loading="lazy" decoding="async" />
      </div>
      <div className="story-veil" aria-hidden="true" />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-10 py-44 lg:py-64 text-center">
        <div className="font-mono text-[11px] uppercase tracking-widestest text-bone/45 reveal">
          {t("storyEyebrow")}
        </div>

        <h2 className="story-h reveal mt-10 font-editorial italic text-bone-100 leading-[1.05] tracking-tight text-[clamp(2.8rem,6.5vw,5.8rem)]">
          {headingWords.map((w, i) => (
            <span key={i} className="story-word inline-block">
              {w}{i < headingWords.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>

        <Flourish
          className="story-flourish reveal mx-auto mt-16 w-[130px] text-bone/20"
          data-delay="350"
        />

        <div
          className="reveal mt-20 flex items-start justify-center gap-16 sm:gap-24 lg:gap-32"
          data-delay="600"
        >
          {[
            { n: "21", l: "Years" },
            { n: "120k", l: "Cuts" },
            { n: "04", l: "Chairs" },
          ].map(({ n, l }) => (
            <div key={l} className="flex flex-col items-center gap-3">
              <span className="font-editorial text-bone-100 text-[clamp(2.8rem,5vw,4.8rem)] font-light leading-none tracking-tight">
                {n}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widestest text-bone/35">
                {l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
