import { REVIEWS } from "../lib/data";
import { useI18n } from "../lib/i18n";
import { Star } from "./Ornaments";

export default function Reviews() {
  const { t } = useI18n();
  return (
    <section className="relative w-full bg-bone-100 text-ink py-28 lg:py-40 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-widestest text-ink/55">
              {t("reviewsEyebrow")}
            </div>
            <h2 className="mt-4 font-display font-medium text-ink text-[clamp(1.8rem,3.2vw,2.8rem)] leading-[1.1] tracking-tight reveal max-w-xl">
              {t("reviewsHeading1")}{" "}
              <span className="italic font-normal" style={{ fontFamily: '"Instrument Serif", serif' }}>
                {t("reviewsHeading2")}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="flex items-baseline gap-3 reveal" data-delay="200">
              <div className="font-display text-[42px] font-medium leading-none">5.0</div>
              <div className="flex flex-col">
                <div className="flex gap-0.5 text-ink">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3" />
                  ))}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widestest text-ink/55 mt-1.5">
                  {t("reviewsCount")}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {REVIEWS.map((r, i) => (
            <figure
              key={i}
              className="bg-white border border-ink/12 p-8 lg:p-9 reveal"
              data-delay={i * 100}
            >
              <blockquote className="text-ink text-[15px] lg:text-[16px] leading-[1.6] text-balance" style={{ fontFamily: '"Instrument Serif", serif' }}>
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-7 flex items-center justify-between font-mono text-[10px] uppercase tracking-widestest text-ink/55">
                <span>{r.name}</span>
                <span className="opacity-65">{r.where}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
