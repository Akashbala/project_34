class Ball{
    constructor(x,y,r){

    var options ={
        //isStatic:true,
        density:1.2,
        friction:0,
        restitution:1
    }
    this.r=r

    this.body=Bodies.circle(x,y,this.r,options)
    World.add(world,this.body)


    }
    display(){
 var pos = this.body.position
 var angle = this.body.angle

 push();
 translate(pos.x, pos.y);
 rotate(angle);
 stroke("#fff")
 fill("black")
 ellipseMode(RADIUS)
 ellipse(0,0,this.r,this.r)
pop()
    }
}