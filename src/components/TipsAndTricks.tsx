import { useRef, useState } from 'react'

const tips = [
  {
    id: 'fresh-vs-dried-herbs',
    title: 'Fresh vs. Dried Herbs',
    image: '/images/tips_n_trick-1.png',
    description:
      'Discover the nuanced world of herbs. Learn when to opt for the freshness of herbs and when dried variants can amplify your culinary creations.',
    minutes: 15,
    date: '2023-06-01',
  },
  {
    id: 'choosing-produce',
    title: 'Choosing Produce',
    image: '/images/tips_n_trick-2.png',
    description:
      'Selecting ripe fruits and vegetables is an art. Explore our insights to ensure optimal taste in every dish.',
    minutes: 20,
    date: '2023-06-01',
  },
  {
    id: 'understanding-spices',
    title: 'Understanding Spices',
    image: '/images/tips_n_trick-3.png',
    description:
      'Enhance flavors by navigating the vast array of spices and seasonings. Uncover the secrets of creating dynamic taste profiles.',
    minutes: 25,
    date: '2023-06-01',
  },
  {
    id: 'balancing-sweet-savory',
    title: 'Balancing Sweet and Savory',
    image: '/images/tips_n_trick-4.png',
    description:
      'Achieve the perfect symphony of flavors by mastering the art of balancing sweet and savory elements in your dishes.',
    minutes: 15,
    date: '2023-06-01',
  },
  {
    id: 'fixing-seasoning-issues',
    title: 'Too Salty? Too Sweet? Fixing Seasoning Issues',
    image: '/images/tips_n_trick-5.png',
    description:
      'Discover quick fixes for seasoning mishaps and ensure your dishes are perfectly balanced.',
    minutes: 20,
    date: '2023-06-01',
  },
  {
    id: 'storage-solutions',
    title: 'Storage Solutions',
    image: '/images/tips_n_trick-6.png',
    description:
      'Keep ingredients fresh and accessible with our storage solutions. Transform your kitchen into an organized oasis.',
    minutes: 25,
    date: '2023-06-01',
  },
  {
    id: 'mastering-marinades',
    title: 'Mastering Marinades',
    image: '/images/tips_n_trick-1.png',
    description:
      'Unlock deeper flavor with the right combination of acid, oil, and aromatics in every marinade.',
    minutes: 15,
    date: '2023-06-01',
  },
  {
    id: 'knowing-your-oils',
    title: 'Knowing Your Oils',
    image: '/images/tips_n_trick-2.png',
    description:
      'Learn which oils shine at high heat and which are best saved for finishing a dish.',
    minutes: 20,
    date: '2023-06-01',
  },
  {
    id: 'reviving-stale-bread',
    title: 'Reviving Stale Bread',
    image: '/images/tips_n_trick-3.png',
    description: 'Bring day-old bread back to life with a few simple tricks before it hits the bin.',
    minutes: 10,
    date: '2023-06-01',
  },
  {
    id: 'perfecting-pasta-water',
    title: 'Perfecting Pasta Water',
    image: '/images/tips_n_trick-4.png',
    description:
      'Season generously and save a cup before draining — the small habits that make pasta night shine.',
    minutes: 12,
    date: '2023-06-01',
  },
  {
    id: 'ripening-fruit-faster',
    title: 'Ripening Fruit Faster',
    image: '/images/tips_n_trick-5.png',
    description:
      'Speed up ripening for avocados, bananas, and more with a few kitchen-counter tricks.',
    minutes: 8,
    date: '2023-06-01',
  },
  {
    id: 'freezing-leftovers-right',
    title: 'Freezing Leftovers Right',
    image: '/images/tips_n_trick-6.png',
    description:
      'Store extras the smart way so nothing goes to waste and reheats taste just as good.',
    minutes: 18,
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

export default function TipsAndTricks() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)
  const pages = chunk(tips, ITEMS_PER_PAGE)

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
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-header-2 font-montserrat uppercase text-dark">Tips &amp; Tricks</h2>
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
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {pages.map((page, pageIdx) => (
          <div
            key={pageIdx}
            className="grid w-full shrink-0 snap-start grid-cols-3 grid-rows-2 gap-x-4 gap-y-6"
          >
            {page.map((item) => (
              <div key={item.id} className="h-fit overflow-hidden rounded-3xl bg-light">
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                <div className="rounded-b-3xl border border-dark/16 p-6">
                  <h3 className="mb-2 truncate text-header-3 font-montserrat text-dark">
                    {item.title}
                  </h3>
                  <p className="mb-8 text-paragraph-2 text-dark/60">{item.description}</p>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-small uppercase tracking-wide text-dark">
                      {item.minutes} min - {formatDate(item.date)}
                    </span>
                    <button
                      type="button"
                      className="shrink-0 rounded-full border border-dark px-5 py-2.5 text-button font-roboto uppercase text-dark transition-colors hover:bg-dark hover:text-light"
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
