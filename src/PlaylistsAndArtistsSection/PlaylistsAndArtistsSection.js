import React from "react";
import "./PlaylistsAndArtistsSection.css";
import "../Generic/Reset.css";
import "../Generic/Vars.css";

import Playlist1 from "../assets/imgs/1.jpeg";
import Playlist2 from "../assets/imgs/2.png";
import Playlist3 from "../assets/imgs/3.jpeg";
import Playlist4 from "../assets/imgs/4.jpeg";
import Playlist5 from "../assets/imgs/5.jpeg";
import Playlist6 from "../assets/imgs/6.jpeg";
import Playlist7 from "../assets/imgs/7.jpeg";
import Playlist8 from "../assets/imgs/8.jpeg";
import Playlist9 from "../assets/imgs/9.jpeg";
import Playlist10 from "../assets/imgs/10.jpeg";
import Playlist11 from "../assets/imgs/11.jpeg";
import Playlist12 from "../assets/imgs/12.jpeg";
import Playlist13 from "../assets/imgs/13.jpeg";
import Playlist14 from "../assets/imgs/14.jpeg";
import Playlist15 from "../assets/imgs/15.jpeg";
import PlayIcon from "../assets/icons/play-icon.svg";

const PlaylistsAndArtistsSection = () => {
  return (
    <div className="playlist-container">
      <div id="result-playlists">
        <div className="playlist">
          <h1 id="greeting">Boas vindas</h1>
          <h2 className="session">Navegar por todas as seções</h2>
        </div>
        <div className="offer__scroll-container">
          <div className="offer__list">
            <section className="offer__list-item">
              <a href="../App.js" className="cards">
                <div className="cards card1">
                  <img src={Playlist1} alt="Imagem do card" />
                  <span>Boas festas</span>
                </div>
              </a>
              <a href="../App.js" className="cards">
                <div className="cards card2">
                  <img src={Playlist2} alt="Imagem do card" />
                  <span>Feitos para você</span>
                </div>
              </a>
              <a href="../App.js" className="cards">
                <div className="cards card3">
                  <img src={Playlist3} alt="Imagem do card" />
                  <span>Lançamentos</span>
                </div>
              </a>
              <a href="../App.js" className="cards">
                <div className="cards card4">
                  <img src={Playlist4} alt="Imagem do card" />
                  <span>Creators</span>
                </div>
              </a>
              <a href="../App.js" className="cards">
                <div className="cards card5">
                  <img src={Playlist5} alt="Imagem do card" />
                  <span>Para treinar</span>
                </div>
              </a>
              <a href="../App.js" className="cards">
                <div className="cards card6">
                  <img src={Playlist6} alt="Imagem do card" />
                  <span>Podcasts</span>
                </div>
              </a>
              <a href="../App.js" className="cards">
                <div className="cards card7">
                  <img src={Playlist7} alt="Imagem do card" />
                  <span>Sertanejo</span>
                </div>
              </a>
              <a href="../App.js" className="cards">
                <div className="cards card8">
                  <img src={Playlist8} alt="Imagem do card" />
                  <span>Samba e pagode</span>
                </div>
              </a>
              <a href="../App.js" className="cards">
                <div className="cards card9">
                  <img src={Playlist9} alt="Imagem do card" />
                  <span>Funk</span>
                </div>
              </a>
              <a href="../App.js" className="cards">
                <div className="cards card10">
                  <img src={Playlist10} alt="Imagem do card" />
                  <span>MPB</span>
                </div>
              </a>
              <a href="../App.js" className="cards">
                <div className="cards card11">
                  <img src={Playlist11} alt="Imagem do card" />
                  <span>Rock</span>
                </div>
              </a>
              <a href="../App.js" className="cards">
                <div className="cards card12">
                  <img src={Playlist12} alt="Imagem do card" />
                  <span>Hip Hop</span>
                </div>
              </a>
              <a href="../App.js" className="cards">
                <div className="cards card13">
                  <img src={Playlist13} alt="Imagem do card" />
                  <span>Indie</span>
                </div>
              </a>
              <a href="../App.js" className="cards">
                <div className="cards card14">
                  <img src={Playlist14} alt="Imagem do card" />
                  <span>Relax</span>
                </div>
              </a>
              <a href="../App.js" className="cards">
                <div className="cards card15">
                  <img src={Playlist15} alt="Imagem do card" />
                  <span>Música Latina</span>
                </div>
              </a>
            </section>
          </div>
        </div>
      </div>
      <div id="result-artist" className="hidden">
        <div className="grid-container">
          <div className="artist-card" id="">
            <div className="card-img">
              <img id="artist-img" className="artist-img" alt="Foo Fighters" />
              <div className="play">
                <img src={PlayIcon} alt="Logo de play" />
              </div>
            </div>
            <div className="card-text">
              <a title="Foo Fighters" className="vst" href="../App.js">
                <span className="artist-name" id="artist-name"></span>
                <span className="artist-categorie">Artista</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistsAndArtistsSection;
