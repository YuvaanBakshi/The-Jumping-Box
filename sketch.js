var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(510,580,200,30);
    block3.shapeColor ="red";

    block4 = createSprite(725,580,200,30);
    block4.shapeColor ="green";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velovityX = 3;
    ball.velocityY = 4;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    ball.bounceOff(block2);
    ball.bounceOff(block3);
    ball.bounceOff(block4);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityY = 0;
        ball.velocityX= 0;
      

    }

    if(block3.isTouching(ball)){
        ball.shapeColor = "red";
        ball.velocityY = 0;
        ball.velocityX= 0;
        
    }

    if(block2.isTouching(ball)){
        ball.shapeColor = "green";
        ball.velocityY = 0;
        ball.velocityX= 0;
        

    }

    drawSprites();
}
