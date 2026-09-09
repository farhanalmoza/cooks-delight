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
    <footer className="mt-4 rounded-4xl bg-dark px-6 py-4">
      <div className="mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <NavLink to="/" className="flex w-fit items-center gap-2 text-md font-bold text-light tracking-normal">
          <img src="/logo-bw.svg" alt="Cooks Delight" className="h-10 w-10" />
          <span className="flex flex-col leading-none">
            <span>Cooks</span>
            <span>Delight</span>
          </span>
        </NavLink>

        <nav className="flex items-center justify-center gap-3">
          {menuItems.map((item, index) => (
            <span key={item.to} className="flex items-center gap-3">
              {index > 0 && <span className="text-light/8">|</span>}
              <NavLink
                to={item.to}
                end={item.end}
                className="text-sm font-medium uppercase tracking-wide text-light/80 transition-colors hover:text-light"
              >
                {item.label}
              </NavLink>
            </span>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-4">
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

      <div className="mt-4 border-t border-light/16 pt-4 text-center">
        <p className="text-xs uppercase tracking-wide text-light/40">
          Copyright: &copy; 2024 Cooks Delight.
        </p>
      </div>
    </footer>
  )
}
