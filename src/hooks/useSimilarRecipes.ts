import { useEffect, useState } from 'react'
import { filterMealsByCategory, getMealById } from '../api/themealdb'
import type { Meal } from '../types/meal'

export function useSimilarRecipes(category: string, excludeId: string, count = 6) {
  const [meals, setMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!category) return
    let cancelled = false
    setLoading(true)
    setError(null)

    async function run() {
      const summaries = await filterMealsByCategory(category)
      const picked = summaries.filter((summary) => summary.idMeal !== excludeId).slice(0, count)
      const detailed = await Promise.all(picked.map((summary) => getMealById(summary.idMeal)))
      return detailed.filter((meal): meal is Meal => meal !== null)
    }

    run()
      .then((result) => {
        if (!cancelled) setMeals(result)
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [category, excludeId, count])

  return { meals, loading, error }
}
