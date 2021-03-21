var ground, player1, bob, npc1, npc2, npc3, truck, bucket;
var gameState = 0;
var keyPressed =0;

var block1, block2, block3, movingblock1, movingblock2, spikes;
var ib1, ib2;

function setup() {
  createCanvas(1200,600);
  
  ground = createSprite(600, 700, 1200, 400);
  ground.shapeColor = "green";
  player1 = createSprite(50, 460, 75, 75);
  player1.shapeColor = "yellow";
  bob = createSprite(190, 460, 75, 75);
  bob.shapeColor = "red";
  npc1 = createSprite(1300, 460, 75, 75);
  npc1.shapeColor = "blue";
  
  block1 = createSprite(250, 375, 100, 10);
  block1.visible=false;
  block2 = createSprite(450, 290, 100, 10);
  block2.visible = false;
  movingblock1 = createSprite(650, 215, 100, 10);
  movingblock1.visible = false;
  movingblock1.velocityX = -3;
  block3 = createSprite(850, 130, 100, 10);
  block3.visible = false;
  bucket = createSprite(850, 105, 25, 50);
  bucket.visible = false;
  spikes = createSprite(600, 490, 900, 10);
  spikes.visible = false;
  ib1 = createSprite(450, 215, 10, 10);
  ib1.visible = true;
  ib2 = createSprite(850, 215, 10, 10);
  ib2.visible = true;
}

function draw() {
  background(255,255,255); 
bob.velocityX =0;
npc1.velocityX=0;
if(movingblock1.x<0){
  movingblock1.velocityX = 3;
}
if(movingblock1.x > 1200){
  movingblock1.velocityX = -3;
}
  if(gameState === 0){
 
    console.log(gameState);
    if(keyDown("space") && keyPressed ===0){
      text("Let's get ice-cream", 50, 420);
      keyPressed =1;
      if(keyDown("space") && keyPressed ===1){
        
         text("Yes", 180, 400);
        
         keyPressed = 2;
         if(keyDown("space") && keyPressed ===2){
           
           gameState = 1;
           keyPressed = 3;
         }
       }
       
    }
    
  }

  if(gameState === 1){
   
  
    player1.velocityX = 4;
    bob.velocityX = 4;

    npc1.velocityX = -4;

    
    if(bob.isTouching(npc1)){
     // console.log(bob.x);
      //console.log(npc1.x);
   /*   bob.velocityX = -4;
      npc1.velocityX = 4;*/
      player1.velocityX = 0;
    /*  bob.velocityX =0;
       npc1.velocityX=0*/
       bob.x = bob.x -30;
       npc1.x = npc1.x + 30;
     
      
      gameState =2;
      
    }
   
  }
  if(gameState ===2){
    text("Watch where you are going!",660,400);
    //console.log(gameState)

    if(keyDown("space") && keyPressed ===3){
      text("What did you say to me?!",640,350);
      gameState = 3;
    }
  }

  if(gameState === 3){
    player1.x = 50;
    player1.y = 460;

    bob.x = 1150;
    bob.y = 460;

    npc1.visible = false;

    ;
   if(movingblock1.x > ib1.x && movingblock1.x < ib2.x){
     movingblock1.bounceOff(ib1);
    movingblock1.bounceOff(ib2);
   }
    

    block1.visible = true;
    block2.visible = true;
    movingblock1.visible = true;
    block3.visible = true;
    bucket.visible = true; 
    spikes.visible = true;


    if(keyDown("UP_ARROW")){
      player1.velocityY = -12;
    }
    if(keyDown("LEFT_ARROW")){
      player1.velocityX = -4;
    }
    if(keyDown("RIGHT_ARROW")){
      player1.velocityX = 4;
    }
    
    player1.velocityY = player1.velocityY + 0.8;
    player1.collide(ground);

  }
  drawSprites();
}