import { useState } from "react";
import { SERVICES } from "../lib/data";
import { useI18n } from "../lib/i18n";

/**
 * Services — chalkboard menu. Each row sits flush on the board; click the
 * row and a panel drops down underneath with the description + duration.
 * Only one row open at a time.
 */
export default function Services() {
  const { t } = useI18n();
  const [open, setOpen] = useState<string | null>(null);

  const NAME_KEYS: Record<string, "s1" | "s2" | "s3" | "s4" | "s5" | "s6"> = {
    "01": "s1", "02": "s2", "03": "s3", "04": "s4", "05": "s5", "06": "s6",
  };
  const DESC_KEYS: Record<string, "s1d" | "s2d" | "s3d" | "s4d" | "s5d" | "s6d"> = {
    "01": "s1d", "02": "s2d", "03": "s3d", "04": "s4d", "05": "s5d", "06": "s6d",
  };

  return (
    <section
      id="services"
      className="chalkboard relative w-full text-chalk py-24 lg:py-32 overflow-hidden"
    >
      <div className="chalkboard-frame relative z-10 max-w-[1080px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-20 reveal">
          <div className="font-mono text-[11px] uppercase tracking-widestest text-chalk/55">
            {t("servicesEyebrow")}
          </div>
          <h2 className="chalk-h mt-4 font-display font-light text-chalk text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.2] tracking-tight">
            {t("servicesHeading")}{t("servicesItalic")}
          </h2>
        </div>

        <ul className="chalk-list">
          {SERVICES.map((s, i) => {
            const isOpen = open === s.code;
            return (
              <li
                key={s.code}
                className="chalk-row reveal"
                data-open={isOpen ? "true" : "false"}
                data-delay={i * 70}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : s.code)}
                  aria-expanded={isOpen}
                  className="chalk-row-btn"
                >
                  <span className="chalk-num">{s.code}</span>
                  <span className="chalk-name">{t(NAME_KEYS[s.code])}</span>
                  <span className="chalk-dots" aria-hidden="true" />
                  <span className="chalk-price">${s.price}</span>
                  <span className="chalk-arrow" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>

                <div className="chalk-detail" aria-hidden={!isOpen}>
                  <div className="chalk-detail-inner">
                    <p className="chalk-desc">{t(DESC_KEYS[s.code])}</p>
                    <div className="chalk-meta-row">
                      <span>{s.duration}</span>
                      <span className="chalk-divider" />
                      <a href="#contact" className="chalk-link">
                        {t("bookChairBtn")}
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-14 text-center reveal">
          <p className="text-chalk/45 text-[11px] font-mono uppercase tracking-widestest">
            {t("servicesNote")}
          </p>
        </div>
      </div>
    </section>
  );
}
