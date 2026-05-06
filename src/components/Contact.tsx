import { useMemo, useState } from "react";
import { SHOP, SERVICES, TEAM } from "../lib/data";
import { useI18n } from "../lib/i18n";

/**
 * Contact — replaces the Reviews/testimonial section. Same dark palette,
 * minimal underline inputs. Submit composes a mailto: link to SHOP.email
 * with all fields, so the form works today without a backend; when the
 * owner is ready, swap the onSubmit to fetch() against any endpoint.
 */
export default function Contact() {
  const { t } = useI18n();

  const NAME_KEYS: Record<string, "s1" | "s2" | "s3" | "s4" | "s5" | "s6"> = {
    "01": "s1", "02": "s2", "03": "s3", "04": "s4", "05": "s5", "06": "s6",
  };

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    barber: "",
    when: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [k]: e.target.value }));

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `Booking request — ${form.name || "New customer"}${form.service ? ` · ${form.service}` : ""}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Phone: ${form.phone}`,
        `Email: ${form.email}`,
        `Service: ${form.service || "(any)"}`,
        `Barber: ${form.barber || "(any)"}`,
        `Preferred time: ${form.when || "(flexible)"}`,
        ``,
        `Message:`,
        form.message || "(none)",
        ``,
        `— Sent via mainstreetbarbershop.com`,
      ].join("\n"),
    );
    return `mailto:${SHOP.email}?subject=${subject}&body=${body}`;
  }, [form]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    window.location.href = mailtoHref;
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-ink text-bone py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1180px] mx-auto px-6 lg:px-10">
        <div className="text-center mb-16 lg:mb-20">
          <div className="font-mono text-[11px] uppercase tracking-widestest text-bone/55 reveal">
            Get in touch
          </div>
          <h2 className="mt-4 font-display font-light text-bone-100 text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.2] tracking-tight reveal" data-delay="80">
            Reach the chair.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-7 reveal" data-delay="160">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
              <Field label="Name" id="c-name" required value={form.name} onChange={update("name")} />
              <Field label="Phone" id="c-phone" type="tel" value={form.phone} onChange={update("phone")} />
              <Field label="Email" id="c-email" type="email" required value={form.email} onChange={update("email")} className="sm:col-span-2" />

              <Select label="Service" id="c-service" value={form.service} onChange={update("service")}>
                <option value="">Any service</option>
                {SERVICES.map((s) => (
                  <option key={s.code} value={t(NAME_KEYS[s.code])}>
                    {t(NAME_KEYS[s.code])} · ${s.price}
                  </option>
                ))}
              </Select>

              <Select label="Barber" id="c-barber" value={form.barber} onChange={update("barber")}>
                <option value="">Any barber</option>
                {TEAM.map((m) => (
                  <option key={m.name} value={m.name}>{m.name}</option>
                ))}
              </Select>

              <Field label="Preferred time" id="c-when" value={form.when} onChange={update("when")} placeholder="Sat morning, any weekday after 5, etc." className="sm:col-span-2" />

              <div className="sm:col-span-2">
                <label htmlFor="c-msg" className="form-label">Message</label>
                <textarea
                  id="c-msg"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Anything we should know."
                  className="form-input form-textarea"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button type="submit" className="btn-primary">
                <span>Send request</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
              <span className={`form-status font-mono text-[10px] uppercase tracking-widestest transition-opacity duration-500 ${status === "sent" ? "opacity-80 text-bone-100" : "opacity-0"}`}>
                Opening your mail app · we'll see it shortly
              </span>
            </div>
          </form>

          {/* Sidebar — direct contact options */}
          <aside className="lg:col-span-4 lg:col-start-9 flex flex-col gap-9 reveal" data-delay="280">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/45 mb-3">Or call</div>
              <a href={SHOP.phoneHref} className="font-display text-bone-100 text-[22px] tracking-tight font-light hover:opacity-70 transition">
                {SHOP.phone}
              </a>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/45 mb-3">Email</div>
              <a href={`mailto:${SHOP.email}`} className="text-bone-100 text-[15px] hover:opacity-70 transition tracking-tight font-light underline-link">
                {SHOP.email}
              </a>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/45 mb-3">DM us</div>
              <a href={SHOP.instagram} target="_blank" rel="noreferrer" className="text-bone-100 text-[15px] hover:opacity-70 transition tracking-tight font-light underline-link">
                {SHOP.instagramHandle}
              </a>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widestest text-bone/45 mb-3">Walk-in</div>
              <p className="text-bone/75 text-[14px] leading-[1.6] font-light">
                {SHOP.street}<br />
                {SHOP.city}, {SHOP.state} {SHOP.zip}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, id, value, onChange, type = "text", required, placeholder, className = "",
}: {
  label: string; id: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string; required?: boolean; placeholder?: string; className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="form-label">{label}{required && <span className="text-bone/35"> ·</span>}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="form-input"
        autoComplete={type === "email" ? "email" : type === "tel" ? "tel" : "off"}
      />
    </div>
  );
}

function Select({
  label, id, value, onChange, children,
}: {
  label: string; id: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="form-label">{label}</label>
      <div className="form-select-wrap">
        <select id={id} value={value} onChange={onChange} className="form-input form-select">
          {children}
        </select>
        <svg className="form-select-caret" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}
