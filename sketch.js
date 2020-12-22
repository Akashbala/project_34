
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  
  ball1 = new Ball(400,450,50);
  rope1 = new Rope(ball1.body,{x:400,y:100})
  ball2 = new Ball(500,450,50);
  rope2 = new Rope(ball2.body,{x:500,y:100})
  ball3 = new Ball(300,450,50);
  rope3 = new Rope(ball3.body,{x:300,y:100})
  ball4 = new Ball(600,450,50);
  rope4 = new Rope(ball4.body,{x:600,y:100})
  ball5 = new Ball(200,450,50);
  rope5 = new Rope(ball5.body,{x:200,y:100})
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.display();
  rope1.display();
  ball2.display();
  rope2.display();
  ball3.display();
  rope3.display();
  ball4.display();
  rope4.display();
  ball5.display();
  rope5.display();
  
  

 
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(ball4.body,ball4.body.position,{x:100,y:-50})
  }
}



