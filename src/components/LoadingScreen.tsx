import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";

/**
 * Full-screen overlay that animates the badge logo together piece-by-piece,
 * holds for a beat, then dissolves to reveal the page.
 *
 * Logo fills nearly the full viewport for max cinematic impact, with thin
 * meta strips at top + bottom for cinema-card feel.
 *
 * Triggers:
 *   - On initial mount of <App>
 *   - Every time the home/logo button is clicked (custom event 'ms:loading')
 */
export default function LoadingScreen() {
  const [active, setActive] = useState(true);   // whether we render the overlay at all
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");
  const [keyN, setKeyN] = useState(0);          // remount the SVG on every replay
  const counterRef = useRef<HTMLDivElement>(null);

  // Run the timeline every time `keyN` changes
  useEffect(() => {
    setActive(true);
    setPhase("in");
    const t1 = setTimeout(() => setPhase("hold"), 2600);
    const t2 = setTimeout(() => setPhase("out"), 3100);
    const t3 = setTimeout(() => setActive(false), 3850);
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 2800);
      const n = Math.round(t * 100);
      if (counterRef.current) counterRef.current.textContent = String(n).padStart(3, "0");
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); cancelAnimationFrame(raf); };
  }, [keyN]);

  // Listen for replay event
  useEffect(() => {
    const onReplay = () => setKeyN((n) => n + 1);
    window.addEventListener("ms:loading", onReplay);
    return () => window.removeEventListener("ms:loading", onReplay);
  }, []);

  // Lock scroll while loader is up
  useEffect(() => {
    if (active) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [active]);

  if (!active) return null;

  return (
    <div
      key={keyN}
      className={`loader-root ${phase === "out" ? "loader-out" : ""}`}
      aria-hidden="true"
    >
      {/* Top crop bars + meta */}
      <div className="loader-crop loader-crop-top" />
      <div className="loader-meta loader-meta-tl">
        <span className="dot-pulse" /> Loading the chair
      </div>
      <div className="loader-meta loader-meta-tr">
        Bergenfield, NJ
      </div>

      {/* Centered badge */}
      <div className="loader-stage">
        <div className={`loader-badge stage-${phase}`}>
          <Logo />
        </div>
      </div>

      {/* Bottom: counter + fill bar + tagline */}
      <div className="loader-foot">
        <div className="loader-foot-row">
          <div className="loader-counter" ref={counterRef}>000</div>
          <div className="loader-bar"><span /></div>
          <div className="loader-pct">/ 100</div>
        </div>
        <div className="loader-tag">Sharp cuts · Quiet rooms · Old Main Street</div>
      </div>
      <div className="loader-crop loader-crop-bot" />

      {/* Film grain */}
      <div className="grain" />
    </div>
  );
}
