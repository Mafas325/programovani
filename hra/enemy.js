class Enemy {
    constructor(enemy, rychlost){
        this.enemy = enemy;
        this.rychlost = rychlost

    }

    update(){
        // @ts-ignore
        var směr = p5.Vector.sub(player, this.enemy);
        směr.setMag(this.rychlost);
        this.enemy.add(směr);
        fill(255, 0, 0);
        circle(this.enemy.x, this.enemy.y, enemySize);
        
        
    }

}