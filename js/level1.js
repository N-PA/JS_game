class Bullet {
    constructor(x, y) {
        this.x = x + 65;
        this.y = y + 25;
    }

    travel(){
        fill("yellow");
        stroke('yellow');
        rect(this.x,this.y,10,7.5);
        this.x += 10;
    }
}

class Player {
    constructor(sprite) {
        this.x = 500;
        this.y = 500;
        this.sprite = sprite;
        this.speed = 3;
    }

    show() {
        const playersizeHeight = window.innerHeight * 0.2;
        const playersizewidth = window.innerWidth * 0.1;
        push();
        translate(this.x, this.y);
        let angle = atan2(mouseY - this.y, mouseX - this.x);
        rotate(angle);
        imageMode(CENTER);
        image(this.sprite,0,0,playersizewidth,playersizeHeight);
        pop();
        if (!!bullets.length){
            for (let i = 0; i < bullets.length; i++){
                bullets[i].travel();
                if (bullets[i].x > window.innerWidth) {
                    bullets.splice(i, 1);
                }
            }
        }
    }

    shoot() {
        bullets.push(new Bullet(this.x, this.y));
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
        this.x = 0;
        this.y = 0;
        this.sprite = sprite;
        this.speed = 2;
        this.stop = 0;
        this.maxDistance = 90; 
        this.radius = 60;
        this.collisionRadius = 55;
        
       
    
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
    draw(){
        strokeWeight(5);
        stroke("black",);
        ellipse(this.x + this.sprite.width/4 ,this.y + this.sprite.height/4 ,this.radius);
        
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
    //gebruik van image player is zodat ik een werkende png heb 
}



function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    window.bullets = [];
    player1 = new Player(playerImage, weaponImage);
    ai1 = new Vijand(ai);
}

function mouseClicked() {
    player1.shoot();
}

function draw() {
    background(map_background);
    player1.move();
    player1.show();
    ai1.draw();
    ai1.show();
    ai1.move(player1.x, player1.y); 

}
function render(Gun){
    if(Gun.bullets.length !=0){
loop1: 
        for(let g = 0;g < bullets.length;g++)
            if(CircleCollisions(Gun.bullets[g].x , Gun.bullets[g].y , 4 , Vijand.x , Vijand.y , Vijand.collisionRadius)){
                Gun.bullets.splice(g,1);
                break loop1;
            }
    }
}