class Player extends Component {
    start() {


        this.rb = this.getComponent(Rigidbody)
        this.onground = 0
        this.double_jump = false
    }

    onCollisionExit(col) {
        if (col.normal.y == -1 && col.normal.x == 0)
            this.onground = 0
    }
    onCollisionEnter(col) {
        if (col.normal.y == -1 && col.normal.x == 0) {
            this.onground = 1
            this.double_jump = true
        }
    }
    

    update() {
        if (Input.keyPressed("a")) { this.rb.vel.x = -240 }
        else if (Input.keyPressed("d")) { this.rb.vel.x = 240 }
        else this.rb.vel.x = 0
        if (this.onground == 1) {
            if (Input.keyJustPressed("w")) this.rb.vel.y = -720
        }

        else if (this.onground == 0 && this.double_jump) {
            if (Input.keyJustPressed("w")) {
                this.rb.vel.y = -720
                this.double_jump = false
            }
        }

        //if (this.gameObject.pos.y)


    }

}