import React from "react";
import "./Sidebar.css";
import "../Generic/Reset.css";
import "../Generic/Vars.css";
import logoSpotify from "../assets/icons/logo-spotify.png";
import houseIcon from "../assets/icons/house-icon.svg";
import searchIcon from "../assets/icons/search.svg";
import bookIcon from "../assets/icons/book-icon.svg";    
import plusIcon from "../assets/icons/plus-icon.svg";
import globeIcon from "../assets/icons/globe-icon.svg";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <nav className="sidebar-navigation">
        <div className="sidebar-navigation__logo">
          <a href="../App.js">
            <img
              src={logoSpotify}
              alt="Logo do Spotify na sidebar"
            ></img>
          </a>
        </div>
        <ul>
          <li>
            <a href="../App.js">
              <span>
                <img
                  src={houseIcon}
                  style={{ width: "18px", height: "18px" }}
                  alt="Logo de casinha indicando a página inícial na sidebar"
                ></img>
              </span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="../App.js">
              <span>
                <img
                  src={searchIcon}
                  style={{ width: "18px", height: "18px" }}
                  alt="Logo de lupa indicando a funcionalidade de pesquisa na sidebar"
                ></img>
              </span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="library">
        <div className="library__content">
          <button className="library__button">
            <span>
              <img
                src={bookIcon}
                style={{ width: "18px", height: "18px" }}
                alt="Logo de livro indicando a sua biblioteca de músicas na sidebar"
              ></img>
            </span>
            <span>Sua biblioteca</span>
          </button>
          <span>
            <img
              src={plusIcon}
              className="fa-plus"
              style={{ width: "18px", height: "18px" }}
              alt="Logo do sinal de mais"
            ></img>
          </span>
        </div>
        <section className="section-playlist">
          <div className="section-playlist__content">
            <span className="text title">Crie sua primeira playlist</span>
            <span className="text subtitle">É fácil, vamos te ajudar</span>
            <button className="section-playlist__button">
              <span>Criar playlist</span>
            </button>
          </div>
        </section>
        <div className="cookies">
          <a href="../App.js">Cookies</a>
        </div>
        <div className="languages">
          <button className="languages__button">
            <span>
              <img
                src={globeIcon}
                style={{ width: "18px", height: "18px" }}
                alt="Logo de globo"
              ></img>
            </span>
            <span>Portugês do Brasil</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
