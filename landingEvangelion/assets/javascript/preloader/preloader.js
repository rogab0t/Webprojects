export default class Preloader {
    static preloadImage({imagePath}) {
        return new Promise((res, rej) => {
            let image = new Image();
            image.src = imagePath;
            image.onload = res;
        })
    }

    static preloadImages({images, completed}) {
        const promises = images.map(imagePath => Preloader.preloadImage({imagePath}));

        Promise.all(promises).then(completed);
    }
}