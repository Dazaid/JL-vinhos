// window.addEventListener('load', function () {
//     // Cuando la página se haya cargado completamente, elimina el preloader
//     var preloader = document.getElementById('preloader');
//     var content = document.getElementById('content');
//     var prebtlHand = document.getElementById('btlHand');
//     var precupHand = document.getElementById('cupHand');
//     setTimeout(function () {
//         preloader.classList.add('fade');
//         content.classList.add('loaded');
//     }, 1800); // Tiempo para la transición de desvanecimiento

//     setTimeout(function () {
//         preloader.classList.add('out');
//     }, 2000); // Tiempo para display none

// });

window.addEventListener('load', function () {  //---- problemas de effectos con scroll al cargar la pagina

    window.scrollBy(0, 1);


    setTimeout(function () {
        window.scrollBy(0, -1);
    }, 50);
});



window.addEventListener('scroll', function () {
    // Calcular el desplazamiento de la imagen de fondo
    let offset = window.scrollY;
    document.body.style.backgroundPositionY = offset * 0 + "px";
    document.querySelector('.bkg1').style.transform = 'translateY(' + offset * 0.5 + 'px)';
    document.querySelector('.bkg2').style.transform = 'translateY(' + offset * 0.03 + 'px)';
});




let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Número de artículos visibles a la vez
const itemsPerView = 3;

// Calcula el número total de movimientos posibles (por bloques de 3)
const totalMoves = Math.ceil(totalItems / itemsPerView);

function moveCarousel(direction) {
    currentIndex = (currentIndex + direction + totalMoves) % totalMoves;
    updateCarousel();
}

