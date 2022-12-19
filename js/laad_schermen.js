//kijken of het de eerste keer is dat je de site inlaad
if (!getCookie("eenKeerGeladen")) {
    setCookie("eenKeerGeladen", "true");
    setCookie("scherm", "start_scherm");
}

//laad het goede level / scherm bestand in via cookie
var scherm = document.createElement("script");
scherm.setAttribute('src', `js/${getCookie("scherm")}.js`);
document.head.appendChild(scherm);