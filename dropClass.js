class rainDrop {
    constructor(x,y) {
        var options = {restitution:0.5};
        
        this.body = Bodies.rectangle(x, y, 10, 30, options);

        this.h = 30;
        this.w = 10;
        
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();

        translate(pos.x, pos.y);

        rotate(angle);
        rectMode(CENTER);
        fill("purple");
        rect(0, 0, this.w, this.h);

        pop();
    }   
}