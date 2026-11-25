// Illustration: Script-Based Engagement Reel
// Scene: script page with play triangle + writing instrument — flat geometric
export default function IllustrationScript() {
  return (
    <svg
      viewBox="0 0 270 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Illustration: script-based engagement reel"
      role="img"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Background */}
      <rect width="270" height="480" fill="#E8E3DA" />

      {/* Large script page — slightly angled */}
      <g transform="translate(135, 240) rotate(-4)">
        <rect x="-95" y="-160" width="190" height="240" rx="8" fill="#F5F2EC" stroke="#111111" strokeWidth="2.5" />
        {/* Script title bar */}
        <rect x="-95" y="-160" width="190" height="36" rx="8" fill="#111111" />
        <rect x="-95" y="-136" width="190" height="12" rx="0" fill="#111111" />
        {/* Title text placeholder blocks */}
        <rect x="-68" y="-148" width="80" height="8" rx="3" fill="#FF4D2E" />
        {/* Script lines */}
        <rect x="-72" y="-108" width="144" height="5" rx="2.5" fill="#111111" opacity="0.18" />
        <rect x="-72" y="-96" width="110" height="5" rx="2.5" fill="#111111" opacity="0.18" />
        <rect x="-72" y="-84" width="130" height="5" rx="2.5" fill="#111111" opacity="0.18" />
        <rect x="-72" y="-66" width="60" height="5" rx="2.5" fill="#FF4D2E" opacity="0.5" />
        <rect x="-72" y="-54" width="144" height="5" rx="2.5" fill="#111111" opacity="0.18" />
        <rect x="-72" y="-42" width="90" height="5" rx="2.5" fill="#111111" opacity="0.18" />
        <rect x="-72" y="-30" width="120" height="5" rx="2.5" fill="#111111" opacity="0.18" />
        <rect x="-72" y="-12" width="144" height="5" rx="2.5" fill="#111111" opacity="0.18" />
        <rect x="-72" y="0" width="80" height="5" rx="2.5" fill="#111111" opacity="0.18" />
        <rect x="-72" y="18" width="144" height="5" rx="2.5" fill="#111111" opacity="0.18" />
        <rect x="-72" y="30" width="100" height="5" rx="2.5" fill="#111111" opacity="0.18" />
        <rect x="-72" y="48" width="60" height="5" rx="2.5" fill="#FF4D2E" opacity="0.5" />
        <rect x="-72" y="60" width="144" height="5" rx="2.5" fill="#111111" opacity="0.18" />
      </g>

      {/* Play button — big circle overlay */}
      <circle cx="135" cy="240" r="52" fill="#FF4D2E" />
      <polygon points="122,220 122,260 162,240" fill="#ffffff" />

      {/* Pen / marker */}
      <g transform="translate(185, 130) rotate(35)">
        <rect x="-6" y="-70" width="12" height="90" rx="3" fill="#111111" />
        <rect x="-6" y="-78" width="12" height="12" rx="2" fill="#E8C4A0" />
        <polygon points="-6,20 6,20 0,38" fill="#FF4D2E" />
      </g>

      {/* Accent shape top-left */}
      <rect x="22" y="38" width="52" height="52" rx="8" fill="#FF4D2E" transform="rotate(15 48 64)" />
      <rect x="30" y="46" width="36" height="36" rx="4" fill="#E8C4A0" transform="rotate(15 48 64)" />

      {/* "HOOK >" label bottom */}
      <rect x="68" y="400" width="134" height="40" rx="20" fill="#111111" />
      <text x="102" y="426" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="16" fontWeight="700" fill="#F5F2EC" letterSpacing="1">HOOK →</text>

      {/* Small decorative circle */}
      <circle cx="52" cy="420" r="16" fill="#FF4D2E" opacity="0.6" />
      <circle cx="218" cy="88" r="12" fill="#111111" opacity="0.12" />
    </svg>
  );
}
