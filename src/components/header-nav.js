class HeaderNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="header__navigation">
                <div class="navigation">
                    <button class="arrow-left">
                        <img src="./src/assets/icons/small-left.png" alt="Seta a esquerda">
                    </button>
                    <button class="arrow-right">
                        <img src="./src/assets/icons/small-right.png" alt="Seta a direita">
                    </button>
                <div class="header__search">
                    <img src="./src/assets/icons/search.svg" style="width: 16px; height: 16px; margin-left: 10px;" alt="Lupa">
                    <input id="search-input" type="text" maxlength="200" placeholder="O que você quer ouvir?">
                </div>
                </div>
                <div class="header__login">
                    <button class="subscribe">Cadastre-se</button>
                    <button class="login">Entrar</button>
                </div>
            </nav>
        `;
    }
}

customElements.define('header-nav', HeaderNav);