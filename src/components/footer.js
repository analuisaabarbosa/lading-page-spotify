class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="disclaimer-premium">
                <div class="text">
                    <p class="disclaimer-premium__title">Teste o premium de graça</p>
                    <p class="disclaimer-premium__subtitle">Inscreva-se para curtir músicas ilimitadas
                        e podcasts sem anúncios. Não precisa de cartão de crédito.
                    </p>
                </div>
                <div class="disclaimer-premium__button">
                    <button type="button">Cadastre-se</button>
                </div>
            </footer>
        `
    }
}

customElements.define('custom-footer', Footer);