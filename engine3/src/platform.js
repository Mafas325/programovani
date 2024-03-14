class Mooving_platform extends Component {



    start() {
        this.cíl_platform = this.gameObject.pos.x + 100
        this.start_platform = this.gameObject.pos.x
        this.doprava = true

    }

    update() {

        if ( this.gameObject.pos.x < this.cíl_platform && this.doprava == true) {
            this.gameObject.pos.x++
        }
        else { this.doprava = false }
        if (this.gameObject.pos.x > this.start_platform && this.doprava == false) {
            this.gameObject.pos.x = this.gameObject.pos.x - 1
        }
        else {this.doprava = true}
       
    }
}