import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-white fixed-bottom">
        <div className="container p-4">
          <section className="mb-2">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://github.com/gitaalekhyapaul/trinetra"
              role="button"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i>
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
          <a
            className="text-white"
            href="https://github.com/gitaalekhyapaul/trinetra"
            rel="noreferrer"
            target="_blank"
          >
            ByteCoders
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
