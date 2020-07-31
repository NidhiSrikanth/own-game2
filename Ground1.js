class Ground1{
    constructor(x,y,width,height){
        this.ground1=createSprite(x,y,width,height);
        this.image= loadImage("pictures/ground2.png");
    }

    display(){
        this.ground1.addImage(this.image);
        this.ground1.scale=0.5;
    }
}