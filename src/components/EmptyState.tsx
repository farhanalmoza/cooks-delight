import type { ReactNode } from 'react'

export default function EmptyState({
  title,
  description,
  action,
}: {
  title: string
  description?: string
  action?: ReactNode
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-4xl border border-dashed border-dark/24 py-24 text-center">
      <p className="text-header-3 font-montserrat text-dark">{title}</p>
      {description && <p className="text-paragraph-2 text-dark/60">{description}</p>}
      {action}
    </div>
  )
}
