import { NavLink } from 'react-router-dom'

const menuItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/recipes', label: 'Recipes', end: false },
  { to: '/cooking-tips', label: 'Cooking Tips', end: false },
  { to: '/about', label: 'About Us', end: false },
]

const socialLinks = [
  { href: 'https://tiktok.com', icon: '/icons/ic_baseline-tiktok.svg', label: 'TikTok' },
  { href: 'https://facebook.com', icon: '/icons/ic_baseline-facebook.svg', label: 'Facebook' },
  { href: 'https://instagram.com', icon: '/icons/ic_baseline-instagram.svg', label: 'Instagram' },
  { href: 'https://youtube.com', icon: '/icons/ic_baseline-youtube.svg', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="mt-4 rounded-4xl bg-dark px-6 py-8 md:py-4">
      <div className="flex flex-col items-center gap-6 md:mx-auto md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4">
        <NavLink
          to="/"
          className="flex w-fit items-center gap-2 text-md font-bold text-light tracking-normal"
        >
          <img src="/logo-bw.svg" alt="Cooks Delight" className="h-10 w-10" />
          <span className="flex flex-col leading-none">
            <span>Cooks</span>
            <span>Delight</span>
          </span>
        </NavLink>

        <nav className="flex w-full flex-col md:w-auto md:flex-row md:items-center md:justify-center md:gap-3">
          {menuItems.map((item, index) => (
            <span key={item.to} className="flex w-full flex-col md:w-auto md:flex-row md:items-center md:gap-3">
              {index > 0 && <span className="hidden text-light/30 md:inline">|</span>}
              <NavLink
                to={item.to}
                end={item.end}
                className="border-b border-light/16 py-4 text-sm font-medium uppercase tracking-wide text-light/80 transition-colors hover:text-light md:border-none md:py-0"
              >
                {item.label}
              </NavLink>
            </span>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-4 md:justify-end">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="flex h-6 w-6 items-center justify-center"
            >
              <img src={social.icon} alt="" className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-light/16 pt-4 text-center md:mt-4">
        <p className="text-xs uppercase tracking-wide text-light/40">
          Copyright: &copy; 2024 Cooks Delight.
        </p>
      </div>
    </footer>
  )
}
