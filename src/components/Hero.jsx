import { useState } from "react"

// hero sections
const sections = [
  {
    id: 1,
    heading: "Discover innovative ways to decorate",
    description: "We provide unmatched quality, comfort and style for property owners across the country. Our experts combine form and function in bringing yout vision to life. Create a room in yout own style with our collection and make your property a relection of you and what you love.",
    image: "/images/desktop-image-hero-1.jpg"
  },
  {
    id: 2,
    heading: "We are available all across the globe",
    description: "With stores all over the world, it's easy fot you to find futniture fot your home or place of bussines. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any question? Don't hesitate to contact us today.",
    image: "/images/desktop-image-hero-2.jpg"
  },
  {
    id: 3,
    heading: "Manufactured with the best materials",
    description: "Our modern forniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    image: "/images/desktop-image-hero-3.jpg"
  }
]

// SlideButton
function SlideButton({
  action,
  disabled,
  setCurrentSection,
  children
}) {
  return(
    <button
      disabled={disabled}
      className="flex items-center justify-center h-[3.6rem] flex-1 transition duration-100 hover:bg-very-dark-gray"
      onClick={() => action == "prev" ? setCurrentSection(prev => prev - 1) : setCurrentSection(prev => prev + 1)}
    >
      {children}
    </button>
  )
}

export default function Hero(props) {
  // currentSection
  const [currentSection, setCurrentSection] = useState(0)

  return(
    <main className="">
      {sections.map((section, index) => {
        return(
          <section key={section.id} className={currentSection == index ? "grid grid-cols-12" : "hidden"}>
            <div className="col-span-8">
              <img src={sections[currentSection].image} alt="hero section slide image" className="block w-full" />
            </div>
            <div className="flex flex-col col-span-4">
              <div className="flex flex-1">
                <div className="m-auto px-24">
                  <h1 className="font-bold text-4xl text-very-dark-gray">
                    {sections[currentSection].heading}
                  </h1>
                  <p className="mt-5 text-lg text-dark-gray leading-8">
                    {sections[currentSection].description}
                  </p>
                  <a href="#" className="inline-flex items-center mt-6 font-semibold text-very-dark-gray uppercase tracking-[.5rem] leading-none">
                    shop now
                    <img src="/images/icon-arrow.svg" alt="link arrow" className="flex ml-4" />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-4">
                <div className="flex col-span-1 bg-black">
                  <SlideButton action="prev" disabled={currentSection === 0} setCurrentSection={setCurrentSection}>
                    <img src="/images/icon-angle-left.svg" alt="left angle icon" />
                  </SlideButton>
                  <SlideButton action="next" disabled={currentSection === (sections.length - 1)} setCurrentSection={setCurrentSection}>
                    <img src="/images/icon-angle-right.svg" alt="right angle icon" />
                  </SlideButton>
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </main>
  )
}
