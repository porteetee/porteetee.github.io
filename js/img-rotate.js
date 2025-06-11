const cat = document.getElementById('my-cat');
let rotation = 0;
let lastX=0 ,lastY=0;
let velocity = 0;
let isDragging = false;
let inertiaAnimation;

cat.addEventListener('click', (e) => {
    cat.style.animation = "none";
    cancelAnimationFrame(inertiaAnimation);
    velocity +=  1000;
    applyInertia();
});

cat.addEventListener('touchstart', (e) => {
    cat.style.animation = "none";
    cancelAnimationFrame(inertiaAnimation);
    isDragging = true;
    lastX = e.touches[0].clientX;
});

cat.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - lastX;
    const diffY = currentY - lastY;
    velocity = diffX+ diffY;
    rotation += diffX+ diffY;
    cat.style.transform = `rotate(${rotation}deg)`;

    lastX = currentX;
    lastY = currentY;
    e.preventDefault();
});

cat.addEventListener("touchend", () => {
    isDragging = false;
    applyInertia();
});

function applyInertia() {
    velocity *= 0.95;
    if (Math.abs(velocity) > 2) {
        rotation += velocity;
        cat.style.transform = `rotate(${rotation}deg)`;
        inertiaAnimation = requestAnimationFrame(applyInertia);
    }else {
        velocity = 2;
        spinForever();
    }
}
function spinForever() {
    rotation += velocity;
    cat.style.transform = `rotate(${rotation}deg)`;
    inertiaAnimation = requestAnimationFrame(spinForever);
}