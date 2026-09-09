import { useCallback, useSyncExternalStore } from 'react'
import type { Meal } from '../types/meal'
import { getAllFavorites, getRecipeData, setNote, setRating, toggleFavorite } from './recipeStore'
import { STORE_CHANGED_EVENT, type RecipeData } from './types'

function subscribe(callback: () => void): () => void {
  window.addEventListener(STORE_CHANGED_EVENT, callback)
  return () => window.removeEventListener(STORE_CHANGED_EVENT, callback)
}

export function useRecipeData(mealId: string | undefined): RecipeData | undefined {
  const getSnapshot = useCallback(
    () => (mealId ? getRecipeData(mealId) : undefined),
    [mealId],
  )
  return useSyncExternalStore(subscribe, getSnapshot)
}

export function useFavorites(): RecipeData[] {
  return useSyncExternalStore(subscribe, getAllFavorites)
}

export function useRecipeActions() {
  return {
    toggleFavorite: (meal: Meal) => toggleFavorite(meal),
    setRating: (mealId: string, rating: number, meal: Meal) => setRating(mealId, rating, meal),
    setNote: (mealId: string, note: string, meal: Meal) => setNote(mealId, note, meal),
  }
}
