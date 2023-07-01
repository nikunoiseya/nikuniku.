window.onload = function() {
    const movie = document.getElementById('movie');
    const introMovie = document.getElementById('introMovie');
    const mainContent = document.getElementById('mainContent');
    const slides = document.querySelectorAll('.slide');
    let slideIndex = 0;

    function showSlide(n) {
        slides.forEach((slide, index) => {
            slide.style.opacity = index === n ? '1' : '0';
        });
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    movie.onended = function() {
        introMovie.style.display = 'none';
        mainContent.style.opacity = '1';
        showSlide(slideIndex);
        setInterval(nextSlide, 4000); // 4秒ごとにスライドを切り替える
    };
};
