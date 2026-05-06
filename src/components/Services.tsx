import { useRef } from "react";
import { SERVICES } from "../lib/data";
import { useI18n } from "../lib/i18n";

/**
 * Services menu — minimal cards levitating on tilted podiums with
 * smokey fog drifting underneath. Grainy charcoal stage backdrop.
 */
export default function Services() {
  const { t } = useI18n();
  const NAME_KEYS: Record<string, "s1" | "s2" | "s3" | "s4" | "s5" | "s6"> = {
    "01": "s1", "02": "s2", "03": "s3", "04": "s4", "05": "s5", "06": "s6",
  };

  return (
    <section id="services" className="menu-stage relative w-full text-bone py-24 lg:py-32 overflow-hidden">
      <div className="relative z-10 max-w-[1180px] mx-auto px-6 lg:px-10">
        {/* Header — minimal, single line */}
        <div className="text-center mb-20 lg:mb-24">
          <div className="font-mono text-[11px] uppercase tracking-widestest text-bone/55">
            {t("servicesEyebrow")}
          </div>
          <h2 className="mt-4 font-display font-light text-bone-100 text-[clamp(1.4rem,2.1vw,1.9rem)] leading-[1.2] tracking-tight reveal">
            {t("servicesHeading")}{t("servicesItalic")}
          </h2>
        </div>

        {/* Podium grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 lg:gap-x-14 lg:gap-y-24">
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.code}
              code={s.code}
              name={t(NAME_KEYS[s.code])}
              duration={s.duration}
              price={s.price}
              delay={i * 70}
            />
          ))}
        </div>

        {/* Footer CTA — quiet */}
        <div className="mt-24 text-center reveal">
          <a href="#visit" className="btn-primary">
            <span>{t("bookChairBtn")}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  code, name, duration, price, delay,
}: {
  code: string; name: string; duration: string; price: number; delay: number;
}) {
  const cardRef = useRef<HTMLElement>(null);

  // Subtle 3D tilt that follows the cursor
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const inner = el.querySelector(".card-3d-inner") as HTMLElement | null;
    const sheen = el.querySelector(".card-sheen") as HTMLElement | null;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY = (x - 0.5) * 10;
    const rotX = (0.5 - y) * 8 - 4;
    if (inner) inner.style.transform = `perspective(1400px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    if (sheen) sheen.style.background = `radial-gradient(600px circle at ${x * 100}% ${y * 100}%, rgba(239,233,221,0.12), transparent 40%)`;
  };
  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    const inner = el.querySelector(".card-3d-inner") as HTMLElement | null;
    if (inner) inner.style.transform = "";
  };

  return (
    <div className="menu-podium reveal" data-delay={delay}>
      <article
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="card-3d"
      >
        <div className="card-3d-inner">
          <div className="card-3d-content">
            <div className="flex items-baseline justify-between">
              <span className="card-meta">No. {code}</span>
              <span className="card-meta">{duration}</span>
            </div>

            <h3 className="card-name mt-6">{name}</h3>

            <div className="mt-6 flex items-end justify-between">
              <span className="card-price">${price}</span>
            </div>
          </div>
          <div className="card-sheen" />
        </div>
      </article>

      {/* Podium base shadow */}
      <div className="podium-base" />

      {/* Drifting smoke fog layers */}
      <div className="podium-fog">
        <div className="fog-layer fog-1" />
        <div className="fog-layer fog-2" />
        <div className="fog-layer fog-3" />
      </div>
    </div>
  );
}
