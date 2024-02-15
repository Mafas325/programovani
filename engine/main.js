
function setup() {
    createCanvas(1000, 700);
    
    
    
    new GameObject(width/2, height-10).addComponent(new RectRenderer(width, 10)).addComponent(new BoxCollider(width, 10))
    new GameObject(width/2, 10).addComponent(new RectRenderer(20, 20)).addComponent(new DynamicBoxCollider(20, 20))


    Engine.start();
}

function draw() {
    background(1)

    Engine.update();
}