var bg,box,coin,grnd,player,igrnd;

function preload(){

bg=loadImage("background.webp");
box=loadImage("box.webp");
coin=loadImage("coin.webp");
grnd=loadImage("ground.png")
playerimg=loadImage("super_hero-removebg-preview.png");

}

function setup(){
createCanvas(1000,500);

ground=createSprite(500,490,1000,20);
ground.addImage(grnd);

player=createSprite(50,470,20,20);
player.addImage(playerimg);


coin1=createSprite(500,200,50,50);
coin1.addImage(coin);
coin1.scale=0.1;

igrnd=createSprite(500,495,1000,20);
igrnd.visible=false;

}

function draw(){
background(bg);

ground.velocityX=-3;
if(ground.x<0){

ground.x=ground.width/2;

}

igrnd.velocityX=-3;
if(igrnd.x<0){

igrnd.x=igrnd.width/2;

}

if(keyDown("space")){

player.velocityY=-10;

}


player.velocityY=player.velocityY+0.5;
player.collide(igrnd);

spawnBox();

drawSprites();

}

function spawnBox(){

if(frameCount%200===0){

    box1=createSprite(1000,450,50,50);
    box1.addImage(box);
    box1.scale=0.3;
    box1.velocityX=-3;    

}

}

