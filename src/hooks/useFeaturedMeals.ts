import { useEffect, useState } from 'react'
import { getRandomMeal } from '../api/themealdb'
import type { Meal } from '../types/meal'

export function useFeaturedMeals(count: number) {
  const [meals, setMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(null)

    async function run() {
      const collected = new Map<string, Meal>()
      let attempts = 0
      while (collected.size < count && attempts < count * 3) {
        attempts++
        const meal = await getRandomMeal()
        if (meal) collected.set(meal.idMeal, meal)
      }
      return Array.from(collected.values())
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
  }, [count])

  return { meals, loading, error }
}
