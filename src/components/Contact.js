function Contact(){
    return (
        <section class="container my-2 d-flex justify-content-center">
        <div class="row mx-5">
          <h1 class="contactme text-light">Contact Me!</h1>
          <form class="message">
            <div class="form-group">
              <label for="exampleInputEmail1" class="emailAdd text-light">
                Email address
              </label>
              <input type="email" class="form-control mt-2" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email" />
            </div>
            <div class="form-group">
              <div class="col mb-3">
                <label for="exampleFormControlTextarea1" class="form-label mt-2">
                  Your Message!
                </label>
                <textarea class="form-control" id="controlTextarea1" rows="5"></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>
    )
}
export default Contact