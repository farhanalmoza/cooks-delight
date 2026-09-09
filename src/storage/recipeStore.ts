import type { Meal } from '../types/meal'
import { STORAGE_KEY, STORE_CHANGED_EVENT, type RecipeData, type RecipeStore } from './types'

let cachedStore: RecipeStore | null = null

function loadFromLocalStorage(): RecipeStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as RecipeStore) : {}
  } catch {
    return {}
  }
}

export function readStore(): RecipeStore {
  if (cachedStore === null) {
    cachedStore = loadFromLocalStorage()
  }
  return cachedStore
}

function writeStore(store: RecipeStore): void {
  cachedStore = store
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
  window.dispatchEvent(new CustomEvent(STORE_CHANGED_EVENT))
}

// Keep the cache in sync when another tab changes the store.
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) {
      cachedStore = loadFromLocalStorage()
      window.dispatchEvent(new CustomEvent(STORE_CHANGED_EVENT))
    }
  })
}

export function getRecipeData(mealId: string): RecipeData | undefined {
  return readStore()[mealId]
}

let favoritesCache: { store: RecipeStore; favorites: RecipeData[] } | null = null

// useSyncExternalStore requires getSnapshot to return a stable reference when
// nothing changed, so this only recomputes when the underlying store object
// itself changed (i.e. after a write), not on every call.
export function getAllFavorites(): RecipeData[] {
  const store = readStore()
  if (favoritesCache && favoritesCache.store === store) {
    return favoritesCache.favorites
  }
  const favorites = Object.values(store).filter((entry) => entry.isFavorite)
  favoritesCache = { store, favorites }
  return favorites
}

export function toggleFavorite(meal: Meal): RecipeData {
  const store = readStore()
  const existing = store[meal.idMeal]
  const updated: RecipeData = {
    recipe: meal,
    isFavorite: !(existing?.isFavorite ?? false),
    rating: existing?.rating ?? 0,
    note: existing?.note ?? '',
    updatedAt: Date.now(),
  }
  writeStore({ ...store, [meal.idMeal]: updated })
  return updated
}

export function setRating(mealId: string, rating: number, meal: Meal): RecipeData {
  const store = readStore()
  const existing = store[mealId]
  const updated: RecipeData = {
    recipe: meal,
    isFavorite: existing?.isFavorite ?? false,
    rating,
    note: existing?.note ?? '',
    updatedAt: Date.now(),
  }
  writeStore({ ...store, [mealId]: updated })
  return updated
}

export function setNote(mealId: string, note: string, meal: Meal): RecipeData {
  const store = readStore()
  const existing = store[mealId]
  const updated: RecipeData = {
    recipe: meal,
    isFavorite: existing?.isFavorite ?? false,
    rating: existing?.rating ?? 0,
    note,
    updatedAt: Date.now(),
  }
  writeStore({ ...store, [mealId]: updated })
  return updated
}
