const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world

var rain;

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;
  //rain = new rainDrop(Math.round(random(10, 790)), -30);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);


  if (frameCount % 50 === 0) {
      //var rain = new rainDrop();
      rain = null;
      rain = new rainDrop(Math.round(random(10, 790)), -30);
  }

  if (rain) {
    rain.display();
  }

  console.log(frameCount)
}