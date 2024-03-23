// context
import StateContext from "./context/StateContext.jsx"
import DispatchContext from "./context/DispatchContext.jsx"

// components
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import MobileNavigation from "./components/MobileNavigation.jsx"

// links
const links = [
  {
    id: 1,
    name: "home",
    to: ""
  },
  {
    id: 2,
    name: "shop",
    to: ""
  },
  {
    id: 3,
    name: "about",
    to: ""
  },
  {
    id: 4,
    name: "contact",
    to: ""
  }
]

function App() {
  return (
    <StateContext.Provider value={1}>
      <DispatchContext.Provider value={1}>
        <Hero links={links} />
        <About />
        <MobileNavigation links={links} />
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
