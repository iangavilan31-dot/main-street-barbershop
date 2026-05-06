import { SHOP } from "../lib/data";
import { useI18n } from "../lib/i18n";
import LangSwitch from "./LangSwitch";
import { Swallow } from "./Ornaments";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative w-full bg-ink border-t border-bone/10 overflow-hidden">
      {/* Brand mark */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pt-20 pb-12 flex flex-col items-center text-center">
        <span className="block w-[200px] mb-5">
          <Logo />
        </span>
        <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/55">
          Bergenfield, NJ · Est. {SHOP.est} · 70 W. Main St.
        </div>
      </div>

      <div className="hairline mx-6 lg:mx-10"></div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <p className="text-bone/60 text-[13px] leading-[1.75] max-w-sm">
            A heritage barbershop on Main Street. Four chairs, one standard, twenty-one years and counting.
          </p>
          <div className="mt-6">
            <LangSwitch tone="dark" />
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/65 mb-4">{t("visit")}</div>
          <ul className="space-y-2 text-bone/70 text-[13px]">
            <li>{SHOP.street}</li>
            <li>{SHOP.city}, {SHOP.state}</li>
            <li>{SHOP.zip}</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/65 mb-4">{t("reach")}</div>
          <ul className="space-y-2 text-bone/70 text-[13px]">
            <li><a href={SHOP.phoneHref} className="underline-link">{SHOP.phone}</a></li>
            <li><a href={`mailto:${SHOP.email}`} className="underline-link">{SHOP.email}</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/65 mb-4">{t("follow")}</div>
          <ul className="space-y-2 text-bone/70 text-[13px]">
            <li><a href={SHOP.instagram} target="_blank" rel="noreferrer" className="underline-link">Instagram</a></li>
            <li><a href={SHOP.yelp} target="_blank" rel="noreferrer" className="underline-link">Yelp</a></li>
            <li><a href="#" className="underline-link">Google</a></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/65 mb-4">{t("today")}</div>
          <ul className="space-y-2 text-bone/70 text-[13px]">
            <li className="flex justify-between"><span>Tue–Fri</span> <span className="font-mono text-bone-100">10–19</span></li>
            <li className="flex justify-between"><span>Sat</span> <span className="font-mono text-bone-100">10–18</span></li>
            <li className="flex justify-between"><span>Sun · Mon</span> <span className="font-mono text-bone/40">{t("closed")}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bone/10">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widestest text-bone/45">
          <span>© {new Date().getFullYear()} Main Street Barbershop · {t("allRights")}</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-bone" />
            {t("tagline")}
          </span>
          <span>{t("madeOnMain")}</span>
        </div>
      </div>
    </footer>
  );
}
