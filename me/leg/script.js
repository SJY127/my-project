document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    window.location.href = '../../me/index.html';
  }, 5000);

  document.addEventListener('mousemove', (e) => {
    let mouseX = e.pageX + 20;
    let mouseY = e.pageY + 20;

    let cursor = document.querySelector('.cursor');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });
});
