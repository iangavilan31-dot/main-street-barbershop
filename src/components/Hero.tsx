import { useEffect, useRef, useState } from "react";
import { useI18n } from "../lib/i18n";
import Logo from "./Logo";

/**
 * Hero. Video plays quietly behind a single centered Logo badge.
 * No giant wordmark, no meta strip, no stats row — the badge IS the hero.
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

export default function Hero() {
  const { t } = useI18n();
  const [videoSrc, setVideoSrc] = useState<string>(FALLBACK_VIDEO);
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  // Aggressively keep video playing (autoplay restrictions vary by browser)
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

  // Reveal after loader exits
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

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-ink"
    >
      {/* Background video — kept playing, dimmed */}
      <div className="hero-bg absolute inset-0">
        <video
          ref={videoRef}
          autoPlay loop muted playsInline preload="auto"
          poster={FALLBACK_STILL}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "grayscale(1) contrast(1.10) brightness(0.30)",
            transform: "scale(1.12)",
            transformOrigin: "center center",
          }}
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Heavier scrim so the video is mood, not subject */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/40 to-ink/85"></div>
        <div className="absolute inset-0 bg-radial-vignette"></div>
      </div>

      {/* Centered badge — only thing in the hero */}
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 lg:px-10 min-h-[100svh] flex flex-col items-center justify-center text-center">
        <div className="hero-badge w-[clamp(280px,46vw,640px)] select-none">
          <Logo />
        </div>

        <p className="hero-blurb mt-12 max-w-[36ch] text-bone/70 text-[13.5px] leading-[1.7] text-balance">
          {t("heroBlurb")}
        </p>

        <div className="hero-cta-row mt-8 flex items-center gap-6">
          <a href="#visit" className="btn-primary">
            <span>{t("reserveChair")}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#services" className="text-bone/70 hover:text-bone font-mono text-[11px] tracking-widestest uppercase underline-link">
            {t("theMenu")} →
          </a>
        </div>
      </div>
    </section>
  );
}
