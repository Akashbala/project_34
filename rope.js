class Rope {
    constructor(bodyA,pointB){
        var option={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.5
        }
    this.rope=Constraint.create(option)
    this.pointB=pointB
    World.add(world,this.rope)
    }
 display(){
     strokeWeight(3.5)
     push()
     stroke("#fff")
  line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y)
 pop()
}
}