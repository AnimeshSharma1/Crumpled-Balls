var s1,s2,s3;
var ground; 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 500);


	engine = Engine.create();
	world = engine.world;
	
    ball = new paper(650,250,50,50);
  

	s1=createSprite(1150, height-50,200,10);
    s1.shapeColor = ("red");

	s2=createSprite(1055, 400,10,100);
    s2.shapeColor = ("red");

	s3=createSprite(1245, 400,10,100);
	s3.shapeColor = ("red");

    ground=createSprite(650,height-40,1300,10)
    //ground.visible =false;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



