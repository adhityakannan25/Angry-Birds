class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos =this.body.position;
  
      push();
  
      translate(pos.x,pos.y);
  
      rotate(angle);

      pos.x=mouseX;
      pos.y=mouseY;
  
      rectMode(CENTER);
      strokeWeight(3.5);
      stroke(255,0,0)
      fill("red");
  
      rect(0, 0, this.width, this.height);
      pop();
    }
  };