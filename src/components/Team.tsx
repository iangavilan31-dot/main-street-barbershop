import { TEAM } from "../lib/data";
import { useI18n } from "../lib/i18n";

const ROLE_KEYS: Record<string, "rOwner" | "rSenior" | "rBarber" | "rApprentice"> = {
  "Master Barber · Owner": "rOwner",
  "Senior Barber": "rSenior",
  "Barber": "rBarber",
  "Apprentice": "rApprentice",
};

function Portrait({ name, index }: { name: string; index: number }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div className="barber-portrait" aria-label={name}>
      <svg viewBox="0 0 200 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id={`pg-${index}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#191a1d" />
            <stop offset="100%" stopColor="#0d0e10" />
          </linearGradient>
        </defs>
        <rect width="200" height="300" fill={`url(#pg-${index})`} />
        <text x="100" y="190" textAnchor="middle" fontFamily='"Instrument Serif", serif'
          fontSize="160" fontWeight="400" fill="rgba(239,233,221,0.055)" letterSpacing="-6">
          {initial}
        </text>
      </svg>
      <div className="barber-portrait-mark">0{index + 1}</div>
    </div>
  );
}

export default function Team() {
  const { t } = useI18n();
  return (
    <section id="team" className="relative w-full bg-ink overflow-hidden">
      <div className="max-w-[1220px] mx-auto px-6 lg:px-10 pt-24 lg:pt-32 pb-8">
        <div className="flex items-center gap-8">
          <div className="font-mono text-[11px] uppercase tracking-widestest text-bone/40 reveal shrink-0">
            {t("teamEyebrow")}
          </div>
          <div className="flex-1 h-px bg-bone/10 reveal" />
          <h2 className="font-editorial italic text-bone-100 text-[clamp(1.1rem,1.6vw,1.5rem)] font-light reveal shrink-0" data-delay="80">
            Meet the barbers.
          </h2>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto px-4 lg:px-6 pb-28 lg:pb-44">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {TEAM.map((m, i) => (
            <article key={m.name} className={`barber-card barber-stagger-${i} reveal`} data-delay={i * 110}>
              <Portrait name={m.name} index={i} />
              <div className="barber-meta">
                <div className="barber-name">{m.name}</div>
                <div className="barber-role">{t(ROLE_KEYS[m.role] ?? "rBarber")}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
