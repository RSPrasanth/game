const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ball
var movingRect
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;



    ball = new Ball(100,90,20,20)
    box1 = new Box(700,320,170,20);
    box2 = new Box(605,340,20,170);
    box3 = new Box (796,340,20,170)
    ground = new Ground(600,height,1200,20)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    

    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display()
    ground.display();
    ball .display()
    
}
function keyPressed(){
    if (keyCode===UP_ARROW){
     ball.shapecolor='red'
    }
}