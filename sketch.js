var bg
var gameState = 0;

function preload(){
bg = loadAnimation(
"../images/0.png",
"../images/1.png",
"../images/2.png",
"../images/3.png",
"../images/4.png",
"../images/5.png",
"../images/6.png",
"../images/7.png",
"../images/8.png",
"../images/9.png",
"../images/10.png",
"../images/11.png",
"../images/12.png",
"../images/13.png",
"../images/14.png",
"../images/15.png",
"../images/16.png",
"../images/17.png",
"../images/18.png",
"../images/19.png",
"../images/20.png",
"../images/21.png",
"../images/22.png",
"../images/23.png",
"../images/24.png",
"../images/25.png",)

play = loadImage("../images/play1.png")

}



function setup() {

  createCanvas(1600,800)

  bgi = createSprite(800,400,1600,800)
  bgi.addAnimation("moving",bg);
  bgi.scale = 3
  
   play1 = createSprite(800,700,15,15);
   play1.addImage(play);
 
}

function draw() {
  background(0);
  

  drawSprites();
   

  if(mousePressedOver(play1)) {
    gameState = 1;
  }

  if(gameState === 0){
    play.visible = true;
    bgi.visible = true;
  }

  if (gameState === 1){
    play1.visible = false;
    bgi.visible = true;
  }



}