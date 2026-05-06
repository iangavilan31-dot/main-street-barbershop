import type { SVGProps } from "react";

export function Swallow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 90" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M100 18c-4-7-12-12-22-13-15-1.5-31 6-44 18-2 2-1 4 2 4 14 0 28 4 39 12 4 3 8 6 11 9 1 1 3 1 4 0 3-3 7-6 11-9 11-8 25-12 39-12 3 0 4-2 2-4-13-12-29-19.5-44-18-10 1-18 6-22 13l4 7c1 2-1 3-2 1l-4-6-4 6c-1 2-3 1-2-1l4-7zM26 31c8-1 16 1 24 5 1 0 1 2-1 2-9 0-19 3-25 7-2 1-3 0-2-1l4-13zM174 31c-8-1-16 1-24 5-1 0-1 2 1 2 9 0 19 3 25 7 2 1 3 0 2-1l-4-13zM92 60l-2 18c0 1 1 2 2 1l8-12 8 12c1 1 2 0 2-1l-2-18c-3 1-5 2-8 2s-5-1-8-2z" />
    </svg>
  );
}

export function Scissors(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="14" cy="14" r="6" />
      <circle cx="14" cy="50" r="6" />
      <path d="M19 19l34 26M19 45l34-26M32 32l8 4M32 32l-2 1" />
    </svg>
  );
}

export function Razor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" {...props}>
      <path d="M6 38l34-32 4 4-32 34c-3 3-9 3-9-2v-1c0-1 1-2 3-3z" />
      <path d="M40 6l16 16M48 14l-8 8" />
    </svg>
  );
}

export function BarberPole(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 100" fill="none" stroke="currentColor" strokeWidth="1.2" {...props}>
      <rect x="6" y="10" width="20" height="80" rx="2" />
      <circle cx="16" cy="6" r="4" />
      <circle cx="16" cy="94" r="4" />
      <path d="M6 20l20 20M6 35l20 20M6 50l20 20M6 65l20 20" />
    </svg>
  );
}

export function Star(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l2.6 7.3L22 10l-6 5 2 8-6-4-6 4 2-8-6-5 7.4-.7z" />
    </svg>
  );
}

export function Flourish(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 30" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" {...props}>
      <path d="M0 15h130" />
      <path d="M320 15H190" />
      <path d="M135 15c5 5 10 5 15 0s10-5 15 0M165 15c5 5 10 5 15 0s10-5 15 0" />
      <circle cx="160" cy="15" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function CircleStamp({ text = "MAIN STREET · BARBERSHOP · BERGENFIELD · NJ · ", className = "", size = 160 }: { text?: string; className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 200 200" width={size} height={size} className={className}>
      <defs>
        <path id="circle-path" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
      </defs>
      <text fontFamily='"JetBrains Mono", monospace' fontSize="11" letterSpacing="3" fill="currentColor">
        <textPath href="#circle-path">{text.repeat(2)}</textPath>
      </text>
      <circle cx="100" cy="100" r="56" fill="none" stroke="currentColor" strokeWidth="0.8" />
      <text x="100" y="92" textAnchor="middle" fontFamily='"Bodoni Moda", serif' fontSize="22" fontStyle="italic" fill="currentColor">Est.</text>
      <text x="100" y="120" textAnchor="middle" fontFamily='"Bodoni Moda", serif' fontSize="36" fontWeight="700" fill="currentColor">2004</text>
    </svg>
  );
}
