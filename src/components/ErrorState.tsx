export default function ErrorState({
  message,
  onRetry,
}: {
  message: string
  onRetry?: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-4xl border border-primary-3/40 bg-primary-3/10 py-24 text-center">
      <p className="text-paragraph-2 font-medium text-primary-3">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="rounded-full bg-dark px-6 py-3 text-button font-roboto uppercase tracking-wide text-light transition-colors hover:bg-dark/90"
        >
          Coba lagi
        </button>
      )}
    </div>
  )
}
