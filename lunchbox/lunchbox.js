class LunchBox {
    constructor(boxItem) {
        this.owner = boxItem.owner;
        this.material = boxItem.madeOf;
        this.shape = boxItem.shape;
        this.color = boxItem.color;
        this.snacks = [];
    }

    acquireSnack(snack) {
        snack.isInLunchBox = true;
        this.snacks.push(snack);
    }

    findHealthySnacks(){
        var healthySnacks = [];
        for (var i = 0; i < this.snacks.length; i++) {
            if (this.snacks[i].checkForHealthy()){
                healthySnacks.push(this.snacks[i].type);
            }
        }

        return healthySnacks;
    }
}

module.exports = LunchBox;
