import { SHOP } from "../lib/data";
import { useI18n } from "../lib/i18n";
import LangSwitch from "./LangSwitch";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative w-full bg-ink border-t border-bone/8 overflow-hidden">
      <div className="max-w-[640px] mx-auto px-6 pt-24 pb-14 flex flex-col items-center text-center gap-8">
        <span className="block w-[140px] opacity-40">
          <Logo />
        </span>
        <p className="font-editorial italic text-bone/40 text-[1.05rem] font-light leading-[1.5]">
          Four chairs. One standard.
        </p>
        <div className="w-16 h-px bg-bone/12" />
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 font-mono text-[10px] uppercase tracking-widestest text-bone/38">
          <a href={SHOP.phoneHref} className="hover:text-bone/65 transition">{SHOP.phone}</a>
          <span className="text-bone/15">·</span>
          <a href={SHOP.instagram} target="_blank" rel="noreferrer" className="hover:text-bone/65 transition">Instagram</a>
          <span className="text-bone/15">·</span>
          <a href={SHOP.yelp} target="_blank" rel="noreferrer" className="hover:text-bone/65 transition">Yelp</a>
        </div>
      </div>

      <div className="border-t border-bone/8">
        <div className="max-w-[1180px] mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-widestest text-bone/28">
          <span>© {new Date().getFullYear()} {SHOP.short} · {t("allRights")}</span>
          <LangSwitch tone="dark" />
        </div>
      </div>
    </footer>
  );
}
