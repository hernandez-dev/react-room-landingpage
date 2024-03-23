import { useContext } from "react"
import { Link } from "react-router-dom"

// context
import DispatchContext from "../context/DispatchContext.jsx"

export default function MobileNavigation({ links }) {
  // dispatch cotext
  const dispatch = useContext(DispatchContext)

  return(
    <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/50 desktop:hidden">
      <header className="flex items-center justify-between p-10 bg-white">
        <button onClick={() => dispatch({ type: "show-mobile-navigation", value: false })} className="flex items-center justify-center w-10 h-10">
          <img src="/images/icon-close.svg" alt="room logo" />
        </button>
        <nav className="font-bold text-very-dark-gray">
          <ul className="flex space-x-10">
            {links.map(link => {
              return(
                <Link key={link.id} className="block leadng-8">
                  {link.name}
                </Link>
              )
            })}
          </ul>
        </nav>
      </header>
    </div>
  )
}
