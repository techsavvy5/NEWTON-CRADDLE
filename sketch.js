
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var roof;
var issac,issacImage;
var craddle,craddle1,craddle2,craddle3,craddle4;
var rope,rope1,rope2,rope3,rope4;

function preload(){
	issacImage=loadImage("issac.png");
}
function setup() {
	createCanvas(900, 700);

	engine = Engine.create();
	world = engine.world;

	ground=createSprite(450,690,900,10);
	ground.shapeColor="red";
	
	roof=createSprite(400,200,500,20);
	roof.shapeColor="pink";

	rope=createSprite(195,345,10,300);
	rope.shapeColor="green";

	craddle= createSprite(200,500,50,50);
	craddle.shapeColor="blue";

	rope1=createSprite(290,345,10,300);
	rope1.shapeColor="green";

	craddle1=createSprite(290,500,50,50);
	craddle1.shapeColor="blue";

	rope2=createSprite(390,345,10,300);
	rope2.shapeColor="green";

	craddle2=createSprite(390,500,50,50);
	craddle2.shapeColor="blue";

	rope3=createSprite(490,345,10,300);
	rope3.shapeColor="green";

	craddle3=createSprite(490,500,50,50);
	craddle3.shapeColor="blue";

	rope4=createSprite(590,345,10,300);
	rope4.shapeColor="green";

	craddle4=createSprite(590,500,50,50);
	craddle4.shapeColor="blue";
	
	issac=createSprite(400,100,10,10);
	issac.addImage(issacImage);
	issac.scale=0.3;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  drawSprites();
 
}



