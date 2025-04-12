import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { LangHand } from "../context/LanguajeContext";

function NavBar() {
  const { lang, setLang } = LangHand();

  return (
    <>
      <header
        className="navbar navbar-expand-lg bd-navbar sticky-top rounded"
        style={{ backgroundColor: "#20ae62" }}
      >
        <nav className="container-xxl bd-gutter flex-wrap flex-lg-nowrap">
          <div className="bd-navbar-toggle">
            <button
              className="navbar-toggler p-1"
              type="button"
              data-bs-toggle="offcanvas"
            >
              <span className="d-none fs-6 pe-1">Browse</span>
            </button>
          </div>
          <a className="navbar-brand p-0 me-0 me-lg-2">
            <title>My Portfolio</title>
          </a>
          <div className="d-flex">
            <button
              className="navbar-toggler d-flex d-lg-none order-3 p-2"
              type="button"
              data-bs-toggle="offcanvas"
            ></button>
          </div>
          <div
            className="offcanvas-lg offcanvas-end flex-grow-1"
            tabIndex={-1}
            data-bs-scroll="true"
          >
            <div className="offcanvas-header px-4 pb-0">
              <h5 className="offcanvas-title text-white">My Portfolio</h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body p-4 pt-0 p-lg-0">
              <hr className="d-lg-none text-white-50" />
              <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav">
                <li className="nav-item col-6 col-lg-auto">
                  <a
                    className="nav-link py-2 px-0 px-lg-2 active "
                    href="#about"
                  >
                    {lang === "spanish" ? "Acerca de Mí" : "About Me"}
                  </a>
                </li>
                <li className="nav-item col-6 col-lg-auto">
                  <a
                    className="nav-link py-2 px-0 px-lg-2 active"
                    href="#projects"
                  >
                    {lang === "spanish" ? "Mis Proyectos" : "My Projects"}
                  </a>
                </li>
                <li className="nav-item col-6 col-lg-auto">
                  <a
                    className="nav-link py-2 px-0 px-lg-2 active"
                    href="#certificates"
                  >
                    {lang === "spanish" ? "Certificados" : "Certificates"}
                  </a>
                </li>
              </ul>
              <hr className="d-lg-none text-white-50" />
              <ul className="navbar-nav flex-row flex-wrap ms-md-auto">
                <li className="nav-item col-6 col-lg-auto">
                  <a
                    className="nav-link py-2 px-0 px-lg-2"
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/JoseMiguelCardosoBanda"
                  >
                    <AiFillGithub size={35} />
                  </a>
                </li>
                <li className="nav-item col-6 col-lg-auto">
                  <a
                    className="nav-link py-2 px-0 px-lg-2"
                    target="_blank"
                    rel="noopener"
                    href="https://www.linkedin.com/in/josé-miguel-cardoso-banda-458421301/"
                  >
                    <AiFillLinkedin size={35} />
                  </a>
                </li>
                <li className="nav-item py-2 py-lg-1 col-12 col-lg-auto">
                  <div className="vr d-none d-lg-flex h-100 mx-lg-2 text-white"></div>
                  <hr className="d-lg-none my-2 text-white-50" />
                </li>
                <li className="nav-item dropdown py-2">
                  <select
                    className="form-select"
                    value={lang}
                    onChange={(e) => setLang(e.target.value)}
                  >
                    <option value="spanish">Spanish</option>
                    <option value="english">English</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
