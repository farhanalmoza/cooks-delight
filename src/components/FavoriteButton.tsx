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
      className={`flex items-center justify-center rounded-full transition-colors ${
        size === 'sm' ? 'h-8 w-8 text-lg' : 'h-10 w-10 text-xl'
      } ${
        isFavorite
          ? 'bg-orange-500 text-white'
          : 'bg-white/90 text-slate-500 hover:text-orange-500'
      } shadow`}
    >
      {isFavorite ? '♥' : '♡'}
    </button>
  )
}
