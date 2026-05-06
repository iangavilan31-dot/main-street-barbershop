import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import LangSwitch from "./LangSwitch";

/**
 * Hero. Just the video + a translucent logo overlay.
 * No headline, no copy, no CTAs — the menu / nav handles navigation.
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
  const [videoSrc, setVideoSrc] = useState<string>(FALLBACK_VIDEO);
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    fetch("/hero.mp4", { method: "HEAD" })
      .then((r) => {
        if (r.ok && (r.headers.get("content-type") || "").includes("video")) {
          setVideoSrc("/hero.mp4");
        }
      })
      .catch(() => {});
  }, []);

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

  // Reveal — fade logo in to translucent rest state after the loader exits
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
      {/* Video — visible, lightly graded */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay loop muted playsInline preload="auto"
          poster={FALLBACK_STILL}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: "grayscale(1) contrast(1.05) brightness(0.55)",
            transform: "scale(1.06)",
            transformOrigin: "center center",
          }}
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        {/* Soft edge vignette only — keep the video readable */}
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none"></div>
      </div>

      {/* Translucent logo overlay — only thing on top of the video */}
      <div className="relative z-10 min-h-[100svh] flex items-center justify-center px-6">
        <div className="hero-badge w-[clamp(280px,46vw,640px)] select-none pointer-events-none">
          <Logo />
        </div>
      </div>

      {/* Bottom EN/ES toggle */}
      <div className="hero-lang absolute bottom-8 left-0 right-0 z-20 flex justify-center pointer-events-none">
        <div className="pointer-events-auto">
          <LangSwitch tone="dark" />
        </div>
      </div>
    </section>
  );
}
