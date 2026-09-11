import { useRef, useState } from 'react'

const items = [
  {
    id: 'gluten-free',
    title: 'Gluten-Free Alternatives',
    image: '/images/palate-1.png',
    description:
      'Explore the world of gluten-free flours and grains, ensuring your dishes cater to a diverse range of dietary preferences.',
    minutes: 15,
    date: '2023-06-01',
  },
  {
    id: 'plant-based',
    title: 'Plant-Based Cooking',
    image: '/images/palate-2.png',
    description:
      'Delight in the realm of plant-based cooking with tips for crafting delicious vegetarian and vegan dishes.',
    minutes: 15,
    date: '2023-06-01',
  },
  {
    id: 'allergy-friendly',
    title: 'Allergy-Friendly Substitutions',
    image: '/images/palate-3.png',
    description:
      'Discover options for common allergens, ensuring everyone can savor the flavors of your culinary creations.',
    minutes: 15,
    date: '2023-06-01',
  },
  {
    id: 'low-carb',
    title: 'Low-Carb Comfort Foods',
    image: '/images/palate-2.png',
    description:
      'Swap out the heavy carbs without losing the comfort, using clever ingredients that keep every dish satisfying.',
    minutes: 15,
    date: '2023-06-01',
  },
  {
    id: 'dairy-free',
    title: 'Dairy-Free Delights',
    image: '/images/palate-3.png',
    description:
      'Enjoy creamy textures and rich flavors with dairy-free alternatives that fit right into your favorite recipes.',
    minutes: 15,
    date: '2023-06-01',
  },
]

function chunk<T>(items: T[], size: number): T[][] {
  const pages: T[][] = []
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size))
  }
  return pages
}

function formatDate(value: string) {
  const date = new Date(value)
  const day = date.toLocaleDateString('en-US', { day: '2-digit' })
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
  const year = date.toLocaleDateString('en-US', { year: '2-digit' })
  return `${day} ${month} ${year}`
}

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

export default function NourishingPalate() {
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
    <div className="w-full rounded-4xl bg-primary-4 p-4 pt-16 pb-10 md:p-10">
      <div className="mb-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="heading-section">Nourishing Every Palate</h2>
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

      <div
        ref={trackRef}
        onScroll={updateEdges}
        className="flex snap-x snap-mandatory items-start gap-3 overflow-x-auto scroll-smooth scrollbar-none md:gap-6 [&::-webkit-scrollbar]:hidden"
      >
        {chunk(items, 3).map((page, pageIdx) => (
          <div
            key={pageIdx}
            className="grid w-full shrink-0 snap-start grid-cols-1 gap-3 md:contents"
          >
            {page.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-3xl md:w-[calc(33.333%-16px)] md:shrink-0 md:snap-start"
              >
                <img src={item.image} alt={item.title} className="h-130 w-full object-cover" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-background">
                  <h3 className="mb-2 text-header-3 font-montserrat">{item.title}</h3>
                  <p className="mb-8 text-paragraph-2 text-background/80">{item.description}</p>
                  <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                    <span className="text-small uppercase tracking-wide">
                      {item.minutes} min - {formatDate(item.date)}
                    </span>
                    <button
                      type="button"
                      className="w-full shrink-0 rounded-full border border-background px-5 py-2.5 text-center text-button font-roboto uppercase text-background transition-colors hover:bg-background hover:text-dark md:w-fit"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
