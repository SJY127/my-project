document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.querySelectorAll('.fadein').forEach(function (element) {
      element.classList.add('visible');
    });
  }, 100);
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('home-btn').addEventListener('click', function () {
    window.location.href = '../home/index.html';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('me-btn').addEventListener('click', function () {
    window.location.href = '../me/index.html';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu');
  const menuList = document.querySelector('.menu_list');

  menu.addEventListener('click', function () {
    menuList.classList.toggle('active');
  });
});

document.getElementById('up_btn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
