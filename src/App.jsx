import React from "react";
import NavBar from "./components/NavBar";
import { LangHand } from "./context/LanguajeContext";
import Modal from "./components/Modal";
import Content from "./components/Content";
import PhotoModal from "./components/PhotoModal";
import jsCert from "./images/javascriptCert.png";
import itrCert from "./images/itransitionCert.png";
import sqlCert from "./images/sqlCert.png";
import testerCert from "./images/testerCert.png";

function App() {
  const { lang, setLang } = LangHand();

  function showModal(content) {
    const createModal = new bootstrap.Modal(
      document.getElementById("modalShowcase")
    );
    const modalTitle = document.getElementById("staticBackdropLabel");
    const gitLink = document.getElementById("githubLink");
    const vercLink = document.getElementById("vercelLink");
    switch (content) {
      case "pokedex":
        modalTitle.innerHTML =
          lang === "spanish" ? "Proyecto Pokédex" : "Pokédex Project";
        gitLink.innerHTML =
          lang === "spanish"
            ? `Repositorio en GitHub: <a href="https://github.com/JoseMiguelCardosoBanda/React_Pokedex" target="_blank">Visitar</a>`
            : `GitHub Repo: <a href="https://github.com/JoseMiguelCardosoBanda/React_Pokedex" target="_blank">Visit</a>`;
        vercLink.innerHTML =
          lang === "spanish"
            ? `Proyecto Desplegado En Vercel: <a href="https://react-pokedex-beta-six.vercel.app" target="_blank">Visitar</a>`
            : `Deployed Project In Vercel: <a href="https://react-pokedex-beta-six.vercel.app" target="_blank">Visit</a>`;
        createPlayer("pokedex");
        break;
      case "random":
        modalTitle.innerHTML =
          lang === "spanish"
            ? "Proyecto Generador de Datos Aleatorios"
            : "Random Data Generator Project";
        gitLink.innerHTML =
          lang === "spanish"
            ? `Repositorio en GitHub: <a href="https://github.com/JoseMiguelCardosoBanda/Random-Data-Generator" target="_blank">Visitar</a>`
            : `GitHub Repo: <a href="https://github.com/JoseMiguelCardosoBanda/Random-Data-Generator" target="_blank">Visit</a>`;
        vercLink.innerHTML =
          lang === "spanish"
            ? `Proyecto Desplegado En Vercel: <a href="https://random-data-generator-theta.vercel.app" target="_blank">Visitar</a>`
            : `Deployed Project In Vercel: <a href="https://random-data-generator-theta.vercel.app" target="_blank">Visit</a>`;
        createPlayer("random");
        break;
      case "admin":
        modalTitle.innerHTML =
          lang === "spanish"
            ? "Proyecto Panel de Adminstración"
            : "Admin Panel Project";
        gitLink.innerHTML =
          lang === "spanish"
            ? `Repositorio en GitHub: <a href="https://github.com/JoseMiguelCardosoBanda/Admin-Panel-Project" target="_blank">Visitar</a>`
            : `GitHub Repo: <a href="https://github.com/JoseMiguelCardosoBanda/Admin-Panel-Project" target="_blank">Visit</a>`;
        vercLink.innerHTML =
          lang === "spanish"
            ? `Proyecto Desplegado En Vercel: <a href="https://admin-panel-ashy-seven.vercel.app" target="_blank">Visitar</a>`
            : `Deployed Project In Vercel: <a href="https://admin-panel-ashy-seven.vercel.app" target="_blank">Visit</a>`;
        createPlayer("panel");
        break;
      case "rock":
        modalTitle.innerHTML =
          lang === "spanish"
            ? "Juego de Piedra, Papel o Tijeras En JavaScript"
            : "Rock, Paper, Scissors Game In JavaScript";
        gitLink.innerHTML =
          lang === "spanish"
            ? `Repositorio en GitHub: <a href="https://github.com/JoseMiguelCardosoBanda/RockPaperScissors_JavaScript" target="_blank">Visitar</a>`
            : `GitHub Repo: <a href="https://github.com/JoseMiguelCardosoBanda/RockPaperScissors_JavaScript" target="_blank">Visit</a>`;
        vercLink.innerHTML = "";
        createPlayer("rock");
        break;
      case "pokedex2":
        modalTitle.innerHTML =
          lang === "spanish"
            ? "Proyecto Pokédex Versión 2"
            : "Pokédex Project Version 2";
        gitLink.innerHTML =
          lang === "spanish"
            ? `Repositorio en GitHub: <a href="https://github.com/JoseMiguelCardosoBanda/Pokedex_v2" target="_blank">Visitar</a>`
            : `GitHub Repo: <a href="https://github.com/JoseMiguelCardosoBanda/Pokedex_v2" target="_blank">Visit</a>`;
        vercLink.innerHTML =
          lang === "spanish"
            ? `Proyecto Desplegado En Vercel: <a href="https://pokedex-v2-pink.vercel.app" target="_blank">Visitar</a>`
            : `Deployed Project In Vercel: <a href="https://pokedex-v2-pink.vercel.app" target="_blank">Visit</a>`;
        createPlayer("pokedex2");
        break;
    }
    createModal.show();
  }

  function createPlayer(project) {
    const player = document.getElementById("playerRatio");
    switch (project) {
      case "pokedex":
        const ifrp = document.createElement("iframe");
        ifrp.setAttribute("id", "staticPlayer");
        ifrp.setAttribute("type", "text/html");
        ifrp.setAttribute(
          "src",
          "//www.youtube.com/embed/HrNDCnmYxQE?enablejsapi=1&autoplay=1"
        );
        player.appendChild(ifrp);
        break;
      case "random":
        const ifr = document.createElement("iframe");
        ifr.setAttribute("id", "staticPlayer");
        ifr.setAttribute("type", "text/html");
        ifr.setAttribute(
          "src",
          "//www.youtube.com/embed/uCCiA_zM1GA?enablejsapi=1&autoplay=1"
        );
        player.appendChild(ifr);
        break;
      case "panel":
        const ifrad = document.createElement("iframe");
        ifrad.setAttribute("id", "staticPlayer");
        ifrad.setAttribute("type", "text/html");
        ifrad.setAttribute(
          "src",
          "//www.youtube.com/embed/UWTcgDl3aLM?enablejsapi=1&autoplay=1"
        );
        player.appendChild(ifrad);
        break;
      case "rock":
        const ifrRPS = document.createElement("iframe");
        ifrRPS.setAttribute("id", "staticPlayer");
        ifrRPS.setAttribute("type", "text/html");
        ifrRPS.setAttribute(
          "src",
          "//www.youtube.com/embed/oPrLZiDE6rQ?enablejsapi=1&autoplay=1"
        );
        player.appendChild(ifrRPS);
        break;
      case "pokedex2":
        const ifrp2 = document.createElement("iframe");
        ifrp2.setAttribute("id", "staticPlayer");
        ifrp2.setAttribute("type", "text/html");
        ifrp2.setAttribute(
          "src",
          "//www.youtube.com/embed/gBpVHQoEcO4?enablejsapi=1&autoplay=1"
        );
        player.appendChild(ifrp2);
        break;
    }
    var staticPlayer;
    const myModal = document.getElementById("modalShowcase");
    myModal.addEventListener("show.bs.modal", () => {
      staticPlayer = new YT.Player("staticPlayer");
    });
    myModal.addEventListener("hidden.bs.modal", () => {
      staticPlayer.stopVideo();
      const oldPlayer = document.getElementById("staticPlayer");
      oldPlayer.remove();
    });
  }

  function certModal(cert) {
    const show = new bootstrap.Modal(document.getElementById("certModal"));
    const modalBody = document.getElementById("modalBody");
    var imgSrc = "";
    if (cert === "js") {
      imgSrc = jsCert;
    } else if (cert === "sql") {
      imgSrc = sqlCert;
    } else if (cert === "tester") {
      imgSrc = testerCert;
    } else {
      imgSrc = itrCert;
    }
    modalBody.innerHTML = `<img src=${imgSrc} width=${
      cert === "js" || "sql" || "tester" ? "900px" : "700px"
    } />`;
    show.show();
  }

  return (
    <div className="min-vh-100 bg-dark text-white">
      <NavBar />
      <div className="py-4">
        <Content showModal={showModal} certModal={certModal} />
      </div>
      <Modal />
      <PhotoModal />
    </div>
  );
}

export default App;
