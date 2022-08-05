class Centaur {
    constructor(being) {
        this.name = being.name;
        this.breed = being.type;
        this.cranky = false; 
        this.standing = true;
        this.layingDown = false;
        this.counter = 0;
    }

    shootBow() {
        if (this.layingDown) {
            return `NO!`;
        }

        this.counter += 1;

        if (this.counter >= 3) {
            this.cranky = true;
            return `NO!`;
        }

        return `Twang!!!`;
    }

    run() {
        if (this.layingDown) {
            return `NO!`;
        }

        this.counter += 1;

        if (this.counter >= 3) {
            this.cranky = true;
            return `NO!`;
        }

        return `Clop clop clop clop!!!`;
    }

    sleep() {
        if(this.standing) return `NO!`;
        else if (this.layingDown) {
            this.cranky = false;
            this.counter = 0;
            return `ZZZZ`;
        }
    }

    layDown() {
        this.standing = false;
        this.layingDown = true;
    }

    standUp() {
        this.standing = true;
        this.layingDown = false;
    }

    drinkPotion() {
        if (this.layingDown) return `Not while I'm laying down!`;
        this.counter = 0;
        this.cranky = false;
    }
}

module.exports = Centaur;