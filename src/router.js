import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"

import { About, App, Blog, Home, Resume } from "./components"

const routes = (
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/resume" component={Resume} />
    </App>
  </Router>
)

export default routes
