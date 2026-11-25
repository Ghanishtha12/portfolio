// Illustration: Relatable Content Reel
// Scene: stylized social-app shapes, reaction bubbles, "this is so me" energy
export default function IllustrationRelatable() {
  return (
    <svg
      viewBox="0 0 270 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Illustration: relatable content reel"
      role="img"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Background */}
      <rect width="270" height="480" fill="#E8E3DA" />

      {/* Large phone screen inner — simulated feed */}
      <rect x="30" y="60" width="210" height="300" rx="12" fill="#F5F2EC" stroke="#111111" strokeWidth="2" />

      {/* Post header bar */}
      <circle cx="58" cy="90" r="16" fill="#E8C4A0" />
      <rect x="82" y="80" width="80" height="8" rx="4" fill="#111111" opacity="0.2" />
      <rect x="82" y="94" width="50" height="6" rx="3" fill="#111111" opacity="0.12" />

      {/* Post image block */}
      <rect x="30" y="114" width="210" height="160" fill="#E8C4A0" />
      {/* Person silhouette — simple geometric */}
      <circle cx="135" cy="155" r="26" fill="#111111" opacity="0.75" />
      <ellipse cx="135" cy="215" rx="40" ry="28" fill="#111111" opacity="0.75" />

      {/* Reaction bubbles — floating */}
      <g transform="translate(240, 185)">
        <circle cx="0" cy="0" r="22" fill="#FF4D2E" />
        <text x="0" y="7" textAnchor="middle" fontSize="20">😂</text>
      </g>
      <g transform="translate(28, 170)">
        <circle cx="0" cy="0" r="18" fill="#111111" />
        <text x="0" y="6" textAnchor="middle" fontSize="16">❤️</text>
      </g>
      <g transform="translate(50, 285)">
        <circle cx="0" cy="0" r="20" fill="#E8C4A0" stroke="#111111" strokeWidth="2" />
        <text x="0" y="7" textAnchor="middle" fontSize="18">🔥</text>
      </g>

      {/* Post actions bar */}
      <rect x="38" y="282" width="150" height="8" rx="4" fill="#111111" opacity="0.08" />
      <rect x="38" y="298" width="80" height="6" rx="3" fill="#111111" opacity="0.08" />

      {/* Comment bubble — "this is so me" */}
      <rect x="38" y="318" width="194" height="36" rx="10" fill="#111111" />
      <text x="52" y="340" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="13" fontWeight="600" fill="#F5F2EC">this is SO me 😭</text>

      {/* Big "SOO RELATABLE" text below */}
      <rect x="0" y="386" width="270" height="94" fill="#FF4D2E" />
      <text x="22" y="424" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="22" fontWeight="800" fill="#ffffff">SOO</text>
      <text x="22" y="454" fontFamily="'Bricolage Grotesque', sans-serif" fontSize="22" fontWeight="800" fill="#ffffff">RELATABLE.</text>

      {/* Top decorative bar */}
      <rect x="0" y="0" width="270" height="52" fill="#111111" />
      <circle cx="135" cy="26" r="10" fill="#FF4D2E" />
      <circle cx="40" cy="26" r="6" fill="#E8C4A0" opacity="0.5" />
      <circle cx="230" cy="26" r="6" fill="#E8C4A0" opacity="0.5" />
    </svg>
  );
}
