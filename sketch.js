const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    var canvas = createCanvas(2000,600);
    engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(300,300,500,20)
    ground2 = new Ground(1200,400,500,20)

}

function draw(){
    background("black")
    Engine.update(engine)
    ground1.display()
    ground2.display()
}