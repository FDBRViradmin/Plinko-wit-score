class Particle {
    constructor(x, y, r){
        var options = {
            restitution:0.4
        }

        this.r=r;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0, 255), random(0, 255), random(0,255));
        World.add(world, this.body);
    }
    isTouching(object1,object2){
        if (object1.x - object2.x < object2.width/2 + object1.width/2
          && object2.x - object1.x < object2.width/2 + object1.width/2
          && object1.y - object2.y < object2.height/2 + object1.height/2
          && object2.y - object1.y < object2.height/2 + object1.height/2) {
            return true;
        }
        else {
            return false;
        }
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r);
        pop();
    }
}