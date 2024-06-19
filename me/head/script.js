document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    window.location.href = '../../me/index.html';
  }, 5000);
  const bubbles = document.querySelectorAll('.bubble');

  bubbles.forEach((bubble) => {
    moveBubble(bubble);
  });

  function moveBubble(bubble) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1 + Math.random() * 2;

    let posX = Math.random() * (window.innerWidth - 50);
    let posY = Math.random() * (window.innerHeight - 50);

    bubble.style.left = `${posX}px`;
    bubble.style.top = `${posY}px`;

    function animate() {
      posX += speed * Math.cos(angle);
      posY += speed * Math.sin(angle);
      bubble.style.left = `${posX}px`;
      bubble.style.top = `${posY}px`;
      if (posX > window.innerWidth || posY > window.innerHeight) {
        posX = Math.random() * (window.innerWidth - 50);
        posY = -50;
      }
      requestAnimationFrame(animate);
    }
    animate();
  }
  bubbles.forEach((bubble) => {
    bubble.addEventListener('click', function () {
      bubble.style.opacity = '0';
      setTimeout(() => {
        bubble.style.display = 'none';
      }, 300);
    });
  });
});
