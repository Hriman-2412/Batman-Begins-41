class Umbrella{
constructor(x,y,radius){

var options={

isStatic:true

}

this.body = Bodies.circle(x,y,radius,options)

this.radius = radius;


this.image = loadImage("walking images/walking_1.png");

World.add(world,this.body);

}

display(){

var pos = this.body.position;

push();
//translate(pos.x,pos.y);
imageMode(CENTER)
image(this.image,pos.x,pos.y+70,this.radius-50,this.radius-50);
pop();

}

}