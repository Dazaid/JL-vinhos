window.addEventListener('load', function () {  //---- problemas de effectos con scroll al cargar la pagina

    window.scrollBy(0, 1);


    setTimeout(function () {
        window.scrollBy(0, -1);
    }, 50);
});



window.addEventListener('scroll', function () {
    // Calcular el desplazamiento de la imagen de fondo
    let offset = window.pageYOffset;
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




// ---------------  Arms header effect  -----------------

var btlHand = document.getElementById('btlHand');
var cupHand = document.getElementById('cupHand');

// hidden arms effect   //---- problemas de verificar varias veces
var actionExecuted = false;
window.addEventListener('scroll', function () {

    scrollPosition = window.scrollY;

    if (!actionExecuted && scrollPosition < 400) {

        btlHand.setAttribute("class", "fixed top-28 right-0 w-[45vw] overflow-hidden z-1 animate__fadeInRight animate__animated animate__slow opacity-1");
        cupHand.setAttribute("class", "fixed top-80 left-0 w-[45vw] overflow-hidden z-50 animate__fadeInLeft animate__animated animate__slow opacity-1");
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

});


