# Cópia da Landing Page do Spotify 🎶

Este projeto é uma cópia da landing page do Spotify, desenvolvida na imersão de frontend da Alura utilizando HTML, CSS e JavaScript. O foco principal foi em replicar o layout e a interface interativa, além de adicionar uma funcionalidade de pesquisa por artistas.

## Funcionalidades 🔍

- **Pesquisa de Artistas**: Implementada uma funcionalidade de pesquisa por artistas que simula uma busca real. A pesquisa é realizada através de uma API mockada usando um arquivo JSON, com o auxílio do JSON Server.

## Tecnologias Utilizadas 🛠 

- **HTML**: Estruturação da página e definição do conteúdo.
- **CSS**: Estilização da página, incluindo layout, cores e tipografia.
- **JavaScript**: Implementação da lógica de pesquisa e interação da página.
- **JSON Server**: Mock de API para simular a busca de artistas a partir de um arquivo JSON.

## Como Rodar o Projeto 🚀 

1. Clone este repositório:
  ```bash
  git clone https://github.com/analuisaabarbosa/lading-page-spotify
  ```

2. Instale o JSON Server:
  ```bash
  npm install -g json-server
  ```

3. Inicie o JSON Server com o arquivo mockado:
  ```bash
  json-server --watch db-artists.json --port 5000
  ```

4. Abra o arquivo index.html no seu navegador para visualizar a página.
