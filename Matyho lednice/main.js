let seznam = []
let gravity = 0.5


class Circle{
    constructor(x, y){
        this.směr_b = createVector(x, y)
        this.vel = createVector();
        
    }
    draw(){
        circle(this.směr_b.x, this.směr_b.y, 20)
    } 
    update() {

        this.vel.add(0, gravity)

        
        if (this.směr_b.y>height - 10){
            this.vel.y = this.vel.y*-0.95
            //this.směr_b.y = height - 10
        }
        this.směr_b.add(this.vel);
    }
    





}



function setup(){
createCanvas(800, 600)
background(51)
for(let i =0; i<100; i++){
    seznam.push(new Circle(random(width), random(height)))
}


}
function draw (){
    background(0)
    for(let circle of seznam) circle.update()
    for(let circle of seznam) circle.draw()
}