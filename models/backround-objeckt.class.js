class BackroundObjeckt extends MovableObjeckt {

    width = 720;
    height = 480;
    constructor(imagePath, y) {
        super().loadImage(imagePath);
        this.y = y;
        this.x = 0;
    }
}