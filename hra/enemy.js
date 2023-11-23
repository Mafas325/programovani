class Enemy {
    constructor(enemy){
        this.enemy = enemy;
    }

    update(){
        // @ts-ignore
        var směr = p5.Vector.sub(player, this.enemy);
        směr.setMag(3);
        this.enemy.add(směr);
        fill(255, 0, 0);
        circle(this.enemy.x, this.enemy.y, enemySize);

    }

}