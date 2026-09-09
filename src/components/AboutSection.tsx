import { Link } from 'react-router-dom'

export default function AboutSection() {
  return (
    <section className="grid w-full grid-cols-[1.3fr_1fr_1.3fr] grid-rows-[auto_auto] gap-4 rounded-4xl bg-background p-6 border border-dark/24">
      <div className="flex flex-col items-start justify-center">
        <span className="w-fit rounded-xl bg-primary-3 px-3 py-1.5 text-button font-roboto uppercase text-background">
          About Us
        </span>
        <h2 className="mt-4 mb-4 text-header-2 font-montserrat uppercase text-dark">
          Our Culinary
          <br />
          Chronicle
        </h2>
        <p className="mb-8 text-paragraph-2 text-dark/70">
          Our journey is crafted with dedication, creativity, and an unrelenting commitment to
          delivering delightful culinary experiences. Join us in savoring the essence of every
          dish and the stories that unfold.
        </p>
        <Link
          to="/about"
          className="w-fit rounded-full border border-dark px-6 py-3 text-button font-roboto uppercase tracking-wide text-dark transition-colors hover:bg-dark hover:text-light"
        >
          Read More
        </Link>
      </div>

      <div className="overflow-hidden rounded-3xl">
        <img
          src="/images/recipe-2.png"
          alt="Chef searing meat in a pan"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="row-span-2 overflow-hidden rounded-3xl">
        <img
          src="/images/about-us.png"
          alt="Chefs preparing dishes in a professional kitchen"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="col-span-2 overflow-hidden rounded-3xl">
        <img
          src="/images/recipe-1.png"
          alt="A pot of vegetables simmering with steam rising"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
