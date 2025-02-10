class SideBarNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="sidebar">
                <nav class="sidebar-navigation">
                        <div class="sidebar-navigation__logo">
                            <a href="#">
                                <img src="./src/assets/icons/logo-spotify.png" alt="Logo Spotify">
                            </a>
                        </div>
                    <ul>
                        <li>
                            <a href="#">
                                <span>
                                <img src="./src/assets/icons/house-icon.svg" style="width: 18px; height: 18px;" alt="Logo da home">
                                </span>
                                <span>Início</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>
                                    <img src="./src/assets/icons/search.svg" style="width: 18px; height: 18px;" alt="Logo lupa">
                                </span>
                                <span>Buscar</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="library">
                    <div class="library__content">
                        <button class="library__button">
                            <span>
                                <img src="./src/assets/icons/book-icon.svg" style="width: 18px; height: 18px;" alt="Logo livro">
                            </span>
                            <span>Sua biblioteca</span>
                        </button>
                        <span>
                            <img src="./src/assets/icons/plus-icon.svg" class="fa-plus" style="width: 18px; height: 18px;" alt="Logo sinal de mais">
                        </span>
                    </div>
                    <section class="section-playlist">
                        <div class="section-playlist__content">
                            <span class="text title">Crie sua primeira playlist</span>
                            <span class="text subtitle">É fácil, vamos te ajudar</span>
                            <button class="section-playlist__button">
                                <span>Criar playlist</span>
                            </button>
                        </div>
                    </section>
                    <div class="cookies">
                        <a href="#">Cookies</a>
                    </div>
                    <div class="languages">
                        <button class="languages__button">
                            <span>
                                <img src="./src/assets/icons/globe-icon.svg" style="width: 18px; height: 18px;" alt="Logo de globo">
                            </span>
                            <span>Portugês do Brasil</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('sidebar-nav', SideBarNav);