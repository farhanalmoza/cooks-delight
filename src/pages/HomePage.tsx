import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import FeaturedRecipes from '../components/FeaturedRecipes'
import RecipesShowcase from '../components/RecipesShowcase'

export default function HomePage() {

  return (
    <div className="flex flex-col gap-6 pb-16">
      <HeroSection />

      <div className="rounded-4xl bg-primary-4 w-full py-10 px-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <div className="badge-pill">Explore</div>
          <h1 className="heading-section mt-4 mb-4">
            OUR DIVERSE <br />
            PALETTE
          </h1>
          <p className="text-mobile-paragraph-2 md:text-paragraph-2 mb-10 text-dark/80">
            If you are a breakfast enthusiast, a connoisseur of savory delights, or <br />
            on the lookout for irresistible desserts, our curated selection has <br />
            something to satisfy every palate.
          </p>
          <button
            type="button"
            className="border border-dark rounded-3xl font-roboto font-medium px-6 py-3 transition-colors hover:bg-dark hover:text-light"
          >
            SEE MORE
          </button>
        </div>

        <div className="w-full md:w-2/5 flex flex-col gap-4 mt-16 md:mt-0">
          <div className="flex justify-between py-4 border-b border-dark/16 items-center">
            <img src="/icons/breakfast.svg" alt="" />
            <p className="text-subtitle font-montserrat text-dark uppercase">Breakfast</p>
          </div>
          <div className="flex justify-between py-4 border-b border-dark/16 items-center">
            <img src="/icons/lunch.svg" alt="" />
            <p className="text-subtitle font-montserrat text-dark uppercase">Lunch</p>
          </div>
          <div className="flex justify-between py-4 border-b border-dark/16 items-center">
            <img src="/icons/dinner.svg" alt="" />
            <p className="text-subtitle font-montserrat text-dark uppercase">Dinner</p>
          </div>
          <div className="flex justify-between py-4 border-b border-dark/16 items-center">
            <img src="/icons/dessert.svg" alt="" />
            <p className="text-subtitle font-montserrat text-dark uppercase">Dessert</p>
          </div>
          <div className="flex justify-between py-4 border-b border-dark/16 items-center">
            <img src="/icons/quick-bite.svg" alt="" />
            <p className="text-subtitle font-montserrat text-dark uppercase">Quick Bite!</p>
          </div>
        </div>
      </div>

      <FeaturedRecipes />

      <RecipesShowcase />

      <AboutSection />
    </div>
  )
}
