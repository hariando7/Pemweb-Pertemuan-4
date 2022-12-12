/* DARK MODE */
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("lightmode");
    if (document.body.classList.contains("lightmode")) {
        icon.src = "Asset/lightmode.png";
    } else {
        icon.src = "Asset/darkmode.png";
    }
}