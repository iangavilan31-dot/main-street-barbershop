import { useI18n } from "../lib/i18n";
import { Star, Swallow } from "./Ornaments";

export default function Marquee() {
  const { t } = useI18n();
  const items = t("marqueeWords").split(" · ");
  return (
    <section className="relative w-full overflow-hidden border-y border-bone/10 bg-ink py-7">
      <div className="marquee-track animate-marquee">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-10 px-10 whitespace-nowrap">
            <span className="font-display italic text-[clamp(2.6rem,5vw,4.4rem)] text-bone leading-none">
              {it}
            </span>
            {i % 3 === 0 ? (
              <Swallow className="w-12 text-bone shrink-0" />
            ) : (
              <Star className="w-3 h-3 text-bone shrink-0" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
