function handleYesClick() {
    alert('Yrr, i cant express my feeling right now, how happy i am..');
}

function handleMouseMove(event) {
    const noButton = document.querySelector('.no');
    const noButtonRect = noButton.getBoundingClientRect();
    const distanceX = Math.abs(event.clientX - (noButtonRect.left + noButtonRect.width / 2));
    const distanceY = Math.abs(event.clientY - (noButtonRect.top + noButtonRect.height / 2));
    const maxDistance = 100; 

    if (distanceX < maxDistance && distanceY < maxDistance) {
        moveNoButton(noButton);
    }
}

function moveNoButton(button) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    let offsetX = Math.random() * (containerRect.width - buttonRect.width);
    let offsetY = Math.random() * (containerRect.height - buttonRect.height);

    // Ensuring button stays within the container
    offsetX = Math.max(0, Math.min(offsetX, containerRect.width - buttonRect.width));
    offsetY = Math.max(0, Math.min(offsetY, containerRect.height - buttonRect.height));

    button.style.left = `${offsetX}px`;
    button.style.top = `${offsetY}px`;
}

document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.querySelector('.no');
    noButton.style.position = 'absolute';
    document.addEventListener('mousemove', handleMouseMove);
});
