let currentSlideIndex = 0;
const slidesToShow = 4;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = Math.ceil(document.querySelectorAll('.slide').length / slidesToShow);
    if (index >= totalSlides) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = totalSlides - 1;
    } else {
        currentSlideIndex = index;
    }
    const slide = -currentSlideIndex * 100 / slidesToShow;
    slides.style.transform = `translateX(${slide}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

function currentSlide(index) {
    showSlide(index);
}
setInterval(() => {
    showSlide(currentSlideIndex + 1);
}, 3000);

showSlide(currentSlideIndex);

function changeImage(imageSrc, element) {
    document.getElementById('imageProject').src = imageSrc;


    const projectInfo = document.querySelectorAll('.project-1');
    projectInfo.forEach(item => item.classList.remove('active'));

    element.classList.add('active');

}    