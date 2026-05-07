import { SHOP } from "../lib/data";
import { useI18n } from "../lib/i18n";

export default function Visit() {
  const { t } = useI18n();
  const dayMap: Record<string, { EN: string; ES: string }> = {
    Sunday: { EN: "Sun", ES: "Dom" },
    Monday: { EN: "Mon", ES: "Lun" },
    Tuesday: { EN: "Tue", ES: "Mar" },
    Wednesday: { EN: "Wed", ES: "Mié" },
    Thursday: { EN: "Thu", ES: "Jue" },
    Friday: { EN: "Fri", ES: "Vie" },
    Saturday: { EN: "Sat", ES: "Sáb" },
  };
  const lang = (typeof window !== "undefined" ? document.documentElement.lang : "en") === "es" ? "ES" : "EN";

  return (
    <section id="visit" className="relative w-full bg-ink overflow-hidden">
      {/* Full-bleed map */}
      <div className="visit-map-wrap relative overflow-hidden">
        <iframe
          title="Map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-74.011%2C40.924%2C-73.991%2C40.932&layer=mapnik&marker=40.9276%2C-74.0007"
          loading="lazy"
          className="absolute inset-0 w-full h-full"
          style={{ filter: "invert(0.9) hue-rotate(180deg) grayscale(1) contrast(0.6) brightness(1.1)" }}
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(13,14,16,0.15) 0%, rgba(13,14,16,0.55) 100%)" }} />
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(SHOP.street + ", " + SHOP.city + ", " + SHOP.state)}`}
          target="_blank" rel="noreferrer"
          className="absolute bottom-5 right-5 font-mono text-[10px] uppercase tracking-widestest text-bone/60 hover:text-bone transition underline-link"
        >
          Open maps ↗
        </a>
      </div>

      {/* Info strip */}
      <div className="max-w-[1180px] mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Left: address + actions */}
          <div className="lg:col-span-1 flex flex-col gap-8 reveal">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/40 mb-3">{t("visitEyebrow")}</div>
              <p className="font-editorial italic text-bone-100 text-[clamp(1.4rem,2vw,1.8rem)] leading-[1.2] font-light">
                {SHOP.street}<br />
                {SHOP.city}, {SHOP.state}
              </p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/40 mb-2">{t("reservations")}</div>
              <a href={SHOP.phoneHref} className="font-display text-bone-100 text-[22px] font-light tracking-tight hover:opacity-60 transition">
                {SHOP.phone}
              </a>
            </div>
            <div className="flex gap-3 pt-1">
              <a href={SHOP.phoneHref} className="btn-primary"><span>{t("callShop")}</span></a>
            </div>
          </div>

          {/* Right: hours */}
          <div className="lg:col-span-2 reveal" data-delay="160">
            <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/40 mb-5">{t("hours")}</div>
            <ul className="divide-y divide-bone/8">
              {SHOP.hours.map((h) => (
                <li key={h.day} className="flex items-center justify-between py-3 text-[13px]">
                  <span className="text-bone/65">{dayMap[h.day]?.[lang] ?? h.day}</span>
                  <span className={`font-mono text-[11px] tracking-wider ${h.time === "Closed" ? "text-bone/25" : "text-bone/85"}`}>
                    {h.time === "Closed" ? t("closed") : h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
