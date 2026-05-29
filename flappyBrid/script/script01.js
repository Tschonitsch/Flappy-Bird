let bird = document.getElementById("bird");

let y = 500;

document.addEventListener("keydown", function () {
    y = y - 100;

    bird.style.top = y + "px";
    bird.style.transform = "rotate(-20deg)";
    setTimeout(reset, 500);
});
setInterval(function () {
    y = y + 1;
    bird.style.top = y + "px";
});

function reset() {
    bird.style.transform = "rotate(0deg)";
    bird.style.top = y + "px";
}