const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;


var engine,world;
var ground;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic: true,
    angle: PI/2
  }
  ground=Bodies.rectangle(200,390,400,20,options)
  World.add(world,ground);
  console.log(ground);

}

function draw() {
  var pos=ground.position;
  Engine.update(engine);
  background(0); 
  rectMode(CENTER);
  rect(pos.x,pos.y,400,20) ;
}