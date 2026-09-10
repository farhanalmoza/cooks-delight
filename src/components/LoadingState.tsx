export default function LoadingState({ label = 'Memuat...' }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-dark/60">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-dark/16 border-t-primary-3" />
      <p className="text-paragraph-2">{label}</p>
    </div>
  )
}
