//hetzelfde als level 1
let vijands = [];
let enemyBetter = [];
let timer = 110
let framerate = 0
let buildings = [];
let score = 0;
let x = 0;
let arr = [];
let start = 10;
let increment = 10;
let spawnEnemy = false;
let backgroundMusic;
let shootSound;
let doodMonk;

for (let i = 0; i < 10; i++) {
    arr.push(start + (i * increment));
}


class Bullet {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
    }

    travel() {
        this.x += 10 * cos(this.angle);
        this.y += 10 * sin(this.angle);
        push();
        fill("yellow");
        stroke('yellow');
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CENTER);
        rect(0, -7.5, 5, 3.75);
        pop();
    }
}

class Player {
    constructor(sprite) {
        this.x = 1000 / 2;
        this.y = 450 / 2;
        this.sprite = sprite;
        this.speed = 3;
        this.angle = atan2(mouseY - this.y, mouseX - this.x);
    }

    show() {
        const playersizeHeight = 450 * 0.1;
        const playersizewidth = 800 * 0.05;
        push();
        translate(this.x, this.y);
        this.angle = atan2(mouseY - this.y, mouseX - this.x);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.sprite, 0, 0, playersizewidth, playersizeHeight);
        pop();
        if (!!bullets.length) {
            for (let i = 0; i < bullets.length; i++) {
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



        this.x = constrain(this.x, 20, 780);
        this.y = constrain(this.y, 20, 430);

    }

    checkCollision(buildings) {
        for (let i = 0; i < buildings.length; i++) {
            let building = buildings[i];
            if (this.checkOverlap(this, building)) {
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

    bullitHit(vijands) {
        for (let u = 0; u < bullets.length; u++) {
            if (dist(bullets[u].x, bullets[u].y, vijands.pos.x, vijands.pos.y) < 15) {
                bullets.splice(u, 1);
                return true;
            }
        }
        return false;
    }
}

class Vijand {
    constructor(sprite) {
        let y;

        if (random(1) < 0.5) {
            y = random(-300, 0);
        }

        else {
            y = random(height, height + 300);
        }

        let x = random(-300, width + 300);
        this.pos = createVector(x, y);
        this.pos2 = createVector(x, y);
        this.sprite = sprite;
        this.speed = 1.4;
        this.stop = 0;
        this.maxDistance = 90;
        this.radius = 60;
        this.collisionRadius = 55;
    }

    draw() {
        push();
        imageMode(CENTER);
        image(this.sprite, this.pos.x, this.pos.y, 50, 50);
        pop();
    }

    update() {
        this.p = createVector(player1.x, player1.y);
        let diff = p5.Vector.sub(this.p, this.pos);
        diff.limit(this.speed);
        this.pos.add(diff);
    }

    wordGeraakt(player1) {
        if (dist(this.pos.x, this.pos.y, player1.x, player1.y) < 20) {
            return true;
        }
        return false;
    }
}

class VijandGroter {
    constructor(sprite) {
        let y;
        if (random(1) < 0.5) {
            y = random(-300, 0);
        }

        else {
            y = random(height, height + 300);
        }

        let x = random(-300, width + 300);
        this.pos = createVector(x, y);
        this.pos2 = createVector(x, y);
        this.sprite = sprite;
        this.speed = 1.4;
        this.stop = 0;
        this.maxDistance = 90;
        this.radius = 60;
        this.collisionRadius = 55;
        this.hp = 3;
    }

    draw() {
        push();
        imageMode(CENTER);
        image(this.sprite, this.pos.x, this.pos.y, 50, 50);
        pop();
    }

    update() {
        this.p = createVector(player1.x, player1.y);
        let diff = p5.Vector.sub(this.p, this.pos);
        diff.limit(this.speed);
        this.pos.add(diff);
    }

    wordGeraakt(player1) {
        if (dist(this.pos.x, this.pos.y, player1.x, player1.y) < 20) {
            return true;
        }
        return false;
    }
}


function preload() {
    map_background = loadImage("images/level_2.png");
    weaponImage = loadImage("images/gun.png");
    playerImage = loadImage("images/player.png");
    ai = loadImage("images/enemy.png");
    ai2 = loadImage("images/lebronjehames.png");
    soundFormats('mp3', 'ogg');
    backgroundMusic = loadSound('sounds/background');
    shootSound = loadSound('sounds/pew.mp3');
    doodMonk = loadSound('sounds/pop.mp3');

}

function setup() {
    createCanvas(800, 450).id("myCanvas");
    window.bullets = [];
    player1 = new Player(playerImage, weaponImage);
    frameCount = 0;
    backgroundMusic.setVolume(0.1);
    backgroundMusic.loop();
    doodMonk.setVolume(0.05);
    
}

function mouseClicked() {
    player1.shoot();
    shootSound.setVolume(0.05)
    shootSound.play();
}


function draw() {
    frameCount += 1;
    background(map_background);
    player1.move();
    player1.show();
    push();
    fill("white")
    textFont("Georgia")
    text('score ' + score, canvas.width - 70, 20);
    pop();



    for (let u = vijands.length - 1; u >= 0; u--) {
        vijands[u].draw();
        vijands[u].update();

        if (player1.bullitHit(vijands[u])) {
            vijands.splice(u, 1);
            doodMonk.play();
            score += 1;
        }

        if (vijands[u]) {
            if (vijands[u].wordGeraakt(player1)) {
                noLoop();
                setCookie("score", score);
                window.location.href = "eindscherm.html";
                break;
            }
        }
    }

    if (framerate >= timer) {
        vijands.push(new Vijand(ai));
        timer *= 0.996;
        x++;
        framerate = 0;
    }

    for (let o = enemyBetter.length - 1; o >= 0; o--) {
        enemyBetter[o].draw();
        enemyBetter[o].update();

        if (player1.bullitHit(enemyBetter[o])) {
            enemyBetter[o].hp -= 1;
            if(enemyBetter[o].hp == 0)    {
                enemyBetter.splice(o, 1);
                doodMonk.play();
                score += 1;
            }
        }
        if (enemyBetter[o]) {
            if (enemyBetter[o].wordGeraakt(player1)) {
                noLoop();
                setCookie("score", score);
                window.location.href = "eindscherm.html";
                break;
                

            }
        }
    }

    if (enemyBetter == 0) {
        if (score % 10 === 0 && score > 0) {
        enemyBetter.push(new VijandGroter(ai2))
        }
    }

    framerate++;
}
