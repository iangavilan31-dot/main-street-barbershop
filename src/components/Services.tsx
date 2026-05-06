import { useRef } from "react";
import { SERVICES } from "../lib/data";
import { useI18n } from "../lib/i18n";

/**
 * Services — bulletin board with 3D tilt animation.
 * Single color palette throughout (no per-element color changes).
 * Cards lift, tilt with cursor (perspective rotateX/Y), and respond
 * to mouse position for a tactile, almost-physical feel.
 */
export default function Services() {
  const { t } = useI18n();
  const NAME_KEYS: Record<string, "s1" | "s2" | "s3" | "s4" | "s5" | "s6"> = {
    "01": "s1", "02": "s2", "03": "s3", "04": "s4", "05": "s5", "06": "s6",
  };
  const DESC_KEYS: Record<string, "s1d" | "s2d" | "s3d" | "s4d" | "s5d" | "s6d"> = {
    "01": "s1d", "02": "s2d", "03": "s3d", "04": "s4d", "05": "s5d", "06": "s6d",
  };

  return (
    <section id="services" className="cork-board relative w-full text-bone py-20 lg:py-28 overflow-hidden">
      <div className="relative z-10 max-w-[1180px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-12 lg:mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-widestest text-bone/55">
              {t("servicesEyebrow")}
            </div>
            <h2 className="mt-4 font-display font-medium text-bone-100 text-[clamp(1.25rem,1.9vw,1.7rem)] leading-[1.2] tracking-tight reveal max-w-xl">
              {t("servicesHeading")}{t("servicesItalic")}
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-bone/65 text-[13.5px] leading-[1.75] reveal" data-delay="180">
              {t("servicesBlurb")}
            </p>
          </div>
        </div>

        {/* 3D Bulletin Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-x-10 lg:gap-y-16 px-2 lg:px-6 pt-4 pb-4">
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={s.code}
              code={s.code}
              name={t(NAME_KEYS[s.code])}
              desc={t(DESC_KEYS[s.code])}
              duration={s.duration}
              price={s.price}
              delay={i * 70}
            />
          ))}
        </div>

        {/* Footer note + CTA */}
        <div className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 reveal relative z-10">
          <p className="text-bone/55 text-[12.5px] max-w-xl">
            {t("servicesNote")}
          </p>
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
  code, name, desc, duration, price, delay,
}: {
  code: string; name: string; desc: string; duration: string; price: number; delay: number;
}) {
  const cardRef = useRef<HTMLElement>(null);

  // 3D tilt that follows the cursor — set transform directly on the inner element
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const inner = el.querySelector(".card-3d-inner") as HTMLElement | null;
    const sheen = el.querySelector(".card-sheen") as HTMLElement | null;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY = (x - 0.5) * 12;
    const rotX = (0.5 - y) * 10;
    if (inner) inner.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
    if (sheen) sheen.style.background = `radial-gradient(600px circle at ${x * 100}% ${y * 100}%, rgba(239,233,221,0.12), transparent 40%)`;
  };
  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    const inner = el.querySelector(".card-3d-inner") as HTMLElement | null;
    if (inner) inner.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="card-3d reveal"
      data-delay={delay}
    >
      <div className="card-3d-inner">
        {/* Brass thumbtack */}
        <span className="pin">
          <span className="pin-head" />
          <span className="pin-shadow" />
        </span>

        {/* Card content — single color palette */}
        <div className="card-3d-content">
          <div className="flex items-baseline justify-between">
            <span className="card-meta">No. {code}</span>
            <span className="card-meta">{duration}</span>
          </div>

          <h3 className="card-name mt-4">
            {name}
          </h3>

          <p className="card-desc mt-3">
            {desc}
          </p>

          <div className="card-rule mt-7" />

          <div className="mt-4 flex items-end justify-between">
            <span className="card-price">${price}</span>
            <span className="card-meta">Main St. NJ</span>
          </div>
        </div>

        {/* Sheen layer that follows cursor */}
        <div className="card-sheen" />
      </div>
    </article>
  );
}
