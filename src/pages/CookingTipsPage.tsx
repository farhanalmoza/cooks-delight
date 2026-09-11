import NewestRecipes from '../components/NewestRecipes'
import MasteringBasics from '../components/MasteringBasics'
import NourishingPalate from '../components/NourishingPalate'
import TipsAndTricks from '../components/TipsAndTricks'

const tips = [
  {
    icon: '/icons/ic-knife.svg',
    title: 'Quality Tools',
    description: 'Invest in high-quality knives, cutting boards, and cookware.',
  },
  {
    icon: '/icons/ic-food_claws.svg',
    title: 'Essential Utensils',
    description: 'Have a variety of utensils, including spatulas, tongs, and ladles.',
  },
  {
    icon: '/icons/ic-food_scales.svg',
    title: 'Measuring Accuracy',
    description: 'Use measuring cups and spoons for precise ingredient quantities.',
  },
]

export default function CookingTipsPage() {
  return (
    <div className="flex flex-col pt-16">
      <div className="flex flex-col gap-10">
        <div className="grid items-center gap-4 md:grid-cols-12">
          <h1 className="text-mobile-header-1 font-montserrat uppercase leading-none text-dark md:col-span-7 md:text-headline-1">
            Our Essential
            <br />
            Cooking Tips
          </h1>
          <p className="text-mobile-paragraph-1 font-roboto text-dark/60 md:col-span-5 md:col-start-8 md:text-right md:text-paragraph-1">
            Welcome to Cooks Delight's treasure trove of cooking wisdom! Whether you're a seasoned
            chef or just starting your culinary journey, our cooking tips are designed to elevate
            your skills, enhance your kitchen experience, and bring joy to your cooking adventures.
          </p>
        </div>

        <div className="grid gap-10 rounded-4xl border border-dark/16 p-6 md:grid-cols-3 md:p-10">
          {tips.map((tip) => (
            <div key={tip.title} className="flex items-start gap-4">
              <img src={tip.icon} alt="" className="h-16 w-16 shrink-0" />
              <div>
                <h3 className="mb-2 text-subtitle font-montserrat uppercase text-primary-3">
                  {tip.title}
                </h3>
                <p className="text-paragraph-2 text-dark/70">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <NewestRecipes />
      </div>

      <div className="mt-12">
        <MasteringBasics />
      </div>

      <div className="mt-9">
        <NourishingPalate />
      </div>

      <div className="mt-16 mb-12">
        <TipsAndTricks />
      </div>
    </div>
  )
}
