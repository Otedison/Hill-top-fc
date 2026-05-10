export function Shield({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 38 44" aria-hidden="true">
      <path
        d="M19 1 L37 6 V22 C37 33 28 41 19 43 C10 41 1 33 1 22 V6 Z"
        fill="oklch(0.22 0.04 145)"
        stroke="oklch(0.85 0.17 90)"
        strokeWidth="2"
      />
      <text
        x="19"
        y="27"
        textAnchor="middle"
        fontFamily="Bitter, serif"
        fontWeight="900"
        fontSize="13"
        fill="oklch(0.85 0.17 90)"
      >
        HFC
      </text>
    </svg>
  );
}
