import type { Meal } from '../types/meal'

export interface RecipeData {
  recipe: Meal
  isFavorite: boolean
  rating: number
  note: string
  updatedAt: number
}

export type RecipeStore = Record<string, RecipeData>

export const STORAGE_KEY = 'recipes-app:recipe-data'
export const STORE_CHANGED_EVENT = 'recipes-app:store-changed'
