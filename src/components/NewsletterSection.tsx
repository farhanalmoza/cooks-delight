import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section
      id="subscribe"
      className="relative w-full overflow-hidden rounded-4xl bg-primary-3 bg-cover bg-center px-6 py-12 scroll-mt-6 md:px-8 md:py-20"
      style={{ backgroundImage: 'url("/images/cta-bg.svg")' }}
    >

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <span className="text-mobile-tagline font-roboto uppercase tracking-wide text-background/80 md:text-tagline">
          Subscribe
        </span>
        <h2 className="text-mobile-header-1 font-montserrat uppercase leading-none text-background md:text-headline-1">
          Join the Fun
          <br />
          Subscribe Now!
        </h2>
        <p className="mx-auto max-w-xs text-mobile-paragraph-1 font-roboto text-background/90 md:max-w-2xl md:text-paragraph-1">
          Subscribe to our newsletter for a weekly serving of recipes, cooking tips, and exclusive
          insights straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-4 flex w-full max-w-sm flex-col gap-3 md:max-w-md md:flex-row md:items-center md:gap-2 md:rounded-full md:bg-light md:p-1.5 md:pl-6"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full rounded-full bg-light px-6 py-4 text-paragraph-2 text-dark placeholder:text-dark/40 focus:outline-none md:w-auto md:flex-1 md:rounded-none md:bg-transparent md:px-0 md:py-0"
          />
          <button
            type="submit"
            className="w-full shrink-0 rounded-full bg-dark px-6 py-4 text-button font-roboto uppercase tracking-wide text-light transition-colors hover:bg-dark/90 md:w-auto md:py-3"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
