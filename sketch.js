const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var rain = [];
var rain2= [];


function setup() {
  createCanvas(800,800)
 

  engine = Engine.create();
  world = engine.world;

 
  for (i = 0; i <100; i++) {
    rain[i] = new Drop1(random(0, 800), random(-20,0));
  }
  for (j = 0; j <100; j++) {
    rain2[j] = new Drop2(random(0, 800), random(-20,0));
  }
}

function draw() {
  Engine.update(engine);
  background(0);

  for (i = 0; i < rain.length; i++) {
    rain[i].fall();
    rain[i].display();
  }
  for (j = 0; j < rain2.length; j++) {
    rain2[j].fall();
    rain2[j].display();
  }
  drawSprites();
}