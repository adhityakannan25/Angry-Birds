const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2, box3, box4, box5;
var pig1, pig2;

var bird;
var log1, log2, log3, log4;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

 	ground = new Ground(600,780,1200,20);
    box1 = new Box(800,750,50,50);
    box2 = new Box(1000,750,50,50);
    pig1 = new Pig(900,750);
    bird = new Bird(300,300);
    log1 = new Log(900,730,350,PI/2);
    box3 = new Box(800,700,50,50);
    box4 = new Box(1000,700,50,50);
    log2 = new Log(900,680,350,PI/2);
    pig2 = new Pig(900,700);

    box5 = new Box(900,625,50,50)
    log3 = new Log(815,625,132,PI/4);
    log4 = new Log(975,625,135,-PI/4);


}

function draw(){
    background("turquoise");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display()
    pig1.display();
    log1.display(); 

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird.display();

}