import { useContext } from "react"
import { Link } from "react-router-dom"

// context
import DispatchContext from "../context/DispatchContext.jsx"

export default function Navigation({ links }) {
  // dispatch
  const dispatch = useContext(DispatchContext)

  return(
    <div className="absolute top-0 left-0 z-10 w-full flex items-center justify-between p-5 pt-10 desktop:items-start desktop:justify-start desktop:p-16">
      <button
        onClick={() => dispatch({ type: "show-mobile-navigation", value: true })}
        className="flex items-center justify-center w-10 h-10 desktop:hidden"
      >
        <img src="/images/menu-icon.svg" alt="menu button icon" />
      </button>
      <Link to="/" className="">
        <img src="/images/logo.svg" alt="brand logo" className="block w-full" />
      </Link>
      <nav className="hidden desktop:block">
        <ul className="flex ml-10 space-x-10">
          {links.map(link => {
            return(
              <Link key={link.id} to={link.to} className="group relative relative block pb-2 font-bold text-white leading-none">
                {link.name}
                <span className="absolute bottom-0 left-1/2 z-1 -translate-x-1/2 hidden w-[60%] h-[2px] mx-auto bg-white group-hover:block">
                </span>
              </Link>
            )
          })}
        </ul>
      </nav>
      <span className="block w-10 h-10"></span>
    </div>
  ) // component return end
}
