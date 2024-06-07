// Get the theme button element
const themeButton = document.getElementById('themebutton');
const themeButtonIcon = document.getElementById('themebutton-icon');

// Function to toggle the theme
function themeButtonCallback() {
    var cur = document.body.classList.contains('theme-dark');
    document.body.classList.toggle('theme-dark');
    var themeButtonIcon = document.getElementById('themebutton-icon');
    if (cur) {
        themeButtonIcon.className = 'fa-solid fa-sun';
        localStorage.setItem('theme', 'light');
    } else {
        themeButtonIcon.className = 'fa-regular fa-moon';
        localStorage.setItem('theme', 'dark');
    }
}
