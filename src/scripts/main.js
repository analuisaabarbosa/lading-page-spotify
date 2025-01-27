async function loadItem(id, src) {
    const container = document.getElementById(id);
    const response = await fetch(src);
    const content = await response.text();
    container.innerHTML = content;
}

loadItem('sidebar', './src/components/sidebar.html');