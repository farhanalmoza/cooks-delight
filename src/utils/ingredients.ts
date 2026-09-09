import type { Ingredient, Meal } from '../types/meal'

export function getIngredientsFromMeal(meal: Meal): Ingredient[] {
  const result: Ingredient[] = []

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}` as keyof Meal] as string | null | undefined
    const measure = meal[`strMeasure${i}` as keyof Meal] as string | null | undefined

    if (ingredient && ingredient.trim()) {
      result.push({ ingredient: ingredient.trim(), measure: (measure ?? '').trim() })
    }
  }

  return result
}
