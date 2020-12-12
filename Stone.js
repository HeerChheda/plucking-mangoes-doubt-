class Stone {
    constructor(x,y) {
        var ball_options = {
          isStatic:false,   
           restitution: 0,
            friction:1,
            density: 1.2,
          }

     this.body = Bodies.circle(x,y, 25, ball_options);
     this.width = width;
     this.height = height;
     this.image = loadImage("stone.png");
     World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y,20,20);
     
    }
  };