import { useEffect, useState } from 'react'
import { filterMealsByCategory, getMealById, getRandomMeal, searchMealsByName } from '../api/themealdb'
import type { Meal } from '../types/meal'

const COUNT = 6

export function useShowcaseRecipes(category: string, search = '') {
  const [meals, setMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    async function run() {
      const term = search.trim()
      if (term) {
        return searchMealsByName(term)
      }

      if (category === 'All') {
        const collected = new Map<string, Meal>()
        let attempts = 0
        while (collected.size < COUNT && attempts < COUNT * 3) {
          attempts++
          const meal = await getRandomMeal()
          if (meal) collected.set(meal.idMeal, meal)
        }
        return Array.from(collected.values())
      }

      const summaries = await filterMealsByCategory(category)
      const picked = summaries.slice(0, COUNT)
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
  }, [category, search])

  return { meals, loading, error }
}
