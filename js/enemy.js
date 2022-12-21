class vijand {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.sprite = null;
        this.stapGrootte = null;
    }
    beweeg (){ 

        
        this.x = constrain(this.x,0,canvas.width);
        this.y = constrain(this.y,0,canvas.height);
        
        
    }
    






    
}