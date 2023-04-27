/* menu */

document.querySelector(".menu").addEventListener('click', () => {
    document.querySelector(".menu__screen").classList.add("active");
});

document.querySelector(".close").addEventListener('click', () => {
    document.querySelector(".menu__screen").classList.remove("active");
});

/* menu links */

let links = document.querySelectorAll(".menu__screen nav a");

function scrollToElement(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'top': element.offsetTop
    })
}

links.forEach(link => {
    link.addEventListener('click', (ev) => {
        if (window.scrollTo) {
            ev.preventDefault();
        }
        
        document.querySelector(".menu__screen").classList.remove("active");

        let paths = ev.currentTarget.href.split("/");
        let selector = paths[paths.length - 1];
       
        scrollToElement(document.querySelector(selector));

        return !!window.scrollTo;
    })
})