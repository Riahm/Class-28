class slingShot {
    constructor(bodyA,pointB){

        var options = {
         bodyA : bodyA,
         pointB : pointB,
         stiffness : 0.05,
         length : 10
        }
    this.sling1 = loadImage("./sprites/sling1.png");
    this.sling2 = loadImage("./sprites/sling2.png");
    this.sling3 = loadImage("./sprites/sling3.png");

        this.body = Constraint.create(options)
        World.add(world,this.body)
    }
    fly(){
        this.body.bodyA=null
    }
    display() {
image(this.sling1,200,25)
image(this.sling2,170,25)
        if (this.body.bodyA){
    
var pointA = this.body.bodyA.position
var pointB = this.body.pointB

line (pointA.x,pointA.y,pointB.x,pointB.y)
        }
        }
}