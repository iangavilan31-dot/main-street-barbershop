import { useI18n } from "../lib/i18n";
import { Star, Swallow } from "./Ornaments";

export default function Marquee() {
  const { t } = useI18n();
  const items = t("marqueeWords").split(" · ");
  return (
    <section className="relative w-full overflow-hidden border-y border-bone/10 bg-ink py-5">
      <div className="marquee-track animate-marquee">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-7 px-7 whitespace-nowrap">
            <span className="font-display italic text-[clamp(1.2rem,2vw,1.7rem)] text-bone/85 leading-none">
              {it}
            </span>
            {i % 3 === 0 ? (
              <Swallow className="w-7 text-bone/70 shrink-0" />
            ) : (
              <Star className="w-2.5 h-2.5 text-bone/70 shrink-0" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
