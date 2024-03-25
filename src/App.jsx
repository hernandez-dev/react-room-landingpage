import { useRef } from "react"
import { useImmerReducer } from "use-immer"
import { CSSTransition } from "react-transition-group"

// context
import StateContext from "./context/StateContext.jsx"
import DispatchContext from "./context/DispatchContext.jsx"

// components
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import MobileNavigation from "./components/MobileNavigation.jsx"

// links
/*const links = [
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
]*/

function App() {
  // references
  const nodeRef = useRef(null)

  // initialState
  const initialState = {
    links: [
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
    ],
    showMobileNavigation: false
  }

  // reducer
  function reducer(draft, action) {
    switch(action.type) {
      case "show-mobile-navigation":
        draft.showMobileNavigation = action.value
        break
    } // switch end
  }

  const  [state, dispatch] = useImmerReducer(reducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Hero links={state.links} />
        <About />
        <CSSTransition
          in={state.showMobileNavigation}
          nodeRef={nodeRef}
          timeout={300}
          classNames="navigation"
          unmountOnExit
        >
          <MobileNavigation nodeRef={nodeRef} links={state.links} />
        </CSSTransition>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

export default App
