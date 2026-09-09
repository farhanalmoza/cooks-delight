export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden rounded-4xl bg-cover bg-center"
      style={{ height: '577px', backgroundImage: 'url(/images/hero.jpg)' }}
    >
      <div className="absolute inset-0 bg-dark/60" />
      <div className="relative mx-auto flex h-full w-fit max-w-5xl flex-col items-center justify-center px-12 text-center">
        <h1 className="text-headline-1 font-montserrat uppercase text-background mb-3">
          Unleash Culinary Excellence
        </h1>
        <p className="max-w-xl text-paragraph-1 font-roboto text-background mb-10">
          Explore a world of flavors, discover
          <br />
          handcrafted recipes, and let the aroma of
          <br />
          our passion for cooking fill your kitchen
        </p>
        <button
          type="button"
          className="w-fit rounded-full bg-primary-2 px-6 py-3 text-button font-roboto uppercase tracking-wide text-dark transition-colors hover:bg-primary-2/90"
        >
          Explore Recipes
        </button>
      </div>
    </section>
  )
}
