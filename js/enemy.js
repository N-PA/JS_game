class vijand {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.sprite = null;
        this.stapGrootte = null;
        this.snelheid = 5
    }
    beweeg (){ 

        
        this.x = constrain(this.x,0,canvas.width);
        this.y = constrain(this.y,0,canvas.height);

        this.velocity.x = (player1.x - this.position.x) * this.snelheid;
        this.velocity.y = (player1.y - this.position.y) * this.snelheid;
        
    }
    toon() {
        image(this.sprite,this.x,this.y,50,50);
      }

    






    
}