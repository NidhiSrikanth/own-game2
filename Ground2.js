class Ground2{
    constructor(x,y,width,height){
        this.ground2=createSprite(x,y,width,height);
        this.image= loadImage("pictures/ground3.png");
    }

    display(){
        this.ground2.addImage(this.image);
        this.ground2.scale=0.5;
    }
}