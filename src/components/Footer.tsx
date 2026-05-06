import { SHOP } from "../lib/data";
import { useI18n } from "../lib/i18n";
import LangSwitch from "./LangSwitch";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative w-full bg-ink border-t border-bone/10 overflow-hidden">
      {/* Centered brand mark */}
      <div className="max-w-[820px] mx-auto px-6 lg:px-10 pt-20 pb-12 flex flex-col items-center text-center">
        <span className="block w-[180px] mb-6 opacity-60">
          <Logo />
        </span>
        <p className="text-bone/55 text-[13px] leading-[1.7] max-w-[40ch] font-light">
          A heritage barbershop on Main Street.
          Four chairs, one standard, twenty-one years and counting.
        </p>
      </div>

      {/* Quiet single row of links */}
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 pb-10">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-widestest text-bone/55">
          <a href={SHOP.phoneHref} className="underline-link hover:text-bone">{SHOP.phone}</a>
          <span className="text-bone/20">·</span>
          <a href={`mailto:${SHOP.email}`} className="underline-link hover:text-bone">{SHOP.email}</a>
          <span className="text-bone/20">·</span>
          <a href={SHOP.instagram} target="_blank" rel="noreferrer" className="underline-link hover:text-bone">Instagram</a>
          <span className="text-bone/20">·</span>
          <a href={SHOP.yelp} target="_blank" rel="noreferrer" className="underline-link hover:text-bone">Yelp</a>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="max-w-[1180px] mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widestest text-bone/40">
          <span>© {new Date().getFullYear()} {SHOP.short} · {t("allRights")}</span>
          <span className="hidden md:inline">{SHOP.street}, {SHOP.city}, {SHOP.state}</span>
          <LangSwitch tone="dark" />
        </div>
      </div>
    </footer>
  );
}
