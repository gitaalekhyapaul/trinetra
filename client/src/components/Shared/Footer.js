import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-white fixed-bottom">
        <div className="container p-4">
          <section className="mb-2">
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

          <section className="mb-1">
            <p>
              ByteCoders presents you solution to never miss your class due to
              miscommunication between the teacher and the student with the help
              of our project "Trinetra". "Trinetra" updates the timetable for
              students side when teacher updates change in the timetable.
            </p>
          </section>
        </div>

        <div
          class="text-center p-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:{" "}
          <a className="text-white" href="/">
            ByteCoders
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
