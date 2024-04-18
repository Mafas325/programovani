let player
let double_jump = true





function setup() {
    size(800, 600);

    new GameObject(width / 2, height - 5)
        .addComponent(new Rect(width, 10).setColor(0, 0, 255))
        .addComponent(new ShapeRenderer)
        .addComponent(new Rigidbody(0))



    new GameObject(width, height / 2)
        .addComponent(new Rect(10, height).setColor(0, 0, 255))
        .addComponent(new ShapeRenderer)
        .addComponent(new Rigidbody(0))



    new GameObject(0, height / 2)
        .addComponent(new Rect(10, height).setColor(0, 0, 255))
        .addComponent(new ShapeRenderer)
        .addComponent(new Rigidbody(0))



    new GameObject(width / 2, height / 2)
        .addComponent(new Rect(50, 10).setColor(0, 0, 255))
        .addComponent(new ShapeRenderer)
        .addComponent(new Rigidbody(0))



    player = new GameObject(width / 2, height / 2 - 100)
        .addComponent(new Rect(25, 25).setColor(0, 255, 0))
        .addComponent(new ShapeRenderer)
        .addComponent(new Rigidbody(1, 1,))
        .addComponent(new Player())

    new GameObject(width / 2 + 100, height / 2 + 50)
        .addComponent(new Rect(50, 10).setColor(0, 0, 255))
        .addComponent(new ShapeRenderer)
        .addComponent(new Rigidbody(0))


    new GameObject(width / 2 - 100, height / 2 - 100)
        .addComponent(new Rect(50, 10).setColor(0, 0, 255))
        .addComponent(new ShapeRenderer)
        .addComponent(new Rigidbody(0))


    new GameObject(width / 2 - 120, height / 2 - 20)
    .addComponent(new Rect(50, 10).setColor(0, 0, 255))
    .addComponent(new ShapeRenderer)
    .addComponent(new Rigidbody(0))
    


    Platform = new GameObject(700, height / 4)
    .addComponent(new Rect(80, 10).setColor(0, 255, 0))
    .addComponent(new ShapeRenderer)
    .addComponent(new Rigidbody(0, 0, 10000000))
    .addComponent(new Mooving_platform())
    

}
function draw() {
    background(51);
    translate(-player.pos.x + width / 2, -player.pos.y + height / 2)
}
