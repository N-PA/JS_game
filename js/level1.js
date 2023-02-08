let vijands = [];
let buildings = [];
buildings.push({x: 520, y: 110, w: 51, h: 80});
buildings.push({x: 586, y: 160, w: 80, h: 30});
buildings.push({x: 280, y: 300, w: 35, h: 45});
buildings.push({x: 235, y: 280, w: 115 , h: 10});
buildings.push({x: 107, y: 310, w: 33 , h: 70});
buildings.push({x: 140, y: 350, w: 70 , h: 30});
buildings.push({x: 575, y: 265, w: 81 , h: 11});
buildings.push({x: 60, y: 205, w: 50 , h: 20});
buildings.push({x: 182, y: 205, w: 120 , h: 20});
buildings.push({x: 375, y: 205, w: 65 , h: 20});
buildings.push({x: 420, y: 205, w: 20 , h: 150});
buildings.push({x: 440, y: 335, w: 80 , h: 20});
buildings.push({x: 590, y: 335, w: 93 , h: 20});
buildings.push({x: 755, y: 335, w: 25 , h: 20});



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
        rect(0,0,5,3.75);
        pop();
    }
}

class Player {
    constructor(sprite) {
        this.x = 1000/2;
        this.y = 450/2;
        this.sprite = sprite;
        this.speed = 3;
        this.angle = atan2(mouseY - this.y, mouseX - this.x);
    }

    show() {
        const playersizeHeight =  450 * 0.1;
        const playersizewidth = 800 * 0.05;
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
                if (bullets[i].x > canvas.width || bullets[i].x < 0 || bullets[i].y > canvas.height || bullets[i].y < 0) {
                    bullets.splice(i, 1);
                }
            }
        }
    }

    shoot() {
        bullets.push(new Bullet(this.x, this.y, this.angle));
    }


    move() {
        this.checkCollision(buildings);
        this.prevX = this.x;
        this.prevY = this.y;
        let mvmt = createVector(0, 0);

        if (keyIsDown(65)) {
            mvmt.x -= this.speed;
        }
        if (keyIsDown(68)) {
            mvmt.x += this.speed;
        }
        if (keyIsDown(87)) {
            mvmt.y -= this.speed;
        }
        if (keyIsDown(83)) {
            mvmt.y += this.speed;
        }

        mvmt.setMag(this.speed);

        this.x += mvmt.x;
        this.y += mvmt.y;

       

        this.x = constrain(this.x, 20, 780 );
        this.y = constrain(this.y, 20, 430 );
        
    }
    checkCollision(buildings) {
        for (let i = 0; i < buildings.length; i++) {
            let building = buildings[i];
            if (this.checkOverlap(this, building)) {
                // prevent movement by setting x and y to their previous values
                 console.log("Collision detected");
                this.x = this.prevX;
                this.y = this.prevY;

                break;
            }
        }
    }
      
      checkOverlap(a, b) {
        return (a.x + 40 > b.x &&
                a.x < b.x + b.w &&
                a.y + 45 > b.y &&
                a.y < b.y + b.h);
      }
      
}

class Vijand {
    constructor(sprite) {
        let y;
        if (random(1) < 0.5) {
          y = random(-300, 0);            
        } else {
          y = random(height, height + 300);
        }
        let x = random(-300, width + 300);
        this.pos = createVector(x, y);
        this.pos2 = createVector(x, y);
        this.sprite = sprite;
        this.speed = 2;
        this.stop = 0;
        this.maxDistance = 90; 
        this.radius = 60;
        this.collisionRadius = 55;
        
    
    }

    draw(){
        push();
        imageMode(CENTER);
        image(this.sprite,this.pos.x,this.pos.y,100,100);
        pop();
        
      


    }

    update() {
        this.p = createVector(player1.x,player1.y);
        let diff = p5.Vector.sub(this.p, this.pos);
        diff.limit(this.speed);
        this.pos.add(diff);
    }
}



// function CircleCollisions(a1x,a1y,r1,a2x,a2y,r2){
//     let radiusSum;
//     let xDif;
//     let yDif;
//     radiusSum = r1 + r2;
//     xDif = a1x - a2x;
//     yDif = a1y - a2y;
    
//     if(radiusSum > Math.sqrt((xDif*yDif)+(yDiff*yDiff) )){
//         return true;
//     }
    
//     else{
//         return false;
//     }


// } 

function preload() {
    map_background =  loadImage("images/level1.png");
    weaponImage = loadImage("images/gun.png");
    playerImage = loadImage("images/player.png");
    ai = loadImage("images/enemy.png");
}

function setup() {
    createCanvas(800, 450).id("myCanvas");
    window.bullets = [];
    player1 = new Player(playerImage, weaponImage);
    // vijand = new Vijand(ai);
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
    // vijand.draw();
    // vijand.update();


    for (let u = vijands.length - 1; u >= 0; u--) {
        vijands[u].draw();
        vijands[u].update();
        
        if (player1.bullitHit(vijands[u])) {
          vijands.splice(u, 1);
        }
      }
    if (frameCount % 200 == 0){
        vijands.push(new Vijand(ai));
    }
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of


}
    
   
