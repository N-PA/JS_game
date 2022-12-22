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

class Vijand {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.sprite = null;
        this.stapGrootte = null;
        this.snelheid = 5
    }
    move (){ 

        
        this.x = constrain(this.x,0,canvas.width);
        this.y = constrain(this.y,0,canvas.height);

        
    }
    show() {
        image(this.sprite,this.x,this.y,100,100);
    }


    
}


function preload() {
    weaponImage = loadImage("../images/gun.png");
    playerImage = loadImage("../images/player.png");
}

function setup() {
    createCanvas(1000, 1000);
    player1 = new Player(playerImage);
    
    alice = new Vijand(700,200);
    alice.stapGrootte = 5 ;
    alice.sprite = rect(20, 20, 150, 100)
}

function draw() {
    background("red");
    player1.move();
    player1.show();
    alice.move();
    alice.show();
}