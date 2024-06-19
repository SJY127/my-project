document.addEventListener('DOMContentLoaded', function () {
  const backgroundImg = document.querySelector('.bg');
  const contentImg = document.querySelector('.me');

  window.addEventListener('scroll', function () {
    const halfWindowHeight = window.innerHeight / 2;

    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > halfWindowHeight) {
      const opacity = (scrollPosition - halfWindowHeight) / halfWindowHeight;
      backgroundImg.style.opacity = opacity > 1 ? 1 : opacity;
    }

    if (scrollPosition > halfWindowHeight) {
      const opacity = (scrollPosition - halfWindowHeight) / halfWindowHeight;
      contentImg.style.opacity = opacity > 1 ? 1 : opacity;
    }
  });

  const initialScroll = window.scrollY || window.pageYOffset;
  const initialOpacity =
    (initialScroll - window.innerHeight / 2) / (window.innerHeight / 2);
  backgroundImg.style.opacity = initialOpacity > 1 ? 1 : initialOpacity;
  contentImg.style.opacity = initialOpacity > 1 ? 1 : initialOpacity;
});

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

const restartButton = document.getElementById('me-btn');
restartButton.addEventListener('click', function () {
  location.reload();
});

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('work-btn').addEventListener('click', function () {
    window.location.href = '../work/index.html';
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
  document.querySelectorAll('.clickable-area').forEach(function (area) {
    area.addEventListener('click', function () {
      let url = '';
      switch (area.id) {
        case 'clickable-area-1':
          url = './bag/index.html';
          break;
        case 'clickable-area-2':
          url = './head/index.html';
          break;
        case 'clickable-area-3':
          url = './leg/index.html';
          break;
      }
      if (url) {
        window.location.href = url;
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  function showAndHideScrollMessage() {
    const scrollMessage = document.getElementById('ment');
    setTimeout(function () {
      scrollMessage.style.opacity = '0';
      scrollMessage.style.transition = 'opacity 1s ease-out';
      setTimeout(function () {
        scrollMessage.style.display = 'none';
      }, 1000);
    }, 2000);
  }
  showAndHideScrollMessage();
});
