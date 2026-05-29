let allPillar = document.getElementById("allPillar");

let x = window.innerWidth;

setInterval(function () {
    x = x - 2;

    if (x < - allPillar.offsetWidth) {
        x = window.innerWidth;/* breite den fensters */
        /* rest piller auf rechte seite */
    }

    allPillar.style.left = x + "px";
    /* moved pillar nach links */
});

/* moved die pillar von rechts nach links */
