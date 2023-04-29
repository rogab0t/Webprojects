import Slider from './slider.js';
import elements from './elements.js';
import Preloader from '../preloader/preloader.js';

const textContent = document.getElementById("slider__text__content");
const sliderText = document.getElementById("slider__text");
const sliderTitle = document.getElementById("slider__title");
const sliderSubTitle = document.getElementById("slider__subtitle");
const sliderImage = document.getElementById("slider__image")

const controls =  document.querySelector(".controls");
const leftArrow = document.querySelector(".left__arrow");
const rightArrow = document.querySelector(".right__arrow");

let slider = new Slider({
    elements,
    animationFunc: function(element){
        textContent.classList.add("hide");
        sliderImage.classList.add("hide");
        
        setTimeout(() => {
            sliderText.innerHTML = element.text;
            sliderTitle.innerHTML = element.title;
            sliderSubTitle.innerHTML = element.subtitle;
            sliderImage.src = element.image;

            textContent.classList.remove("hide");
            sliderImage.classList.remove("hide");
        }, 600);
    },
    speed: 10000
});

slider.play();

leftArrow.addEventListener('click', slider.prev);
rightArrow.addEventListener('click', slider.next);

const imagePath = elements.map(el => el.image);

Preloader.preloadImages({
    images: imagePath,
    completed: function() {
        controls.style.display = "flex";
    }
})