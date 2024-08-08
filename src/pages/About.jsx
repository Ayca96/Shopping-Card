import React from "react";
import foto from "../assets/foto.jpg";

const About = () => {
  return (
    <div className="fotom">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="card p-3 py-4 aboutback">
            <div className="text-center">
              <img
                src={foto}
                width={100}
                className="rounded-circle"
                alt="a"
              />
            </div>
            <div className="text-center mt-3">
              <span className="bg-secondary p-1 px-4 rounded text-white">
                Pro
              </span>
              <h5 className="mt-2 mb-0 text-white">Ayca SORUKLU</h5>
              <span className="text-black text-bg-success">Fullstack Developer</span>
              <div className="px-4 mt-1">
                <p className="fonts">
                  Hallo, ich bin Ayça, eine leidenschaftliche
                  Full-Stack-Entwicklerin. Mit umfassender Erfahrung in der
                  Frontend- und Backend-Entwicklung biete ich maßgeschneiderte
                  Lösungen für komplexe Webanwendungen. Meine Expertise umfasst
                  moderne Technologien wie React, Node.js und SQL. Ich lege
                  großen Wert auf sauberen, wartbaren Code und innovative
                  Ansätze zur Problemlösung. Lassen Sie uns gemeinsam an Ihrem
                  nächsten Projekt arbeiten und großartige Ergebnisse erzielen!
                </p>
              </div>
              <ul className="social-list">
                <li>
                  <i className="fa-brands fa-facebook" />
                </li>
                <li>
                  <i className="fa-brands fa-dribbble" />
                </li>
                <li>
                  <i className="fa-brands fa-instagram" />
                </li>
                <li>
                  <i className="fa-brands fa-linkedin" />
                </li>
                <li>
                  <i className="fa-brands fa-google" />
                </li>
              </ul>
              <div className="buttons">
                <button className="btn btn-outline-primary px-4">
                  <a
                    className="text-decoration-none text-white "
                    href="https://github.com/AshleyMiller79"
                    target="true"
                  >
                    Message
                  </a>
                </button>
                <button className="btn btn-primary px-4 ms-3">
                  <a
                    className="text-decoration-none text-white"
                    href="https://github.com/anthonyharold67"
                    target="true"
                  >
                    Contact
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
