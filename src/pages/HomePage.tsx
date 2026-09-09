import HeroSection from '../components/HeroSection'
import FeaturedRecipes from '../components/FeaturedRecipes'
import RecipesShowcase from '../components/RecipesShowcase'
import breakfast from '../../dist/assets/icons/breakfast.svg'
import lunch from '../../dist/assets/icons/lunch.svg'
import dinner from '../../dist/assets/icons/dinner.svg'
import dessert from '../../dist/assets/icons/dessert.svg'
import quickBite from '../../dist/assets/icons/quick-bite.svg'

export default function HomePage() {

  return (
    <div className="flex flex-col gap-6">
      {/* tes commit */}
      <HeroSection />
      
      <div className="rounded-4xl bg-primary-4 w-full p-10 flex justify-between items-end">
        <div>
          <div className="w-fit rounded-xl bg-primary-3 px-2 py-1 text-button font-roboto uppercase text-background">
            Explore
          </div>
          <h1 className="text-header-2 font-montserrat uppercase mt-4 mb-4">
            OUR DIVERSE <br />
            PALETTE
          </h1>
          <p className="text-paragraph-2 mb-10">
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

        <div className="w-2/5 flex flex-col gap-4">
          <div className="flex justify-between py-4 border-b border-dark/16 items-center">
            <img src={breakfast} alt="" />
            <p className="text-subtitle font-montserrat text-dark uppercase">Breakfast</p>
          </div>
          <div className="flex justify-between py-4 border-b border-dark/16 items-center">
            <img src={lunch} alt="" />
            <p className="text-subtitle font-montserrat text-dark uppercase">Lunch</p>
          </div>
          <div className="flex justify-between py-4 border-b border-dark/16 items-center">
            <img src={dinner} alt="" />
            <p className="text-subtitle font-montserrat text-dark uppercase">Dinner</p>
          </div>
          <div className="flex justify-between py-4 border-b border-dark/16 items-center">
            <img src={dessert} alt="" />
            <p className="text-subtitle font-montserrat text-dark uppercase">Dessert</p>
          </div>
          <div className="flex justify-between py-4 border-b border-dark/16 items-center">
            <img src={quickBite} alt="" />
            <p className="text-subtitle font-montserrat text-dark uppercase">Quick Bite!</p>
          </div>
        </div>
      </div>

      <FeaturedRecipes />

      <RecipesShowcase />
    </div>
  )
}
