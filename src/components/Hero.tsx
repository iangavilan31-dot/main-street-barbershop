import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SHOP } from "../lib/data";
import { useI18n } from "../lib/i18n";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero. Centered cinematic wordmark over a looping video background.
 * Three stacked words ("MAIN" / "STREET" / "BARBERSHOP") split into letters
 * and revealed sequentially via GSAP. Drop public/hero.mp4 to override.
 *
 * BACKGROUND VIDEO:
 *   1. Probes /hero.mp4 first (drop your own barber clip there)
 *   2. Falls back to a verified-public Pexels CDN clip
 *   3. Final fallback is a high-quality B&W still
 */
const FALLBACK_VIDEO =
  "https://videos.pexels.com/video-files/4426530/4426530-hd_1920_1080_25fps.mp4";
const FALLBACK_STILL =
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=2400&q=85&auto=format&fit=crop";

function splitWord(word: string) {
  return word.split("").map((ch, i) => (
    <span key={`${ch}-${i}`} className="hero-char inline-block will-change-transform">
      {ch}
    </span>
  ));
}

export default function Hero() {
  const { t } = useI18n();
  const [time, setTime] = useState("");
  const [videoSrc, setVideoSrc] = useState<string>(FALLBACK_VIDEO);
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Live ET clock
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        timeZone: "America/New_York", hour: "2-digit", minute: "2-digit", hour12: false,
      };
      setTime(now.toLocaleTimeString("en-US", opts) + " ET");
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  // Probe for /hero.mp4
  useEffect(() => {
    fetch("/hero.mp4", { method: "HEAD" })
      .then((r) => {
        if (r.ok && (r.headers.get("content-type") || "").includes("video")) {
          setVideoSrc("/hero.mp4");
        }
      })
      .catch(() => {});
  }, []);

  // Aggressively keep video playing
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => { if (v.paused) v.play().catch(() => {}); };
    tryPlay();
    const id = setInterval(tryPlay, 1500);
    document.addEventListener("click", tryPlay);
    document.addEventListener("scroll", tryPlay, { passive: true });
    return () => { clearInterval(id); document.removeEventListener("click", tryPlay); document.removeEventListener("scroll", tryPlay); };
  }, [videoSrc]);

  // Reveal: trigger by adding a CSS class after a delay (CSS handles the animation)
  useEffect(() => {
    const root = heroRef.current;
    if (!root) return;
    const start = () => root.classList.add("hero-in");
    const reset = () => {
      root.classList.remove("hero-in");
      requestAnimationFrame(() => requestAnimationFrame(start));
    };
    const tid = setTimeout(start, 3300);
    const onReplay = () => {
      clearTimeout(tid);
      setTimeout(reset, 200);
    };
    window.addEventListener("ms:loading", onReplay);
    return () => { clearTimeout(tid); window.removeEventListener("ms:loading", onReplay); };
  }, []);

  // GSAP scroll parallax (separate, doesn't block reveal)
  useEffect(() => {
    if (!heroRef.current) return;
    const tween = gsap.to(".hero-bg", {
      yPercent: 22, scale: 1.22, ease: "none",
      scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); };
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* Background video */}
      <div className="hero-bg absolute inset-0 will-change-transform">
        <video
          ref={videoRef}
          autoPlay loop muted playsInline preload="auto"
          poster={FALLBACK_STILL}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "grayscale(1) contrast(1.18) brightness(0.42)",
            transform: "scale(1.18)",
            transformOrigin: "center center",
          }}
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Tonal scrims */}
        <div className="hero-bg-scrim absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/35 to-ink"></div>
        <div className="absolute inset-0 bg-radial-vignette"></div>
        <div className="grain"></div>
      </div>

      {/* Top meta strip */}
      <div className="hero-meta absolute top-0 left-0 right-0 z-20 px-6 lg:px-10 pt-28 lg:pt-32 hidden md:flex items-center justify-between text-bone/55 font-mono text-[10.5px] tracking-widestest uppercase">
        <span className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-bone animate-pulse" />
          {t("openNow")} · {time}
        </span>
        <span>{SHOP.street}, {SHOP.city}</span>
        <span>N · 40.9276°  W · 74.0007°</span>
      </div>


      {/* Centered wordmark */}
      <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-10 min-h-[100svh] flex flex-col items-center justify-center text-center pt-28 lg:pt-32 pb-28">
        <div className="hero-eyebrow font-mono text-[11px] uppercase tracking-widestest text-bone/65 mb-8">
          {t("heroSubline")}
        </div>

        <h1 className="font-grotesk font-medium text-bone-100 leading-[0.92] tracking-tight uppercase select-none">
          <div className="hero-word hero-word-1 overflow-hidden block" style={{ fontSize: "clamp(2.6rem, 7.2vw, 7.5rem)", lineHeight: 0.95 }}>
            {splitWord(t("heroWord1"))}
          </div>
          <div className="hero-word hero-word-2 overflow-hidden block" style={{ fontSize: "clamp(2.6rem, 7.2vw, 7.5rem)", lineHeight: 0.95 }}>
            {splitWord(t("heroWord2"))}
          </div>
          <div className="hero-word hero-word-3 overflow-hidden block" style={{ fontSize: "clamp(1.6rem, 4.2vw, 4.4rem)", lineHeight: 0.95, letterSpacing: "0.06em", fontWeight: 400 }}>
            {splitWord(t("heroWord3"))}
          </div>
        </h1>

        {/* Centered tagline + CTAs (no left clumping) */}
        <p className="hero-blurb mt-8 max-w-md text-bone/70 text-[13.5px] leading-[1.75] text-balance">
          {t("heroBlurb")}
        </p>

        <div className="hero-cta-row mt-8 flex items-center gap-5">
          <a href="#visit" className="btn-primary">
            <span>{t("reserveChair")}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#services" className="text-bone/80 hover:text-bone font-mono text-[11px] tracking-widestest uppercase underline-link">
            {t("theMenu")} →
          </a>
        </div>
      </div>

      {/* Bottom-anchored stats row, distributed across full width */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 lg:px-10 pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="hero-stat flex items-end gap-3">
            <span className="tick text-bone-100 text-[44px] lg:text-[58px] font-light leading-none">21</span>
            <span className="font-mono uppercase tracking-widestest text-[10px] text-bone/55 mb-2 max-w-[10ch]">{t("yearsStanding")}</span>
          </div>
          <div className="hero-stat flex items-end gap-3">
            <span className="tick text-bone-100 text-[34px] lg:text-[44px] font-light leading-none">5.0★</span>
            <span className="font-mono uppercase tracking-widestest text-[10px] text-bone/55 mb-1.5 max-w-[12ch]">{t("reviewsSubLine")}</span>
          </div>
          <div className="hero-stat flex items-end gap-3">
            <span className="tick text-bone-100 text-[34px] lg:text-[44px] font-light leading-none">04</span>
            <span className="font-mono uppercase tracking-widestest text-[10px] text-bone/55 mb-1.5 max-w-[10ch]">{t("masterBarbers")}</span>
          </div>
          <div className="hero-stat flex flex-col items-start lg:items-end justify-end">
            <span className="font-mono uppercase tracking-widestest text-[10px] text-bone/55">{t("scrollStory")}</span>
            <div className="mt-2 w-[1px] h-10 bg-gradient-to-b from-bone/60 to-transparent relative">
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-bone animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
