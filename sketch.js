const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon1
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16
var box17, box18, box19, box20, box21, box22, box23, box24, box25
var ground1, ground2, ground3
var band;

function setup() {
  createCanvas(1600, 600);

	engine = Engine.create();
	world = engine.world;

  //PLAYIG BLOCK
  polygon1 = new polygon(1200,130,40,40);
  
  //LEVEL 1
  box1 = new Box(300,270,30,40);
  box2 = new Box(330,270,30,40);
  box3 = new Box(360,270,30,40);
  box4 = new Box(390,270,30,40);
  box5 = new Box(420,270,30,40);
  box6 = new Box(450,270,30,40);
  box7 = new Box(480,270,30,40);

  //LEVEL 2
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40); 
  box10 = new Box(390,235,30,40); 
  box11 = new Box(420,235,30,40); 
  box12 = new Box(450,235,30,40);
  
  //LEVEL 3
  box13 = new Box(360,195,30,40); 
  box14 = new Box(390,195,30,40); 
  box15 = new Box(420,195,30,40); 
  
  //TOP
  box16 = new Box(390,135,30,40);   
  
  //TOWER 2
  
  //LEVEL 1
  box17 = new Box(630,230,30,40);
  box18 = new Box(660,230,30,40);
  box19 = new Box(690,230,30,40);
  box20 = new Box(720,230,30,40);
  box21 = new Box(750,230,30,40);
  
  //LEVEL 2
  box22 = new Box(660,200,30,40);
  box23 = new Box(690,200,30,40);
  box24 = new Box(720,200,30,40);

  //TOP
  box25 = new Box(690,170,30,40);

  //TOWER 3
  
  //LEVEL 1
  box26 = new Box(830,450,30,40);
  box27 = new Box(860,450,30,40);
  box28 = new Box(890,450,30,40);
  box29 = new Box(920,450,30,40);
  box30 = new Box(950,450,30,40);
  
  //LEVEL 2
  box31 = new Box(860,420,30,40);
  box32 = new Box(890,420,30,40);
  box33 = new Box(920,420,30,40);

  //TOP
  box34 = new Box(890,370,30,40);


  //GROUND
  ground1 = new ground(390,350,250,15);
  ground2 = new ground(400,600,2000,15);
  ground3 = new ground(690,250,200,15);
  ground4 = new ground(900, 500,250,15)

  //CHAIN
  band = new slingShot(polygon1.body, {x: 1200,y:130 })

  //CONSTRAINT
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  polygon1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  box31.display();
  box32.display();
  box33.display();
  box34.display();

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();

  band.display();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    band.fly();
}