const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var stand,box1,box2,box3,box4;
var box5,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22;
var box24,box25,slingshot,stand2;
var polygon,polygonimg,stand1;

function preload(){
	polygonimg=loadImage("polygon.png");
}

function setup() {
	createCanvas(1000,600);

	engine = Engine.create();
	world = engine.world;


  //Create the Bodies Here.
  stand1=new Stand(390,300,250,20);

  //level 1
  box1=new Box(400,275,30,40);
  box2=new Box(370,275,30,40);
  box3=new Box(340,275,30,40);
  box4=new Box(310,275,30,40);
  box5=new Box(430,275,30,40);
  box6=new Box(460,275,30,40);
  box7=new Box(490,275,30,40);
  
  stand2=new Stand(610,400,250,20);
  
  //level 2
  box8=new Box(330,235,30,40);
  box9=new Box(360,235,30,40);
  box10=new Box(390,235,30,40);
  box11=new Box(420,235,30,40);
  box12=new Box(450,235,30,40);
  
  //level 3
  box13=new Box(360,195,30,40);
  box14=new Box(390,195,30,40);
  box15=new Box(420,195,30,40);
  
  // top 
  box16=new Box(390,155,30,40);
  
  
  
  

ground=new Ground(100,337,2000,20);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot= new Slingshot(polygon,{x:100,y:450});

Engine.run(engine);

  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  stand1.display();
  
  fill("turquoise")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("pink")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("turquoise")
  box13.display();
  box14.display();
  box15.display();
  fill("pink")
  box16.display();

  slingshot.display();
  ground.display();

fill("gold");
  imageMode(CENTER)
  image(polygonimg ,polygon.position.x,polygon.position.y,40,40);

}
function mouseDragged(){
	Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

  if (keyCode === 32) {

    slingshot.attach(polygon.body);

    
     }

}

// this is fynn