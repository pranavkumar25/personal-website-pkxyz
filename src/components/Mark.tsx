type MarkProps = {
  size?: number;
  variant?: "square" | "lockup";
  className?: string;
};

/**
 * Primary brand mark. Square Midnight field with the [pranav lockup.
 * Bracket in Signal blue. Word in Bone. Proportions are fixed (per guidelines).
 */
export function Mark({ size = 40, variant = "square", className = "" }: MarkProps) {
  if (variant === "lockup") {
    return (
      <svg
        viewBox="0 0 220 56"
        width={size * 3.92}
        height={size}
        role="img"
        aria-label="pranav"
        className={className}
        fill="none"
      >
        <BracketAndWord />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      role="img"
      aria-label="pranav"
      className={className}
    >
      <rect width="64" height="64" fill="#000023" />
      <g transform="translate(8 22)">
        <svg viewBox="0 0 220 56" width="48" height="20" preserveAspectRatio="xMinYMid meet">
          <BracketAndWord />
        </svg>
      </g>
    </svg>
  );
}

function BracketAndWord() {
  return (
    <g>
      {/* bracket [   Signal */}
      <path
        d="M2 4 H16 V10 H8 V46 H16 V52 H2 Z"
        fill="#367AFF"
      />
      {/* word "pranav"   set in LT Superior so it inherits the loaded font on the page */}
      <text
        x="22"
        y="40"
        fontFamily="'LT Superior', system-ui, sans-serif"
        fontWeight={500}
        fontSize="34"
        letterSpacing="-0.5"
        fill="#FDFDF8"
      >
        pranav
      </text>
    </g>
  );
}
