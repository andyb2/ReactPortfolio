// function NavBar() {
//     return (
//         //         <nav class="navbar navbar-expand-lg navbar-light bg-dark">
//         //     <div class="container-fluid">
//         //       <a class="andrew navbar-brand text-light" href="index.html">Andrew Boyle</a>
//         //       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
//         //         aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         //         <span class="navbar-toggler-icon"></span>
//         //       </button>
//         //       <div class="collapse navbar-collapse" id="navbarNav">
//         //         <ul class="nav justify-content-end">
//         //           <li class="nav-item">
//         //             <a class="nav-link active text-light" aria-current="page" href="portfolio.html">Portfolio</a>
//         //           </li>
//         //           <li class="nav-item">
//         //             <a class="nav-link text-light" href="contact.html">Contact</a>
//         //           </li>
//         //           <li class="nav-item">
//         //             <a class="nav-link text-light" href="index.html">About</a>
//         //           </li>
//         //           <li class="nav-item">
//         //             <a class="nav-link text-light"
//         //               onclick="window.open('./assets/resume/resume.pdf', '_blank', 'fullscreen=yes'); return false;">My
//         //               Resume</a>
//         //           </li>
//         //         </ul>
//         //       </div>
//         //     </div>
//         //   </nav>

//     )
// }

// export default NavBar

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

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
                            <NavLink to="portfolio" className="nav-link active text-light"> PORTFOLIO </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/contact" className="nav-link active text-light"> CONTACT </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/" className="nav-link active text-light"> ABOUT </NavLink>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light"
                                onclick="window.open('./assets/resume/resume.pdf', '_blank', 'fullscreen=yes'); return false;">My
                      Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar