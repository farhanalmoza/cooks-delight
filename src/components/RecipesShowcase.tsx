import { useState } from 'react'
import { useShowcaseRecipes } from '../hooks/useShowcaseRecipes'
import RecipeCard from './RecipeCard'

const FILTERS = ['All', 'Vegan', 'Breakfast', 'Dessert', 'Seafood', 'Chicken', 'Pasta']

export default function RecipesShowcase() {
  const [category, setCategory] = useState('All')
  const { meals, loading, error } = useShowcaseRecipes(category)

  return (
    <div className="w-full py-10">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="w-fit rounded-full bg-primary-3 px-4 py-1 text-small font-roboto uppercase text-background">
          Recipes
        </span>
        <h2 className="mt-4 text-header-2 font-montserrat uppercase text-dark">
          Embark on a <br />
          Journey
        </h2>
        <p className="mt-4 text-paragraph-2 text-dark/60">
          With our diverse collection of recipes we have something to satisfy every palate.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        {FILTERS.map((filter) => {
          const isActive = filter === category
          return (
            <button
              key={filter}
              type="button"
              onClick={() => setCategory(filter)}
              className={`rounded-full border px-5 py-2 text-small font-roboto uppercase tracking-wide transition-colors ${
                isActive
                  ? 'border-primary-1 bg-primary-1 font-bold text-dark'
                  : 'border-dark/24 text-dark/50 hover:border-dark/50 hover:text-dark'
              }`}
            >
              {filter}
            </button>
          )
        })}
      </div>

      {loading && (
        <p className="mt-10 text-center text-paragraph-2 text-dark/60">Memuat resep...</p>
      )}
      {error && <p className="mt-10 text-center text-paragraph-2 text-primary-3">{error}</p>}

      {!loading && !error && (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {meals.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  )
}
