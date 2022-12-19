class Weapon {

}

class Player {
    constructor(sprite) {
        this.x = 500;
        this.y = 500;
        this.sprite = sprite;
        this.speed = 5;
    }

    show() {
        image(this.sprite,this.x,this.y);
    }
}

function preload() {
    weaponImage = loadImage("../images/gun.png");
    playerImage = loadImage("../images/player.png");
}

function setup() {
    createCanvas(1000, 1000);
    background("red");
    player1 = new Player(playerImage);
}

function draw() {
    player1.show();
}