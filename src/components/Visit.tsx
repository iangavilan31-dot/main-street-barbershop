import { SHOP } from "../lib/data";
import { useI18n } from "../lib/i18n";

export default function Visit() {
  const { t } = useI18n();
  const dayMap: Record<string, { EN: string; ES: string }> = {
    Sunday: { EN: "Sunday", ES: "Domingo" },
    Monday: { EN: "Monday", ES: "Lunes" },
    Tuesday: { EN: "Tuesday", ES: "Martes" },
    Wednesday: { EN: "Wednesday", ES: "Miércoles" },
    Thursday: { EN: "Thursday", ES: "Jueves" },
    Friday: { EN: "Friday", ES: "Viernes" },
    Saturday: { EN: "Saturday", ES: "Sábado" },
  };
  const lang =
    (typeof window !== "undefined" ? document.documentElement.lang : "en") === "es"
      ? "ES"
      : "EN";

  return (
    <section id="visit" className="relative w-full bg-ink py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-10">

        {/* Section label */}
        <div className="mb-14 lg:mb-16 reveal">
          <div className="font-mono text-[11px] uppercase tracking-widestest text-bone/45">
            {t("visitEyebrow")}
          </div>
          <h2 className="mt-3 font-display font-extralight text-bone-100 text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.2] tracking-tight">
            {t("visitHeading1")} {t("visitHeading2")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Map — same proportions as original */}
          <div className="lg:col-span-7 aspect-[4/3] lg:aspect-[5/4] relative overflow-hidden border border-bone/10 reveal">
            <iframe
              title="Main Street Barbershop on the map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.011%2C40.924%2C-73.991%2C40.932&layer=mapnik&marker=40.9276%2C-74.0007"
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              style={{
                filter:
                  "invert(0.88) hue-rotate(180deg) grayscale(1) contrast(0.75) brightness(1.10)",
              }}
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(
                SHOP.street + ", " + SHOP.city + ", " + SHOP.state + " " + SHOP.zip,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-widestest text-bone/70 hover:text-bone transition underline-link"
            >
              Open in Maps ↗
            </a>
          </div>

          {/* Info column */}
          <div className="lg:col-span-5 flex flex-col gap-10 reveal" data-delay="160">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/40 mb-3">
                {t("reservations")}
              </div>
              <a
                href={SHOP.phoneHref}
                className="font-display font-light text-bone-100 text-[22px] tracking-tight hover:opacity-60 transition"
              >
                {SHOP.phone}
              </a>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/40 mb-2">
                Address
              </div>
              <p className="text-bone/75 text-[14px] leading-[1.7] font-light">
                {SHOP.street}<br />
                {SHOP.city}, {SHOP.state} {SHOP.zip}
              </p>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/40 mb-4">
                {t("hours")}
              </div>
              <ul className="divide-y divide-bone/10">
                {SHOP.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between py-2.5 text-[13px]">
                    <span className="text-bone/70">{dayMap[h.day]?.[lang] ?? h.day}</span>
                    <span
                      className={`font-mono text-[11px] tracking-wider ${
                        h.time === "Closed" ? "text-bone/25" : "text-bone/85"
                      }`}
                    >
                      {h.time === "Closed" ? t("closed") : h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a href={SHOP.phoneHref} className="btn-primary">
                <span>{t("callShop")}</span>
              </a>
              <a href={SHOP.instagram} target="_blank" rel="noreferrer" className="btn-ghost">
                {t("dmUs")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
