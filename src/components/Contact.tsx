import { useMemo, useState } from "react";
import { SHOP } from "../lib/data";
import { useI18n } from "../lib/i18n";

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }));

  const href = useMemo(() => {
    const sub = encodeURIComponent(`Chair request — ${form.name || "New client"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\n\n${form.message}\n\n— mainstreetbarbershop.com`);
    return `mailto:${SHOP.email}?subject=${sub}&body=${body}`;
  }, [form]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    window.location.href = href;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 6000);
  };

  // suppress unused warning — t is used for potential future keys
  void t;

  return (
    <section id="contact" className="relative w-full bg-ink text-bone overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-6 lg:px-10 py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — statement */}
          <div className="reveal">
            <div className="font-mono text-[11px] uppercase tracking-widestest text-bone/40 mb-8">
              Get in touch
            </div>
            <h2 className="font-editorial italic text-bone-100 leading-[1.05] tracking-tight text-[clamp(2.4rem,4.5vw,4.2rem)] font-light">
              Reach<br />the chair.
            </h2>
            <div className="mt-16 flex flex-col gap-5">
              <a href={SHOP.phoneHref} className="contact-link group">
                <span className="font-mono text-[9px] uppercase tracking-widestest text-bone/35 mb-1 block">Call</span>
                <span className="font-display text-bone-100 text-[20px] font-light tracking-tight group-hover:opacity-60 transition">{SHOP.phone}</span>
              </a>
              <a href={SHOP.instagram} target="_blank" rel="noreferrer" className="contact-link group">
                <span className="font-mono text-[9px] uppercase tracking-widestest text-bone/35 mb-1 block">Instagram</span>
                <span className="font-display text-bone-100 text-[20px] font-light tracking-tight group-hover:opacity-60 transition">{SHOP.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={onSubmit} className="reveal flex flex-col gap-9" data-delay="160">
            <div>
              <label htmlFor="c-name" className="form-label">Name</label>
              <input id="c-name" type="text" required value={form.name} onChange={set("name")} className="form-input" autoComplete="off" />
            </div>
            <div>
              <label htmlFor="c-phone" className="form-label">Phone</label>
              <input id="c-phone" type="tel" required value={form.phone} onChange={set("phone")} className="form-input" autoComplete="tel" />
            </div>
            <div>
              <label htmlFor="c-msg" className="form-label">Message</label>
              <textarea id="c-msg" rows={4} value={form.message} onChange={set("message")} placeholder="What are you looking for?" className="form-input form-textarea" />
            </div>
            <div className="flex items-center gap-6 pt-2">
              <button type="submit" className="btn-primary">
                <span>Send</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
              <span className={`font-mono text-[10px] uppercase tracking-widestest transition-opacity duration-500 text-bone/50 ${status === "sent" ? "opacity-100" : "opacity-0"}`}>
                Opening mail app…
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
