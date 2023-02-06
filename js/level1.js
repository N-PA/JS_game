let vijands = [];
class Bullet {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
    }

    travel(){
        this.x += 10 * cos(this.angle);
        this.y += 10 * sin(this.angle);
        push();
        fill("yellow");
        stroke('yellow');
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        rect(0,0,10,7.5);
        pop();
    }
}

class Player {
    constructor(sprite) {
        this.x = 500;
        this.y = 500;
        this.sprite = sprite;
        this.speed = 3;
        this.angle = atan2(mouseY - this.y, mouseX - this.x);
    }

    show() {
        const playersizeHeight = window.innerHeight * 0.2;
        const playersizewidth = window.innerWidth * 0.1;
        push();
        translate(this.x, this.y);
        this.angle = atan2(mouseY - this.y, mouseX - this.x);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.sprite,0,0,playersizewidth,playersizeHeight);
        pop();
        if (!!bullets.length){
            for (let i = 0; i < bullets.length; i++){
                bullets[i].travel();
                if (bullets[i].x > window.innerWidth || bullets[i].x < 0 || bullets[i].y > window.innerHeight || bullets[i].y < 0) {
                    bullets.splice(i, 1);
                }
            }
        }
    }

    shoot() {
        bullets.push(new Bullet(this.x, this.y, this.angle));
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
    constructor(sprite,collisionRadius) {
        let y;
        if (random(1) < 0.5) {
          y = random(-300, 0);            
        } else {
          y = random(height, height + 300);
        }
        let x = random(-300, width + 300);
        this.pos = createVector(x, y);

        this.sprite = sprite;
        this.speed = 2;
        this.stop = 0;
        this.maxDistance = 90; 
        this.radius = 60;
        this.collisionRadius = 55;
    }

    draw(){
        image(this.sprite,this.pos.x,this.pos.y,100,100);
    }

    update() {
        this.p = createVector(player1.x,player1.y)
        let difference = p5.Vector.sub(this.p, this.pos);
        difference.limit(this.speed);
        this.pos.add(difference);
    }
}



function CircleCollisions(a1x,a1y,r1,a2x,a2y,r2){
    let radiusSum;
    let xDif;
    let yDif;
    radiusSum = r1 + r2;
    xDif = a1x - a2x;
    yDif = a1y - a2y;
    
    if(radiusSum > Math.sqrt((xDif*yDif)+(yDiff*yDiff) )){
        return true;
    }
    
    else{
        return false;
    }


} 

function preload() {
    map_background =  loadImage("images/level1.png");
    weaponImage = loadImage("images/gun.png");
    playerImage = loadImage("images/player.png");
    ai = loadImage("images/player.png");
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    window.bullets = [];
    player1 = new Player(playerImage, weaponImage);
    vijand = new Vijand(ai);
    frameCount = 0;
    
}

function mouseClicked() {
    player1.shoot();
}

function draw() {
    frameCount += 1;
    background(map_background);
    player1.move();
    player1.show();
    vijand.draw();
    vijand.update();
    


}
    
   
