// Libraries
import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

// Components
import App from './components/App.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Blog from './components/Blog.jsx'

// Styles
import './stylesheets/App.css'

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </Route>
  </Router>
)

export default routes