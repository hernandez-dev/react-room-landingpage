export default function About() {
  return(
    <section className="desktop:grid desktop:grid-cols-12">
      <div className="desktop:col-span-3">
        <img src="/images/image-about-dark.jpg" alt="about section image" className="block w-full" />
      </div>
      <div className="flex px-10 py-14 desktop:col-span-6">
        <div className="m-auto">
          <h2 className="font-bold text-very-dark-gray uppercase leading-none tracking-[.5rem]">
            about our furniture
          </h2>
          <p className="mt-5 text-lg text-dark-gray leading-8">
            Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture prieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </div>
      </div>
      <div className="desktop:col-span-3">
        <img src="/images/image-about-light.jpg" alt="about section image" className="block w-full" />
      </div>
    </section>
  )
}
