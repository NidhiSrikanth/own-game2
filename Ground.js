class Ground {
    constructor(x,y,width,height){
this.ground= createSprite(x,y,width,height);
this.image= loadImage ("pictures/ground1.png")
    }

    display(){
        this.ground.addImage(this.image);
        this.ground.scale=0.5;
    playerRunning.collide(this.ground);
    }

    
        

}