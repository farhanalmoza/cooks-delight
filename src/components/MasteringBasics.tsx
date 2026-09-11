import { useRef, useState } from 'react'

const basics = [
  {
    id: 'knife-skills',
    title: 'Knife Skills',
    image: '/images/knife-skills.png',
    description:
      'Unlock the art of precision in your kitchen with proper chopping, dicing, and slicing techniques. Elevate your culinary creations to new heights.',
    minutes: 15,
    date: '2023-06-01',
  },
  {
    id: 'sauteing-searing',
    title: 'Sauteing and Searing',
    image: '/images/simmering-basics.png',
    description:
      'Achieve the perfect sear and elevate flavors in your dishes. Learn the secrets to sautéing like a pro and creating irresistible textures.',
    minutes: 20,
    date: '2023-06-01',
  },
  {
    id: 'roasting-tips',
    title: 'Roasting Tips',
    image: '/images/oven-roasting.png',
    description:
      'Ensure even cooking and unlock flavorful results with our expert roasting tips. From golden vegetables to succulent meats, master the art of roasting.',
    minutes: 25,
    date: '2023-06-01',
  },
  {
    id: 'prep-workstations',
    title: 'Prep Workstations:',
    image: '/images/reading-recipe.png',
    description:
      'Efficiently organize your kitchen space for chopping, mixing, and cooking. Elevate your efficiency in the heart of your culinary domain.',
    minutes: 15,
    date: '2023-06-01',
  },
  {
    id: 'cleaning-as-you-go',
    title: 'Cleaning as You Go',
    image: '/images/meal-prep.png',
    description:
      'Maintain a tidy kitchen for stress-free cooking. Learn the art of cleaning as you go, turning every culinary endeavor into a seamless experience.',
    minutes: 20,
    date: '2023-06-01',
  },
  {
    id: 'recipe-modification',
    title: 'Recipe Modification',
    image: '/images/recipe-book.png',
    description:
      'Feel confident modifying recipes to suit your taste. Explore the art of culinary creativity in crafting dishes uniquely your own.',
    minutes: 25,
    date: '2023-06-01',
  },
  {
    id: 'seasoning-basics',
    title: 'Seasoning Basics',
    image: 'https://loremflickr.com/600/400/spices,seasoning',
    description:
      'Learn how salt, herbs, and spices work together to build layers of flavor in every dish you make.',
    minutes: 10,
    date: '2023-06-01',
  },
  {
    id: 'food-safety',
    title: 'Food Safety Fundamentals',
    image: 'https://loremflickr.com/600/400/foodsafety,kitchen',
    description:
      'Practice safe handling and storage habits to keep your kitchen and ingredients fresh and worry-free.',
    minutes: 12,
    date: '2023-06-01',
  },
  {
    id: 'pantry-staples',
    title: 'Stocking Your Pantry',
    image: 'https://loremflickr.com/600/400/pantry,staples',
    description:
      'Build a well-stocked pantry with staples that make quick, flavorful cooking effortless any night of the week.',
    minutes: 18,
    date: '2023-06-01',
  },
  {
    id: 'plating',
    title: 'Plating Like a Pro',
    image: 'https://loremflickr.com/600/400/plating,gourmet',
    description:
      'Elevate presentation with simple plating techniques that make every dish look restaurant-worthy.',
    minutes: 14,
    date: '2023-06-01',
  },
  {
    id: 'meal-planning',
    title: 'Meal Planning Essentials',
    image: 'https://loremflickr.com/600/400/mealplanning,kitchen',
    description:
      'Plan your week of meals ahead of time to save effort, reduce stress, and cut down on food waste.',
    minutes: 22,
    date: '2023-06-01',
  },
]

function formatDate(value: string) {
  const date = new Date(value)
  const day = date.toLocaleDateString('en-US', { day: '2-digit' })
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
  const year = date.toLocaleDateString('en-US', { year: '2-digit' })
  return `${day} ${month} ${year}`
}

const ITEMS_PER_PAGE = 6

function chunk<T>(items: T[], size: number): T[][] {
  const pages: T[][] = []
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size))
  }
  return pages
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

export default function MasteringBasics() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const pages = chunk(basics, ITEMS_PER_PAGE)

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
    <div className="w-full">
      <div className="mb-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-mobile-header-2 md:text-header-2 font-montserrat uppercase text-dark">Mastering The Basics</h2>
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
        className="flex snap-x snap-mandatory items-start gap-6 overflow-x-auto scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {pages.map((page, pageIdx) => (
          <div
            key={pageIdx}
            className="grid w-full shrink-0 snap-start md:grid-cols-3 grid-rows-2 gap-x-4 gap-y-6"
          >
            {page.map((item) => (
              <div key={item.id} className="overflow-hidden rounded-3xl bg-light h-fit">
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                <div className="rounded-b-3xl border border-dark/16 p-4 md:p-6">
                  <h3 className="mb-2 line-clamp-2 text-header-3 font-montserrat text-dark">
                    {item.title}
                  </h3>
                  <p className="mb-8 text-paragraph-2 text-dark/60">{item.description}</p>
                  <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                    <span className="text-small uppercase tracking-wide text-dark">
                      {item.minutes} min - {formatDate(item.date)}
                    </span>
                    <button
                      type="button"
                      className="w-full shrink-0 rounded-full border border-dark px-5 py-2.5 text-center text-button font-roboto uppercase text-dark transition-colors hover:bg-dark hover:text-light md:w-fit"
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
