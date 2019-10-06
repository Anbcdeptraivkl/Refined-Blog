
// PROPERTIES

var slideshowTimer;
// 0 - n-1
var slideIndex = 0;
// Timer time
var interval = 3500;


// DEFINITIONS

function prevSlide() {
    clearInterval(slideshowTimer);

    showSlide(slideIndex -= 1);

    slideshowTimer = setInterval(
        function () {
            nextSlide();
        },
        interval
    );
}

function nextSlide() {
    clearInterval(slideshowTimer);

    showSlide(slideIndex += 1);

    slideshowTimer = setInterval(
        function () {
            nextSlide();
        },
        interval
    );
}

function showSlide(index) {
    var slides = document.getElementsByClassName('a-slide');

    var dotBtns = document.getElementsByClassName('a-dot');

    // Safe-proof
    if (index >= slides.length)
        slideIndex = 0;

    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    // Deactivate all
    for (let slideI = 0; slideI < slides.length; slideI++) {
        slides[slideI].style.display = "none";
    }

    for (let dotI = 0; dotI < dotBtns.length; dotI++) {
        dotBtns[dotI].classList.remove('dot-active');
    }

    // Activate the Current Ones
    slides[slideIndex].style.display = "block";
    dotBtns[slideIndex].classList.add('dot-active');
}

function currentSlide(index) {
    clearInterval(slideshowTimer);

    showSlide(slideIndex = index);

    slideshowTimer = setInterval(
        function() {
            nextSlide();
        },
        interval
    );
}


// MAIN PROCESSES
window.addEventListener(
    'load',
    function () {
        // Slide Index will be set to the Current Slide (or the changing Slide)
        showSlide(slideIndex);

        // The Interval will be cleared and reset each time the slides are changed
        slideshowTimer = setInterval(
            function() {
                nextSlide();
            },
            interval
        );
    }
);