class Bullet {
    constructor(x, y) {
        this.x = x + 185;
        this.y = y + 115;
    }

    travel(enemy){
        fill("yellow");
        stroke('yellow');
        rect(this.x,this.y,10,7.5);
        this.x += 10;
        
    }
}

class Gun {
    constructor(sprite) {
        this.sprite = sprite;
        this.bullets = [];
    }

    show(x, y) {
        image(this.sprite, x + 100, y + 80, this.sprite.width/2, this.sprite.height/2);
        if (!!this.bullets.length){
            this.bullets.forEach(element => {
                element.travel();
            });
        }
    }
    
    shoot(x,y) {
        this.bullets.push(new Bullet(x, y, this.bullets, this.bullets.length));
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
        this.gun.show(this.x,this.y);
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

        this.x = constrain(this.x, 0, window.innerWidth - this.sprite.width);
        this.y = constrain(this.y, 0, window.innerHeight - this.sprite.height);
        
        
        
    }
}

class Vijand {
    constructor(hallo) {
        this.x = 0;
        this.y = 0;
        this.sprite = hallo;
        this.speed = 2;
        this.stop = 0;
        this.maxDistance = 90; 
        
    
    }
    show() {
        image(this.sprite,this.x,this.y,100,100);
    }

    move (targetx, targety){
        let mvmt = createVector(0, 0);


        let distancex = targetx - this.x;
        let distancey = targety - this.y;
       

        if(distancex > this.maxDistance) {
            mvmt.x += this.speed;
        } else if(distancex < -this.maxDistance) {
            mvmt.x -= this.speed;
        } 

        if(distancey > this.maxDistance) {
            mvmt.y += this.speed;
        } else if(distancey < -this.maxDistance) {
            mvmt.y -= this.speed;
        }

        this.x += mvmt.x;
        this.y += mvmt.y;
    }
}




    

function preload() {
    map_background =  loadImage("images/level1.png");
    weaponImage = loadImage("images/gun.png");
    playerImage = loadImage("images/player.png");
    ai = loadImage("images/gun.png");
    //gebruik van image player is zodat ik een werkende png heb 
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    gun1 = new Gun(weaponImage);
    player1 = new Player(playerImage, gun1);
    ai1 = new Vijand(ai);
}

function mouseClicked() {
    player1.gun.shoot(player1.x,player1.y);
}

function draw() {
    background(map_background);
    player1.move();
    player1.show();
    ai1.show();
    ai1.move(player1.x, player1.y); 
}