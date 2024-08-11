window.addEventListener('scroll', function() {
    // Calcular el desplazamiento de la imagen de fondo
    let offset = window.pageYOffset;
    document.body.style.backgroundPositionY = offset * 0 + "px";
    document.querySelector('.bkg1').style.backgroundPositionY = offset * 0.5 + "px";
    document.querySelector('.bkg2').style.backgroundPositionY = offset * 0.03 + "px";
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
