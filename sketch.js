
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var treeImage, boyImage;
var mango1,mango2,mango3,mango4,mango5,ground;

function preload()
{
	treeImage = loadImage ("tree.png");
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  	//Create the Bodies Here.

	mango1 = new Mango(600,400,);


	
	ground = new Ground(400,20,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  	image(treeImage, 650,150,200,200);
  	image(boyImage, 50,150,50,150);

	mango1.display();



	ground.display();

    drawSprites();
 
}



