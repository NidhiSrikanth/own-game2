var backdrop;
var gameState= 0;
var form,rulesImage;
var object1,object2,object3,object4, object5,groundImage;
var object6,object7,object8,object9;
var player,playerRunning,playerRunningImage,playerJumping,playerJumpingImage;


function preload(){
  backdrop= loadImage("pictures/cave.PNG");
  groundImage= loadImage("pictures/ground1.PNG");
rulesImage= loadImage("pictures/rules1.png");
playerRunningImage= loadAnimation ("pictures/running1.png","pictures/running2.png","pictures/running3.png","pictures/running4.png","pictures/running5.png");
playerJumpingImage= loadAnimation("pictures/jumping1.png","pictures/jumping2.png","pictures/jumping3.png","pictures/jumping4.png","pictures/jumping5.png");
}
function setup() {
  createCanvas(displayWidth-50,displayHeight-100);
  form= new Form ();
 
  object1= new Ground(150,700,50,20);
  object2= new Ground(350,700,50,20);
  object3= new Ground(700,700,50,20);
  object4= new Ground(1200,700,50,20);
  object5= new Ground(1350,700,50,20);

  object6= new Ground(150,500,50,20);


  playerRunning= createSprite(150,650,20,30);
  playerRunning.addAnimation("playerRunningImage",playerRunningImage);
  playerRunning.addAnimation("playerJumpingImage",playerJumpingImage);
}

function draw() {
  background("white");  
  if (gameState===0){
    
    form.display();
    
    

  }

  if( gameState===1){
    image(backdrop,0,0,displayWidth,displayHeight);
image(rulesImage,displayWidth/2-300,displayHeight/2-400,700,700);
if(keyIsDown(32)){
  gameState=2;
}
  }

  if (gameState===2){
    imageMode(CENTER);
image(backdrop,displayWidth/2-30,displayHeight/2 -50,displayWidth-50,displayHeight-100);


if( keyIsDown(UP_ARROW)){
  playerRunning.velocityY= -6;

  playerRunning.changeAnimation("playerJumpingImage",playerJumpingImage);
}

playerRunning.velocityY=playerRunning.velocityY+0.5;


object1.display();

object2.display();
object3.display();
object4.display();
object5.display();
object6.display();

//playerRunning.display();
drawSprites();

  }


  

}