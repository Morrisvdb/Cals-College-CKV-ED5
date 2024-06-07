// window.onload = function() {
//     if (window.location.href.pathname.split('/')[2] == "5") {
//         element.dispatchEvent(new KeyboardEvent('keydown', {'key': 'f12'}));
//     }
// }

function loadDemo() {
    image = document.getElementById("image");
    nextButton = document.getElementById("nextButton");
    prevButton = document.getElementById("prevButton");
    demo = document.getElementById("demo");
    demoButton = document.getElementById("demoButton");
    if (image.style.display == "inline") {
        image.style.display = "none";
        demo.style.display = "inline";
        nextButton.disabled = true;
        nextButton.style.display = "none";
        prevButton.disabled = true;
        prevButton.style.display = "none";
        demoButton.innerHTML = "Hide Demo";
    } else {
        image.style.display = "inline";
        demo.style.display = "none";
        nextButton.disabled = false;
        nextButton.style.display = "inline";
        prevButton.disabled = false;
        prevButton.style.display = "inline";
        initializeImage();
        demoButton.innerHTML = "Load Demo";
    }
}