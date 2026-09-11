import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMealById } from '../api/themealdb'
import type { Meal } from '../types/meal'
import { getIngredientsFromMeal } from '../utils/ingredients'
import { getRecipeMeta } from '../utils/recipeMeta'
import LoadingState from '../components/LoadingState'
import ErrorState from '../components/ErrorState'
import EmptyState from '../components/EmptyState'
import SimilarRecipes from '../components/SimilarRecipes'

function formatMinutes(minutes: number) {
  if (minutes >= 60 && minutes % 60 === 0) {
    const hours = minutes / 60
    return `${hours} ${hours === 1 ? 'Hour' : 'Hours'}`
  }
  return `${minutes} Min`
}

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

  if (loading) return <LoadingState label="Memuat resep..." />
  if (error) return <ErrorState message={error} />
  if (notFound || !meal) {
    return (
      <EmptyState
        title="Resep tidak ditemukan"
        description="Resep yang kamu cari tidak tersedia."
        action={
          <Link
            to="/"
            className="mt-2 w-fit rounded-full border border-dark px-6 py-3 text-button font-roboto uppercase tracking-wide text-dark transition-colors hover:bg-dark hover:text-light"
          >
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
  console.log(instructions)
  console.log(meal.strInstructions)
  const { minutes, difficulty, serves } = getRecipeMeta(meal.idMeal)

  return (
    <div className="flex flex-col gap-6 pb-16">
      <div className="rounded-4xl border border-dark/16 mb-9 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <span className="badge-pill">Recipe</span>
          <h1 className="text-headline-1 font-montserrat uppercase leading-none text-dark">
            {meal.strMeal}
          </h1>
          <p className="text-paragraph-1 font-roboto text-dark/60">
            Welcome to Cooks Delight, where culinary dreams come alive! Today, we embark on a
            journey of flavors with a dish that promises to elevate your dining experience – our{' '}
            {meal.strCategory} Delight: {meal.strMeal}.
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-dark/8 px-3 py-1 text-small uppercase tracking-wide text-dark/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-button font-roboto uppercase tracking-wide text-dark">
            <span className="flex items-center gap-2">
              <img src="/icons/mdi_timer.svg" alt="" className="h-5 w-5" />
              {formatMinutes(minutes)}
            </span>
            <span className="text-dark/30">•</span>
            <span className="flex items-center gap-2">
              <img src="/icons/mdi_prep.svg" alt="" className="h-5 w-5" />
              {difficulty} Prep
            </span>
            <span className="text-dark/30">•</span>
            <span className="flex items-center gap-2">
              <img src="/icons/mdi_serve.svg" alt="" className="h-5 w-5" />
              {serves} Serves
            </span>
          </div>

          {meal.strYoutube && (
            <a
              href={meal.strYoutube}
              target="_blank"
              rel="noreferrer"
              className="mt-2 w-fit rounded-full bg-dark px-6 py-3 text-button font-roboto uppercase tracking-wide text-light transition-colors hover:bg-dark/90"
            >
              ▶ Watch on YouTube
            </a>
          )}
        </div>

        <div className="relative m-10 aspect-video overflow-hidden rounded-4xl">
          <img src={meal.strMealThumb} alt={meal.strMeal} className="h-full w-full object-cover" />
        </div>

        <div className="mt-10 grid grid-cols-12 gap-6">
          <div className="col-span-11 col-start-2 grid gap-16 md:grid-cols-11 pr-10">
            <div className="md:col-span-6">
              <h2 className="mb-4 text-header-2 font-montserrat uppercase text-dark">Instructions</h2>
              <div className="flex flex-col gap-4 text-paragraph-2 leading-relaxed text-dark/70">
                {instructions.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>

              <div className="mt-10 flex w-fit items-center gap-12 rounded-full border border-dark px-6 py-3">
                <span className="text-button font-roboto font-bold uppercase tracking-wide text-dark">
                  Share
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Bagikan ke Facebook"
                    className="flex h-6 w-6 items-center justify-center"
                  >
                    <img src="/icons/facebook-black.svg" alt="" className="h-6 w-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Bagikan ke Instagram"
                    className="flex h-6 w-6 items-center justify-center"
                  >
                    <img src="/icons/instagram-black.svg" alt="" className="h-6 w-6" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Bagikan ke YouTube"
                    className="flex h-6 w-6 items-center justify-center"
                  >
                    <img src="/icons/youtube-black.svg" alt="" className="h-6 w-6" />
                  </a>
                </div>
              </div>

              <div className="mt-10 border-t border-dark/16 pt-10">
                <div className="flex items-start gap-6">
                  <img
                    src="/images/author.png"
                    alt="Isabella Russo"
                    className="h-24 w-24 shrink-0 rounded-2xl object-cover"
                  />
                  <div className="flex flex-col items-start gap-3">
                    <h3 className="text-subtitle font-montserrat text-dark/70">Isabella Russo</h3>
                    <p className="text-paragraph-2 leading-relaxed text-dark/50">
                      In the world of pots and pans, I'm on a mission to turn every meal into a
                      masterpiece. Cooks Delight is not just a blog; it's a shared space where the
                      love for food transcends boundaries. Here, we celebrate the art of crafting
                      meals that not only nourish the body but also feed the soul.
                    </p>
                    <Link
                      to="/about"
                      className="w-fit rounded-full border border-dark px-6 py-3 text-button font-roboto uppercase tracking-wide text-dark transition-colors hover:bg-dark hover:text-light"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 h-fit rounded-4xl bg-light border border-dark/24 p-8 mx-4">
              <h2 className="mb-4 text-subtitle font-montserrat uppercase text-primary-3">
                Ingredients
              </h2>
              <ul className="flex flex-col gap-3 text-paragraph-1 text-dark">
                {ingredients.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-dark" />
                    <span>
                      {item.measure && <span>{item.measure} </span>}
                      {item.ingredient}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <SimilarRecipes category={meal.strCategory} excludeId={meal.idMeal} />
    </div>
  )
}
