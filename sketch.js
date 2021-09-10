var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;

var divisionHeight=300;
var score =0;
var turn =0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  Engine.update(engine);
 
  stroke("yellow");
  line(2,480,805,480);

  textSize(20)
 text("Score : "+score,20,30);
 
  textSize(30);
  text("500",5,520);

  textSize(30);
  text("500",95,520);

  textSize(30);
  text("500",175,520);

  textSize(30);
  text("500",255,520);

  textSize(30);
  text("100",335,520);

  textSize(30);
  text("100",415,520);

  textSize(30);
  text("100",495,520);

  textSize(30);
  text("200",575,520);

  textSize(30);
  text("200",655,520);

  textSize(30);
  text("200",725,520);
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

   if(frameCount%60===0){
     particles.push(new Particle (random(width/2-30, width/2+30), 10,10));
   }
 
   for (var k = 0; k < divisions.length; k++) { 
     divisions[k].display();
   }


   if(particle!=null){
     particle.display();
     if(particle.body.position.y>500){
if(particle.body.position.x<300){
score=score+500;
particle=null;
if(turn>=5) gameState = "end";
} 
}
}

   if(particle!=null){
    particle.display();
    if(particle.body.position.y>500){
if(particle.body.position.x >301 && particle.body.position.x <600){
score=score+100;
particle=null;
if(turn>=5) gameState = "end";
}
   }
  }

  if(particle!=null){
  particle.display();
    if(particle.body.position.y>500){
if(particle.body.position.x>601&& particle.body.position.x  <900){
score=score+200;
particle=null;
if(turn>=5) gameState = "end";
}
   }
  }


 if(gameState === "end"){
   fill("orange");
   textSize(80);
text("Game Over",200,200);
 }

}


function mousePressed(){
  if(gameState!=="end"){
    turn++
    particle = new Particle(mouseX,10,10,10);
  }
}