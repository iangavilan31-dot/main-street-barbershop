import { TEAM } from "../lib/data";
import { useI18n } from "../lib/i18n";

const ROLE_KEYS: Record<string, "rOwner" | "rSenior" | "rBarber" | "rApprentice"> = {
  "Master Barber · Owner": "rOwner",
  "Senior Barber": "rSenior",
  "Barber": "rBarber",
  "Apprentice": "rApprentice",
};

/**
 * Team — "Meet the Barbers". Four cards rise from below the viewport
 * when scrolled into view, with placeholder monogram art instead of
 * stock portraits. Real photos drop in later by replacing the
 * <PortraitPlaceholder /> with an <img />.
 */
export default function Team() {
  const { t } = useI18n();
  return (
    <section
      id="team"
      className="relative w-full bg-ink py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className="font-mono text-[11px] uppercase tracking-widestest text-bone/55 reveal">
            {t("teamEyebrow")}
          </div>
          <h2 className="mt-4 font-display font-light text-bone-100 text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.2] tracking-tight reveal" data-delay="80">
            Meet the barbers.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {TEAM.map((m, i) => (
            <article
              key={m.name}
              className="barber-card reveal"
              data-delay={i * 130}
            >
              <PortraitPlaceholder name={m.name} index={i} />
              <div className="barber-meta">
                <div className="barber-name">{m.name}</div>
                <div className="barber-role">{t(ROLE_KEYS[m.role])}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortraitPlaceholder({ name, index }: { name: string; index: number }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div className="barber-portrait" aria-label={`${name} placeholder`}>
      <svg viewBox="0 0 200 250" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id={`p-${index}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1a1c" />
            <stop offset="100%" stopColor="#0c0c0d" />
          </linearGradient>
        </defs>
        <rect width="200" height="250" fill={`url(#p-${index})`} />
        <text
          x="100" y="145" textAnchor="middle"
          fontFamily='"Inter Tight", sans-serif'
          fontSize="120" fontWeight="200"
          fill="rgba(239, 233, 221, 0.10)"
          letterSpacing="-4"
        >
          {initial}
        </text>
      </svg>
      <div className="barber-portrait-mark">
        <span>0{index + 1}</span>
      </div>
    </div>
  );
}
