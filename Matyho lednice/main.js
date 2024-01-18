let seznam = []



class Circle{
    constructor(x, y){
        this.směr_b = createVector(x, y)
    }
    draw(){
        circle(this.směr_b.x, this.směr_b.y, 20)
    } 


}



function setup(){
createCanvas(400, 400)
background(51)
for(let i =0; i<100; i++){
    seznam.push(new Circle(random(width), random(height)))
}


}
function draw (){

    for(let circle of seznam) circle.draw()
}