let bird = document.getElementById("bird");

let y = 500;

document.addEventListener("keydown", function () {
    y = y - 100; /* wie viel bird nach oben geht */

    bird.style.top = y + "px";
    bird.style.transform = "rotate(-20deg)"; /* bird rotate */
    setTimeout(reset, 500);
    /* reset nach 500ms */
});

setInterval(function () {
    y = y + 1;
    bird.style.top = y + "px";
});
/* Vogel nach unten */

function reset() {
    bird.style.transform = "rotate(0deg)";
    bird.style.top = y + "px";
/* Vogel reset */}
