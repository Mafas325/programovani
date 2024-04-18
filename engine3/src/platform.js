class Mooving_platform extends Component {



    start() {
        this.rb = this.getComponent(Rigidbody)
        this.cíl_platform = this.gameObject.pos.x + 100
        this.start_platform = this.gameObject.pos.x
        this.doprava = true

    }

    onCollisionEnter(col){
        
    }

    update() {

        if (this.gameObject.pos.x < this.cíl_platform / 2) {
            this.rb.vel.x++
        }
        if (this.gameObject.pos.x > this.cíl_platform / 2) {
            this.rb.vel.x--

        }
    }
}