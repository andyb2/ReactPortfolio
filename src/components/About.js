import React from "react";
// import resume from '../assets/resume.pdf'

function About() {
    return (
        <div class="cardCont mb-3">
            <div class="row g-0">
                <div class="col-md-4 sx-2">
                    <img class="nighttime img-fluid" src="./public/assets/screenshots/projectSS/night.jpg"
                        alt="Night time with street lights" />
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h1 class="aboutMeH text-light">About Me</h1>
                        <hr class="text-light" />
                        <article>
                            <p class="aboutMeP text-light">
                                Hello!
                    </p>
                            <p class="aboutMeP text-light">
                                I'm Andrew Boyle, and I'm completely new to coding. I have a business administration diploma from Humber
                                College, and experience in the following roles:
                    </p>
                            <ul class="text-light">
                                <li>Dispatcher</li>
                                <li>Governance & Internal Controls</li>
                                <li>Heavy Machine Operator</li>
                                <li>Masonry</li>
                            </ul>
                            <p>
                                <a class="linkedin" href="https://www.linkedin.com/in/andrew-boyle-a9a596204/" target="_blank" rel="noreferrer">
                                    <h3>Linkedin</h3>
                                </a>
                            </p>
                            <p>
                                <a class="github" href="https://github.com/andyb2" target="_blank" rel="noreferrer">
                                    <h3>GitHub</h3>
                                </a>
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </div >

    )
}
export default About
