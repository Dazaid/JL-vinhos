

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



window.addEventListener('scroll', function () {

    scrollPosition = window.scrollY;

    var aboutContent = document.getElementById("about-container");
    var aboutText = document.querySelectorAll('.about-content');
    var navBar = document.getElementById("nav-bar");

    if (scrollPosition < 1000) {
        navBar.classList.remove('mix-blend-difference');
    }

    if (scrollPosition >= 1000) {
        navBar.classList.add('mix-blend-difference');
        aboutContent.setAttribute("class", "animate__fadeInUp animate__animated animate__fast opacity-1");
        
        aboutText.forEach(function (text, index) {
            setTimeout(function () {
                text.setAttribute("class", "animate__fadeInUp animate__animated animate__fast opacity-1");
            }, index * 500); // retraso por cada elemento
        });
    }


});

