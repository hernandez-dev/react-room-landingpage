export default function About() {
  return(
    <section className="grid grid-cols-12">
      <div className="col-span-3">
        <img src="/images/image-about-dark.jpg" alt="about section image" className="block w-full" />
      </div>
      <div className="flex col-span-6 px-14">
        <div className="m-auto">
          <h2 className="font-bold text-gray-700 uppercase leading-none tracking-[.5rem]">
            about our furniture
          </h2>
          <p className="mt-5 text-lg text-gray-500 leading-8">
            Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture prieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
          </p>
        </div>
      </div>
      <div className="col-span-3">
        <img src="/images/image-about-light.jpg" alt="about section image" className="block w-full" />
      </div>
    </section>
  )
}
