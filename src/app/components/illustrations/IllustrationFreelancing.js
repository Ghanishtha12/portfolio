// Illustration: Freelancing POV reel
// Scene: laptop + overflowing clock + coffee cup — flat geometric
export default function IllustrationFreelancing() {
  return (
    <svg
      viewBox="0 0 270 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Illustration: freelancing expectations vs reality"
      role="img"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Background */}
      <rect width="270" height="480" fill="#E8E3DA" />

      {/* Desk surface */}
      <rect x="0" y="300" width="270" height="180" fill="#E8C4A0" />

      {/* Laptop body */}
      <rect x="40" y="200" width="190" height="120" rx="8" fill="#111111" />
      <rect x="52" y="212" width="166" height="96" rx="4" fill="#FF4D2E" opacity="0.15" />
      {/* Screen content lines */}
      <rect x="62" y="224" width="80" height="6" rx="3" fill="#FF4D2E" opacity="0.7" />
      <rect x="62" y="236" width="120" height="4" rx="2" fill="#111111" opacity="0.3" />
      <rect x="62" y="246" width="90" height="4" rx="2" fill="#111111" opacity="0.3" />
      <rect x="62" y="256" width="110" height="4" rx="2" fill="#111111" opacity="0.3" />
      <rect x="62" y="274" width="60" height="20" rx="4" fill="#FF4D2E" />
      {/* Laptop hinge / base */}
      <rect x="20" y="318" width="230" height="10" rx="5" fill="#111111" />

      {/* Clock — large, slightly tilted */}
      <g transform="translate(165, 155) rotate(12)">
        <circle cx="0" cy="0" r="52" fill="#F5F2EC" stroke="#111111" strokeWidth="4" />
        <circle cx="0" cy="0" r="4" fill="#111111" />
        {/* Hour hand pointing up-right */}
        <line x1="0" y1="0" x2="18" y2="-28" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
        {/* Minute hand pointing right */}
        <line x1="0" y1="0" x2="34" y2="8" stroke="#FF4D2E" strokeWidth="3" strokeLinecap="round" />
        {/* Clock ticks */}
        <line x1="0" y1="-44" x2="0" y2="-38" stroke="#111111" strokeWidth="3" strokeLinecap="round" />
        <line x1="0" y1="44" x2="0" y2="38" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
        <line x1="44" y1="0" x2="38" y2="0" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
        <line x1="-44" y1="0" x2="-38" y2="0" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Coffee cup */}
      <g transform="translate(50, 310)">
        {/* Cup body */}
        <path d="M10 0 L60 0 L52 56 L18 56 Z" fill="#F5F2EC" stroke="#111111" strokeWidth="3" strokeLinejoin="round" />
        {/* Handle */}
        <path d="M60 10 Q82 10 82 28 Q82 46 60 46" stroke="#111111" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Steam lines */}
        <path d="M28 -12 Q32 -20 28 -28" stroke="#FF4D2E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M42 -8 Q46 -18 42 -26" stroke="#FF4D2E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Coffee liquid */}
        <ellipse cx="35" cy="10" rx="22" ry="6" fill="#E8C4A0" />
      </g>

      {/* "FREE?" text block — small frustrated label */}
      <rect x="80" y="118" width="80" height="30" rx="6" fill="#FF4D2E" />
      <text x="90" y="138" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="13" fontWeight="700" fill="#ffffff">FREEDOM?</text>

      {/* Scattered paper */}
      <rect x="30" y="340" width="50" height="38" rx="2" fill="#F5F2EC" stroke="#111111" strokeWidth="1.5" transform="rotate(-8 55 359)" />
      <rect x="170" y="345" width="50" height="38" rx="2" fill="#F5F2EC" stroke="#111111" strokeWidth="1.5" transform="rotate(6 195 364)" />

      {/* Accent dot top-right */}
      <circle cx="238" cy="42" r="20" fill="#FF4D2E" />
      <circle cx="238" cy="42" r="10" fill="#E8C4A0" />
    </svg>
  );
}
