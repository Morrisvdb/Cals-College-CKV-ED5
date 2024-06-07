window.onload = initializeImage();

function fileExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

function initializeImage() {
    var img = document.getElementById("image");
    var nextButton = document.getElementById("nextButton")
    nextButton.innerHTML = "Next <i class='fa fa-arrow-right'></i>"
    var prevButton = document.getElementById("prevButton")
    prevButton.innerHTML = "<i class='fa fa-arrow-left'></i> Previous"
    var curImageId = img.getAttribute('image-id');
    if (curImageId == null) {
        curImageId = 1;
        img.setAttribute('image-id', curImageId);
    }
    curImageId = parseInt(curImageId);
    var curSeriesId = img.getAttribute('series-id');
    if (curSeriesId == null) {
        curSeriesId = 1;
        img.setAttribute('series-id', curSeriesId);
    }
    curSeriesId = parseInt(curSeriesId);
    var url = '/static/images/' + curSeriesId + '/' + curImageId + '.png';
    if (!fileExists('/static/images/' + String(curSeriesId) + '/' + String(curImageId + 1) + '.png')) {
        nextButton.disabled = true;
        nextButton.style.display = "none";
    }
    if (curImageId == 1) {
        prevButton.disabled = true;
        prevButton.style.display = "none";
    }
    img.src = url;
}

function nextImage() {
    var img = document.getElementById("image");
    var nextButton = document.getElementById("nextButton")
    var prevButton = document.getElementById("prevButton")
    prevButton.disabled = false;
    prevButton.style.display = "inline";
    curImageId = parseInt(img.getAttribute('image-id'));
    curSeriesId = parseInt(img.getAttribute('series-id'));
    curImageId++;
    img.setAttribute('image-id', curImageId);
    if (!fileExists('/static/images/' + curSeriesId + '/' + curImageId+1 + '.png')) {
        nextButton.disabled = true;
        nextButton.style.display = "none";
    }
    img.src = '/static/images/' + curSeriesId + '/' + curImageId + '.png';
}

function prevImage() {
    var img = document.getElementById("image");
    var nextButton = document.getElementById("nextButton")
    var prevButton = document.getElementById("prevButton")
    nextButton.disabled = false;
    nextButton.style.display = "inline";
    curImageId = parseInt(img.getAttribute('image-id'));
    curSeriesId = parseInt(img.getAttribute('series-id'));
    curImageId--;
    img.setAttribute('image-id', curImageId);
    if (curImageId == 1) {
        prevButton.disabled = true;
        prevButton.style.display = "none";
    }
    img.src = '/static/images/' + curSeriesId + '/' + curImageId + '.png';
}

function openFullscreen() {
    var elem = document.getElementById("image");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}