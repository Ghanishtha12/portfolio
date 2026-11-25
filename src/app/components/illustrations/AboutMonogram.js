// Monogram / Typographic Art Block for About Section
// Vector only, geometric shapes + typography
export default function AboutMonogram() {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Abstract Monogram GK"
      role="img"
      style={{ width: '100%', height: 'auto', maxHeight: 480 }}
    >
      <rect width="500" height="500" rx="24" fill="#E8E3DA" />
      
      {/* Background geometric accents */}
      <circle cx="120" cy="120" r="80" fill="#FF4D2E" opacity="0.15" />
      <rect x="260" y="240" width="180" height="180" rx="16" fill="#111111" opacity="0.04" />
      <circle cx="380" cy="140" r="40" fill="#FF4D2E" />

      {/* Large GK typography */}
      <text
        x="60"
        y="340"
        fontFamily="'Bricolage Grotesque', sans-serif"
        fontSize="210"
        fontWeight="800"
        letterSpacing="-12"
        fill="#111111"
      >
        G
      </text>
      <text
        x="220"
        y="370"
        fontFamily="'Bricolage Grotesque', sans-serif"
        fontSize="210"
        fontWeight="800"
        letterSpacing="-12"
        fill="#FF4D2E"
      >
        K
      </text>

      {/* Editorial badge stamp */}
      <g transform="translate(70, 70)">
        <rect width="110" height="28" rx="14" fill="#111111" />
        <text
          x="55"
          y="18"
          textAnchor="middle"
          fontFamily="'Inter', sans-serif"
          fontSize="10"
          fontWeight="700"
          letterSpacing="1.5"
          fill="#F5F2EC"
        >
          CREATIVE
        </text>
      </g>

      {/* Geometric diagonal cut line */}
      <line x1="60" y1="420" x2="440" y2="420" stroke="#111111" strokeWidth="2" strokeDasharray="6 6" />

      <text
        x="60"
        y="450"
        fontFamily="'Inter', sans-serif"
        fontSize="12"
        fontWeight="600"
        letterSpacing="2"
        fill="rgba(17,17,17,0.5)"
        textTransform="uppercase"
      >
        Logic × Storytelling
      </text>
    </svg>
  );
}
