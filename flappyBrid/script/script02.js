let allPillar = document.getElementById("allPillar");

let x = 0;

setInterval(function () {
    x = x + 1;
    allPillar.style.right = x + "px";
});