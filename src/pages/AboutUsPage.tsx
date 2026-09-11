import { Link } from 'react-router-dom'
import MyStorySection from '../components/MyStorySection'
import FeaturedRecipes from '../components/FeaturedRecipes'

export default function AboutUsPage() {
  return (
    <div className="flex flex-col gap-16 pt-16 pb-15">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <h1 className="text-headline-1 font-montserrat uppercase leading-none text-dark">
          Welcome to
          <br />
          My Culinary
          <br />
          Haven!
        </h1>
        <div className="flex flex-col gap-8">
          <p className="text-paragraph-1 font-roboto text-dark/60">
            Bonjour and welcome to the heart of my kitchen! I'm Isabella Russo, the culinary
            enthusiast behind this haven of flavors, Cooks Delight. Join me on a gastronomic
            journey where each dish carries a story, and every recipe is a crafted symphony of
            taste.
          </p>
          <Link
            to="/recipes"
            className="w-fit rounded-full bg-primary-2 px-6 py-3 text-button font-roboto uppercase tracking-wide text-dark transition-colors hover:bg-primary-2/90"
          >
            Explore Recipes
          </Link>
        </div>
      </div>

      <MyStorySection />

      <FeaturedRecipes />
    </div>
  )
}
