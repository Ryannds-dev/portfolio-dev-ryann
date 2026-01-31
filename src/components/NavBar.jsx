import { useState, useEffect } from "react";

import logoRyann from "../assets/img/logo-ryann.png";
import linkedinLogo from "../assets/img/linkedin-logo.svg";
import youtubeLogo from "../assets/img/youtube-logo.svg";
import instagramLogo from "../assets/img/instagram-logo.svg";

import "./NavBar.scss";

function NavBar() {
  const [activeLink, setActiveLink] = useState("acceuil");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <nav
      className={`navbar navbar-expand-xl navbar-light px-5 ${scrolled ? "scrolled" : ""} `}
    >
      <a className="navbar-brand" href="#home">
        <img src={logoRyann} alt="Logo Ryann" />
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a
              className={
                activeLink === "accueil" ? "active nav-link" : "nav-link"
              }
              onClick={() => onUpdateActiveLink("accueil")}
              href="#accueil"
            >
              Accueil <span className="visually-hidden">(current)</span>
            </a>
          </li>

          <li className="nav-item">
            <a
              className={
                activeLink === "a-propos" ? "active nav-link" : "nav-link"
              }
              onClick={() => onUpdateActiveLink("a-propos")}
              href="#a-propos"
            >
              À propos
            </a>
          </li>

          <li className="nav-item">
            <a
              className={
                activeLink === "competences" ? "active nav-link" : "nav-link"
              }
              onClick={() => onUpdateActiveLink("competences")}
              href="#competences"
            >
              Compétences
            </a>
          </li>

          <li className="nav-item">
            <a
              className={
                activeLink === "projets" ? "active nav-link" : "nav-link"
              }
              onClick={() => onUpdateActiveLink("projets")}
              href="#projets"
            >
              Projets
            </a>
          </li>

          <li className="nav-item">
            <a
              className={
                activeLink === "parcours" ? "active nav-link" : "nav-link"
              }
              onClick={() => onUpdateActiveLink("parcours")}
              href="#parcours"
            >
              Parcours
            </a>
          </li>

          <li className="navbar-icons">
            <div className="social-icon">
              <a href="#">
                <img src={linkedinLogo} alt="linkedin logo" />
              </a>
              <a href="#">
                <img src={youtubeLogo} alt="youtube logo" />
              </a>
              <a href="#">
                <img src={instagramLogo} alt="instagram logo" />
              </a>
            </div>
            <button className="connect" onClick={() => console.log("connect")}>
              <span>Me contacter</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
