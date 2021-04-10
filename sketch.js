//Create the engine,world and bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Add the necessary variables
var engine,world;
var Bruce;
var drops = [];
var maxDrops = 100;
var thunderImage;
var thunderImage2;
var thunderImage3;
var thunderImage4;
var thunderCreatedFrame = 0
var thunder
function preload(){

thunderImage = loadImage("1.png");
thunderImage2 = loadImage("2.png");
thunderImage3 = loadImage("3.png");
thunderImage4 = loadImage("4.png");


}

function setup(){
    //Create the canvas
    var canvas = createCanvas(400,650);

    //Create the engine and world variable 
    engine = Engine.create();
    world = engine.world;

    //Create Bruce Wayne
    Bruce = new Umbrella(200,550,80,80);
   // Bruce.setCollider("circle",0,0,30)
    Bruce.debug = true;
    //Add the drops
    for(var i=0; i<maxDrops; i++){
        drops.push(new createDrops(random(0,400),(random(0,400))));
    }
}

function draw(){
    Engine.update(engine)
    background(0);
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
      thunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){

        case 1 : thunder.addImage(thunderImage);

        break;

        case 2 : thunder.addImage(thunderImage2);

        break;

        case 3 : thunder.addImage(thunderImage3);

        break;

        case 4 : thunder.addImage(thunderImage4);

        break;

        }
        thunder.scale = random(0.3,0.6);
    
        
    }
    if(thunderCreatedFrame+10===frameCount&&thunder){
        thunder.destroy();
    }
    Bruce.display();
    for(var i=0; i<maxDrops; i++){
        drops[i].updateY();
    drops[i].display();
    }
    
    drawSprites();
    
}   

