const galleryImages = [
  '/images/porto-8.png',
  '/images/porto-1.png',
  '/images/porto-2.png',
  '/images/porto-3.png',
  '/images/porto-4.png',
  '/images/porto-5.png',
  '/images/porto-6.png',
  '/images/porto-7.png',
]

const socialLinks = [
  { href: 'https://facebook.com', icon: '/icons/facebook-black.svg', label: 'Facebook' },
  { href: 'https://instagram.com', icon: '/icons/instagram-black.svg', label: 'Instagram' },
  { href: 'https://youtube.com', icon: '/icons/youtube-black.svg', label: 'YouTube' },
]

export default function MyStorySection() {
  return (
    <div className="rounded-4xl border border-dark/16 p-4">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/author.png"
              alt="Isabella Russo"
              className="h-120 w-full object-cover"
            />
          </div>
          <div className="flex items-center justify-between gap-4 rounded-full border border-dark px-6 py-3">
            <span className="text-button font-roboto font-bold uppercase tracking-wide text-dark">
              Follow Me
            </span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center"
                >
                  <img src={social.icon} alt="" className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-mobile-header-2 md:text-header-2 font-montserrat uppercase leading-tight text-dark">
            From Italian Roots to Global Palates
          </h2>
          <div className="flex flex-col gap-4 text-mobile-paragraph-1 md:text-paragraph-1 font-roboto text-dark/60">
            <p>
              Born and raised in the vibrant culinary landscape of Italy, my journey with food
              began in the heart of my family's kitchen. Surrounded by the aroma of fresh herbs,
              the sizzle of pans, and the laughter of loved ones, I developed a deep appreciation
              for the art of cooking. My culinary education took me from the historic streets of
              Rome to the bustling markets of Florence, where I honed my skills and cultivated a
              love for the simplicity and authenticity of Italian cuisine.
            </p>
            <p>
              Driven by a relentless curiosity, I embarked on a global culinary exploration,
              seeking inspiration from the rich tapestry of flavors found in kitchens around the
              world. From the spicy markets of Marrakech to the sushi stalls of Tokyo, each
              experience added a unique brushstroke to my culinary canvas.
            </p>
            <p>
              Whether you're a seasoned home cook or just starting your culinary adventure, I'm
              delighted to have you here. Let's stir, simmer, and savor the beauty of creating
              something wonderful together.
            </p>
            <p>Warmest regards,</p>
          </div>
          <p
            className="font-homemade-apple text-dark/80"
            style={{ fontSize: '21px', lineHeight: '120%', letterSpacing: '0.21px' }}
          >
            Isabella Russo
          </p>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 gap-x-4 md:gap-y-6 md:grid-cols-4">
        {galleryImages.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-3xl">
            <img src={src} alt="" className="h-60 w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
