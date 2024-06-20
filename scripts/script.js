document.getElementById('playButton').addEventListener('click', function() {
    var video = document.getElementById('myVideo');
    video.play();
  });

  document.getElementById('myVideo').addEventListener('ended', function() {
    var video = document.getElementById('myVideo');
    var button = document.getElementById('playButton');
    video.style.opacity = '0';
    button.style.opacity = '0';

    // Esconde los elementos completamente después de la transición
    setTimeout(function() {
      video.style.display = 'none';
      button.style.display = 'none';
    }, 500); // 1 segundo para coincidir con la duración de la transición
  });