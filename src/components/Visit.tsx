import { SHOP } from "../lib/data";
import { useI18n } from "../lib/i18n";

export default function Visit() {
  const { t } = useI18n();
  const dayKeys: Array<keyof import("../lib/i18n").T extends never ? never : never> = [];
  void dayKeys;
  // We'll display hours.day directly with a simple translation map
  const dayMap: Record<string, { EN: string; ES: string }> = {
    Sunday: { EN: "Sunday", ES: "Domingo" },
    Monday: { EN: "Monday", ES: "Lunes" },
    Tuesday: { EN: "Tuesday", ES: "Martes" },
    Wednesday: { EN: "Wednesday", ES: "Miércoles" },
    Thursday: { EN: "Thursday", ES: "Jueves" },
    Friday: { EN: "Friday", ES: "Viernes" },
    Saturday: { EN: "Saturday", ES: "Sábado" },
  };
  const lang = (typeof window !== "undefined" ? document.documentElement.lang : "en") === "es" ? "ES" : "EN";
  return (
    <section id="visit" className="relative w-full bg-ink py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-widestest text-bone/65">
              {t("visitEyebrow")}
            </div>
            <h2 className="mt-4 font-display font-light text-bone-100 text-[clamp(1.25rem,1.9vw,1.7rem)] leading-[1.25] tracking-tight reveal max-w-xl">
              {t("visitHeading1")} {t("visitHeading2")}
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-bone/65 text-[13.5px] leading-[1.75] reveal" data-delay="180">
              {t("visitBlurb")}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Map */}
          <div className="lg:col-span-6 aspect-[16/10] lg:aspect-auto lg:min-h-[420px] relative overflow-hidden border border-bone/10 reveal">
            <iframe
              title="Main Street Barbershop on the map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.011%2C40.924%2C-73.991%2C40.932&layer=mapnik&marker=40.9276%2C-74.0007"
              loading="lazy"
              className="absolute inset-0 w-full h-full"
              style={{ filter: "invert(0.85) hue-rotate(180deg) grayscale(1) contrast(0.78) brightness(1.15)" }}
            />
            <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-widestest text-bone-100/80">
              <span>40°55'39"N · 74°00'02"W</span>
              <span>Plate 07 — The Block</span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-2 sm:items-end sm:justify-between bg-ink/85 backdrop-blur-sm p-4 border border-bone/10">
              <div>
                <div className="font-display text-2xl text-bone-100">{SHOP.short}</div>
                <div className="text-bone/70 text-sm">
                  {SHOP.street}, {SHOP.city}, {SHOP.state} {SHOP.zip}
                </div>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  SHOP.street + ", " + SHOP.city + ", " + SHOP.state + " " + SHOP.zip,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost text-[10px]"
              >
                Open in Maps
              </a>
            </div>
          </div>

          {/* Info column */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {/* Hours card */}
            <div className="border border-bone/10 p-7 lg:p-8 reveal">
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] uppercase tracking-widestest text-bone/65">
                  {t("hours")}
                </span>
                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widestest text-bone/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-bone animate-pulse" />
                  {t("openNow")}
                </span>
              </div>
              <ul className="divide-y divide-bone/10">
                {SHOP.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between py-2.5 text-[14px]">
                    <span className="text-bone/80">{dayMap[h.day]?.[lang] ?? h.day}</span>
                    <span className={`font-mono ${h.time === "Closed" ? "text-bone/30" : "text-bone-100"}`}>
                      {h.time === "Closed" ? t("closed") : h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact card */}
            <div className="border border-bone/10 p-7 lg:p-8 reveal" data-delay="120">
              <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/65 mb-5">
                {t("reservations")}
              </div>
              <a href={SHOP.phoneHref} className="block font-display font-medium text-[20px] lg:text-[24px] leading-none text-bone-100 hover:opacity-70 transition tracking-tight">
                {SHOP.phone}
              </a>
              <p className="text-bone/60 text-[13px] mt-3 leading-[1.7]">
                {t("callBlurb")}
              </p>
              <div className="hairline my-6"></div>
              <div className="flex flex-wrap gap-3">
                <a href={SHOP.phoneHref} className="btn-primary"><span>{t("callShop")}</span></a>
                <a href={SHOP.instagram} target="_blank" rel="noreferrer" className="btn-ghost">{t("dmUs")}</a>
              </div>
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-3 gap-3 reveal" data-delay="220">
              {[
                [t("walkIns"), t("welcome")],
                [t("parking"), t("onMain")],
                [t("cashCard"), t("accepted")],
              ].map(([k, v], i) => (
                <div key={i} className="border border-bone/10 p-4">
                  <div className="font-mono text-[9px] uppercase tracking-widestest text-bone/50">{k}</div>
                  <div className="font-display text-bone-100 text-[18px] mt-1.5 leading-none">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
