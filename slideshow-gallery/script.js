slides = document.querySelectorAll(".mySlides");
demos = document.getElementsByClassName("demo");
caption = document.querySelector(".caption");


let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(input) {
    slideIndex += input;
    showSlide(slideIndex);
}

function currentSlide(input) {
    showSlide(slideIndex = input);
}

function showSlide(index) {

    if (index - 1 == slides.length) slideIndex = 1;
    if (index == 0) slideIndex = slides.length;
    slides.forEach(element => {
        element
    });

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        demos[i].className = demos[i].className.replace(" selected-demo", "");
    }

    
    caption.innerHTML = demos[slideIndex - 1].alt;
    slides[slideIndex - 1].style.display = "block";
    demos[slideIndex - 1].className += " selected-demo";
}

