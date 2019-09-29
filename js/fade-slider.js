(function(){
    let slides = document.querySelectorAll('.fade-slider__item');
    let active = 'fade-slider__item--active';
    let index = 0;

    setInterval(function(){
        slides[index].classList.remove(active);
        index++;
        if (index+1>slides.length) {
            index = 0;
        }
        slides[index].classList.add(active);
    },5000);
}());