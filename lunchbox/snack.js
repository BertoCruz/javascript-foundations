class Snack {
    constructor(item){
        this.deliciousLevel = "extra";
        this.type = item;
        this.amount = 100;
        this.isInLunchBox = false; 
        this.cuttingItClose = false;
    }

    getEaten() {
        this.amount -= 10;
        var currentPercent = (this.amount/100) * 100;

        if (currentPercent <= 20) {
            this.cuttingItClose = true;
        }
    }

    checkForHealthy() {
        var type = this.type.toLowerCase();
        if (type.includes("fruit")) return true;
        else return false;
    }
}

module.exports = Snack;
