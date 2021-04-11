import React from "react";

function footer() {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <footer class="bg-dark text-center text-white">
        <div class="container p-4">
          <section class="mb-4">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-google"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>

          <section class="mb-4">
            <p>
              ByteCoders pesents you solution to never miss your class due to
              miscommuvication between the teacher and the student with the help
              of our projet trinetra. Trinetra updates the timetable fir
              students side when teacher updates change in the timetable.
            </p>
          </section>
        </div>

        <div
          class="text-center p-3"
          style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a class="text-white" href="/">
            ByteCoders
          </a>
        </div>
      </footer>
    </div>
  );
}

export default footer;
