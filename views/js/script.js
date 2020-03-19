function clearArtistFields() {
    var name = document.getElementById("AName").value = "";
    var about = document.getElementById("AAbout").value = "";
    var image = document.getElementById("AImage").value = "";
}

function displayArtistFields() {
    var obj = document.getElementById("aFields")
    var obj2 = document.getElementById("ArtistBox");
    if (obj.style.display == "flex") {
        obj.style.display = "none";
        obj2.style.display = "flex";
        clearArtistFields();
    }
    else {
        obj.style.display = "flex";
        obj2.style.display = "none"
    }

}

