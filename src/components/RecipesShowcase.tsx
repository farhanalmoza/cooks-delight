import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useShowcaseRecipes } from '../hooks/useShowcaseRecipes'
import RecipeCard from './RecipeCard'

const FILTERS = ['All', 'Vegan', 'Breakfast', 'Dessert', 'Seafood', 'Chicken', 'Pasta']

export default function RecipesShowcase() {
  const [category, setCategory] = useState('All')
  const [searchParams, setSearchParams] = useSearchParams()
  const search = searchParams.get('search') ?? ''
  const { meals, loading, error } = useShowcaseRecipes(category, search)

  function clearSearch() {
    const next = new URLSearchParams(searchParams)
    next.delete('search')
    setSearchParams(next)
  }

  return (
    <div className="w-full py-10">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="badge-pill">Recipes</span>
        <h2 className="heading-section mt-4">Embark on a Journey</h2>
        <p className="mt-4 text-mobile-paragraph-2 md:text-paragraph-2 text-dark/60">
          With our diverse collection of recipes we have something to satisfy every palate.
        </p>
      </div>

      {search ? (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <p className="text-paragraph-2 text-dark/70">
            Showing results for <span className="font-bold text-dark">&quot;{search}&quot;</span>
          </p>
          <button
            type="button"
            onClick={clearSearch}
            className="text-small font-roboto uppercase tracking-wide text-primary-3 hover:underline"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="mt-10 flex flex-wrap md:items-center md:justify-center gap-3">
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
      )}

      {loading && (
        <p className="mt-10 text-center text-paragraph-2 text-dark/60">Memuat resep...</p>
      )}
      {error && <p className="mt-10 text-center text-paragraph-2 text-primary-3">{error}</p>}

      {!loading && !error && meals.length === 0 && (
        <p className="mt-10 text-center text-paragraph-2 text-dark/60">
          Tidak ada resep yang cocok dengan pencarianmu.
        </p>
      )}

      {!loading && !error && meals.length > 0 && (
        <div className="mt-10 grid grid-cols-1 gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {meals.map((meal) => (
            <RecipeCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  )
}
