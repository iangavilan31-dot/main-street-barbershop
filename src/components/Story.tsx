import { useI18n } from "../lib/i18n";
import { Flourish } from "./Ornaments";

/**
 * Story — quiet, premium, animated.
 * No photo, no body wall. Just an eyebrow, a word-by-word heading,
 * a thin flourish, one short line, and three small inline numbers.
 */
export default function Story() {
  const { t } = useI18n();

  // Build the headline as discrete words for per-word stagger
  const headingWords = `${t("storyHeadingPart1")} ${t("storyShowingUp")} ${t("storyHeadingPart2")}`
    .split(" ")
    .filter(Boolean);

  return (
    <section
      id="story"
      className="relative w-full bg-ink py-32 lg:py-44 overflow-hidden"
    >
      <div className="max-w-[920px] mx-auto px-6 lg:px-10 text-center">
        <div className="font-mono text-[11px] uppercase tracking-widestest text-bone/55 reveal">
          {t("storyEyebrow")}
        </div>

        <h2 className="story-h reveal mt-10 font-display font-light text-bone-100 leading-[1.18] tracking-tight text-[clamp(1.5rem,3.0vw,2.4rem)]">
          {headingWords.map((w, i) => (
            <span key={i} className="story-word inline-block">
              {w}
              {i < headingWords.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>

        <Flourish className="story-flourish reveal mx-auto mt-12 w-[180px] text-bone/35" data-delay="350" />

        <p className="story-line reveal mt-10 text-bone/65 text-[14px] leading-[1.7] max-w-[36ch] mx-auto" data-delay="500">
          One rule, taped to the mirror in 2004:
          treat the chair like a sermon, not a shift.
        </p>

        <div
          className="story-stats reveal mt-16 flex items-baseline justify-center gap-8 sm:gap-12 text-bone/50 font-mono text-[10px] uppercase tracking-widestest"
          data-delay="700"
        >
          <span className="flex flex-col items-center gap-1.5">
            <span className="story-stat-num font-display text-bone-100 text-[26px] sm:text-[30px] font-light leading-none tracking-tight">21</span>
            <span>Years</span>
          </span>
          <span className="text-bone/20 text-[18px] -mt-1">·</span>
          <span className="flex flex-col items-center gap-1.5">
            <span className="story-stat-num font-display text-bone-100 text-[26px] sm:text-[30px] font-light leading-none tracking-tight">120k</span>
            <span>Cuts</span>
          </span>
          <span className="text-bone/20 text-[18px] -mt-1">·</span>
          <span className="flex flex-col items-center gap-1.5">
            <span className="story-stat-num font-display text-bone-100 text-[26px] sm:text-[30px] font-light leading-none tracking-tight">04</span>
            <span>Chairs</span>
          </span>
        </div>
      </div>
    </section>
  );
}
