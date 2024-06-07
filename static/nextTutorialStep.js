const canvas = document.getElementById('overlayCanvas');
const ctx = canvas.getContext('2d');
const tutorialText = document.getElementById('tutorialtext');
const tutorialButton = document.getElementById('tutorialbutton');
const navbar = document.getElementById('navbar');

// const themebutton = document.getElementById('themebutton').getBoundingClientRect();
var counter = 0;

function skipTutorial() {
    progressCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('progress=')).split('=')[1];
    if (progressCookie != String(0)) {
        do_skip = confirm("You have already completed the tutorial. Do you want to skip it?");
        if (do_skip) {
            window.location.href = '/artwork/1';
        } else {
            window.location.href = '/tutorial';
        }
    } else {
        window.location.href = '/tutorial';
    }
}

function nextTutorialStep() {
    counter++;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (counter == 1) {
        tutorialButton.innerHTML = 'Thats Usefull!';
        navbar.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--highlight-color');
        tutorialText.innerHTML = 'This is the navigation bar. It will stay with you for the entire tour and will allow you to leave at any time.'
    }
    if (counter == 2) {
        tutorialButton.innerHTML = "I'll keep that in mind!";
        navbar.style.backgroundColor = '';
        themeButtonPos = themeButton.getBoundingClientRect();
        tutorialText.innerHTML = "This is the theme button. It allows you to switch between light and dark mode. Click it to try."
        drawArrow(
            ctx,
            themeButtonPos.x + themeButtonPos.width / 2,
            themeButtonPos.y + themeButtonPos.height + window.innerHeight/50 + window.innerHeight/5,
            themeButtonPos.x + themeButtonPos.width / 2,
            themeButtonPos.y + themeButtonPos.height + window.innerHeight/20,
            15,
            getComputedStyle(document.documentElement).getPropertyValue('--highlight-color')
        );
        themeButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--highlight-color');
        themeButton.style.border = '2px solid';
        themeButton.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--alert-color');
    }
    if (counter == 3) {
        tutorialButton.innerHTML = "Next"
        themeButton.style.backgroundColor = '';
        themeButton.style.border = '';
        themeButton.style.borderColor = '';
        tutorialText.innerHTML = "In a little bit I will show you an empty artwork and run you trough how they work. Click the 'Next' button to continue."
    }

    if (counter == 4) {
        sampleArtwork = document.getElementById('sampleArtwork');
        sampleArtwork.style.display = 'inline';
        tutorialText.innerHTML = "This is a sample artwork, and this is what they look like."
        tutorialButton.innerHTML = "Wow, cool!"
    }

    if (counter == 5) {
        image = document.getElementById('image');
        image.src = "/static/images/0/2.png";
        tutorialText.innerHTML = "This is an example of an artwork. You can see the image and the title of the artwork."
        tutorialButton.innerHTML = "I see!"
    }

    if (counter == 6) {
        image = document.getElementById('image');
        image.src = "/static/images/0/1.png";
        tutorialText.innerHTML = "If there are multiple images in an artwork, you can click these buttons to switch between them."
        nextButton = document.getElementById('nextButtonT');
        prevButton = document.getElementById('prevButtonT');
        nextButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--highlight-color');
        prevButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--highlight-color');
        tutorialButton.innerHTML = 'So many images?';
    }

    if (counter == 7) {
        nextButton = document.getElementById('nextButtonT');
        prevButton = document.getElementById('prevButtonT');
        nextButton.style.backgroundColor = '';
        prevButton.style.backgroundColor = '';
        tutorialText.innerHTML = "You can also click on the image to view it in full screen."
        tutorialButton.innerHTML = "I see!"
        image = document.getElementById('image');
        image.onclick = function() { openFullscreen() }
    }

    if (counter == 8) {
        image = document.getElementById('image');
        image.onclick = ""
        demoButton = document.getElementById('demoButton');
        demoButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--highlight-color');
        tutorialText.innerHTML = "If you click this button you will get a small demo of the artwork. Note that the abcense of this button means that no demo is available."
        tutorialButton.innerHTML = "Sounds like fun!"
    }

    if (counter == 9) {
        document.getElementById('demoButton').style.backgroundColor = '';
        tutorialText.innerHTML = "If you move your attention over here you can see some more details about the artwork."
        details = document.getElementById('details');
        details.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--highlight-color');
        tutorialButton.innerHTML = "So i don't have to look it up!"
    }
    if (counter == 10) {
        details = document.getElementById('details');
        details.style.backgroundColor = '';
        tutorialText.innerHTML = "And that's it! You are now ready to explore the world of art."
        tutorialButton.innerHTML = "I'm ready!"
    }

    if (counter >= 11) {
        window.location.href = '/artwork/1';    
    }
}

function drawArrow(ctx, fromx, fromy, tox, toy, arrowWidth, color, arrowAngle=5){
    //variables to be used when creating the arrow
    var headlen = 10;
    var angle = Math.atan2(toy-fromy,tox-fromx);
 
    ctx.save();
    ctx.strokeStyle = color;
 
    //starting path of the arrow from the start square to the end square
    //and drawing the stroke
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.lineWidth = arrowWidth;
    ctx.stroke();
 
    //starting a new path from the head of the arrow to one of the sides of
    //the point
    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/arrowAngle),
               toy-headlen*Math.sin(angle-Math.PI/arrowAngle));
 
    //path from the side point of the arrow, to the other side point
    ctx.lineTo(tox-headlen*Math.cos(angle+Math.PI/arrowAngle),
               toy-headlen*Math.sin(angle+Math.PI/arrowAngle));
 
    //path from the side point back to the tip of the arrow, and then
    //again to the opposite side point
    ctx.lineTo(tox, toy);
    ctx.lineTo(tox-headlen*Math.cos(angle-Math.PI/arrowAngle),
               toy-headlen*Math.sin(angle-Math.PI/arrowAngle));
 
    //draws the paths created above
    ctx.stroke();
    ctx.restore();
}