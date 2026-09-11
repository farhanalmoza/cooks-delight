import RecipesShowcase from '../components/RecipesShowcase'

export default function RecipesPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <h1 className="text-headline-1 font-montserrat uppercase leading-none text-dark">
          All Our
          <br />
          Recipes
        </h1>
        <p className="text-paragraph-1 font-roboto text-dark/60 md:text-right">
          Browse the full collection of recipes from Cooks Delight. Filter by category or search
          for something specific to find your next favorite dish.
        </p>
      </div>

      <RecipesShowcase />
    </div>
  )
}
