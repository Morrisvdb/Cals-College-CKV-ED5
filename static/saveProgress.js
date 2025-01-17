window.onload = function() {
    let progressCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('progress='));
    

    newPoint = window.location.pathname.split('/')[2];
    if (newPoint != undefined) {
        if (parseInt(newPoint) > parseInt(progressCookie.split('=')[1])) {
            document.cookie = "progress=" + newPoint + "; path=/;";
        }
    }

    if (progressCookie != undefined) {
        all_works = "";
        for (let i = 1; i <= progressCookie.split('=')[1]; i++) {
            all_works += "<a href='/artwork/" + i + "'>" + i + "</a>";
        }
        document.getElementById("unlockedArtworks").innerHTML = all_works;
    } else {
        document.cookie = "progress=0; path=/;";
    
    }

}

function resetProgress() {
    doReset = confirm("Are you sure you want to reset your progress?");
    if (doReset) {
        var cookies = document.cookie.split(";");

        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }

        location.href = "/";
    }
}