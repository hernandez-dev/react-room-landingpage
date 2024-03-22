// hero sections
const sections = [
  {
    id: 1,
    heading: "Discover innovative ways to decorate",
    description: "We provide unmatched quality, comfort and style for property owners across the country. Our experts combine form and function in bringing yout vision to life. Create a room in yout own style with our collection and make your property a relection of you and what you love.",
    image: "/images/desktop-image-hero-1.jpg"
  }
]

export default function Hero(props) {
  return(
    <main className="">
      {sections.map(section => {
        return(
          <section key={section.id} className="grid grid-cols-12">
            <div className="col-span-8">
              <img src={section.image} alt="slide image" className="block w-full" />
            </div>
            <div className="flex flex-col col-span-4">
              <div className="flex flex-1">
                <div className="m-auto px-24">
                  <h1 className="font-bold text-4xl text-gray-800">
                    {section.heading}
                  </h1>
                  <p className="mt-5 text-lg text-gray-500 leading-8">
                    {section.description}
                  </p>
                  <a href="#" className="inline-flex items-center mt-6 font-semibold uppercase tracking-[.5rem] leading-none">
                    shop now
                    <img src="/images/icon-arrow.svg" alt="link arrow" className="flex ml-4" />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="flex col-span-1">
                  <button className="flex items-center justify-center h-[3.6rem] flex-1 bg-gray-700">
                    <img src="/images/icon-angle-left.svg" alt="button icon left" />
                  </button>
                  <button className="flex items-center justify-center h-[3.6rem] flex-1 bg-gray-700">
                    <img src="/images/icon-angle-right.svg" alt="button icon right" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </main>
  )
}
