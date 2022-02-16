
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ball2
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.95,
		frictionAir:0.01
	  }

	  var ground_options ={
		isStatic: true
	  }
	//Crie os Corpos Aqui.

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(200,10,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,700,800,50,ground_options);

  World.add(world,ground);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball2.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,600,50);

  drawSprites();
}



