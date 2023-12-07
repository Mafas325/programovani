const playerSize = 30;
const playerSpeed = 10;

const enemySize = 30;

var player;

var enemies = []
var bullets = []

function setup() {
    createCanvas(800, 600);

    player = createVector(width / 2, height / 2);
    
    for (var i = 0; i<10; i++){
        var randomPos = createVector(random(width), random(height));
        var enemy = new Enemy(randomPos, random() * 7);
        enemies.push(enemy);
    }
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

    

    
    
    if (player.x>width){
        player.x=0
    }        
    if (player.x<0){
        player.x=width
    }
    if (player.y>height){
        player.y=0
    }
    if (player.y<0){
        player.y=height
    }
    
    
    
    fill(255);
    circle(player.x, player.y, playerSize);
    for (var enemy of enemies)
        enemy.update()

    for (var bullet of bullets)
        bullet.bullet_update()
}

function mousePressed() {
    bullets.push(new Bullet(player));
}