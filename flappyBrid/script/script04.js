function checkCollision() {
    let height = window.innerHeight;
    /* fenster checkt höhe */

    let birdDie = bird.getBoundingClientRect();
    /* returnt informationen über size und position */

    if (birdDie.top > height) {
        window.location.href = "start.html" /* startet die start.html seite für button */

    }

    requestAnimationFrame(checkCollision);
}

checkCollision();


/* boden collision */
