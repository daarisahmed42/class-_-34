class Ball {
    constructor(x, y, angle ) {
      var options = {
          'frictionAir':0.005,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 80, 80, options);
      this.width = 80;
      this.height = 80;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     


      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke(0, 0, 255);
      fill(255, 0, 0);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };