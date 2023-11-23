const playerSize = 30;
const playerSpeed = 5;

const enemySize = 30;

var player;

var enemy1;
var enemy2;
function setup() {
    createCanvas(800, 600);

    player = createVector(width / 2, height / 2);
    
    // Tomuhle nemusíte rozumět, je to jenom aby byl nepřítel
    // na náhodné pozici, ale vždycky stejně daleko od hráče
    const r = min(width, height)/2 * 0.75;
    const a = random(2*PI);
    var enemy = createVector(r*cos(a), r*sin(a));
    enemy.add(player);
    //
    enemy1 = new Enemy(enemy)
    enemy2 = new Enemy(createVector())
}

function draw() {
    background(220);

    var dir = createVector();
    if (Input.keyPressed('a')) dir.x -= 1;
    if (Input.keyPressed('d')) dir.x += 1;
    if (Input.keyPressed('w')) dir.y -= 1;
    if (Input.keyPressed('s')) dir.y += 1;
    dir.setMag(playerSpeed);
    player.add(dir);

    fill(255);
    circle(player.x, player.y, playerSize);
    enemy1.update()
    enemy2.update()
    

}