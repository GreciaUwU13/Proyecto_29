//Hola maestra buenas tardes, este es el programa pero no supe añadir la imagen 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img, polygon;


function preload(){
  polygon_img = loadImage("polygon.png"); 
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 /* polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);
  slingShot = new SlingShot(this.polygon,{x: 100, y:200});*/
  
  //nivel uno
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //nivel dos
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //nivel tres
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //parte superior
  block16 = new Block(390,155,30,40);
  //nivel 1
  block_3 = new Block(760, 175, 30, 40);
  block_4 = new Block(730, 175, 30, 40);
  block_5 = new Block(700, 175, 30, 40);
  block_6 = new Block(670, 175, 30, 40);
  block_7 = new Block(640, 175, 30, 40);
  //nivel 2
  block_1 = new Block(670, 135, 30, 40);
  block_2 = new Block(700, 135, 30, 40);
  block_8 = new Block(730, 135, 30, 40);
  //nivel 3
  block_9 = new Block(700, 95, 30, 40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new slingShot(this.polygon,{x:100,y:200});
}


function draw() {
 // background(56,44,44);
 
 //ImageMode(CENTER)
 //Image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

 background("lightblue");

 textSize(20);
  fill("lightyellow");
  text("Arrastra el polígono para destruir los bloques",300,30);
  textSize(10);
  text("¡Presiona la Barra Espaciadora para tener una segunda oportunidad de jugar!",650 ,350);
 // textSize(20);
  //fill("lightyellow");
  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block16.display();
  //torre 2
  block_8.display();
  block_1.display();
  block_2.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  //torre 2
  block_7.display();
  block_9.display();
  block_5.display();
  block_4.display();
  block_6.display();
  block_3.display();

  //polygon.display();

  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
  slingShot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingShot.fly()
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon.body);
  }
}
