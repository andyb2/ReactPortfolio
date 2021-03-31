import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import Resume from '../assets/resume/resume.pdf'


function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                <NavLink to="/" className="andrew navbar-brand text-light">Andrew Boyle</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <NavLink to="portfolio" className="nav-link active text-light"> Portfolio </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/contact" className="nav-link active text-light"> Contact </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/" className="nav-link active text-light"> About </NavLink>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href={Resume} target="_blank" rel="noreferrer">My Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar