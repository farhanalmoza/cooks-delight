import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const menuItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/recipes', label: 'Recipes', end: false },
  { to: '/cooking-tips', label: 'Cooking Tips', end: false },
  { to: '/about', label: 'About Us', end: false },
]

const socialLinks = [
  { href: 'https://facebook.com', icon: '/icons/ic_baseline-facebook.svg', label: 'Facebook' },
  { href: 'https://instagram.com', icon: '/icons/ic_baseline-instagram.svg', label: 'Instagram' },
  { href: 'https://youtube.com', icon: '/icons/ic_baseline-youtube.svg', label: 'YouTube' },
]

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg
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
  )
}

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const mobileInputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    if (mobileSearchOpen) mobileInputRef.current?.focus()
  }, [mobileSearchOpen])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!mobileMenuOpen) setMobileSearchOpen(false)
  }, [mobileMenuOpen])

  function submitSearch(closeMobileMenu = false) {
    const trimmed = query.trim()
    if (trimmed) {
      navigate(`/recipes?search=${encodeURIComponent(trimmed)}`)
    }
    setSearchOpen(false)
    setMobileSearchOpen(false)
    setQuery('')
    if (closeMobileMenu) setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-4 z-40 mb-4 border border-dark/24 rounded-4xl bg-background px-6 py-4">
      <div className="mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <NavLink to="/" className="flex w-fit items-center gap-2 text-md font-bold text-dark tracking-normal">
          <img src="/logo.svg" alt="Cooks Delight" className="h-10 w-10" />
          <span className="flex flex-col leading-none">
            <span>Cooks</span>
            <span>Delight</span>
          </span>
        </NavLink>
        <nav className="hidden items-center justify-center gap-8 -mb-2 md:flex">
          {menuItems.map((item) => {
            const forcedActive = item.to === '/recipes' && location.pathname.startsWith('/recipe/')
            return (
              <NavLink key={item.to} to={item.to} end={item.end}>
                {({ isActive }) => {
                  const active = isActive || forcedActive
                  return (
                    <span className="flex flex-col items-center gap-2">
                      <span
                        className={`text-sm uppercase tracking-wide transition-colors ${
                          active ? 'font-bold text-dark' : 'font-medium text-dark/40 hover:text-dark/70'
                        }`}
                      >
                        {item.label}
                      </span>
                      <span
                        className={`h-1 w-full rounded-b-xs transition-colors -mt-1 ${
                          active ? 'bg-primary-3' : 'bg-transparent'
                        }`}
                      />
                    </span>
                  )
                }}
              </NavLink>
            )
          })}
        </nav>
        <div className="col-start-3 flex items-center justify-end gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <div className="relative flex items-center">
              <button
                type="button"
                aria-label="Cari"
                onClick={() => setSearchOpen((open) => !open)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dark/8 text-dark transition-colors hover:bg-dark/12"
              >
                <SearchIcon />
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
            <a
              href="#subscribe"
              className="rounded-full bg-dark px-6 py-3 text-sm font-bold uppercase tracking-wide text-light transition-colors hover:bg-dark/90"
            >
              Subscribe
            </a>
          </div>

          <button
            type="button"
            aria-label="Buka menu"
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-dark/8 text-dark transition-colors hover:bg-dark/12 md:hidden"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-dark px-6 py-4 md:hidden">
          <div className="flex items-center justify-between">
            <NavLink
              to="/"
              className="flex w-fit items-center gap-2 text-md font-bold text-light tracking-normal"
            >
              <img src="/logo.svg" alt="Cooks Delight" className="h-10 w-10" />
              <span className="flex flex-col leading-none">
                <span>Cooks</span>
                <span>Delight</span>
              </span>
            </NavLink>
            <button
              type="button"
              aria-label="Tutup menu"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-light/10 text-primary-2 transition-colors hover:bg-light/20"
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="mt-16 flex flex-col">
            {menuItems.map((item) => {
              const forcedActive = item.to === '/recipes' && location.pathname.startsWith('/recipe/')
              return (
                <NavLink key={item.to} to={item.to} end={item.end}>
                  {({ isActive }) => {
                    const active = isActive || forcedActive
                    return (
                      <span
                        className={`block border-b border-light/16 py-5 text-xl uppercase tracking-wide transition-colors ${
                          active ? 'font-bold text-light' : 'font-bold text-light/80'
                        }`}
                      >
                        {item.label}
                      </span>
                    )
                  }}
                </NavLink>
              )
            })}
          </nav>

          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              aria-label="Cari"
              onClick={() => setMobileSearchOpen((open) => !open)}
              className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-light/10 text-light transition-colors hover:bg-light/20"
            >
              <SearchIcon />
            </button>
            {mobileSearchOpen ? (
              <input
                ref={mobileInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') submitSearch(true)
                  if (e.key === 'Escape') {
                    setMobileSearchOpen(false)
                    setQuery('')
                  }
                }}
                placeholder="Cari resep..."
                className="h-13 flex-1 rounded-full bg-light/10 px-5 text-sm text-light placeholder:text-light/50 focus:outline-none"
              />
            ) : (
              <a
                href="#subscribe"
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-1 items-center justify-center rounded-full bg-light/10 py-3.5 text-sm font-bold uppercase tracking-wide text-light transition-colors hover:bg-light/20"
              >
                Subscribe
              </a>
            )}
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex items-center justify-center"
              >
                <img src={social.icon} alt="" className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
