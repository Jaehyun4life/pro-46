var bg
var astronaut
var planet1 , planet2, planet3, planet4, planet5, planet6, planet7
var asteroidIMG
var satelite



function preload(){
  bg=loadImage("bg.webp");

  standingimg=loadAnimation("standing.png");

  planet1=loadImage("planet1.png");
  planet2=loadImage("planet2.png");
  planet3=loadImage("planet3.png");
  planet4=loadImage("planet4.png");
  planet5=loadImage("planet5.png");
  planet6=loadImage("planet6.png");
  planet7=loadImage("planet7.png");

  asteroidIMG1=loadImage("asteroid.png");
  asteroidIMG2=loadImage("asteroid2.png");
  asteroidIMG3=loadImage("asteroid3.png");
  asteroidIMG4=loadImage("asteroid4.png");
  asteroidIMG5=loadImage("asteroid5.png");
  asteroidIMG6=loadImage("asteroid6.png");


  satelite=loadAnimation("satelite.png");

}

function setup() {
  createCanvas(1350,610);
  
  space=createSprite(700,300);

  astronaut=createSprite(85,200);
  astronaut.addAnimation("astro",standingimg);
  astronaut.scale=0.5;
  astronaut.debug=true;




  planetsGroup=createGroup();

asteroidsGroup=createGroup();


  space.addImage(bg);
space.velocityX=1;
}


function draw() {
 // background(bg);  
    //infinite bg
if(space.x>700){
  space.x=600;
}
//movements for astronaut
if(keyDown("right_arrow")){
astronaut.x+=3;
}
if(keyDown("left_arrow")){
  astronaut.x-=3;
}

/*if(keyDown("space")){
  astronaut.y-=5;
}*/

if(keyDown("space")&& astronaut.y >= 100) {
  astronaut.velocityY = -12;
}
astronaut.velocityY = astronaut.velocityY + 1;

if(astronaut.isTouching(planetsGroup)){
  astronaut.addAnimation("astro",satelite);
  console.log("hi");
}

spawnPlanet();

asteroids();

  drawSprites();
}

function spawnPlanet(){
if(frameCount % 200===0){
  planets=createSprite(random(500,1200),random(100,500),50,50);
  planets.debug=true;

  var rand=Math.round(random(1,7));
  switch(rand){
    case 1: planets.addImage(planet1);
    break;
    case 2:  planets.addImage(planet2);
    break;
    case 3:  planets.addImage(planet3);
    break;
    case 4:  planets.addImage(planet4);
    break;
    case 5: planets.addImage(planet5);
    break;
    case 6: planets.addImage(planet6);
    break;
    case 7: planets.addImage(planet7);
    break;
    default: break;
  }
  planets.lifetime=150;
  planetsGroup.add(planets);
}
}

function asteroids(){
if(frameCount % 100===0){
  asteroid=createSprite(1300,random(50,600),50,50);
  asteroid.velocityX=-5;
  asteroid.scale=0.5;
  var rand=Math.round(random(1,6));
  switch(rand){
    case 1: asteroid.addImage(asteroidIMG1);
    break;
    case 2:  asteroid.addImage(asteroidIMG2);
    break;
    case 3:  asteroid.addImage(asteroidIMG3);
    break;
    case 4:  asteroid.addImage(asteroidIMG4);
    break;
    case 5: asteroid.addImage(asteroidIMG5);
    break;
    case 6: asteroid.addImage(asteroidIMG6);
    break;
    default: break;
  }

  asteroidsGroup.add(asteroid);
asteroid.lifetime=300;
}

}