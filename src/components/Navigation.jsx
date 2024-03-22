import { Link } from "react-router-dom"

export default function Navigation({ links }) {
  return(
    <div className="absolute top-20 left-0 z-10 w-full flex items-start pl-20">
      <Link to="/" className="">
        <img src="/images/logo.svg" alt="brand logo" className="block w-full" />
      </Link>
      <nav>
        <ul className="flex ml-10 space-x-10">
          {links.map(link => {
            return(
              <Link key={link.id} to={link.to} className="block pb-5 font-bold text-white leading-none">
                {link.name}
              </Link>
            )
          })}
        </ul>
      </nav>
    </div>
  ) // component return end
}
