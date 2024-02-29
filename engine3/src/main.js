let player
let double_jump = true
let x = new DynamicBoxCollider(80, 10)
x.applyGravity = false

class Mooving_platform extends Component{
    start(){

    }
}






class Player extends Component{
   start(){
   
    this.rb = this.getComponent(DynamicBoxCollider)
   
    this.onground = 0
   
    this.rb.onCollisionExit = (col) => {
        if (col.hit.normal.y == -1 && col.hit.normal.x == 0)  
        this.onground = 0
       } 
   this.rb.onCollisionEnter = (col) => {
    if (col.hit.normal.y == -1 && col.hit.normal.x == 0)  
    this.onground = 1
    double_jump=true
    }
   }
   
  
   update(){
    if (Input.keyPressed("a")){this.rb.vel.x = -4} 
    else if(Input.keyPressed("d")){this.rb.vel.x = 4}
    else this.rb.vel.x = 0 
    if (this.onground == 1) {
        if (Input.keyJustPressed("w"))this.rb.vel.y = -12
    }
      
    else if (this.onground == 0 && double_jump){
        if (Input.keyJustPressed("w")){
            this.rb.vel.y = -12
            double_jump=false
        }
    }
    }

}

function setup() {
    size(800, 600);

    new GameObject(width / 2, height - 5)
    .addComponent(new RectRenderer(width, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(width, 10))

    new GameObject(width, height/2)
    .addComponent(new RectRenderer(10, height, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(10, height))

    new GameObject(0, height/2)
    .addComponent(new RectRenderer(10, height, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(10, height))

    new GameObject(width / 2, height/2)
    .addComponent(new RectRenderer(50, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(50, 10))

    player = new GameObject(width / 2, height/2 -100)
    .addComponent(new RectRenderer(25, 25, () => {
        noStroke(0);
        fill(255, 0, 0);
    }))
    .addComponent(new DynamicBoxCollider(25, 25))
    .addComponent(new Player())

    new GameObject(width / 2 + 100, height/2 + 50)
    .addComponent(new RectRenderer(50, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(50, 10))

    new GameObject(width / 2 -100, height/2 -100)
    .addComponent(new RectRenderer(50, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(50, 10))

    new GameObject(width / 2 -120, height/2 -20)
    .addComponent(new RectRenderer(50, 10, () => {
        noStroke(0);
        fill(0, 0, 255);
    }))
    .addComponent(new BoxCollider(50, 10))

    new GameObject(700, height/3)   
    .addComponent(new RectRenderer(80, 10, () => {
    
        noStroke(0)
        fill(255, 0, 0)
    }))
    .addComponent(x)
    .addComponent(new Mooving_platform())

}

function draw() {
    background(51);
    translate(-player.pos.x + width/2, -player.pos.y + height/2)
}
