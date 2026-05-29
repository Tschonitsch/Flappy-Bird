function checkCollision() {
    let height = window.innerHeight;
    let birdDie = bird.getBoundingClientRect();

    if (birdDie.top > height) {
        location.reload();
        
    }

    requestAnimationFrame(checkCollision);
}

checkCollision();