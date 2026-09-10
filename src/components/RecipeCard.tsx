import { Link } from 'react-router-dom'
import type { Meal } from '../types/meal'
import { getRecipeMeta, getShortDescription } from '../utils/recipeMeta'
import VeganBadge from './VeganBadge'

export default function RecipeCard({ meal }: { meal: Meal }) {
  const { minutes, difficulty, serves } = getRecipeMeta(meal.idMeal)

  return (
    <div className="shrink-0 overflow-hidden rounded-3xl bg-light h-fit">
      <div className="relative">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="h-64 w-full object-cover" />
        {meal.strCategory === 'Vegan' && (
          <VeganBadge className="absolute -bottom-6 right-6 h-16.5 w-16.5 drop-shadow" />
        )}
      </div>
      <div className="rounded-b-3xl border border-dark/16 p-6">
        <h3 className="mb-2 truncate text-header-3 font-montserrat text-dark">{meal.strMeal}</h3>
        <p className="mb-8 text-paragraph-2 text-dark/60">
          {getShortDescription(meal.strInstructions)}
        </p>
        <div className="flex items-center justify-between gap-4">
          <span className="text-small uppercase tracking-wide text-dark">
            {minutes} min - {difficulty} prep - {serves} serves
          </span>
          <Link
            to={`/recipe/${meal.idMeal}`}
            className="shrink-0 rounded-full border border-dark px-5 py-2.5 text-button font-roboto uppercase text-dark transition-colors hover:bg-dark hover:text-light"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  )
}
