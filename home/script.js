document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    document.querySelectorAll('.fadein').forEach(function (element) {
      element.classList.add('visible');
    });
  }, 100);
});

const restartButton = document.getElementById('home-btn');
restartButton.addEventListener('click', function () {
  location.reload();
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('work-btn').addEventListener('click', function () {
    window.location.href = '../work/index.html';
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

document.addEventListener('DOMContentLoaded', function () {
  const heroText = document.querySelector('.hero__text');
  const heroSection = document.querySelector('.hero');

  function adjustOpacity() {
    const scrollPosition = window.scrollY;
    const sectionHeight = heroSection.offsetHeight;
    let opacity = 1 - scrollPosition / (sectionHeight * 0.5);

    opacity = Math.max(opacity, 0);

    heroText.style.opacity = opacity;
  }

  adjustOpacity();

  window.addEventListener('scroll', adjustOpacity);
});

document.addEventListener('DOMContentLoaded', function () {
  const featureList = document.querySelector('.feature');

  function fadeInOnScroll() {
    const featurePosition = featureList.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 2;

    if (featurePosition < screenPosition) {
      featureList.classList.add('show');
    }
  }

  window.addEventListener('scroll', fadeInOnScroll);

  const images = document.querySelectorAll('.image');

  function checkImages() {
    const windowHeight = window.innerHeight;

    images.forEach((image) => {
      const imagePosition = image.getBoundingClientRect().top;

      if (imagePosition < windowHeight / 2) {
        image.classList.add('visible-img');
      } else {
        image.classList.remove('visible-img');
      }
    });
  }

  window.addEventListener('scroll', checkImages);
  checkImages();
});
