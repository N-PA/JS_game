class Bullet {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.sprite = new Sprite();
        this.sprite.width = 60;
	    this.sprite.height = 50;
    }

    travel(enemy){

    }
}

class Gun {
    constructor(sprite) {
        this.sprite = sprite;
    }

    show(x, y) {
        image(this.sprite, x + 100, y + 80, this.sprite.width/2, this.sprite.height/2);
    }
    
    shoot() {

    }
}

class Player {
    constructor(sprite,gun) {
        this.x = 500;
        this.y = 500;
        this.sprite = sprite;
        this.speed = 3;
        this.gun = gun;
    }

    show() {
        image(this.sprite,this.x,this.y);
        this.gun.show(this.x,this.y);``
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

    move (targetx){ 

       let mvmt = createVector(0, 0);


        var distancex = this.x - targetx;

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
    map_background =  loadImage("images/level1.png");
    weaponImage = loadImage("images/gun.png");
    playerImage = loadImage("images/player.png");
    ai = loadImage("images/player.png");
    //gebruik van image player is zodat ik een werkende png heb 
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    gun1 = new Gun(weaponImage);
    player1 = new Player(playerImage, gun1);
    ai1 = new Vijand(ai);
}

function draw() {
    background(map_background);
    player1.move();
    player1.show();
    ai1.show();
    ai1.move(player1.x); 
}


 