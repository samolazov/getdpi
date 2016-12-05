function getDPI() { //check dpi
    dpi = document.getElementById("dpi");
    if (!dpi) {
        dpi = document.createElement("div");
        dpi.id = "dpi";
        dpi.style.position = "absolute";
        dpi.style.height = dpi.style.width = "1in";
        dpi.style.top = dpi.style.left = "-100%";
        document.body.appendChild(dpi);
    }
    return !!(window.innerWidth > 1200 && dpi.offsetHeight < 200);
}

if (getDPI()) {
    doSomething;
}
