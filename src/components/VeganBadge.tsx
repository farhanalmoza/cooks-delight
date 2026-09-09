export default function VeganBadge({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        <path id="vegan-badge-circle" d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0" />
      </defs>
      <circle cx="50" cy="50" r="49" className="fill-primary-1" />
      <text fontSize="10.35" fontWeight="700" letterSpacing="0.5" className="fill-dark uppercase">
        <textPath href="#vegan-badge-circle" startOffset="0%">
          Vegan
        </textPath>
        <textPath href="#vegan-badge-circle" startOffset="50%">
          Vegan
        </textPath>
      </text>
      <text x="50" y="55" textAnchor="middle" fontSize="20">
        🌿
      </text>
    </svg>
  )
}
