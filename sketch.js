var car,wall;

var speed,weight;

function setup() {
  createCanvas(1600,400);
  

  speed = random(55,90);
  weight = random(400,1500)

  car = createSprite(50,200,50,50);
  car.velocityX  = speed;
 // car.shapeColour =colour(255,255,255)

  wall = createSprite(1000,200,60,400)
 // wall.shapeColour =colour(255,255,255); 
}

function draw() {
  background(0);
   
  if(wall.x - car.x < (car.width + wall.width)/2){
    
    car.velocityX = 0;

    var deformation = 0.5 * weight * speed *speed / 22590;

    if(deformation>180){

      car.shapeColour = colour(255,0,0)
    }
    if(deformation<180 && deformation >100){
      
      car.shapeColour = colour(230,230,0);
    }
    if(deformation<100){

      car.shapeColour = colour(0,255,0);
     }
 }
  drawSprites();
}