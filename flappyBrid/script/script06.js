window.addEventListener("load", function () {
    let startTime = Date.now(); /*Returns the number of milliseconds elapsed since midnight, January 1, 1970 Universal Coordinated Time (UTC). */
    setInterval(function () {
        let now = Date.now();
        let seconds = Math.floor((now - startTime) / 1000);
        /*Returns the greatest integer less than or equal to its numeric argument. */
        console.log("Seite läuft seit:", seconds, "Sekunden");

        let points = document.getElementById("points");
        seconds = seconds * 1;
        points.innerText = "Points: " + seconds;
    });
});