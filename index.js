let slideIndex = 0;
    const slides = document.querySelector('.slides');

    function showSlides() {
        let slidesArray = Array.from(slides.children);
        slideIndex++;
        if (slideIndex >= slidesArray.length) slideIndex = 0;
        slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }

    function plusSlides(n) {
        slideIndex += n;
        if (slideIndex < 0) slideIndex = slides.children.length - 1;
        if (slideIndex >= slides.children.length) slideIndex = 0;
        slides.style.transform = `translateX(${-slideIndex * 100}%)`;
    }

    showSlides();