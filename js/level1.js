class Weapon {

}

class Player {
    constructor(sprite) {
        this.x = 500;
        this.y = 500;
        this.sprite = sprite;
        this.speed = 3;
    }

    show() {
        image(this.sprite,this.x,this.y);
    }


    move() {
        let mvmt = createVector(0, 0);

        if (keyIsDown(LEFT_ARROW)) {
            mvmt.x -= this.speed;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            mvmt.x += this.speed;
        }
        if (keyIsDown(UP_ARROW)) {
            mvmt.y -= this.speed;
        }
        if (keyIsDown(DOWN_ARROW)) {
            mvmt.y += this.speed;
        }

        mvmt.setMag(this.speed);

        this.x += mvmt.x;
        this.y += mvmt.y;
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