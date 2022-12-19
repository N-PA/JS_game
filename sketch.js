var player = {
    x: 50,
    y: 50,
    zijde: 100,
    speed: 5,}


function setup() {
    createCanvas(1000, 1000);
}
  
function draw() {
    background("blue");
}

function   move() {
    if (keyIsDown(LEFT_ARROW)) {
      player.x -= player.speed;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      player.x += player.speed;
    }
    if (keyIsDown(UP_ARROW)) {
      player.y -= player.speed;
    }
    if (keyIsDown(DOWN_ARROW)) {
      player.y += player.speed;
    }
    
  }