import type { Meal } from '../types/meal'
import { useRecipeActions, useRecipeData } from '../storage/useRecipeStore'

export default function FavoriteButton({
  meal,
  size = 'md',
}: {
  meal: Meal
  size?: 'sm' | 'md'
}) {
  const data = useRecipeData(meal.idMeal)
  const { toggleFavorite } = useRecipeActions()
  const isFavorite = data?.isFavorite ?? false

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        toggleFavorite(meal)
      }}
      aria-label={isFavorite ? 'Hapus dari favorit' : 'Tambah ke favorit'}
      className={`flex items-center justify-center rounded-full shadow-md transition-colors ${
        size === 'sm' ? 'h-8 w-8 text-base' : 'h-11 w-11 text-xl'
      } ${
        isFavorite ? 'bg-primary-3 text-background' : 'bg-light/90 text-dark hover:text-primary-3'
      }`}
    >
      {isFavorite ? '♥' : '♡'}
    </button>
  )
}
