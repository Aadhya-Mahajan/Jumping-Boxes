var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,580,190,30);
    surface1.shapeColor = "pink"

    surface2 = createSprite(300,580,190,30);
    surface2.shapeColor = "lightBlue"

    surface3 = createSprite(500,580,190,30);
    surface3.shapeColor = "lightGreen"

    surface4 = createSprite(700,580,190,30);
    surface4.shapeColor = "lightYellow"

    //create box sprite and give velocity
    box = createSprite(random(20,750));
    box.width = 50;
    box.height = 50;
    box.shapeColor = "white";
    box.velocityX = 4;
    box.velocityY = 5;
}

function draw() {
    background(rgb(169,169,169));

    if(box.x<0){
    music.stop();
    box.velocityX = 4;
    }
    else if(box.x>800){
    music.stop();
    box.velocityX = -4;
    }
     
    if(box.isTouching(surface1)){
    music.play();
    box.shapeColor = "pink"
    box.bounceOff(surface1);
    }
    else if(box.isTouching(surface2)){
      music.play();
      box.shapeColor = "lightBlue"
      box.bounceOff(surface2);
    }
    else if(box.isTouching(surface3)){
      music.play();
      box.shapeColor = "lightGreen"
      box.bounceOff(surface3);
    }
    else if(box.isTouching(surface4)){
      music.play();
      box.shapeColor = "lightYellow"
      box.bounceOff(surface4);
    }

    if(box.y<0){
    music.stop();
    box.velocityY = 3;
    }
    
    drawSprites();


}
