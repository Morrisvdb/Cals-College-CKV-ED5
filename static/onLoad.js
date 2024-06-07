window.onload = function() {
    const overlayCanvas = document.getElementById('overlayCanvas');
    var theme = localStorage.getItem('theme');
    var themeButtonIcon = document.getElementById('themebutton-icon');
    if (theme === 'dark') {
        document.body.classList.add('theme-dark');
        themeButtonIcon.className = 'fa-regular fa-moon';
    } else {
        document.body.classList.remove('theme-dark');
        themeButtonIcon.className = 'fa-solid fa-sun';
    }
    var ctx = overlayCanvas.getContext('2d');
    overlayCanvas.width = window.innerWidth;
    overlayCanvas.height = window.innerHeight;
    ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
}