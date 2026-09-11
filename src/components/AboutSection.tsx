import { Link } from 'react-router-dom'

export default function AboutSection() {
  return (
    <section className="grid w-full md:grid-cols-[1.3fr_1fr_1.3fr] grid-rows-[auto_auto] gap-4 rounded-4xl bg-background p-4 pt-10 md:p-4 border border-dark/24">
      <div className="flex flex-col items-start justify-center">
        <span className="badge-pill">About Us</span>
        <h2 className="heading-section mt-4 mb-4">Our Culinary Chronicle</h2>
        <p className="md:mb-8 text-paragraph-2 text-dark/70">
          Our journey is crafted with dedication, creativity, and an unrelenting commitment to
          delivering delightful culinary experiences. Join us in savoring the essence of every
          dish and the stories that unfold.
        </p>
        <Link
          to="/about"
          className="hidden md:flex w-fit rounded-full border border-dark px-6 py-3 text-button font-roboto uppercase tracking-wide text-dark transition-colors hover:bg-dark hover:text-light"
        >
          Read More
        </Link>
      </div>

      <div className="overflow-hidden rounded-3xl">
        <img
          src="/images/recipe-2.png"
          alt="Chef searing meat in a pan"
          className="h-81 md:h-full w-full object-cover"
        />
      </div>

      <div className="md:row-span-2 overflow-hidden rounded-3xl">
        <img
          src="/images/about-us.png"
          alt="Chefs preparing dishes in a professional kitchen"
          className="h-81 md:h-full w-full object-cover"
        />
      </div>

      <div className="md:col-span-2 overflow-hidden rounded-3xl">
        <img
          src="/images/recipe-1.png"
          alt="A pot of vegetables simmering with steam rising"
          className="h-81 md:h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
