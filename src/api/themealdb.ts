import type { Meal, MealSummary } from '../types/meal'

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1'

async function fetchJson<T>(url: string): Promise<T> {
  let response: Response
  try {
    response = await fetch(url)
  } catch {
    throw new Error('Tidak bisa terhubung ke server. Periksa koneksi internet kamu.')
  }

  if (!response.ok) {
    throw new Error(`Permintaan gagal (status ${response.status}).`)
  }

  return response.json() as Promise<T>
}

export async function filterMealsByCategory(category: string): Promise<MealSummary[]> {
  const data = await fetchJson<{ meals: MealSummary[] | null }>(
    `${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`,
  )
  return data.meals ?? []
}

export async function getMealById(id: string): Promise<Meal | null> {
  const data = await fetchJson<{ meals: Meal[] | null }>(
    `${BASE_URL}/lookup.php?i=${encodeURIComponent(id)}`,
  )
  return data.meals?.[0] ?? null
}

export async function searchMealsByName(query: string): Promise<Meal[]> {
  const data = await fetchJson<{ meals: Meal[] | null }>(
    `${BASE_URL}/search.php?s=${encodeURIComponent(query)}`,
  )
  return data.meals ?? []
}

export async function getRandomMeal(): Promise<Meal | null> {
  const data = await fetchJson<{ meals: Meal[] | null }>(`${BASE_URL}/random.php`)
  return data.meals?.[0] ?? null
}
