import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

import "./App.css"
import Home from "./pages/home"
import NoJSX from "./pages/no-jsx"
import State from "./pages/state"
import ReRender from "./pages/re-render"

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Simple React Demo</Link>
      </nav>
      <main>
        <Switch>
          <Route path="/no-jsx" component={NoJSX} />
          <Route path="/state" component={State} />
          <Route path="/re-render" component={ReRender} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
