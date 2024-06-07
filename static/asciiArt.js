window.onload = generateAsciiArt(true); 

function generateAsciiArt(load=false) {
    var input = document.getElementById("inputText").value;
    var output = document.getElementById("asciiArt");

    current_art = document.cookie.split(';').find(cookie => cookie.includes("current_art"));
    if (current_art) {
        current_art = current_art.split('=')[1];
    } else {
        current_art = "";
    }

    if (!load) {
        current_art += "<br>" + input;
    }
    document.cookie = "current_art=" + current_art;
    outHTML = "";
    
    for (var i = 0; i < current_art.split("<br>").length; i++){
        outHTML += "<a href='#' onclick='deleteLine(" + i + ")'>" + current_art.split('<br>')[i] + "</a><br>";
    }

    output.innerHTML = outHTML;
}

function deleteLine(index) {
    var output = document.getElementById("asciiArt");
    var current_art = document.cookie.split(';').find(cookie => cookie.includes("current_art")).split('=')[1];
    var lines = current_art.split("<br>");

    lines.splice(index, 1);
    current_art = lines.join("<br>");
    document.cookie = "current_art=" + current_art;
    outHTML = "";

    for (var i = 0; i < lines.length; i++){
        outHTML += "<a href='#' onclick='deleteLine(" + i + ")'>" + lines[i] + "</a><br>";
    }

    output.innerHTML = outHTML;
}

function clearAsciiArt() {
    document.cookie = "current_art=";
    document.getElementById("asciiArt").innerHTML = "";
}