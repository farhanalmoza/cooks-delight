import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
      <p className="text-3xl font-bold text-slate-800">404</p>
      <p className="text-sm text-slate-500">Halaman tidak ditemukan.</p>
      <Link to="/" className="text-sm font-medium text-orange-600 hover:underline">
        Kembali ke Home
      </Link>
    </div>
  )
}
