class Bullet {
    constructor (player) {
        this.player = player.copy();
    
        var bullet_smer = createVector(mouseX, mouseY);
        // @ts-ignore
        this.dir = p5.Vector.sub(bullet_smer, this.player);
        this.dir.setMag(5);
    
    }

    
    
    
    bullet_update () {
        this.player.add(this.dir);
        circle (this.player.x, this.player.y, 5)
    }
    
}
