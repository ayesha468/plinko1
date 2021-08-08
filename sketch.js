const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[];
var plinko =[];
var division=[];
var divisionHeight=300;

var engine, world;

function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);

 for (var k = 0; k<= width; k=k+80){
   division.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
 }

 for(var j=75; j <=width; j=j+50)
 {
   plinko.push(new Plinko(j,75));
 }
 for(var j=50; j <=width-10; j=j+50)
 {
   plinko.push(new Plinko(j,175));
 }

 for(var j=75; j <=width-10; j=j+50)
 {
   plinko.push(new Plinko(j,275));
 }
 
 for(var j=50; j <=width-10; j=j+50)
 {
   plinko.push(new Plinko(j,375));
 }
 


}



function draw() {
  background("black");  

  ground.display();

 


  for (var k=0; k< division.length; k++){
division[k].display();
  }

  for (var k=0; k< plinko.length; k++){
    plinko[k].display();
      }
//particles
      if (frameCount%60===0){
         particles.push(new Particle(random(width/2-800,width/2+800),10,10));
      }

      for  ( var j = 0; j< particles.length; j++){

        particles[j].display(); 
       }
  drawSprites();



 
}