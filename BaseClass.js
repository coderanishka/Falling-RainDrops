class BaseClass{

  constructor(x,y){
    var options = {
        'restitution':0.8,
    }
    this.body = Bodies.rectangle(x,y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  fall(){
      if(this.body.position.x > 800){
          this.body.position.y = random(-20,0); 
      }
  }

  display(){
   
    var pos = this.body.position;

    rectMode(CENTER);
    rect(pos.x,pos.y,5,40);

  }


}