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
    constructor(hallo) {
        this.x = 0;
        this.y = 0;
        this.sprite = hallo;
        this.speed = 2;
        this.maxDistance = 10; 
        
    
    }
    show() {
        image(this.sprite,this.x,this.y,100,100);
    }

    move (){ 

       let mvmt = createVector(0, 0);

        distancex = this.x - Player.x;

        if (distancex  <= this.maxDistance){
           mvmt.x += this.speed;
        }
        mvmt.setMag(this.speed);
        this.x += mvmt.x;
        this.y += mvmt.y;
        

        
       // this.x = constrain(this.x,0,canvas.width);
        //this.y = constrain(this.y,0,canvas.height);

        
       
        
    }
  


    
}
function preload() {
    weaponImage = loadImage("../images/gun.png");
    playerImage = loadImage("../images/player.png");
    ai = loadImage("../images/gun.png");
    //gebruik van image player is zodat ik een werkende png heb 
}

function setup() {
    createCanvas(1000, 1000);
    player1 = new Player(playerImage);
    ai1 = new Vijand(ai);
}

function draw() {
    background("red");
    player1.move();
    player1.show();
    ai1.show();
    //ai1.move(); 
}
    // distancex = Vijand.x - Player.x;
    //    let d = createVector(0, 0);

        

    //     if (distancex  >= this.maxDistance){
    //        d.x -= this.speed;
    //     }
    //     d.setMag(this.speed);
    //     Vijand.x += d.x;
    //     Vijand.y += d.y;
        

 