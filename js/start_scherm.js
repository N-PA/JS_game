function begin() {
    setCookie("scherm", "level1");
    window.location.reload();
}

//temp startscherm
var klikVoorBegin = document.createElement("div");
klikVoorBegin.setAttribute('onclick', "begin()");
klikVoorBegin.innerHTML = "klik om te beginnen";
document.body.appendChild(klikVoorBegin);