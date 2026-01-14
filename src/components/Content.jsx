import React from "react";
import { LangHand } from "../context/LanguajeContext";
import portrait from "../images/Foto.png";
import pokedex from "../images/reactPokedex.png";
import rndmData from "../images/randomDataGen.png";
import adminPanel from "../images/controlPanel.png";
import rockPaper from "../images/rockPaperScissors.png";
import pokedexV2 from "../images/pokedexVersion2.PNG";
import jsCert from "../images/javascriptCert.png";
import itrCert from "../images/itransitionCert.png";
import sqlCert from "../images/sqlCert.png";
import testerCert from "../images/testerCert.png";
import "../styles/Content.css";

function Content({ showModal, certModal }) {
  const { lang, setLang } = LangHand();

  return (
    <>
      {lang === "spanish" ? (
        <div className="d-flex justify-content-center align-items-center py-3">
          <div className="bd-content ps-lg-2">
            <div className="d-md-flex align-items-center justify-content-center">
              <h1 id="about">Bienvenido A Mi Portafolio Digital</h1>
            </div>
            <div className="d-md-flex align-items-center justify-content-center py-5">
              <h2 className="aboutMe">Acerca de Mí</h2>
            </div>
            <div className="container-sm">
              <img
                id="main_photo"
                className="mx-auto d-block"
                src={portrait}
                width="250px"
              />
              <p className="text-center lh-lg py-3">
                Soy José Miguel Cardoso Banda, Ingeniero en Sistemas
                Computacionales, egresado del Instituto Tecnológico de San Juan
                del Río. En mis habilidades técnicas destacan el desarrollo
                Front-end utilizando principalmente la librería ReactJS. Poseo
                conocimientos en lenguajes de programación como Java y
                JavaScript; de igual forma tengo conocimientos básicos en bases
                de datos como MySQL; y por último tengo conocimientos en control
                de versiones usando herramientas como GitHub y GitLab.
              </p>
            </div>
            <div className="d-md-flex align-items-center justify-content-center py-3">
              <h2 id="projects">Mis Proyectos</h2>
            </div>
            <div className="container-sm">
              <p className="text-center lh-lg py-3">
                A continuación se muestran los proyectos que he desarrollado
                utilizando herramientas como HTML, CSS, JavaScript, ReactJS y
                Bootstrap.
              </p>
              <div className="container text-center">
                <div className="row row-cols-2">
                  <div className="col">
                    <img
                      id="pokedex"
                      className="rounded"
                      src={pokedex}
                      alt="React Pokédex Project"
                      width="350px"
                      onClick={() => showModal("pokedex")}
                    />
                  </div>
                  <div className="col">
                    <img
                      id="randomData"
                      className="rounded"
                      src={rndmData}
                      alt="Random Data Project"
                      width="350px"
                      onClick={() => showModal("random")}
                    />
                  </div>
                  <div className="col py-4">
                    <img
                      id="adminPanel"
                      className="rounded"
                      src={adminPanel}
                      alt="Admin Panel Project"
                      width="350px"
                      onClick={() => showModal("admin")}
                    />
                  </div>
                  <div className="col py-4">
                    <img
                      id="rockPaper"
                      className="rounded"
                      src={rockPaper}
                      alt="Rock Paper Scissors JavaScript"
                      width="350px"
                      onClick={() => showModal("rock")}
                    />
                  </div>
                  <div className="col">
                    <img
                      id="pokedexV2"
                      className="rounded"
                      src={pokedexV2}
                      alt="React Pokedex Version 2"
                      width="350px"
                      onClick={() => showModal("pokedex2")}
                    />
                  </div>
                  <div className="col py-4">
                    <h6>Más Proyectos Próximamente...</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-md-flex align-items-center justify-content-center py-3">
              <h2 id="certificates">Mis Certificados</h2>
            </div>
            <div className="container-sm">
              <p className="text-center lh-lg py-3">
                Por último, en esta sección se muestran los certificados que he
                obtenido en los diferentes cursos que he tomado para aprender
                nuevas tecnologías, así como también para reforzar conocimientos
                previamente adquiridos a lo largo de mi trayectoria en la
                universidad. Podrán ser pocos por ahora, pero siempre busco la
                manera de seguir aprendiendo y avanzando como profesional.
              </p>
              <div className="container text-center">
                <div className="row row-cols-2">
                  <div className="col">
                    <img
                      id="javascript"
                      className="rounded"
                      alt="JavaScript Course"
                      src={jsCert}
                      width="350px"
                      onClick={() => certModal("js")}
                    />
                  </div>
                  <div className="col">
                    <img
                      id="itransition"
                      className="rounded"
                      alt="Itransition Internship"
                      src={itrCert}
                      width="300px"
                      onClick={() => certModal("itr")}
                    />
                  </div>
                  <div className="col py-4">
                    <img
                      id="sql"
                      className="rounded"
                      alt="SQL Course"
                      src={sqlCert}
                      width="350px"
                      onClick={() => certModal("sql")}
                    />
                  </div>
                  <div className="col py-4">
                    <img
                      id="tester"
                      className="rounded"
                      alt="Tester Course"
                      src={testerCert}
                      width="350px"
                      onClick={() => certModal("tester")}
                    />
                  </div>
                  <div className="col py-4">
                    <h6>Próximamente Más Certificados...</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center py-3">
          <div className="bd-content ps-lg-2">
            <div className="d-md-flex align-items-center justify-content-center">
              <h1 id="about">Welcome To My Digital Portfolio</h1>
            </div>
            <div className="d-md-flex align-items-center justify-content-center py-5">
              <h2 className="aboutMe">About Me</h2>
            </div>
            <div className="container-sm">
              <img
                id="main_photo"
                className="mx-auto d-block"
                src={portrait}
                width="250px"
              />
              <p className="text-center lh-lg py-3">
                I'm José Miguel Cardoso Banda, Computer Systems Engineer, I'm a
                graduate from "Instituto Tecnológico de San Juan del Río". My
                technical skills can be resumed in Front-end development
                primarily using the ReactJS library. I have knowledge in
                programming languages as Java and JavaScript; also I have basic
                knowledge in databases like MySQL; and by last, I have some
                experience in version control by using tools as GitHub and
                GitLab.
              </p>
            </div>
            <div className="d-md-flex align-items-center justify-content-center py-3">
              <h2 id="projects">My Projects</h2>
            </div>
            <div className="container-sm">
              <p className="text-center lh-lg py-3">
                In this section, I'll showcase the projects I've worked on by
                using tools as HTML, CSS, JavaScript, ReactJS and Bootstrap.
              </p>
              <div className="container text-center">
                <div className="row row-cols-2">
                  <div className="col">
                    <img
                      id="pokedex"
                      className="rounded"
                      src={pokedex}
                      alt="React Pokédex Project"
                      width="350px"
                      onClick={() => showModal("pokedex")}
                    />
                  </div>
                  <div className="col">
                    <img
                      id="randomData"
                      className="rounded"
                      src={rndmData}
                      alt="Random Data Project"
                      width="350px"
                      onClick={() => showModal("random")}
                    />
                  </div>
                  <div className="col py-4">
                    <img
                      id="adminPanel"
                      className="rounded"
                      src={adminPanel}
                      alt="Admin Panel Project"
                      width="350px"
                      onClick={() => showModal("admin")}
                    />
                  </div>
                  <div className="col py-4">
                    <img
                      id="rockPaper"
                      className="rounded"
                      src={rockPaper}
                      alt="Rock Paper Scissors JavaScript"
                      width="350px"
                      onClick={() => showModal("rock")}
                    />
                  </div>
                  <div className="col py-4">
                    <h6>More Projects Coming Soon...</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-md-flex align-items-center justify-content-center py-3">
              <h2 id="certificates">Certificates</h2>
            </div>
            <div className="container-sm">
              <p className="text-center lh-lg py-3">
                By last, in this section I'll show the certificates I've got
                from the different courses I've taken to learn new technologies
                or to reinforce as well my previously aquired knowledge during
                my time at College. It migth be a little few for now, but I'm
                always looking for new ways to continue learning and improving
                as professional.
              </p>
              <div className="container text-center">
                <div className="row row-cols-2">
                  <div className="col">
                    <img
                      id="javascript"
                      className="rounded"
                      alt="JavaScript Course"
                      src={jsCert}
                      width="350px"
                      onClick={() => certModal("js")}
                    />
                  </div>
                  <div className="col">
                    <img
                      id="itransition"
                      className="rounded"
                      alt="Itransition Internship"
                      src={itrCert}
                      width="300px"
                      onClick={() => certModal("itr")}
                    />
                  </div>
                  <div className="col py-4">
                    <img
                      id="sql"
                      className="rounded"
                      alt="SQL Course"
                      src={sqlCert}
                      width="350px"
                      onClick={() => certModal("sql")}
                    />
                  </div>
                  <div className="col py-4">
                    <img
                      id="tester"
                      className="rounded"
                      alt="Tester Course"
                      src={testerCert}
                      width="350px"
                      onClick={() => certModal("tester")}
                    />
                  </div>
                  <div className="col py-4">
                    <h6>More Certificates Coming Soon...</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Content;
