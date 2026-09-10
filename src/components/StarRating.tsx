export default function StarRating({
  value,
  onChange,
}: {
  value: number
  onChange: (rating: number) => void
}) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star === value ? 0 : star)}
          aria-label={`Beri rating ${star} bintang`}
          className={`text-2xl leading-none transition-colors ${
            star <= value ? 'text-primary-2' : 'text-dark/16 hover:text-primary-2/60'
          }`}
        >
          ★
        </button>
      ))}
    </div>
  )
}
