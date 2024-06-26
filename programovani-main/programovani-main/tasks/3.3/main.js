
// Třída Rigidbody má teď field (proměnnou) vel (zkratka z velocity = rychlost)
// Rychlost se automaticky přičítá k pozici, takže pokud chceme aby na Rigidbody působila gravitace,
// stačí přidat k rychlosti směr gravitace (viz kód)

// Vaším úkolem je implementovat funkci loop, tak aby rigidbody 'procházelo' skrz hrany obrazovky
// tedy když propadne spodem, objeví se nahoře atd. (ideálně udělejte rovnou všechny 4 směry)

class Rigidbody {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.vel = createVector();
    }

    applyForces() {
        this.vel.add(createVector(0, 0.3));
    }
    
    loop() { 
        if (this.pos.y>height) this.pos.y = 0
        if (this.pos.y<0) this.pos.y = height
        if (this.pos.x>width) this.pos.x = 0
        if (this.pos.x<0) this.pos.x = width
    }
}