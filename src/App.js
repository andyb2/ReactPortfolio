import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={About}/>
      <Route exact path="/About" component={About}/>
      <Route exact path="/Portfolio" component={Portfolio}/>
      <Route exact path="/Contact" component={Contact}/>
      <Footer/>
    </Router>
  )
}

export default App;
