class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png"); 
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,200,80,50,140);
        image(this.image2,165,80,50,80);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(this.sling.bodyA.position.x>250){
                strokeWeight(10);
                stroke("#301608");
                line(pointA.x-30, pointA.y+10, pointB.x+30, pointB.y);
                line(pointA.x-30,pointA.y+10,pointB.x-10,pointB.y+10);
                image(this.image3,pointA.x+20,pointA.y-10,15,30);
            }
            else{
                strokeWeight(10);
                stroke("#301608");
                line(pointA.x-30, pointA.y+10, pointB.x+30, pointB.y);
                line(pointA.x-30,pointA.y+10,pointB.x-10,pointB.y+10);
                image(this.image3,pointA.x-30,pointA.y-10,15,30);
            }
        }

       
    }
    
}