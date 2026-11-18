/**
 * MYFITNESS GYM logo — original SVG artwork.
 * Emblem: a weight-plate octagon holding a peak-shaped "M" over a barbell bar.
 * Wordmark: bold condensed MYFITNESS with a tracked "GYM" and a gold hairline.
 */
export default function Logo({ compact = false, height = 44, className = '' }) {
  const ratio = compact ? 1 : 262 / 56;
  const fontStack = "'Barlow Condensed','Oswald','Arial Narrow',Impact,sans-serif";

  return (
    <svg
      className={`logo ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={compact ? '0 0 56 56' : '0 0 262 56'}
      width={Math.round(height * ratio)}
      height={height}
      role="img"
      aria-label="MYFITNESS GYM"
    >
      <title>MYFITNESS GYM</title>

      <g fill="none" stroke="#D6AE65">
        <polygon
          points="16,2 40,2 54,16 54,40 40,54 16,54 2,40 2,16"
          strokeWidth="2.5"
        />
        <polyline
          points="14,40 14,17 28,31 42,17 42,40"
          strokeWidth="5"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
        />
        <line x1="14" y1="46" x2="42" y2="46" strokeWidth="2" />
      </g>

      {!compact && (
        <g>
          <text
            x="68"
            y="35"
            fill="#F5F3EF"
            fontFamily={fontStack}
            fontWeight="800"
            fontSize="36"
            textLength="190"
            lengthAdjust="spacingAndGlyphs"
          >
            MYFITNESS
          </text>
          <text
            x="68"
            y="52"
            fill="#D6AE65"
            fontFamily={fontStack}
            fontWeight="700"
            fontSize="12"
            letterSpacing="6"
          >
            GYM
          </text>
          <line x1="106" y1="47.5" x2="258" y2="47.5" stroke="#D6AE65" strokeWidth="1" />
        </g>
      )}
    </svg>
  );
}
