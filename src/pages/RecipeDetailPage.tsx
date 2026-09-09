import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMealById } from '../api/themealdb'
import type { Meal } from '../types/meal'
import { getIngredientsFromMeal } from '../utils/ingredients'
import LoadingState from '../components/LoadingState'
import ErrorState from '../components/ErrorState'
import EmptyState from '../components/EmptyState'
import FavoriteButton from '../components/FavoriteButton'
import StarRating from '../components/StarRating'
import NoteEditor from '../components/NoteEditor'
import { useRecipeActions, useRecipeData } from '../storage/useRecipeStore'

export default function RecipeDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [meal, setMeal] = useState<Meal | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!id) return
    let cancelled = false
    setLoading(true)
    setError(null)
    setNotFound(false)

    getMealById(id)
      .then((result) => {
        if (cancelled) return
        if (!result) {
          setNotFound(true)
        } else {
          setMeal(result)
        }
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
  }, [id])

  const data = useRecipeData(meal?.idMeal)
  const { setRating, setNote } = useRecipeActions()

  if (loading) return <LoadingState label="Memuat resep..." />
  if (error) return <ErrorState message={error} />
  if (notFound || !meal) {
    return (
      <EmptyState
        title="Resep tidak ditemukan"
        description="Resep yang kamu cari tidak tersedia."
        action={
          <Link to="/" className="text-sm font-medium text-orange-600 hover:underline">
            Kembali ke Home
          </Link>
        }
      />
    )
  }

  const ingredients = getIngredientsFromMeal(meal)
  const tags = meal.strTags?.split(',').map((tag) => tag.trim()).filter(Boolean) ?? []
  const instructions = meal.strInstructions
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)

  return (
    <div className="flex flex-col gap-6">
      <Link to="/" className="text-sm text-slate-500 hover:text-orange-600">
        ← Kembali
      </Link>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-xl bg-slate-100">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="h-full w-full object-cover" />
          <div className="absolute right-3 top-3">
            <FavoriteButton meal={meal} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">{meal.strMeal}</h1>
            <p className="text-sm text-slate-500">
              {meal.strCategory} · {meal.strArea}
            </p>
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-1 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              ▶ Tonton di YouTube
            </a>
          )}

          <div>
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Bahan-bahan
            </h2>
            <ul className="flex flex-col gap-1 text-sm text-slate-700">
              {ingredients.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b border-slate-100 py-1">
                  <span>{item.ingredient}</span>
                  <span className="text-slate-400">{item.measure}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
          Cara membuat
        </h2>
        <div className="flex flex-col gap-3 text-sm leading-relaxed text-slate-700">
          {instructions.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Rating &amp; catatan pribadi
        </h2>
        <StarRating
          value={data?.rating ?? 0}
          onChange={(rating) => setRating(meal.idMeal, rating, meal)}
        />
        <NoteEditor value={data?.note ?? ''} onSave={(note) => setNote(meal.idMeal, note, meal)} />
      </div>
    </div>
  )
}
