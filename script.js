function getDPI() { //check dpi
    dpi = document.getElementById("dpi");
    if (!dpi) {
        dpi = document.createElement("div");
        dpi.id = "dpi";
        document.body.appendChild(dpi);
    }
    return !!(window.innerWidth > 1200 && dpi.offsetHeight < 200);
}
