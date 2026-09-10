import { useRef, useState } from 'react'
import { useFeaturedMeals } from '../hooks/useFeaturedMeals'
import RecipeCard from './RecipeCard'

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <polyline points={direction === 'left' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'} />
    </svg>
  )
}

export default function NewestRecipes() {
  const { meals, loading, error } = useFeaturedMeals(6)
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  function updateEdges() {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 8)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8)
  }

  function scrollByCard(direction: 'left' | 'right') {
    const el = trackRef.current
    if (!el) return
    const amount = el.clientWidth
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
    setTimeout(updateEdges, 350)
  }

  return (
    <div className="w-full rounded-4xl border border-dark/24 p-4 pt-10">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-header-2 font-montserrat uppercase text-dark">Newest Recipes</h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Sebelumnya"
            disabled={atStart}
            onClick={() => scrollByCard('left')}
            className="flex h-8.75 w-8.75 items-center justify-center rounded-full border-2 border-dark text-dark transition-colors disabled:opacity-30 enabled:hover:bg-dark/8"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            aria-label="Berikutnya"
            disabled={atEnd}
            onClick={() => scrollByCard('right')}
            className="flex h-8.75 w-8.75 items-center justify-center rounded-full border-2 border-dark text-dark transition-colors disabled:opacity-30 enabled:hover:bg-dark/8"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>

      {loading && <p className="text-paragraph-2 text-dark/60">Memuat resep terbaru...</p>}
      {error && <p className="text-paragraph-2 text-primary-3">{error}</p>}

      {!loading && !error && (
        <div
          ref={trackRef}
          onScroll={updateEdges}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {meals.map((meal) => (
            <div key={meal.idMeal} className="w-[calc(50%-12px)] shrink-0 snap-start">
              <RecipeCard meal={meal} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
