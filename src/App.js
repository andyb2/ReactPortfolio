import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import NavBar from './components/NavBar';
import About from './components/About'

// function Navbar() {
//   return (
//     <div>
//       <h1 className="title">Andrew Boyle</h1>
//       <nav>
//         <NavLink to="/" className="navv"> ABOUT </NavLink>
//         <NavLink to="portfolio" className="navv"> PORTFOLIO </NavLink>
//         <NavLink to="/contact" className="navv"> CONTACT </NavLink>
//       </nav>
//     </div>
//   )
// }


function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={About}/>
    </Router>
  )
}

export default App;
