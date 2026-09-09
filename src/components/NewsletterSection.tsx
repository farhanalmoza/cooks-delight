import { useState } from 'react'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section
      className="relative w-full overflow-hidden rounded-4xl bg-primary-3 bg-cover bg-center px-8 py-20"
      style={{ backgroundImage: 'url("/images/cta-bg.svg")' }}
    >

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <span className="text-tagline font-roboto uppercase tracking-wide text-background/80">
          Subscribe
        </span>
        <h2 className="text-headline-1 font-montserrat uppercase leading-none text-background">
          Join the Fun
          <br />
          Subscribe Now!
        </h2>
        <p className="max-w-2xl mx-auto text-paragraph-1 font-roboto text-background/90">
          Subscribe to our newsletter for a weekly serving of recipes, cooking tips, and exclusive
          insights straight to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-4 flex w-full max-w-md items-center gap-2 rounded-full bg-light p-1.5 pl-6"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="flex-1 bg-transparent text-paragraph-2 text-dark placeholder:text-dark/40 focus:outline-none"
          />
          <button
            type="submit"
            className="shrink-0 rounded-full bg-dark px-6 py-3 text-button font-roboto uppercase tracking-wide text-light transition-colors hover:bg-dark/90"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
