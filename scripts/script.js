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

  
//------------------------- Scroll effecs --------------------------------//


var btlHand = document.getElementById('btlHand');
var cupHand = document.getElementById('cupHand');

// hidden arms effect   //---- problemas de verificar varias veces
var actionExecuted = false;
window.addEventListener('scroll', function() {
  
  scrollPosition = window.scrollY;

  if (!actionExecuted && scrollPosition < 545) { 

    btlHand.setAttribute("class", "w-7/12 fixed top-24 right-0 overflow-hidden z-50 animate__fadeInRight animate__animated animate__fast opacity-1");
    cupHand.setAttribute("class", "w-5/12 fixed top-96 left-0 overflow-hidden z-50 animate__fadeInLeft animate__animated animate__fast opacity-1");
    setTimeout(function() {
      cupHand.classList.add("animation-lefthand");
    }, 800);

    actionExecuted = true;
  }

  if (actionExecuted && scrollPosition >= 545)  {
    btlHand.setAttribute("class","w-7/12 fixed top-24 right-0 overflow-hidden z-50 animate__rollOut animate__animated animate__fast opacity-0");
    cupHand.setAttribute("class","w-5/12 fixed top-96 left-0 overflow-hidden z-50 animate__rotateOutDownLeft animate__animated animate__fast opacity-0");
  
    actionExecuted = false;
  }

});

// hidden bottle effect

var bempty = document.getElementById('bempty');
var bwine = document.getElementById('bwine');
var winediv = document.getElementById('winediv');
var bfull = document.getElementById('bfull');
var winebottle = document.getElementById('winebottle');



window.addEventListener('scroll', function() {
  
  scrollPosition = window.scrollY;

  if (scrollPosition < 727) {
    bempty.setAttribute("class","absolute bottom-0 right-20 z-20  animate__fadeOutRight animate__animated animate__fast opacity-0");
    bwine.setAttribute("class","absolute bottom-2 right-1 bwine-liquid animate__fadeOutRight animate__animated animate__fast opacity-0");
    bfull.setAttribute("class","absolute bottom-0 right-20 z-20  animate__fadeOutRight animate__animated animate__fast opacity-0");
    winebottle.setAttribute("class","sticky right-20 top-extra z-10 fixtransopacity");
  }
  else if (scrollPosition >= 727 && scrollPosition <= 2273) {
    bempty.setAttribute("class","absolute bottom-0 right-20 z-20 animate__fadeInRight animate__animated animate__faster");
    bwine.setAttribute("class","absolute bottom-2 right-1 bwine-liquid animate__fadeInRight animate__animated animate__faster");
    winediv.setAttribute("class","wine-image-container absolute bottom-2 right-20 z-30 opacity-1");
    bfull.setAttribute("class","absolute bottom-0 right-20 z-20 animate__fadeInRight animate__animated animate__faster");
    winebottle.setAttribute("class","sticky right-20 top-extra z-10 opacity-1");
  }
  else if (scrollPosition >= 2273 && scrollPosition <= 3075) {
    bempty.setAttribute("class","absolute bottom-0 right-20 z-20 animate__fadeInRight animate__animated animate__faster");
    bwine.setAttribute("class","absolute bottom-2 right-1 bwine-liquid animate__fadeInRight animate__animated animate__faster");
    bfull.setAttribute("class","absolute bottom-0 right-20 z-20 animate__fadeInRight animate__animated animate__faster");
    winebottle.setAttribute("class","sticky right-20 top-extra z-10 opacity-1");
  }
  else {
    bempty.setAttribute("class","absolute bottom-0 right-20 z-20  animate__fadeOutRight animate__animated animate__fast opacity-0");
    bwine.setAttribute("class","absolute bottom-2 right-1 bwine-liquid animate__fadeOutRight animate__animated animate__fast opacity-0");
    bfull.setAttribute("class","absolute bottom-0 right-20 z-20  animate__fadeOutRight animate__animated animate__fast opacity-0");
    winebottle.setAttribute("class","sticky right-20 top-extra z-10 opacity-1");
  }

});

//liquid bottle effect

document.addEventListener("scroll", function() {      
  const imageContainer = document.querySelector(".wine-image-container");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

  const maxHeight = 41 * 16; // 41rem to px
  const newHeight = Math.max(maxHeight - (scrollTop / documentHeight) * maxHeight, 0);

  imageContainer.style.height = newHeight + "px";
});

// unhidde text

var title1 = document.getElementById('title1'); //"sobre nos"
var text1 = document.getElementById('text1'); //description
var text1_1 = document.getElementById('text1-1'); //description

var title2 = document.getElementById('title2'); //"contato"
var card = document.getElementById('contact-card'); //spline card

var title3 = document.getElementById('title3'); // "Deguste a vida"
var title4 = document.getElementById('title4'); // "com nossas"
var title5 = document.getElementById('title5'); // "experiências vínicas!"


window.addEventListener('scroll', function() {
  
  scrollPosition = window.scrollY;

  if (scrollPosition > 727) {
    title1.setAttribute("class","p-16 text-slate-50 text-8xl merriweather-black animate__fadeInUp animate__animated animate__fast opacity-1");
    
  }

  if (scrollPosition > 909) {
    text1.setAttribute("class","leading-10 merriweather-regular text-2xl animate__fadeInUp animate__animated animate__fast opacity-1");
    text1_1.setAttribute("class","leading-10 merriweather-regular text-2xl animate__fadeInUp animate__animated animate__fast opacity-1");
  }

  if (scrollPosition > 2000) {
    title2.setAttribute("class","p-16 text-neutral-950 text-8xl merriweather-black animate__fadeInUp animate__animated animate__fast opacity-1");
    
  }

  if (scrollPosition > 2246) {
    card.setAttribute("class","animate__zoomIn animate__fadeInUp animate__animated animate__fast opacity-1");
    
  }

  if (scrollPosition > 2770) {
    setTimeout(() => {
      title3.setAttribute("class", "text-neutral-950 text-6xl merriweather-black-italic p-1 animate__fadeInUp animate__animated animate__fast opacity-1");
    }, 300);
  
    setTimeout(() => {
      title4.setAttribute("class", "text-neutral-950 text-6xl merriweather-black-italic text-center p-1 pr-28 animate__fadeInUp animate__animated animate__fast opacity-1");
    }, 600);
  
    setTimeout(() => {
      title5.setAttribute("class", "text-neutral-950 text-6xl merriweather-black-italic text-end p-1 animate__fadeInUp animate__animated animate__fast opacity-1");
    }, 900);
  }
  
});

window.addEventListener('load', function() {  //---- problemas de effectos con scroll al cargar la pagina
  // Simular scroll bajando 200 píxeles
  window.scrollBy(0, 1);
  
  // Introducir un pequeño retraso antes de volver al inicio
  setTimeout(function() {
    window.scrollBy(0, -1);
  }, 50); // Ajusta el tiempo de retardo según sea necesario
});
