import { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const menuItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/recipes', label: 'Recipes', end: false },
  { to: '/cooking-tips', label: 'Cooking Tips', end: false },
  { to: '/about', label: 'About Us', end: false },
]

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus()
  }, [searchOpen])

  function submitSearch() {
    const trimmed = query.trim()
    if (trimmed) {
      navigate(`/recipes?search=${encodeURIComponent(trimmed)}`)
    }
    setSearchOpen(false)
    setQuery('')
  }

  return (
    <header className="mb-4 px-6 py-4 border border-dark/24 rounded-4xl">
      <div className="mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4">
        <NavLink to="/" className="flex w-fit items-center gap-2 text-md font-bold text-dark tracking-normal">
          <img src="/logo.svg" alt="Cooks Delight" className="h-10 w-10" />
          <span className="flex flex-col leading-none">
            <span>Cooks</span>
            <span>Delight</span>
          </span>
        </NavLink>
        <nav className="flex items-center justify-center gap-8 -mb-2">
          {menuItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {({ isActive }) => (
                <span className="flex flex-col items-center gap-2">
                  <span
                    className={`text-sm uppercase tracking-wide transition-colors ${
                      isActive ? 'font-bold text-dark' : 'font-medium text-dark/40 hover:text-dark/70'
                    }`}
                  >
                    {item.label}
                  </span>
                  <span
                    className={`h-1 w-full rounded-b-xs transition-colors -mt-1 ${
                      isActive ? 'bg-primary-3' : 'bg-transparent'
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-3">
          <div className="relative flex items-center">
            <button
              type="button"
              aria-label="Cari"
              onClick={() => setSearchOpen((open) => !open)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dark/8 text-dark transition-colors hover:bg-dark/12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            {searchOpen && (
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') submitSearch()
                  if (e.key === 'Escape') {
                    setSearchOpen(false)
                    setQuery('')
                  }
                }}
                onBlur={() => {
                  if (!query.trim()) setSearchOpen(false)
                }}
                placeholder="Cari resep..."
                className="absolute right-full top-1/2 z-10 mr-2 h-11 w-56 -translate-y-1/2 rounded-full border border-dark/24 bg-light px-4 text-sm text-dark shadow-md placeholder:text-dark/40 focus:outline-none"
              />
            )}
          </div>
          <button
            type="button"
            className="rounded-full bg-dark px-6 py-3 text-sm font-bold uppercase tracking-wide text-light transition-colors hover:bg-dark/90"
          >
            Subscribe
          </button>
        </div>
      </div>
    </header>
  )
}
