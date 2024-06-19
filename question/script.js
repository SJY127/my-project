document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('yes-btn').addEventListener('click', function () {
    window.location.href = '../home/index.html';
  });

  document.getElementById('no-btn').addEventListener('click', function () {
    var result = confirm('거절은 거절합니다');

    if (result) {
      window.location.href = '../home/index.html';
    }
  });
});
