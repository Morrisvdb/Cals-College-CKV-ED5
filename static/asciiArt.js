window.onload = updateOutput();

function addArt() {
    console.log("Adding art");
    var art = document.getElementById('input').value;
    let artCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('art='));
    if (artCookie == undefined) {
        artCookie = "";
    } else {
        artCookie = artCookie.split('=')[1]
    }
    artCookie += art;
    document.cookie = "art=" + artCookie + "<br>" + "; path=/;";
    console.log(document.cookie);
    updateOutput();
}

function clearArt(line_nr = null) {
    if (line_nr == null) {
        document.cookie = "art=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } else {
        let artCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('art='));
        if (artCookie == undefined) {
            artCookie = "";
        } else {
            artCookie = artCookie.split('=')[1]
        }
        let lines = artCookie.split("<br>");
        lines.splice(line_nr, 1);
        document.cookie = "art=" + lines.join("<br>") + "; path=/;";
    }
    updateOutput();
}

function updateOutput() {
    let artCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('art='));
    if (artCookie == undefined) {
        artCookie = "";
    } else {
        artCookie = artCookie.split('=')[1]
    }
    console.log(artCookie)
    art = "";
    for (let i = 0; i < artCookie.split("<br>").length; i++) {
        art += "<a href='#' onclick='clearArt(" + i + ")'>" + artCookie.split("<br>")[i] + "</a><br>";
    }

    document.getElementById('output').innerHTML = art;
}