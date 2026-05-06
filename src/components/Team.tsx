import { TEAM } from "../lib/data";
import { useI18n } from "../lib/i18n";

const PORTRAITS: Record<string, string> = {
  Eddie: "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=900&q=85&auto=format&fit=crop",
  Marco: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=900&q=85&auto=format&fit=crop",
  Luis: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=900&q=85&auto=format&fit=crop",
  Tony: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=85&auto=format&fit=crop",
};

const ROLE_KEYS: Record<string, "rOwner" | "rSenior" | "rBarber" | "rApprentice"> = {
  "Master Barber · Owner": "rOwner",
  "Senior Barber": "rSenior",
  "Barber": "rBarber",
  "Apprentice": "rApprentice",
};

export default function Team() {
  const { t } = useI18n();
  return (
    <section id="team" className="relative w-full bg-ink py-28 lg:py-40 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono text-[11px] uppercase tracking-widestest text-bone/65">
              {t("teamEyebrow")}
            </div>
            <h2 className="mt-5 font-display font-medium text-bone-100 text-[clamp(1.8rem,3.4vw,3.1rem)] leading-[1.05] tracking-tight reveal max-w-xl">
              {t("teamHeading1")}{" "}
              <span className="italic font-normal text-bone/85" style={{ fontFamily: '"Instrument Serif", serif' }}>
                {t("teamHeading2")}
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-bone/65 text-[13.5px] leading-[1.75] reveal" data-delay="200">
              {t("teamBlurb")}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TEAM.map((m, i) => (
            <article key={m.name} className="group reveal" data-delay={i * 100}>
              <div className="relative aspect-[4/5] overflow-hidden bg-ink-700">
                <img
                  src={PORTRAITS[m.name]}
                  alt={m.name}
                  className="w-full h-full object-cover grayscale contrast-[1.06] scale-[1.03] group-hover:scale-100 transition-all duration-[1100ms] cubic-bezier(.16,1,.3,1)"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent"></div>
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between font-mono text-[10px] uppercase tracking-widestest text-bone/85">
                  <span>0{i + 1}</span>
                  <span>{m.years} {t("yrs")}</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="font-display text-bone-100 text-[36px] leading-none tracking-tightest">
                    {m.name}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/65 mt-2">
                    {t(ROLE_KEYS[m.role])}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-bone/65 text-[14px] leading-[1.65] text-pretty">
                {m.bio}
              </p>
              <a href="#visit" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widestest text-bone/85 hover:text-bone underline-link">
                {t("bookWith")} {m.name}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
