class Mango {
    constructor(x,y) {
        var ball_options = {
          isStatic:true,   
           restitution: 0,
            friction:1,
          }

     this.body = Bodies.circle(x,y, 10, ball_options);
     this.width = width;
     this.height = height;
     this.image = loadImage("mango.png");
     World.add(world, this.body);


    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y,10,10);
     
    }
  };