import { useI18n } from "../lib/i18n";

/**
 * Story — kept deliberately simple.
 * One large image of the shop, one font, About-style copy.
 * Drop your own image at /public/storefront.jpg to replace.
 */
export default function Story() {
  const { t } = useI18n();
  return (
    <section id="story" className="relative w-full bg-ink py-28 lg:py-40 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="font-mono text-[11px] uppercase tracking-widestest text-bone/55 mb-12 reveal">
          {t("storyEyebrow")}
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Image */}
          <div className="lg:col-span-7 reveal">
            <div className="relative aspect-[4/3] overflow-hidden bg-ink-700">
              <img
                src="/storefront.jpg"
                alt="Main Street Barbershop, Bergenfield NJ"
                className="w-full h-full object-cover grayscale contrast-[1.05]"
              />
            </div>
          </div>

          {/* About copy — one font, no italic accent */}
          <div className="lg:col-span-5 lg:pt-8">
            <h2 className="font-display font-medium text-bone-100 text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.15] tracking-tight reveal">
              {t("storyHeadingPart1")} {t("storyShowingUp")} {t("storyHeadingPart2")}
            </h2>

            <div className="mt-7 space-y-5 reveal" data-delay="120">
              <p className="text-bone/72 text-[14px] leading-[1.75]">
                {t("storyP1")}
              </p>
              <p className="text-bone/72 text-[14px] leading-[1.75]">
                {t("storyP2")}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 reveal" data-delay="240">
              {[
                ["21", "Years on Main"],
                ["120k", "Cuts delivered"],
                ["04", "Master barbers"],
                ["5.0★", "700+ reviews"],
              ].map(([num, label]) => (
                <div key={label} className="border-t border-bone/15 pt-3">
                  <div className="font-display text-bone-100 text-[28px] font-medium leading-none">
                    {num}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/50 mt-2">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
