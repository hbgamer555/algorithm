var moving,fixed;
function setup() {
  createCanvas(800,400);
 fixed= createSprite(400, 200, 50, 50);
 moving=createSprite(700,200,50,50);
 moving.velocityX=-5;
 moving.shapeColor=("blue");
 fixed.shapeColor=("yellow");
 fixed.velocityX=5;
}

function draw() {
  background(255,255,255);  
//moving.x=mouseX;
 // moving.y=mouseY;
  if (moving.x-fixed.x<moving.width/2+fixed.width/2
    &&fixed.x-moving.x<moving.width/2+fixed.width/2
   && moving.y-fixed.y<moving.height/2+fixed.height/2
   &&fixed.y-moving.y<moving.height/2+fixed.height/2){
     moving.velocityX=5;
     fixed.velocityX=-5;
    
   }
   

  drawSprites();
}