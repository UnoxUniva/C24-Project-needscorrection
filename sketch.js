
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// const Body = Matter.Body;

var ground
var paper1



function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ground_options = {isStatic : true}
  ground = Bodies.rectangle(width/2,350,400,10,ground_options)
  World.add(world,ground)

	// ball = Bodies.rectangle(200,100,50,50,box_options)
  // World.add(world.ball)
  // console.log(ball)
    // ball = Bodies.circle(300 , 100 , 30,ball_options)
   
    paper1= new paper(300,100,20)
   

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  
  rectMode(CENTER);
  // rect(box.position.x,box.position.y,50,50);

  rect(ground.position.x,ground.position.y,width,20)
  
  
  // ellipseMode(RADIUS)
  // ellipse(ball.position.x,ball.position.y,30,30)
  paper1.display()

  drawSprites();
 
}



