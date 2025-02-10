import React from "react";
import "./Header.css";
import "../Generic/Reset.css";
import "../Generic/Vars.css";
import smallLeft from "../assets/icons/small-left.png";
import smallRight from "../assets/icons/small-right.png";
import searchInput from "../assets/icons/search.svg";

const Header = () => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smallLeft} alt="Seta a esquerda"></img>
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="Seta a direita"></img>
        </button>
        <div className="header__search">
          <img
            src={searchInput}
            id="search-icon"
            alt="Logo lupa"
          ></img>
          <input
            id="search-input"
            type="text"
            maxLength="200"
            placeholder="O que você quer ouvir?"
          ></input>
        </div>
      </div>
      <div className="header__login">
        <button className="subscribe">Cadastre-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
