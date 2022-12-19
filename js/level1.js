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


    move() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= this.speed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            this.x += this.speed;
        }
        if (keyIsDown(UP_ARROW)) {
            this.y -= this.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.speed;
        }
    }
}

function preload() {
    weaponImage = loadImage("../images/gun.png");
    playerImage = loadImage("../images/player.png");
}

function setup() {
    createCanvas(1000, 1000);
    player1 = new Player(playerImage);
}

function draw() {
    background("red");
    player1.move();
    player1.show();
}