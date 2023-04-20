const projectsButtons = document.querySelectorAll(".nav__link.projects");
const aboutButtons = document.querySelectorAll(".nav__link.about");
const footer = document.querySelector(".footer");

const header = document.querySelector('.hero');
const buttonsLogo = document.querySelectorAll(".show__hero");

const navContainer = document.querySelector(".nav__container");
const iconoMenu = document.querySelector(".nav__menu");
const navMenu = document.querySelector(".nav__list");
const crossMenu = document.querySelector(".cross__menu");

const navContainerFooter = document.querySelector(".nav__container__footer");
const iconoMenuFooter = document.querySelector(".nav__menu__footer");
const socialListContainer = document.querySelector(".social__list__container");
const navMenuFooter = document.querySelector(".nav__list__footer");

const main = document.querySelector('.main');
const projectsImagesLight = document.querySelectorAll(".image__light img");
const projectsImagesDark = document.querySelectorAll(".image__dark img");
const allImagesModel = document.querySelectorAll(".modelImage");

const imageContainer = document.querySelector('.image__container');
const containerAbout = document.querySelector('.container__about');
const arrowSvg = document.querySelector('.arrow__svg');
const arrowSvgFooter = document.querySelector('.arrow__svg__footer');

const darkImages = document.getElementById('dark');
const lightImages = document.getElementById('light');
const switchColor = document.querySelector('.switch__theme');

const arrowSvgDeskL = document.querySelector(".arrow__svg__deskL");
const arrowSvgDeskR = document.querySelector(".arrow__svg__deskR");
const imageLightContainer = document.querySelector(".image__light");
const imageDarkContainer = document.querySelector(".image__dark");

let mainStyles = window.getComputedStyle(main);
let footerStyles = window.getComputedStyle(footer);

/* header */

window.addEventListener('load', () => {
    checkTheme();
    setTimeout(() => {
        header.classList.add('hidde');
    }, 2000);
    if (mainStyles.zIndex == "0" && footerStyles.zIndex == "-2") {
        projectsButtons[0].style.textDecoration = "underline";
    }
});

buttonsLogo[0].addEventListener('click', () => {
    header.classList.remove('hidde');
    showMainMenu();
    setTimeout(() => {
        header.classList.add('hidde');
    }, 2000);
})

buttonsLogo[1].addEventListener('click', () => {
    header.classList.remove('hidde');
    showMain();
    showFooterMenu();
    changeToLightMode();
    setTimeout(() => {
        header.classList.add('hidde');
    }, 2000);
})

/* menú main*/

function showMainMenu() {
    iconoMenu.classList.toggle("nav__menu--show");
    navMenu.classList.toggle("nav__list--show");
    crossMenu.classList.toggle("cross__menu--show");
    switchColor.classList.toggle("switch__theme--show");
    navContainer.classList.toggle("nav__container--show");
    projectsButtons[0].style.textDecoration = "underline";
}

iconoMenu.addEventListener('click', showMainMenu);

/* menú footer */

function showFooterMenu() {
    iconoMenuFooter.classList.toggle("nav__menu__footer--show");
    socialListContainer.classList.toggle("social__list__container--show");
    navMenuFooter.classList.toggle("nav__list__footer--show");
    navContainerFooter.classList.toggle("nav__container__footer--show");
    aboutButtons[1].style.textDecoration = "underline";
}

iconoMenuFooter.addEventListener('click', showFooterMenu);

/* main */

projectsImagesLight.forEach((image) => {
    image.addEventListener('click', (ev) => {
        ev.currentTarget.classList.add("showImage");
        iconoMenu.classList.add("nav__menu--show");
        switchColor.classList.add("switch__theme--show");
        crossMenu.classList.add("cross__menu--show");
    });
});

projectsImagesDark.forEach((image) => {
    image.addEventListener('click', (ev) => {
        ev.currentTarget.classList.add("showImage");
        iconoMenu.classList.add("nav__menu--show");
        switchColor.classList.add("switch__theme--show");
        crossMenu.classList.add("cross__menu--show");
    });
});

crossMenu.addEventListener('click', () => {
    allImagesModel.forEach((image) => {
        if (image.classList.contains("showImage")) {
            image.classList.remove("showImage");
            iconoMenu.classList.toggle("nav__menu--show");
            switchColor.classList.toggle("switch__theme--show");
            crossMenu.classList.toggle("cross__menu--show");
        } else {
            showMainMenu();
        }
    })
});

/* show sections */

function showMain() {
    main.classList.remove("hidde");
    main.classList.add("show");
    footer.classList.add("hidde");
    footer.classList.remove("show");
    aboutButtons[1].style.textDecoration = "underline";
}

