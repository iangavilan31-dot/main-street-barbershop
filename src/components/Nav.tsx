import { useEffect, useState } from "react";
import { NAV, SHOP } from "../lib/data";
import { useI18n } from "../lib/i18n";
import LangSwitch from "./LangSwitch";
import Logo from "./Logo";

function replayLoading(e: React.MouseEvent) {
  e.preventDefault();
  window.dispatchEvent(new CustomEvent("ms:loading"));
  setTimeout(() => window.scrollTo({ top: 0, behavior: "auto" }), 50);
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  const NAV_LABELS: Record<string, keyof typeof import("../lib/i18n").T> = {
    "#story": "navStory",
    "#services": "navServices",
    "#team": "navTeam",
    "#gallery": "navGallery",
    "#visit": "navVisit",
  };

  useEffect(() => {
    const lightSelector = "section.bg-bone-100, footer.bg-bone-100";
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // Detect if a light section sits under the nav (top 80px)
      const probeY = 56;
      const elements = document.elementsFromPoint(window.innerWidth / 2, probeY);
      const overLight = elements.some((el) => (el as HTMLElement).matches?.(lightSelector) || (el as HTMLElement).closest?.(lightSelector));
      setLight(Boolean(overLight));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? `py-3 backdrop-blur-md ${light ? "bg-bone-100/90 border-b border-ink/10" : "bg-ink/85 border-b border-bone/10"}`
          : "py-6"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 grid grid-cols-[1fr_auto_1fr] items-center gap-6">
        <a href="#top" onClick={replayLoading} className="flex items-center gap-3 group cursor-pointer">
          <span className="block w-[58px] h-[31px] sm:w-[72px] sm:h-[38px] transition-transform duration-500 group-hover:scale-[1.04]">
            <Logo inverted={light} />
          </span>
          <span className="hidden sm:flex flex-col leading-none">
            <span className={`font-display text-[14px] tracking-tight ${light ? "text-ink" : "text-bone-100"}`}>
              Main St.
            </span>
            <span className={`text-[9px] tracking-widestest uppercase font-mono mt-1 ${light ? "text-ink/55" : "text-bone/50"}`}>
              Barbershop · Est. {SHOP.est}
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center justify-center gap-9">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`underline-link text-[11px] font-mono uppercase tracking-widestest transition ${light ? "text-ink/80 hover:text-ink" : "text-bone/80 hover:text-bone"}`}
            >
              {t(NAV_LABELS[item.href])}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <LangSwitch tone={light ? "light" : "dark"} />
          <a
            href={SHOP.phoneHref}
            className={`hidden xl:inline-block text-[11px] font-mono uppercase tracking-widestest underline-link ${light ? "text-ink/65 hover:text-ink" : "text-bone/65 hover:text-bone"}`}
          >
            {SHOP.phone}
          </a>
          {light ? (
            <a href="#visit" className="btn-light !py-3 !px-5 text-[11px]">
              <span>{t("bookChair")}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          ) : (
            <a href="#visit" className="btn-primary !py-3 !px-5 text-[11px]">
              <span>{t("bookChair")}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          )}
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className={`lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 border ${light ? "border-ink/20" : "border-bone/20"}`}
          >
            <span className={`w-4 h-px transition ${light ? "bg-ink" : "bg-bone"} ${open ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`w-4 h-px transition ${light ? "bg-ink" : "bg-bone"} ${open ? "-rotate-45 -translate-y-0.5" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-ink border-b border-bone/10 py-6">
          <div className="max-w-[1500px] mx-auto px-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-bone-100 hover:opacity-60 transition"
              >
                {t(NAV_LABELS[item.href])}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
