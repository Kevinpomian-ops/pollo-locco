class Cloud extends MovableObjeckt {
    height = 300;
    width = 300;
    y = 20

    constructor() {
        super().loadImage('../img/5_background/layers/4_clouds/1.png')

        this.x = Math.random() * 500;
        this.animate();

    }

    animate() {
        setInterval(() => {
            this.x -= 1;
        }, 60);
    }
}