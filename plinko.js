class Plinko {
    constructor(x,y) {
      var options = {
          restitution:0.5
      }
      this.r=10
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke()
        fill ("yellow")
        ellipseMode(RADIUS)
       ellipse( 0, 0, this.r, this.r);
        pop();
      }
  };
