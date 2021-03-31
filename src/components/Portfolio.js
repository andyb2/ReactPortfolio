function Portfolio(){
    

 

  function projectFour() {
    window.location.href = "https://andyb2.github.io/RandomPasswordGenerator/";
  }


 

  function gitFour() {
    window.location.href = "https://github.com/andyb2/RandomPasswordGenerator";
  }
    
  return(
<div className="container my-2">
    <div class="row d-flex justify-content-center">
      <div class="cardPort col-md-4 my-2 mx-2" id="portDisplay" >
        <img src="./public/assets/screenshots/projectSS/noteTakerSS.JPG" class="card-img-top"
          alt="Screenshot of note taker" />
        <article class="card-body">
          <p class="card-text text-center">
            Note taker project
          </p>
          <div class="col-md-12 text-center">
            <button class="btn btn-primary justify-content-center"><a href='https://utornotetaker.herokuapp.com/'>View Project</a></button>
            <button class="btn btn-primary justify-content-center"><a href='https://github.com/andyb2/NoteTaker'>Git Hub</a></button>
          </div>
        </article>
      </div>
      <div class="cardPort col-md-4 my-2 mx-2">
        <img src="./public/assets/screenshots/projectSS/weatherSS.JPG" class="card-img-top"
          alt="screenshot of weather dashboard" />
        <article class="card-body">
          <p class="card-text text-center">
            Weather Dashboard
          </p>
          <div class="col-md-12 text-center">
            <button class="btn btn-primary justify-content-center"><a href='https://andyb2.github.io/WeatherDashboard/'>View Project</a></button>
            <button class="btn btn-primary justify-content-center"><a href='https://github.com/andyb2/WeatherDashboard'>Git Hub</a></button>
          </div>
        </article>
      </div>
    </div>

    <div class="row d-flex justify-content-center">
      <div class="cardPort col-md-4 my-2 mx-2" id="portDisplay">
        <img src="./public/assets/screenshots/projectSS/dayPlannerSS.JPG" class="card-img-top"
          alt="Screenshot of note taker" />
        <article class="card-body">
          <p class="card-text text-center">
            Day Planner
          </p>
          <div class="col-md-12 text-center">
            <button class="btn btn-primary justify-content-center"><a href='https://andyb2.github.io/DayPlanner/'>View Project</a></button>
            <button class="btn btn-primary justify-content-center"><a href='https://github.com/andyb2/DayPlanner'>Git Hub</a></button>
          </div>
        </article>
      </div>
      <div class="cardPort col-md-4 my-2 mx-2">
        <img src="./public/assets/screenshots/projectSS/pwGenSS.JPG" class="card-img-top"
          alt="screenshot of weather dashboard" />
        <article class="card-body">
          <p class="card-text text-center">
            Weather Dashboard
          </p>
          <div class="col-md-12 text-center">
            <button class="btn btn-primary justify-content-center"><a href='https://andyb2.github.io/RandomPasswordGenerator/'>View Project</a></button>
            <button class="btn btn-primary justify-content-center"><a href='https://github.com/andyb2/RandomPasswordGenerator'>Git Hub</a></button>
          </div>
        </article>
      </div>
    </div>
    </div>
    )
}





export default Portfolio