let player
let double_jump = true





function setup() {
    size(800, 600);

    new GameObject(width / 2, height - 5)
        .addComponent(new RectRenderer(width, 10, () => {
            noStroke(0);
            fill(0, 0, 255);
        }))
        .addComponent(new BoxCollider(width, 10))

    new GameObject(width, height / 2)
        .addComponent(new RectRenderer(10, height, () => {
            noStroke(0);
            fill(0, 0, 255);
        }))
        .addComponent(new BoxCollider(10, height))

    new GameObject(0, height / 2)
        .addComponent(new RectRenderer(10, height, () => {
            noStroke(0);
            fill(0, 0, 255);
        }))
        .addComponent(new BoxCollider(10, height))

    new GameObject(width / 2, height / 2)
        .addComponent(new RectRenderer(50, 10, () => {
            noStroke(0);
            fill(0, 0, 255);
        }))
        .addComponent(new BoxCollider(50, 10))

    player = new GameObject(width / 2, height / 2 - 100)
        .addComponent(new RectRenderer(25, 25, () => {
            noStroke(0);
            fill(255, 0, 0);
        }))
        .addComponent(new DynamicBoxCollider(25, 25))
        .addComponent(new Player())

    new GameObject(width / 2 + 100, height / 2 + 50)
        .addComponent(new RectRenderer(50, 10, () => {
            noStroke(0);
            fill(0, 0, 255);
        }))
        .addComponent(new BoxCollider(50, 10))

    new GameObject(width / 2 - 100, height / 2 - 100)
        .addComponent(new RectRenderer(50, 10, () => {
            noStroke(0);
            fill(0, 0, 255);
        }))
        .addComponent(new BoxCollider(50, 10))

    new GameObject(width / 2 - 120, height / 2 - 20)
        .addComponent(new RectRenderer(50, 10, () => {
            noStroke(0);
            fill(0, 0, 255);
        }))
        .addComponent(new BoxCollider(50, 10))


    Platform = new GameObject(700, height / 3)
        .addComponent(new RectRenderer(80, 10, () => {

            noStroke(0)
            fill(255, 0, 0)
        }))
        .addComponent(new BoxCollider(80, 10))
        .addComponent(new Mooving_platform())
}

function draw() {
    background(51);
    translate(-player.pos.x + width / 2, -player.pos.y + height / 2)
}
