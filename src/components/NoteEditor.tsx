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
      className="w-full resize-none rounded-2xl border border-dark/16 px-4 py-3 text-paragraph-2 text-dark placeholder:text-dark/40 focus:border-primary-3 focus:outline-none"
    />
  )
}
