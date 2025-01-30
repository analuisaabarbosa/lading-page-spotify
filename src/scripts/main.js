async function loadItem(id, src, append = false) {
    const container = document.getElementById(id);
    const response = await fetch(src);
    const content = await response.text();
    
    if (append) {
        container.insertAdjacentHTML('beforeend', content);
    } else {
        container.innerHTML = content;
    }
}

loadItem('sidebar', './src/components/sidebar.html');
loadItem('footer', './src/components/footer.html');
loadItem('main-container', './src/components/headernav.html', true);
loadItem('main-container', './src/sections/playlists-section.html', true);