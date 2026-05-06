import type { SVGProps } from "react";

/**
 * Main St. Barbershop badge — animatable SVG recreation of the brand mark.
 *
 * Layout (viewBox 600 x 320):
 *   - Cartouche outline with concave-notched ends (bottle-cap silhouette)
 *   - Inner thin border
 *   - Top + bottom hairlines flanking the typography block
 *   - Crossed scissors + razor crest at the top center
 *   - "MAIN ST." big slab caps
 *   - "BARBERSHOP" letter-spaced slab caps
 *   - "EST. 2004" tiny spaced caps
 *   - Two small dots on left/right at vertical midline
 *
 * Each part has a stable class for the LoadingScreen build-up animation.
 */
export default function Logo({
  inverted = false,
  className = "",
  ...rest
}: { inverted?: boolean; className?: string } & SVGProps<SVGSVGElement>) {
  const fill = inverted ? "#0A0A0A" : "#EFE9DD";
  const back = inverted ? "#EFE9DD" : "#0A0A0A";

  // Cartouche outline — wide rounded body with notched concave bites at four corners
  // (gives it the bottle-cap / vintage-sign silhouette of the real logo)
  const cartouche =
    "M48,40 " +
    "L72,40 " +
    "C76,40 78,38 78,32 " +
    "L78,28 " +
    "C78,22 80,20 84,20 " +
    "L516,20 " +
    "C520,20 522,22 522,28 " +
    "L522,32 " +
    "C522,38 524,40 528,40 " +
    "L552,40 " +
    "C572,40 588,68 588,160 " +
    "C588,252 572,280 552,280 " +
    "L528,280 " +
    "C524,280 522,282 522,288 " +
    "L522,292 " +
    "C522,298 520,300 516,300 " +
    "L84,300 " +
    "C80,300 78,298 78,292 " +
    "L78,288 " +
    "C78,282 76,280 72,280 " +
    "L48,280 " +
    "C28,280 12,252 12,160 " +
    "C12,68 28,40 48,40 Z";

  // Inner border path - inset version
  const cartoucheInner =
    "M58,52 " +
    "L80,52 C84,52 86,50 86,46 " +
    "L86,42 C86,38 88,36 92,36 " +
    "L508,36 C512,36 514,38 514,42 " +
    "L514,46 C514,50 516,52 520,52 " +
    "L542,52 " +
    "C558,52 572,80 572,160 " +
    "C572,240 558,268 542,268 " +
    "L520,268 C516,268 514,270 514,274 " +
    "L514,278 C514,282 512,284 508,284 " +
    "L92,284 C88,284 86,282 86,278 " +
    "L86,274 C86,270 84,268 80,268 " +
    "L58,268 " +
    "C42,268 28,240 28,160 " +
    "C28,80 42,52 58,52 Z";

  return (
    <svg
      viewBox="0 0 600 320"
      xmlns="http://www.w3.org/2000/svg"
      className={`logo-root ${className}`}
      role="img"
      aria-label="Main St. Barbershop · Est. 2004"
      {...rest}
    >
      {/* Solid backdrop */}
      <path d={cartouche} fill={back} className="logo-bg" />

      {/* Outer border */}
      <path
        d={cartouche}
        fill="none"
        stroke={fill}
        strokeWidth="2.6"
        className="logo-stroke logo-stroke-outer"
      />
      {/* Inner border */}
      <path
        d={cartoucheInner}
        fill="none"
        stroke={fill}
        strokeWidth="1"
        className="logo-stroke logo-stroke-inner"
      />

      {/* Top hairline divider */}
      <line
        x1="120" y1="118" x2="480" y2="118"
        stroke={fill} strokeWidth="0.9"
        className="logo-rule logo-rule-top"
      />

      {/* Bottom hairline divider */}
      <line
        x1="120" y1="232" x2="480" y2="232"
        stroke={fill} strokeWidth="0.9"
        className="logo-rule logo-rule-bot"
      />

      {/* Side dots */}
      <circle cx="46" cy="160" r="3.6" fill={fill} className="logo-dot logo-dot-l" />
      <circle cx="554" cy="160" r="3.6" fill={fill} className="logo-dot logo-dot-r" />

      {/* Crest — crossed razor + scissors */}
      <g className="logo-crest" transform="translate(300 80)">
        {/* Straight razor (left, rotated up-right) */}
        <g transform="rotate(-28)">
          <rect x="-32" y="-2.5" width="50" height="3" fill={fill} />
          <rect x="-36" y="-2.5" width="4" height="3" fill={fill} />
          <rect x="18" y="-3.5" width="14" height="5" fill={fill} rx="0.5" />
        </g>
        {/* Scissors (right, rotated up-left) */}
        <g transform="rotate(28)" stroke={fill} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Bow (handle ring) */}
          <circle cx="-30" cy="-4" r="6.5" fill={fill} stroke="none" />
          <circle cx="-30" cy="-4" r="2.8" fill={back} stroke="none" />
          <circle cx="-30" cy="6" r="6.5" fill={fill} stroke="none" />
          <circle cx="-30" cy="6" r="2.8" fill={back} stroke="none" />
          {/* Blades */}
          <path d="M-23,-4 L24,-1" stroke={fill} strokeWidth="2.4" />
          <path d="M-23,6 L24,3" stroke={fill} strokeWidth="2.4" />
          {/* Tips */}
          <path d="M22 -4 L30 1 L22 2 Z" fill={fill} stroke="none" />
          <path d="M22 8 L30 1 L22 2 Z" fill={fill} stroke="none" />
        </g>
      </g>

      {/* MAIN ST. — slab serif, heavy weight to match real badge */}
      <text
        x="300" y="186"
        textAnchor="middle"
        fontFamily="'Roboto Slab', Georgia, serif"
        fontWeight="900"
        fontSize="80"
        letterSpacing="-1"
        fill={fill}
        className="logo-main"
      >
        MAIN ST.
      </text>

      {/* BARBERSHOP — slab caps, letter-spaced */}
      <text
        x="300" y="220"
        textAnchor="middle"
        fontFamily="'Roboto Slab', Georgia, serif"
        fontWeight="700"
        fontSize="22"
        letterSpacing="8"
        fill={fill}
        className="logo-barber"
      >
        BARBERSHOP
      </text>

      {/* EST. 2004 — tiny spaced caps */}
      <text
        x="300" y="258"
        textAnchor="middle"
        fontFamily="'Roboto Slab', Georgia, serif"
        fontWeight="500"
        fontSize="11"
        letterSpacing="6"
        fill={fill}
        className="logo-est"
      >
        EST. 2004
      </text>
    </svg>
  );
}
