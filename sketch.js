var garden,rabbit,grass,apple;
var gardenImg,rabbitImg,grassImg,appleImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  grassImg = loadImage("grass.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x=mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnApple();
  spawnLeafs();

  drawSprites();
}



function spawnApple()
{
  if(frameCount%30===0)
  {
   apple = createSprite(200,20,20,20);
   apple.addImage(appleImg);
   apple.scale=0.05;
   apple.velocityY=3;

   apple.x=(Math.round(random(40,300)));

  }





}

function spawnLeafs()
{
  if(frameCount%30===0)
  {
   grass = createSprite(200,20,20,20);
   grass.addImage(grassImg);
   grass.scale=0.06;
   grass.velocityY=3;

   grass.x=(Math.round(random(40,300)));

  }
} 
  