function showFooter() {
    footer.classList.add("show");
    footer.classList.remove("hidde");
    main.classList.remove("show");
    main.classList.add("hidde");
    aboutButtons[1].style.textDecoration = "underline";
}

projectsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (mainStyles.zIndex == "0" && footerStyles.zIndex == "-2") {
            showMainMenu();
        } else if (mainStyles.zIndex == "-2" && footerStyles.zIndex == "0") {
            showMain();
            showFooterMenu();
        }
    }) 
});

aboutButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (mainStyles.zIndex == "0" && footerStyles.zIndex == "-2") {
            showFooter();
            showMainMenu();
        } else if (mainStyles.zIndex == "-2" && footerStyles.zIndex == "0") {
            showFooterMenu();
        }
    }) 
});

/* show down arrows */

function hiddeArrow(element, arrow) {
    element.addEventListener('scroll', () => {
        if (element.scrollTop + element.clientHeight >= (element.scrollHeight/1.03)) {
            arrow.classList.add("hidde");
        } else {
            arrow.classList.remove("hidde");
        }
    });
}

hiddeArrow(imageContainer, arrowSvg);
hiddeArrow(containerAbout, arrowSvgFooter);

/* dark mode */

function isUsingDarkMode() {
    let mainBackgroudColor = mainStyles.backgroundColor
    let darkModeBgColor = 'rgb(0, 0, 0)';

    return darkModeBgColor === mainBackgroudColor;
}

function changeToLightMode() {
    main.classList.remove('force-dark');
    main.classList.add('force-light');
    lightImages.style.display = "flex";
    darkImages.style.display = "none";
}

function changeToDarkMode() {
    main.classList.remove('force-light'); 
    main.classList.add('force-dark');
    lightImages.style.display = "none";
    darkImages.style.display = "flex";
}

function checkTheme() {
    if (isUsingDarkMode()) {
        changeToLightMode();
    } else if (!isUsingDarkMode()) {
        changeToDarkMode();
    }
}

switchColor.addEventListener('click', checkTheme);

/* move carrusel */

class Slider {
    constructor(selector) {
        this.slider = document.querySelector(selector);
        this.moveByButtonLeft = this.moveByButtonLeft.bind(this);
        this.moveByButtonRight = this.moveByButtonRight.bind(this);
        this.sizeMove = 0;
        this.isFunctionRunning = false;
        
        this.bindEvents();
    }

    bindEvents() {
        arrowSvgDeskL.addEventListener("click", () => {
            if (this.isFunctionRunning) {
                return;
            }
            this.isFunctionRunning = true;

            if (!isUsingDarkMode()) {
                this.moveByButtonLeft(imageLightContainer, "." + imageLightContainer.classList[0]);
            } else if (isUsingDarkMode()) {
                this.moveByButtonLeft(imageDarkContainer, "." + imageDarkContainer.classList[0]);
            }
        });

        arrowSvgDeskR.addEventListener("click", () => {
            if (this.isFunctionRunning) {
                return;
            }
            this.isFunctionRunning = true;
            
            if (!isUsingDarkMode()) {
                this.moveByButtonRight(imageLightContainer, "." + imageLightContainer.classList[0]);

            } else if (isUsingDarkMode()) {
                this.moveByButtonRight(imageDarkContainer, "." + imageDarkContainer.classList[0]);
            }
        });
    }
    
    moveByButtonLeft(containerImages, containerSelector) {
        if (containerImages.getBoundingClientRect().left < imageContainer.getBoundingClientRect().left) {
            this.sizeMove = this.sizeMove - 12;
            this.moveToL(this.sizeMove, containerSelector);
        } else {
            this.sizeMove = 12;
            arrowSvgDeskR.style.opacity = "1";
            arrowSvgDeskL.style.opacity = "0.5";
        }

        setTimeout(() => {
            this.isFunctionRunning = false;
        }, 500);
    }

    moveByButtonRight(containerImages, containerSelector) {
        if (containerImages.getBoundingClientRect().right >= imageContainer.getBoundingClientRect().right) {
            this.sizeMove = this.sizeMove + 12;
            this.moveToR(this.sizeMove, containerSelector);
        } else {
            this.sizeMove = 12;
            arrowSvgDeskR.style.opacity = "0.5";
            arrowSvgDeskL.style.opacity = "1";
        }

        setTimeout(() => {
            this.isFunctionRunning = false;
        }, 500);
    }

    moveToR(sizeMove, containerSelector) {
        this.slider.querySelector(containerSelector).style.transform = `translateX(${"-" + sizeMove}%)`;
    }

    moveToL(sizeMove, containerSelector) {
        this.slider.querySelector(containerSelector).style.transform = `translateX(${"-" + sizeMove}%)`;
    }
}

function moveSlider() {
    new Slider(".image__container");
}
moveSlider();