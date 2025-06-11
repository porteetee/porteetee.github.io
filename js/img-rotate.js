const cat = document.getElementById('my-cat');
let rotation = 0;
let startX ;
let lastX = 0;
let velocity = 0;
let isDragging = false;
let inertiaAnimation;

cat.addEventListener('click', (e) => {
    cancelAnimationFrame(inertiaAnimation);
    velocity +=  1000;
    applyInertia();
});

cat.addEventListener('touchstart', (e) => {
    cancelAnimationFrame(inertiaAnimation);
    isDragging = true;
    startX = lastX = e.touches[0].clientX;
});

cat.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diffX = currentX - lastX;

    velocity = diffX;
    rotation += diffX;
    cat.style.transform = `rotate(${rotation}deg)`;

    lastX = currentX;
    e.preventDefault();
});

cat.addEventListener("touchend", () => {
    isDragging = false;
    applyInertia();
});

function applyInertia() {
    velocity *= 0.95;
    if (Math.abs(velocity) > 0.1) {
        rotation += velocity;
        cat.style.transform = `rotate(${rotation}deg)`;
        inertiaAnimation = requestAnimationFrame(applyInertia);
    }
}