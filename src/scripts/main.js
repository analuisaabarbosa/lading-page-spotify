const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

let debounceTimer;

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists`;
    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            const filteredResult = result.filter(artist => 
                artist.name.toLowerCase().includes(searchTerm)
            );
            if (filteredResult.length > 0) {
                displayResults(filteredResult);
            } else {
                resultArtist.classList.add('hidden');
            }
        })
        .catch((error) => console.error("Erro na requisição API:", error));
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden");
    
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    const artist = result[0]; 

    if (artist) {
        artistName.innerText = artist.name || '#';
        artistImage.src = artist.urlImg || 'default-image.jpg';  
    }

    resultArtist.classList.remove('hidden');
}

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
    } else {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            requestApi(searchTerm);
        }, 300);
    }
});
