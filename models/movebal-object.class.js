class MovableObjeckt {
    x = 150;
    y = 300;
    height = 150;
    width = 150;
    img;
    imageCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadeImages(arr) {
        arr.forEach((path) => {
            this.img = new Image();
            img.src = path;
            this.imageCache[path] = path;
        });

    }

    moveRight() {
        console.log("Move Right");

    }

    moveLeft() {

    }
}