function updateCarousel() {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    // Multiplica por el ancho de la vista para mover de 3 en 3
    carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function autoMoveCarousel() {
    moveCarousel(1);
}

setInterval(autoMoveCarousel, 5000); // Cambia de imagen cada 3 segundos

updateCarousel();

// -----------------------------------------------------------------------------------

let currentIndex2 = 0;
const items2 = document.querySelectorAll('.carousel-item2');
const totalItems2 = items2.length;

// Número de artículos visibles a la vez
const itemsPerView2 = 3;

// Calcula el número total de movimientos posibles (por bloques de 3)
const totalMoves2 = Math.ceil(totalItems2 / itemsPerView2);

function moveCarousel2(direction2) {
    currentIndex2 = (currentIndex2 + direction2 + totalMoves2) % totalMoves2;
    updateCarousel2();
}

function updateCarousel2() {
    const carouselWrapper2 = document.querySelector('.carousel-wrapper2');
    // Multiplica por el ancho de la vista para mover de 3 en 3
    carouselWrapper2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
}

function autoMoveCarousel2() {
    moveCarousel2(-1);
}

setInterval(autoMoveCarousel2, 5100); // Cambia de imagen cada 3 segundos

updateCarousel2();

// ---------------------- Carrusel Arte ------------------------------------------------


let frameCurrentIndex = 0;
const frameItems = document.querySelectorAll('.carousel-item');
const frameTotalItems = frameItems.length;

// Número de artículos visibles a la vez
const frameItemsPerView = 3;

// Calcula el número total de movimientos posibles (por bloques de 3)
const frameTotalMoves = Math.ceil(frameTotalItems / frameItemsPerView);

function moveFrameCarousel(direction) {
    frameCurrentIndex = (frameCurrentIndex + direction + frameTotalMoves) % frameTotalMoves;
    updateFrameCarousel();
}

function updateFrameCarousel() {
    const frameCarouselWrapper = document.querySelector('.carousel-wrapper');
    // Multiplica por el ancho de la vista para mover de 3 en 3
    frameCarouselWrapper.style.transform = `translateX(-${frameCurrentIndex * 100}%)`;
}

function autoMoveFrameCarousel() {
    moveFrameCarousel(1);
}

setInterval(autoMoveFrameCarousel, 5000); // Cambia de imagen cada 3 segundos

updateFrameCarousel();



// ---------------  Arms header effect  -----------------

var btlHand = document.getElementById('btlHand');
var cupHand = document.getElementById('cupHand');

// hidden arms effect   //---- problemas de verificar varias veces
var actionExecuted = false;
window.addEventListener('scroll', function () {

    scrollPosition = window.scrollY;

    if (!actionExecuted && scrollPosition < 400) {

        btlHand.setAttribute("class", "fixed top-28 right-0 w-[45vw] z-1 animate__fadeInRight animate__animated animate__slow opacity-1");
        cupHand.setAttribute("class", "fixed top-80 left-0 w-[45vw] z-50 animate__fadeInLeft animate__animated animate__slow opacity-1");
        setTimeout(function () {
            cupHand.classList.add("animation-lefthand");
        }, 2000);

        actionExecuted = true;
    }

    if (actionExecuted && scrollPosition >= 400) {
        btlHand.setAttribute("class", "fixed top-28 right-0 w-[45vw] overflow-hidden z-1 animate__rollOut animate__animated animate__fast opacity-0");
        cupHand.setAttribute("class", "fixed top-80 left-0 w-[45vw] overflow-hidden z-1 animate__fadeOutBottomLeft animate__animated animate__fast opacity-0");

        actionExecuted = false;
    }

    if (actionExecuted && scrollPosition >= 640) {
        cupHand.classList.add("hidden");
    }

    if (document.referrer && scrollPosition >= 640) {
        cupHand.classList.add("hidden");
        btlHand.classList.add("hidden");
    }

    var aboutTitle = document.getElementById("about-title");
    var aboutContent = document.getElementById("about-container");
    var aboutText = document.querySelectorAll('.about-content');

    if (scrollPosition >= 640) {
        aboutTitle.setAttribute("class", "animate__fadeInUp animate__animated animate__fast opacity-1");
    }

    if (scrollPosition >= 680) {
        aboutContent.setAttribute("class", "animate__fadeInUp animate__animated animate__fast opacity-1");
        aboutText.forEach(function(text, index) {
            setTimeout(function() {
                text.setAttribute("class", "animate__fadeInUp animate__animated animate__fast opacity-1");
            }, index * 500); // retraso por cada elemento
        });
    }

});

//---------------------  Coin effect  -------------------

window.addEventListener('scroll', function() {
    // Obtener la posición actual del scroll en Y
    var scrollPositionY = window.scrollY;

    // Verificar si la posición del scroll es mayor a 3560
    if (scrollPositionY > 3560) {
        // Obtener todos los elementos con la clase "coinUp"
        var coinElements = document.querySelectorAll('.coinUp');

        // Añadir las tres clases a cada uno de los elementos
        coinElements.forEach(function(element, index) {
            setTimeout(function() {
                element.classList.add('animate__flip', 'animate__animated', 'animate__fast');
            }, index * 300); // retraso por cada elemento
        });
    }
    if (scrollPositionY > 3960) {
        var coinElements2 = document.querySelectorAll('.coinBottom');

        coinElements2.forEach(function(element2, index) {
            setTimeout(function() {
                element2.classList.add('animate__flip', 'animate__animated', 'animate__fast');
            }, index * 300); // retraso por cada elemento
        });
    }
});

















// Función para interpolar entre dos colores




function interpolateColor(color1, color2, factor) {
    const result = color1.slice();
    for (let i = 0; i < 3; i++) {
        result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
    }
    return result;
}

// Convertir color RGB a formato CSS rgb()
function rgbToCss(rgb) {
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

// Colores iniciales y finales (RGB)
const initialColor = [255, 255, 255];  // Blanco
const blackColor = [0, 0, 0]; // Negro

// Manejar el evento de scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const startScroll = 2000;
    const endScroll = 5000;

    // Calcular el progreso del scroll entre 2000 y 5000
    const scrollFactor = Math.min(Math.max((scrollPosition - startScroll) / (endScroll - startScroll), 0), 1);

    // Calcular el color interpolado
    const interpolatedColor = interpolateColor(initialColor, blackColor, scrollFactor);

    // Aplicar el color al texto, fill de los path y la imagen
    const navBar = document.getElementById('nav-bar');
    const newColor = rgbToCss(interpolatedColor);

    // Cambiar el color de los enlaces de navegación
    navBar.querySelectorAll('li').forEach(li => {
        li.style.color = newColor;
    });

    navBar.querySelectorAll('h2').forEach(h2 => {
        h2.style.color = newColor;
    });

    // Cambiar el filtro de la imagen a negro
    navBar.querySelectorAll('img').forEach(img => {
        img.style.filter = `brightness(${1 - scrollFactor})`;
    });
});