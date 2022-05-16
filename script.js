let slideIndex = 1;
showSlides(slideIndex);

// Controls für die weiter und zurück knöpfe
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Kontrolls für die Knöpfe unten
function currentSlide(n) {
    showSlides(slideIndex = n);
}
// zeigt die Bilder an
function showSlides(n) {
    let i;
    // holt die Elemente wo die Bilder gespeichert sind
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    // Wenn die Slide zuende ist geht es wieder zum ersten Bild
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    //Zeigt die Kreise an
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}