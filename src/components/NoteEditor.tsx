import { useEffect, useState } from 'react'

export default function NoteEditor({
  value,
  onSave,
}: {
  value: string
  onSave: (note: string) => void
}) {
  const [draft, setDraft] = useState(value)

  useEffect(() => {
    setDraft(value)
  }, [value])

  return (
    <textarea
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={() => {
        if (draft !== value) onSave(draft)
      }}
      placeholder="Tulis catatan pribadimu tentang resep ini..."
      rows={3}
      className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
    />
  )
}
