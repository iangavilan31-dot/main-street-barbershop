import { useI18n } from "../lib/i18n";

export default function LangSwitch({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { lang, setLang } = useI18n();
  const base = "font-mono text-[10px] tracking-widestest uppercase px-2 py-1 transition-all duration-300";
  const colorActive = tone === "dark" ? "text-bone" : "text-ink";
  const colorIdle = tone === "dark" ? "text-bone/45 hover:text-bone/85" : "text-ink/45 hover:text-ink/85";
  return (
    <div className={`inline-flex items-center gap-0 border ${tone === "dark" ? "border-bone/20" : "border-ink/20"}`}>
      <button
        type="button"
        aria-pressed={lang === "EN"}
        onClick={() => setLang("EN")}
        className={`${base} ${lang === "EN" ? `${colorActive} ${tone === "dark" ? "bg-bone/15" : "bg-ink/10"}` : colorIdle}`}
      >
        EN
      </button>
      <span className={`w-px h-4 ${tone === "dark" ? "bg-bone/20" : "bg-ink/20"}`}></span>
      <button
        type="button"
        aria-pressed={lang === "ES"}
        onClick={() => setLang("ES")}
        className={`${base} ${lang === "ES" ? `${colorActive} ${tone === "dark" ? "bg-bone/15" : "bg-ink/10"}` : colorIdle}`}
      >
        ES
      </button>
    </div>
  );
}
