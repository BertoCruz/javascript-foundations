class Centaur {
    constructor(being) {
        this.name = being.name;
        this.breed = being.type;
        this.cranky = false; 
        this.standing = true;
        this.counter = 0;
    }

    shootBow() {
        this.counter += 1;

        if (this.counter >= 3) {
            this.cranky = true;
            return `NO!`;
        }

        return `Twang!!!`;
    }

    run() {
        this.counter += 1;

        if (this.counter >= 3) {
            this.cranky = true;
            return `NO!`;
        }

        return `Clop clop clop clop!!!`;
    }

    sleep() {

    }
}

module.exports = Centaur;