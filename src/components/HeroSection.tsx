import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section
      className="relative h-160 w-full overflow-hidden rounded-4xl bg-cover bg-center md:h-144.25"
      style={{ backgroundImage: 'url(/images/hero.jpg)' }}
    >
      <div className="absolute inset-0 bg-dark/60" />
      <div className="relative mx-auto flex h-full w-fit max-w-5xl flex-col items-center justify-center px-6 text-center md:px-12">
        <h1 className="text-mobile-header-1 font-montserrat uppercase text-background mb-3 md:text-headline-1">
          Unleash Culinary Excellence
        </h1>
        <p className="max-w-xs text-mobile-paragraph-1 font-roboto text-background mb-6 md:max-w-xl md:text-paragraph-1 md:mb-10">
          Explore a world of flavors, discover
          <br />
          handcrafted recipes, and let the aroma of
          <br />
          our passion for cooking fill your kitchen
        </p>
        <Link
          to="/recipes"
          className="w-fit rounded-full bg-primary-2 px-6 py-3 text-button font-roboto uppercase tracking-wide text-dark transition-colors hover:bg-primary-2/90"
        >
          Explore Recipes
        </Link>
      </div>
    </section>
  )
}
