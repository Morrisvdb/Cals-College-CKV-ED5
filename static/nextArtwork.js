function nextArtwork() {
    var artwork = document.getElementById('nextArtworkButton');
    var artworkId = parseInt(artwork.getAttribute('data-artwork-id'));
    // if (artworkId < 11) {
    var nextArtworkId = artworkId + 1;
    window.location.href = '/artwork/' + nextArtworkId;
    // }
}

function prevArtwork() {
    var artwork = document.getElementById('nextArtworkButton');
    var artworkId = parseInt(artwork.getAttribute('data-artwork-id'));
    if (artworkId > 1) {
        var prevArtworkId = artworkId - 1;
        window.location.href = '/artwork/' + prevArtworkId;
    }
}