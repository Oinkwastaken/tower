class polygon {
    constructor(x, y, width, height) {
      var options = {
          setStatic:false,
          restitution:0.8,
          friction:0.7,
          density:1.0
      }
      this.body =Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        rect(this.body.position.x, this.body.position.y, 50, 50);
        pop();
     }  
};