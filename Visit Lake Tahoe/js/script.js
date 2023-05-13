// Arrow click
document.addEventListener("DOMContentLoaded", function () {
    // get the arrow and the section elements
    var arrow = document.getElementById('scroll-arrow');
    var section = document.getElementById('first-section');

    // listen for click events on the arrow
    arrow.addEventListener('click', function () {
        // scroll to the section
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// WildLife carousel
document.addEventListener("DOMContentLoaded", function () {
    var carouselItems = Array.from(document.querySelectorAll('.carousel-item'));
    var carouselDots = Array.from(document.querySelectorAll('.carousel-dot'));
    var prevButton = document.getElementById('carousel-prev');
    var nextButton = document.getElementById('carousel-next');

    function move(direction) {
        var activeIndex = carouselItems.findIndex(item => item.classList.contains('active'));
        carouselItems[activeIndex].classList.remove('active');
        carouselDots[activeIndex].classList.remove('active');
        var nextIndex = (activeIndex + direction + carouselItems.length) % carouselItems.length;
        carouselItems[nextIndex].classList.add('active');
        carouselDots[nextIndex].classList.add('active');
    }

    prevButton.addEventListener('click', function () { move(-1); });
    nextButton.addEventListener('click', function () { move(1); });
});