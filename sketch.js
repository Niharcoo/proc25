
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;
const Body = Matter.Body;
 

function preload(){
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(20,400,45);
    ground = new Ground(500,690,1000,20);
    bin=new Bin(830,600);



	  Engine.run(engine);
  
}


function draw() {
  background("aqua");
  
  bin.display();
  paper.display();
  ground.display();

drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-150});
  
  }
}



